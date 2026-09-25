import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Rate limiting in-memory store (IP -> array of submission timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Allowed core services
const ALLOWED_SERVICES = new Set([
  "Web & Digital Development",
  "UI/UX & Product Design",
  "Mobile App Development",
  "SaaS & Custom Platforms",
  "E-Commerce Solutions",
  "AI & Business Automation",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+0-9\s\-().]{7,25}$/;

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "mubeenk710@gmail.com";

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    // 1. Client IP Identification for Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a moment before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse Payload
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Malformed request." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      services,
      projectDetails,
      honeypot,
    } = body as Record<string, unknown>;

    // 3. Spam Honeypot Check (Silently acknowledge if bot triggers honeypot, no email sent)
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thanks for reaching out. We've received your project details.",
      });
    }

    // 4. Server-Side Input Validation
    // Name validation (Required)
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }
    const cleanName = name.trim().slice(0, 100);
    if (cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }

    // Email validation (Required)
    if (typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim().slice(0, 254);
    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Phone validation (Optional)
    let cleanPhone = "";
    if (typeof phone === "string" && phone.trim()) {
      cleanPhone = phone.trim().slice(0, 30);
      if (!PHONE_REGEX.test(cleanPhone)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid phone number." },
          { status: 400 }
        );
      }
    }

    // Services validation (Optional array)
    const validServices: string[] = [];
    if (Array.isArray(services)) {
      for (const item of services) {
        if (typeof item === "string" && ALLOWED_SERVICES.has(item.trim())) {
          validServices.push(item.trim());
        }
      }
    }

    // Project Details validation (Required)
    if (typeof projectDetails !== "string" || !projectDetails.trim()) {
      return NextResponse.json(
        { success: false, error: "Please tell us about your project." },
        { status: 400 }
      );
    }
    const cleanProjectDetails = projectDetails.trim().slice(0, 5000);
    if (cleanProjectDetails.length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a bit more context about the project (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    // 5. Build Email Content
    const fromAddress =
      process.env.SMTP_FROM ||
      process.env.EMAIL_FROM ||
      (process.env.SMTP_USER
        ? `Code2Perform <${process.env.SMTP_USER}>`
        : "Code2Perform <no-reply@code2perform.com>");

    const plainTextContent = `Code2Perform — New Project Inquiry

--------------------------------

Name:
${cleanName}

Email:
${cleanEmail}

Phone:
${cleanPhone || "Not provided"}

Services Needed:
${validServices.length > 0 ? validServices.join(", ") : "None selected"}

Project Details:
${cleanProjectDetails}

--------------------------------

This is a new contact form submission from the Code2Perform website.`;

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Inquiry — Code2Perform</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="margin-bottom: 8px; color: #111;">Code2Perform — New Project Inquiry</h2>
  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
  <p style="margin: 8px 0;"><strong>Name:</strong><br />${escapeHtml(cleanName)}</p>
  <p style="margin: 8px 0;"><strong>Email:</strong><br /><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #111;">${escapeHtml(cleanEmail)}</a></p>
  <p style="margin: 8px 0;"><strong>Phone:</strong><br />${escapeHtml(cleanPhone || "Not provided")}</p>
  <p style="margin: 8px 0;"><strong>Services Needed:</strong><br />${escapeHtml(validServices.length > 0 ? validServices.join(", ") : "None selected")}</p>
  <p style="margin: 8px 0;"><strong>Project Details:</strong><br /><span style="white-space: pre-wrap;">${escapeHtml(cleanProjectDetails)}</span></p>
  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
  <p style="font-size: 13px; color: #666; margin-top: 16px;">This is a new contact form submission from the Code2Perform website.</p>
</body>
</html>`;

    // 6. Server-Side SMTP Email Delivery
    const transporter = getTransporter();

    if (!transporter) {
      console.error(
        "[Contact API] SMTP configuration is missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD environment variables."
      );
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong while sending your message. Please try again.",
        },
        { status: 500 }
      );
    }

    try {
      // Send ONE email directly to the designated recipient
      await transporter.sendMail({
        from: fromAddress,
        to: RECIPIENT_EMAIL,
        replyTo: cleanEmail,
        subject: "New Project Inquiry — Code2Perform",
        text: plainTextContent,
        html: htmlContent,
      });
    } catch (sendErr: unknown) {
      // Log technical error on server without revealing credentials or stack traces to client
      const errMessage = sendErr instanceof Error ? sendErr.message : "Unknown error";
      console.error("[Contact API] SMTP delivery failure:", errMessage);
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong while sending your message. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. We've received your project details.",
    });
  } catch (err: unknown) {
    const errMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("[Contact API] Unexpected error:", errMessage);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending your message. Please try again.",
      },
      { status: 500 }
    );
  }
}
