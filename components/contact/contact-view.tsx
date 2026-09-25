"use client";

import { useState, useRef, type FormEvent, type ChangeEvent, type FocusEvent } from "react";
import {
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

interface FormFields {
  name: string;
  email: string;
  company: string;
  projectType: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
}

export function ContactView() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    projectType: "Web & Digital Development",
    details: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    company: false,
    projectType: false,
    details: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Field refs for focus management upon validation error
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const validateField = (field: keyof FormFields, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) {
          return "Please enter your name.";
        }
        return undefined;
      case "email":
        if (!value.trim()) {
          return "Please enter your email address.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address (e.g. name@company.com).";
        }
        return undefined;
      case "details":
        if (!value.trim()) {
          return "Please provide a short description of your project.";
        }
        if (value.trim().length < 10) {
          return "Please share a little more detail so we can understand your goals.";
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

    const detailsErr = validateField("details", data.details);
    if (detailsErr) errs.details = detailsErr;

    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [key]: true }));

    const fieldError = validateField(key, value);
    setErrors((prev) => ({ ...prev, [key]: fieldError }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      company: true,
      projectType: true,
      details: true,
    });

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.email) {
        emailRef.current?.focus();
      } else if (validationErrors.details) {
        detailsRef.current?.focus();
      }
      return;
    }

    // Client-side confirmation state without external service dependency
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "Web & Digital Development",
      details: "",
    });
    setErrors({});
    setTouched({
      name: false,
      email: false,
      company: false,
      projectType: false,
      details: false,
    });
  };

  return (
    <div className="w-full">
      {/* =====================================================================
          1. CONTACT HERO
          Editorial opening with direct communication promise
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Contact Hero">
        <div className="page-container space-y-8 md:space-y-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Start a Conversation</p>
          </div>

          {/* Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            Tell us about what your business wants to build.
          </h1>

          {/* Supporting Text & Reassurance Bar */}
          <div className="pt-6 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="type-body text-muted text-lg max-w-3xl leading-relaxed">
                Whether you have a fully scoped technical brief or just an early concept that
                needs architectural guidance, we are glad to talk it through. You will hear
                back directly from a senior engineer or designer, not a commission-driven
                sales representative.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-ink font-medium">
                <Clock className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>Responses within 1 business day</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink font-medium">
                <ShieldCheck className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>No aggressive sales calls or mailing lists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. START A PROJECT FORM
          Clean, accessible inputs with clear error/focus states & Code2Perform aesthetic
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Start a Project Form">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Guidelines */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <p className="type-label text-champagne-deep">Project Inquiry</p>
                <h2 className="type-heading text-ink">
                  How can we help?
                </h2>
              </div>
              <p className="type-body text-muted leading-relaxed">
                Fill in the basic details of your project. If you are not entirely sure
                about the exact technical requirements, simply describe your business goal
                or the problem you want to solve.
              </p>
              <div className="pt-4 border-t border-hairline space-y-3">
                <p className="type-label text-muted">Helpful Information to Include</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>What problem does this project solve for your business?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>Do you have an existing system, or is this starting fresh?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-1.5 shrink-0" />
                    <span>Any target launch dates or deadlines we should keep in mind?</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Refined Form / Success State */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div
                  className="p-8 md:p-12 bg-surface-alt border border-hairline space-y-6"
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
                    <p>
                      Thank you, <span className="text-ink font-medium">{formData.name}</span>.
                      We have received your details for{" "}
                      <span className="text-ink font-medium">{formData.projectType}</span>.
                    </p>
                    <p>
                      Our team will review your project notes and send an honest response directly to{" "}
                      <span className="text-ink font-medium">{formData.email}</span> within
                      one business day.
                    </p>
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
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  aria-label="Project inquiry form"
                >
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="name"
                          className="type-label text-ink block"
                        >
                          Your Name <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <span className="type-legal text-muted" aria-hidden="true">Required</span>
                      </div>
                      <input
                        ref={nameRef}
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        aria-required="true"
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="First and last name"
                        className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none ${
                          touched.name && errors.name
                            ? "border border-[#991B1B] focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B]"
                            : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="type-legal text-[#991B1B] flex items-center gap-1.5 pt-0.5"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="email"
                          className="type-label text-ink block"
                        >
                          Email Address <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <span className="type-legal text-muted" aria-hidden="true">Required</span>
                      </div>
                      <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none ${
                          touched.email && errors.email
                            ? "border border-[#991B1B] focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B]"
                            : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="type-legal text-[#991B1B] flex items-center gap-1.5 pt-0.5"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company Field (Optional) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="company"
                          className="type-label text-ink block"
                        >
                          Company or Organization
                        </label>
                        <span className="type-legal text-muted" aria-hidden="true">Optional</span>
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-surface border border-hairline text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                      />
                    </div>

                    {/* Project Type Select */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="projectType"
                          className="type-label text-ink block"
                        >
                          Project Type <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <span className="type-legal text-muted" aria-hidden="true">Required</span>
                      </div>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        aria-required="true"
                        value={formData.projectType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-surface border border-hairline text-ink text-sm rounded-none transition-none focus:outline-none focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep cursor-pointer"
                      >
                        <option value="Web & Digital Development">
                          Web &amp; Digital Development
                        </option>
                        <option value="UI/UX & Product Design">
                          UI/UX &amp; Product Design
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="SaaS & Custom Platforms">
                          SaaS &amp; Custom Platforms
                        </option>
                        <option value="E-Commerce Solutions">
                          E-Commerce Solutions
                        </option>
                        <option value="AI & Business Automation">
                          AI &amp; Business Automation
                        </option>
                        <option value="Multiple Practices / Advisory">
                          Multiple Practices / General Advisory
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="details"
                        className="type-label text-ink block"
                      >
                        Project Details <span className="text-champagne-deep" aria-hidden="true">*</span>
                      </label>
                      <span className="type-legal text-muted" aria-hidden="true">Required</span>
                    </div>
                    <textarea
                      ref={detailsRef}
                      id="details"
                      name="details"
                      rows={6}
                      required
                      aria-required="true"
                      aria-invalid={touched.details && !!errors.details}
                      aria-describedby={touched.details && errors.details ? "details-error" : undefined}
                      value={formData.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us what you are looking to build, your current challenges, and any target milestones or dates."
                      className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none resize-y ${
                        touched.details && errors.details
                          ? "border border-[#991B1B] focus:border-[#991B1B] focus:ring-1 focus:ring-[#991B1B]"
                          : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                      }`}
                    />
                    {touched.details && errors.details && (
                      <p
                        id="details-error"
                        role="alert"
                        className="type-legal text-[#991B1B] flex items-center gap-1.5 pt-0.5"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="type-button px-8 py-4 bg-ink text-bone hover:bg-champagne-deep text-center cursor-pointer transition-none rounded-none"
                    >
                      Send Project Inquiry
                    </button>
                    <p className="type-legal text-muted">
                      No marketing sequences or shared data. Direct response only.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. WHAT HAPPENS NEXT
          Clear 3-step timeline setting realistic expectations
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="What Happens Next">
        <div className="page-container space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Expectations &amp; Process</p>
            </div>
            <h2 className="type-heading text-ink">
              What happens after you reach out.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We know waiting for agency replies can be frustrating. Here is exactly
              what will happen once you submit your inquiry.
            </p>
          </div>

          {/* 3 Steps: Clean editorial columns with hairline dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-hairline divide-y md:divide-y-0 md:divide-x divide-hairline">
            {/* Step 1 */}
            <div className="py-8 md:py-10 md:pr-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-legal text-muted">Day 1</span>
              </div>
              <h3 className="type-title text-ink font-medium text-xl">
                Initial Review
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We read your message and examine your business goals or existing technical setup.
                If we know right away that we cannot take on your project, we will tell you
                honestly and recommend other avenues.
              </p>
            </div>

            {/* Step 2 */}
            <div className="py-8 md:py-10 md:px-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">02</span>
                <span className="type-legal text-muted">Days 2–3</span>
              </div>
              <h3 className="type-title text-ink font-medium text-xl">
                Discovery Call
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                If the project looks like a good match, we schedule a concise 30-minute call.
                We ask focused questions about your workflows, timeline, and priorities to
                make sure we understand what success looks like.
              </p>
            </div>

            {/* Step 3 */}
            <div className="py-8 md:py-10 md:pl-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">03</span>
                <span className="type-legal text-muted">Days 4–5</span>
              </div>
              <h3 className="type-title text-ink font-medium text-xl">
                Written Proposal
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We deliver a clear, itemized proposal outlining recommended architecture,
                deliverables, milestones, and exact pricing. You review it at your own pace
                with zero obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DIRECT CTA / CONTACT INFORMATION
          Warm alternative for direct email, RFPs, or general questions
          ===================================================================== */}
      <section className="bg-surface-alt border-b border-hairline section-spacing" aria-label="Direct Contact Information">
        <div className="page-container">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Direct Contact</p>
            </div>

            <h2 className="type-heading text-ink">
              Prefer to send an RFP or talk directly?
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              If you have already prepared a detailed scope document, request for proposal (RFP),
              or design brief, you are welcome to send it straight to our inbox.
            </p>

            {/* Contact Details Block */}
            <div className="pt-4 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="type-label text-muted">Direct Email</p>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-champagne-deep shrink-0" />
                  <a
                    href="mailto:hello@code2perform.com"
                    className="type-title text-ink font-medium hover:text-champagne-deep"
                  >
                    hello@code2perform.com
                  </a>
                </div>
                <p className="type-legal text-muted pt-1">
                  Monitored during business hours Monday through Friday.
                </p>
              </div>

              <div className="space-y-2">
                <p className="type-label text-muted">Office Hours &amp; Location</p>
                <p className="type-body-sm text-ink font-medium">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </p>
                <p className="type-legal text-muted pt-1">
                  Working with business clients globally across North America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
