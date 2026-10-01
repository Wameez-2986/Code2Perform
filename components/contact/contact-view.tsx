"use client";

import { useState, useRef, type FormEvent, type ChangeEvent, type FocusEvent } from "react";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Compass,
  Check,
} from "lucide-react";
import { StackedCardSection } from "@/components/motion";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  services: string[];
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectDetails?: string;
}

const SERVICE_OPTIONS = [
  "Web & Digital Development",
  "UI/UX & Product Design",
  "Mobile App Development",
  "SaaS & Custom Platforms",
  "E-Commerce Solutions",
  "AI & Business Automation",
] as const;

export function ContactView() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    services: [],
    projectDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    phone: false,
    services: false,
    projectDetails: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  // Field refs for focus management upon validation error
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const projectDetailsRef = useRef<HTMLTextAreaElement>(null);

  const validateField = (field: keyof FormFields, value: string | string[]): string | undefined => {
    switch (field) {
      case "name":
        if (typeof value === "string" && !value.trim()) {
          return "Please enter your name.";
        }
        return undefined;
      case "email":
        if (typeof value === "string") {
          if (!value.trim()) {
            return "Please enter your email address.";
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            return "Please enter a valid email address (e.g. name@company.com).";
          }
        }
        return undefined;
      case "projectDetails":
        if (typeof value === "string") {
          if (!value.trim()) {
            return "Please tell us about your project.";
          }
          if (value.trim().length < 10) {
            return "Please provide a bit more context about the project.";
          }
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (data: FormFields): FormErrors => {
    const errs: FormErrors = {};
    const nameErr = validateField("name", data.name);
    if (nameErr) errs.name = nameErr;

    const emailErr = validateField("email", data.email);
    if (emailErr) errs.email = emailErr;

    const detailsErr = validateField("projectDetails", data.projectDetails);
    if (detailsErr) errs.projectDetails = detailsErr;

    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setFormData((prev) => ({ ...prev, [key]: value }));

    if (touched[key]) {
      const fieldError = validateField(key, value);
      setErrors((prev) => ({ ...prev, [key]: fieldError }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [key]: true }));

    const fieldError = validateField(key, value);
    setErrors((prev) => ({ ...prev, [key]: fieldError }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "submitting") return;

    setTouched({
      name: true,
      email: true,
      phone: true,
      services: true,
      projectDetails: true,
    });

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.email) {
        emailRef.current?.focus();
      } else if (validationErrors.projectDetails) {
        projectDetailsRef.current?.focus();
      }
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setStatus("error");
        setServerError(
          data?.error || "Something went wrong while sending your message. Please try again."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Something went wrong while sending your message. Please try again.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setServerError(null);
    setHoneypot("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: [],
      projectDetails: "",
    });
    setErrors({});
    setTouched({
      name: false,
      email: false,
      phone: false,
      services: false,
      projectDetails: false,
    });
  };

  return (
    <div className="relative w-full pt-4 sm:pt-6 pb-12 sm:pb-20 md:pb-64">
      {/* =====================================================================
          1. CONTACT HERO: CONSULTATION-FIRST POSITIONING
          Communicating: "Tell us what you're trying to achieve. We'll understand the situation and discuss what makes sense."
          ===================================================================== */}
      <StackedCardSection
        index={0}
        totalSections={4}
        ariaLabel="Contact Hero"
        id="contact-hero"
      >
        <div className="page-container space-y-5 md:space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Consultation &amp; Discovery</p>
          </div>

          {/* Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            Tell us what you need. We’ll understand your goals and find the right way forward.
          </h1>

          {/* Supporting Text & Reassurance Bar (No promised response times, no aggressive sales) */}
          <div className="pt-3.5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="type-body text-muted text-sm sm:text-base max-w-3xl leading-relaxed">
                We treat initial conversations as a practical consultation rather than a sales pitch.
                Whether you have an established product that needs architectural improvements or an
                entirely new initiative, we take time to understand your business first and advise
                on a realistic, disciplined path forward.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ink font-medium">
                <Compass className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>Direct practitioner review</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-ink font-medium">
                <ShieldCheck className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>Honest technical advice, no sales pressure</span>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          2. DISCOVERY FORM
          Collects useful information for the discovery stage:
          Name, Work Email, Company / Business, What do you need?,
          Tell us about the project, What are you trying to achieve?
          ===================================================================== */}
      <StackedCardSection
        index={1}
        totalSections={4}
        ariaLabel="Discovery Inquiry Form"
        id="discovery-inquiry-form"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Discovery Framing & Advice */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="space-y-1.5">
                <p className="type-label text-champagne-deep">Initial Discovery</p>
                <h2 className="type-heading text-ink">
                  How can we help?
                </h2>
              </div>
              <p className="type-body text-muted text-xs sm:text-sm leading-relaxed">
                You do not need a complete technical specification or final requirements document.
                Share what you are experiencing, what your business needs, and what outcome you are aiming for.
              </p>

              <div className="pt-3 border-t border-hairline space-y-2">
                <p className="type-label text-muted">What We Look For In Discovery</p>
                <ul className="space-y-2 text-xs sm:text-sm text-ink">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>The core problem or bottleneck your team is facing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>Who uses the system and how it fits into your workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>What commercial or practical result would make this a success</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Form matching reference image or Confirmation State */}
            <div className="lg:col-span-8">
              {status === "success" ? (
                <div
                  className="bg-surface border border-hairline rounded-3xl p-8 sm:p-10 md:p-12 space-y-6"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-champagne-deep shrink-0" />
                    <h3 className="type-title text-ink font-medium text-xl">
                      Inquiry Received
                    </h3>
                  </div>
                  <div className="space-y-3 text-muted type-body leading-relaxed">
                    <p className="text-ink font-medium text-lg">
                      Thanks for reaching out. We&apos;ve received your project details.
                    </p>
                    <p>
                      Thank you, <span className="text-ink font-medium">{formData.name}</span>. Your inquiry has been submitted directly to our team.
                    </p>
                    {formData.services.length > 0 && (
                      <p className="text-sm">
                        Selected services:{" "}
                        <span className="text-ink font-medium">
                          {formData.services.join(", ")}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="type-nav text-ink hover:text-champagne-deep inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      Send another message
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-surface border border-hairline rounded-2xl p-3.5 sm:p-5 md:p-5 shadow-none">
                  <h2 className="type-heading text-lg sm:text-xl font-bold text-ink tracking-tight mb-3">
                    Start a Conversation
                  </h2>

                  <form onSubmit={handleSubmit} noValidate className="space-y-2.5 sm:space-y-3" aria-label="Start a Conversation form">
                    {/* Hidden Honeypot Field for Spam Protection */}
                    <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                      <label htmlFor="company_website_url">Leave this empty</label>
                      <input
                        type="text"
                        id="company_website_url"
                        name="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Server-Side Error Alert */}
                    {serverError && (
                      <div
                        role="alert"
                        className="p-3 bg-surface border border-champagne-deep/40 rounded-xl flex items-start gap-2 text-xs text-ink"
                      >
                        <AlertCircle className="h-4 w-4 text-champagne-deep shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <p className="font-medium text-ink">Submission Error</p>
                          <p className="text-muted text-xs leading-relaxed">{serverError}</p>
                        </div>
                      </div>
                    )}

                    {/* ROW 1 — TWO COLUMNS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {/* YOUR NAME * */}
                      <div className="space-y-0.5">
                        <label
                          htmlFor="name"
                          className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-ink/80 uppercase"
                        >
                          YOUR NAME <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <input
                          ref={nameRef}
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          disabled={status === "submitting"}
                          aria-required="true"
                          aria-invalid={touched.name && !!errors.name}
                          aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={`contact-input py-2 px-3 text-xs sm:text-sm ${
                            touched.name && errors.name
                              ? "border-champagne-deep"
                              : "border-hairline"
                          }`}
                        />
                        {touched.name && errors.name && (
                          <p id="name-error" role="alert" className="text-xs text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* EMAIL ADDRESS * */}
                      <div className="space-y-0.5">
                        <label
                          htmlFor="email"
                          className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-ink/80 uppercase"
                        >
                          EMAIL ADDRESS <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <input
                          ref={emailRef}
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          disabled={status === "submitting"}
                          aria-required="true"
                          aria-invalid={touched.email && !!errors.email}
                          aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@company.com"
                          className={`contact-input py-2 px-3 text-xs sm:text-sm ${
                            touched.email && errors.email
                              ? "border-champagne-deep"
                              : "border-hairline"
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p id="email-error" role="alert" className="text-xs text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5">
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ROW 2 — FULL WIDTH: PHONE NUMBER */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="phone"
                        className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-ink/80 uppercase"
                      >
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        disabled={status === "submitting"}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="contact-input py-2 px-3 text-xs sm:text-sm border-hairline"
                      />
                    </div>

                    {/* ROW 3 — SERVICES NEEDED (SELECT ALL THAT APPLY) */}
                    <div className="space-y-1">
                      <span id="services-label" className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-ink/80 uppercase">
                        SERVICES NEEDED (SELECT ALL THAT APPLY)
                      </span>
                      <div
                        role="group"
                        aria-labelledby="services-label"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-1.5"
                      >
                        {SERVICE_OPTIONS.map((service) => {
                          const isSelected = formData.services.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              role="checkbox"
                              disabled={status === "submitting"}
                              aria-checked={isSelected}
                              onClick={() => toggleService(service)}
                              className={`w-full flex items-center justify-between px-3 py-1.5 sm:py-2 rounded-lg border text-left cursor-pointer transition-none ${
                                isSelected
                                  ? "border-ink bg-surface text-ink"
                                  : "border-hairline bg-surface text-ink hover:border-muted/50"
                              }`}
                            >
                              <span className="text-xs font-medium pr-2 leading-snug">
                                {service}
                              </span>
                              <span
                                className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-none ${
                                  isSelected
                                    ? "border-ink bg-ink text-white"
                                    : "border-hairline bg-surface"
                                }`}
                                aria-hidden="true"
                              >
                                {isSelected && (
                                  <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ROW 4 — PROJECT DETAILS */}
                    <div className="space-y-0.5">
                      <label
                        htmlFor="projectDetails"
                        className="block text-[10px] sm:text-[11px] font-semibold tracking-wider text-ink/80 uppercase"
                      >
                        TELL US ABOUT YOUR PROJECT <span className="text-champagne-deep" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        ref={projectDetailsRef}
                        id="projectDetails"
                        name="projectDetails"
                        rows={2}
                        required
                        disabled={status === "submitting"}
                        aria-required="true"
                        aria-invalid={touched.projectDetails && !!errors.projectDetails}
                        aria-describedby={touched.projectDetails && errors.projectDetails ? "projectDetails-error" : undefined}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your business, what you want to build, and key goals..."
                        className={`contact-input py-2 px-3 text-xs sm:text-sm resize-y min-h-16 ${
                          touched.projectDetails && errors.projectDetails
                            ? "border-champagne-deep"
                            : "border-hairline"
                        }`}
                      />
                      {touched.projectDetails && errors.projectDetails && (
                        <p id="projectDetails-error" role="alert" className="text-xs text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.projectDetails}</span>
                        </p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-0.5">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className={`w-full py-2.5 px-5 rounded-xl bg-ink text-white font-medium text-xs sm:text-sm hover:bg-champagne-deep cursor-pointer flex items-center justify-center gap-2 transition-none ${
                          status === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {status === "submitting" ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Start Your Project</span>
                            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                          </>
                        )}
                      </button>

                      {/* PRIVACY MESSAGE */}
                      <p className="text-center text-[10px] text-muted pt-1.5">
                        We respect your privacy. No spam ever.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          3. WHAT HAPPENS NEXT
          Exact 4-step explanation from the client's consultation model:
          1. We review your requirements.
          2. We discuss the business and project.
          3. We recommend an appropriate approach.
          4. If there is a fit, we prepare the proposal and next steps.
          (NO promised response times, NO aggressive sales language)
          ===================================================================== */}
      <StackedCardSection
        index={2}
        totalSections={4}
        ariaLabel="Consultation Process"
        id="consultation-process"
      >
        <div className="page-container space-y-5 md:space-y-6">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Expectations &amp; Process</p>
            </div>
            <h2 className="type-heading text-ink">
              What happens next.
            </h2>
            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              We believe in direct, transparent collaboration from the very first interaction.
              Here is how we guide initial inquiries:
            </p>
          </div>

          {/* 4 Steps: Clean editorial columns with hairline dividers */}
          <div className="border-t border-b border-hairline">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            {/* Step 1 */}
            <div className="py-4 md:py-5 sm:pr-4 lg:pr-6 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-label text-champagne-deep text-xs">Review</span>
              </div>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg">
                We review your requirements
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                We read through your submission and examine your current setup, goals, and technical context.
              </p>
            </div>

            {/* Step 2 */}
            <div className="py-4 md:py-5 sm:px-4 lg:px-6 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">02</span>
                <span className="type-label text-champagne-deep text-xs">Discussion</span>
              </div>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg">
                We discuss the business and project
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                We connect directly to talk through your operational realities, user expectations, and key priorities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="py-4 md:py-5 sm:px-4 lg:px-6 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">03</span>
                <span className="type-label text-champagne-deep text-xs">Advisory</span>
              </div>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg">
                We recommend an appropriate approach
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                We outline practical technical options—recommending the simplest, most durable way to solve the problem.
              </p>
            </div>

            {/* Step 4 */}
            <div className="py-4 md:py-5 sm:pl-4 lg:pl-6 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">04</span>
                <span className="type-label text-champagne-deep text-xs">Proposal</span>
              </div>
              <h3 className="type-title text-ink font-medium text-base sm:text-lg">
                Proposal &amp; next steps
              </h3>
              <p className="type-body-sm text-muted text-xs sm:text-sm leading-relaxed">
                If there is a mutual fit, we prepare a clear proposal with scope, deliverables, and next steps for your review.
              </p>
            </div>
            </div>
          </div>
        </div>
      </StackedCardSection>

      {/* =====================================================================
          4. DIRECT CONTACT INFORMATION
          Clean editorial block for direct correspondence, briefs, and RFPs
          ===================================================================== */}
      <StackedCardSection
        index={3}
        totalSections={4}
        ariaLabel="Direct Contact Information"
        id="direct-contact-info"
        surfaceAlt
      >
        <div className="page-container">
          <div className="max-w-4xl space-y-5 md:space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Direct Contact</p>
            </div>

            <h2 className="type-heading text-ink">
              Have a project brief or requirements? Send them to us directly.
            </h2>

            <p className="type-body text-muted text-sm sm:text-base max-w-2xl leading-relaxed pt-1">
              If you have already prepared a detailed scope document, request for proposal (RFP),
              or design brief, you are welcome to send it directly to our team via email.
            </p>

            {/* Contact Details Block */}
            <div className="pt-3 border-t border-hairline">
              <div className="space-y-1.5">
                <p className="type-label text-muted">Direct Email</p>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-champagne-deep shrink-0" />
                  <a
                    href="mailto:mubeenk710@gmail.com"
                    className="type-title text-ink font-medium hover:text-champagne-deep break-all"
                  >
                    mubeenk710@gmail.com
                  </a>
                </div>
                <p className="type-legal text-muted text-xs pt-0.5">
                  Reviewed directly by our engineering and design team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StackedCardSection>
    </div>
  );
}
