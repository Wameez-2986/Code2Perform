"use client";

import { useState, useRef, type FormEvent, type ChangeEvent, type FocusEvent } from "react";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Compass,
} from "lucide-react";

interface FormFields {
  name: string;
  email: string;
  company: string;
  need: string;
  projectDetails: string;
  goals: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  need?: string;
  projectDetails?: string;
  goals?: string;
}

const NEED_OPTIONS = [
  "Website",
  "UI/UX & Product Design",
  "Mobile App",
  "SaaS / Custom Platform",
  "E-Commerce",
  "AI / Automation",
  "Ongoing Support",
  "Something else",
] as const;

export function ContactView() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    need: "Website",
    projectDetails: "",
    goals: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    company: false,
    need: false,
    projectDetails: false,
    goals: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Field refs for focus management upon validation error
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const projectDetailsRef = useRef<HTMLTextAreaElement>(null);
  const goalsRef = useRef<HTMLTextAreaElement>(null);

  const validateField = (field: keyof FormFields, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) {
          return "Please enter your name.";
        }
        return undefined;
      case "email":
        if (!value.trim()) {
          return "Please enter your work email address.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address (e.g. name@company.com).";
        }
        return undefined;
      case "projectDetails":
        if (!value.trim()) {
          return "Please share a few sentences about your project.";
        }
        if (value.trim().length < 10) {
          return "Please provide a bit more context about the project.";
        }
        return undefined;
      case "goals":
        if (!value.trim()) {
          return "Please tell us what outcome or goal you are trying to achieve.";
        }
        if (value.trim().length < 10) {
          return "Please share a little more about what success looks like.";
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

    const goalsErr = validateField("goals", data.goals);
    if (goalsErr) errs.goals = goalsErr;

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
      need: true,
      projectDetails: true,
      goals: true,
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
      } else if (validationErrors.goals) {
        goalsRef.current?.focus();
      }
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      need: "Website",
      projectDetails: "",
      goals: "",
    });
    setErrors({});
    setTouched({
      name: false,
      email: false,
      company: false,
      need: false,
      projectDetails: false,
      goals: false,
    });
  };

  return (
    <div className="w-full">
      {/* =====================================================================
          1. CONTACT HERO: CONSULTATION-FIRST POSITIONING
          Communicating: "Tell us what you're trying to achieve. We'll understand the situation and discuss what makes sense."
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Contact Hero">
        <div className="page-container space-y-8 md:space-y-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <p className="type-label text-champagne-deep">Consultation &amp; Discovery</p>
          </div>

          {/* Heading */}
          <h1 className="type-display text-ink max-w-5xl">
            Tell us what you&apos;re trying to achieve. We&apos;ll understand the situation and discuss what makes sense.
          </h1>

          {/* Supporting Text & Reassurance Bar (No promised response times, no aggressive sales) */}
          <div className="pt-6 border-t border-hairline grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="type-body text-muted text-lg max-w-3xl leading-relaxed">
                We treat initial conversations as a practical consultation rather than a sales pitch.
                Whether you have an established product that needs architectural improvements or an
                entirely new initiative, we take time to understand your business first and advise
                on a realistic, disciplined path forward.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-ink font-medium">
                <Compass className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>Direct practitioner review</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink font-medium">
                <ShieldCheck className="h-4 w-4 text-champagne-deep shrink-0" />
                <span>Honest technical advice, no sales pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. DISCOVERY FORM
          Collects useful information for the discovery stage:
          Name, Work Email, Company / Business, What do you need?,
          Tell us about the project, What are you trying to achieve?
          ===================================================================== */}
      <section className="border-b border-hairline section-spacing" aria-label="Discovery Inquiry Form">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Discovery Framing & Advice */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <p className="type-label text-champagne-deep">Initial Discovery</p>
                <h2 className="type-heading text-ink">
                  How can we help?
                </h2>
              </div>
              <p className="type-body text-muted leading-relaxed">
                You do not need a complete technical specification or final requirements document.
                Share what you are experiencing, what your business needs, and what outcome you are aiming for.
              </p>

              <div className="pt-4 border-t border-hairline space-y-3">
                <p className="type-label text-muted">What We Look For In Discovery</p>
                <ul className="space-y-2.5 text-sm text-ink">
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

            {/* Right Column: Form or Confirmation State */}
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
                      We have received your discovery notes regarding{" "}
                      <span className="text-ink font-medium">{formData.need}</span>.
                    </p>
                    <p>
                      Our team will carefully review your requirements and business context, then
                      reach out to <span className="text-ink font-medium">{formData.email}</span> to
                      discuss what makes sense for your project.
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
                  aria-label="Discovery inquiry form"
                >
                  {/* Row 1: Name and Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="name"
                          className="type-label text-ink block"
                        >
                          Name <span className="text-champagne-deep" aria-hidden="true">*</span>
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
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none ${
                          touched.name && errors.name
                            ? "border-2 border-champagne-deep focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                            : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p
                          id="name-error"
                          role="alert"
                          className="type-legal text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="email"
                          className="type-label text-ink block"
                        >
                          Work Email <span className="text-champagne-deep" aria-hidden="true">*</span>
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
                            ? "border-2 border-champagne-deep focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                            : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="type-legal text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company / Business and What do you need? */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company / Business */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="company"
                          className="type-label text-ink block"
                        >
                          Company / Business
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
                        placeholder="Company or organization name"
                        className="w-full px-4 py-3 bg-surface border border-hairline text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                      />
                    </div>

                    {/* What do you need? */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="need"
                          className="type-label text-ink block"
                        >
                          What do you need? <span className="text-champagne-deep" aria-hidden="true">*</span>
                        </label>
                        <span className="type-legal text-muted" aria-hidden="true">Required</span>
                      </div>
                      <select
                        id="need"
                        name="need"
                        required
                        aria-required="true"
                        value={formData.need}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-surface border border-hairline text-ink text-sm rounded-none transition-none focus:outline-none focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep cursor-pointer"
                      >
                        {NEED_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Tell us about the project */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="projectDetails"
                        className="type-label text-ink block"
                      >
                        Tell us about the project <span className="text-champagne-deep" aria-hidden="true">*</span>
                      </label>
                      <span className="type-legal text-muted" aria-hidden="true">Required</span>
                    </div>
                    <textarea
                      ref={projectDetailsRef}
                      id="projectDetails"
                      name="projectDetails"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={touched.projectDetails && !!errors.projectDetails}
                      aria-describedby={touched.projectDetails && errors.projectDetails ? "projectDetails-error" : undefined}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Describe what your project involves, your current setup, and any existing challenges."
                      className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none resize-y ${
                        touched.projectDetails && errors.projectDetails
                          ? "border-2 border-champagne-deep focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                          : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                      }`}
                    />
                    {touched.projectDetails && errors.projectDetails && (
                      <p
                        id="projectDetails-error"
                        role="alert"
                        className="type-legal text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: What are you trying to achieve? */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="goals"
                        className="type-label text-ink block"
                      >
                        What are you trying to achieve? <span className="text-champagne-deep" aria-hidden="true">*</span>
                      </label>
                      <span className="type-legal text-muted" aria-hidden="true">Required</span>
                    </div>
                    <textarea
                      ref={goalsRef}
                      id="goals"
                      name="goals"
                      rows={3}
                      required
                      aria-required="true"
                      aria-invalid={touched.goals && !!errors.goals}
                      aria-describedby={touched.goals && errors.goals ? "goals-error" : undefined}
                      value={formData.goals}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What commercial outcome or operational improvement matters most? (e.g., launching a new product, eliminating manual bottlenecks, increasing qualified leads)"
                      className={`w-full px-4 py-3 bg-surface text-ink text-sm rounded-none placeholder:text-muted/60 transition-none focus:outline-none resize-y ${
                        touched.goals && errors.goals
                          ? "border-2 border-champagne-deep focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                          : "border border-hairline focus:border-champagne-deep focus:ring-1 focus:ring-champagne-deep"
                      }`}
                    />
                    {touched.goals && errors.goals && (
                      <p
                        id="goals-error"
                        role="alert"
                        className="type-legal text-champagne-deep font-medium flex items-center gap-1.5 pt-0.5"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.goals}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="type-button w-full sm:w-auto px-8 py-4 bg-ink text-bone hover:bg-champagne-deep text-center cursor-pointer transition-none rounded-none"
                    >
                      Submit for Consultation
                    </button>
                    <p className="type-legal text-muted">
                      No marketing sequences or data sharing. Direct technical consultation.
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
          Exact 4-step explanation from the client's consultation model:
          1. We review your requirements.
          2. We discuss the business and project.
          3. We recommend an appropriate approach.
          4. If there is a fit, we prepare the proposal and next steps.
          (NO promised response times, NO aggressive sales language)
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
              What happens next.
            </h2>
            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              We believe in direct, transparent collaboration from the very first interaction.
              Here is how we guide initial inquiries:
            </p>
          </div>

          {/* 4 Steps: Clean editorial columns with hairline dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-hairline divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            {/* Step 1 */}
            <div className="py-8 md:py-10 sm:pr-6 lg:pr-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">01</span>
                <span className="type-label text-champagne-deep text-xs">Review</span>
              </div>
              <h3 className="type-title text-ink font-medium text-lg">
                We review your requirements
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We read through your submission and examine your current setup, goals, and technical context.
              </p>
            </div>

            {/* Step 2 */}
            <div className="py-8 md:py-10 sm:px-6 lg:px-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">02</span>
                <span className="type-label text-champagne-deep text-xs">Discussion</span>
              </div>
              <h3 className="type-title text-ink font-medium text-lg">
                We discuss the business and project
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We connect directly to talk through your operational realities, user expectations, and key priorities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="py-8 md:py-10 sm:px-6 lg:px-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">03</span>
                <span className="type-label text-champagne-deep text-xs">Advisory</span>
              </div>
              <h3 className="type-title text-ink font-medium text-lg">
                We recommend an appropriate approach
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                We outline practical technical options—recommending the simplest, most durable way to solve the problem.
              </p>
            </div>

            {/* Step 4 */}
            <div className="py-8 md:py-10 sm:pl-6 lg:pl-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="type-label text-champagne font-medium">04</span>
                <span className="type-label text-champagne-deep text-xs">Proposal</span>
              </div>
              <h3 className="type-title text-ink font-medium text-lg">
                Proposal &amp; next steps
              </h3>
              <p className="type-body-sm text-muted leading-relaxed">
                If there is a mutual fit, we prepare a clear proposal with scope, deliverables, and next steps for your review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. DIRECT CONTACT INFORMATION
          Clean editorial block for direct correspondence, briefs, and RFPs
          ===================================================================== */}
      <section className="bg-surface-alt border-b border-hairline section-spacing" aria-label="Direct Contact Information">
        <div className="page-container">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              <p className="type-label text-champagne-deep">Direct Contact</p>
            </div>

            <h2 className="type-heading text-ink">
              Prefer to send a brief or RFP directly?
            </h2>

            <p className="type-body text-muted text-lg max-w-2xl leading-relaxed">
              If you have already prepared a detailed scope document, request for proposal (RFP),
              or design brief, you are welcome to send it directly to our team via email.
            </p>

            {/* Contact Details Block */}
            <div className="pt-4 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="type-label text-muted">Direct Email</p>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-champagne-deep shrink-0" />
                  <a
                    href="mailto:hello@code2perform.com"
                    className="type-title text-ink font-medium hover:text-champagne-deep break-all"
                  >
                    hello@code2perform.com
                  </a>
                </div>
                <p className="type-legal text-muted pt-1">
                  Reviewed directly by our engineering and design team.
                </p>
              </div>

              <div className="space-y-2">
                <p className="type-label text-muted">Office Hours</p>
                <p className="type-body-sm text-ink font-medium">
                  Monday – Friday, 9:00 AM – 6:00 PM
                </p>
                <p className="type-legal text-muted pt-1">
                  Available for scheduled technical consultations and video calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
