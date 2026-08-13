"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { connectLimits, type ConnectField } from "@/lib/connect";

type FieldErrors = Partial<Record<ConnectField, string>>;
type Status = "idle" | "submitting" | "success" | "failure";

const fieldClass =
  "min-h-12 w-full rounded-none border-0 border-b border-hairline bg-transparent px-0 py-3 text-base text-heading outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted focus:border-heading focus:shadow-[0_2px_0_var(--focus-ring-color)] disabled:cursor-not-allowed disabled:bg-surface-alt disabled:px-3 disabled:text-muted motion-reduce:transition-none";

function ErrorText({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return <p id={id} className="mt-2 text-sm font-medium text-[#9f233c] dark:text-[#ff9bae]">{children}</p>;
}

export function ConnectForm({ deliveryEnabled }: { deliveryEnabled: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!deliveryEnabled || status === "submitting") return;

    setStatus("submitting");
    setFieldErrors({});
    setFormError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        fieldErrors?: FieldErrors;
        formError?: string;
      };

      if (response.ok && result.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setFieldErrors(result.fieldErrors ?? {});
      setFormError(result.formError ?? "Your enquiry was not sent. Please review the form and try again.");
      setStatus("failure");
      requestAnimationFrame(() => summaryRef.current?.focus());
    } catch {
      setFormError("Your enquiry was not sent. Check your connection and try again.");
      setStatus("failure");
      requestAnimationFrame(() => summaryRef.current?.focus());
    }
  }

  const describedBy = (field: ConnectField, help?: string) =>
    [help, fieldErrors[field] ? `${field}-error` : ""].filter(Boolean).join(" ") || undefined;

  return (
    <form ref={formRef} onSubmit={submit} noValidate aria-label="Start a conversation">
      <div
        id="connect-availability"
        role="status"
        className="grid gap-3 border-b border-hairline pb-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
      >
        <div>
          <p className="text-sm font-semibold text-heading">
            {deliveryEnabled ? "Online enquiries are available." : "Online enquiries are being enabled."}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-[1.7] text-muted">
            {deliveryEnabled
              ? "Use the form below to begin the conversation."
              : "You will be able to send this directly shortly. The form is visible now so the experience is clear before delivery opens."}
          </p>
        </div>
        <span className="inline-flex min-h-11 items-center border-l-2 border-brand-gold pl-4 text-xs font-semibold tracking-[0.08em] text-heading uppercase">
          {deliveryEnabled ? "Ready" : "Opening shortly"}
        </span>
      </div>

      {status === "failure" ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-8 border-l-2 border-[#9f233c] bg-[#9f233c]/8 p-4 outline-none focus:ring-2 focus:ring-[var(--focus-ring-color)]">
          <h2 className="text-base font-semibold text-heading">The enquiry was not sent</h2>
          <p className="mt-1 text-sm leading-relaxed text-body">{formError || "Review the highlighted fields and try again."}</p>
        </div>
      ) : null}

      {status === "success" ? (
        <div role="status" aria-live="polite" className="mt-8 border-l-2 border-accent-azure bg-accent-azure-soft p-6">
          <h2 className="font-serif text-2xl font-semibold text-heading">Your enquiry has been received.</h2>
          <p className="mt-2 text-sm leading-relaxed text-body">Thank you for starting the conversation.</p>
        </div>
      ) : (
        <fieldset disabled={!deliveryEnabled} aria-describedby="connect-availability" className="mt-8 grid min-w-0 gap-x-6 gap-y-8 disabled:[&_label]:text-muted">
          <legend className="sr-only">Conversation details</legend>
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-heading">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" maxLength={connectLimits.name} required aria-invalid={Boolean(fieldErrors.name)} aria-describedby={describedBy("name")} className={`mt-2 ${fieldClass}`} />
              <ErrorText id="name-error">{fieldErrors.name}</ErrorText>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-heading">Email</label>
              <p id="email-help" className="mt-1 text-sm text-muted">We will use this to reply to you.</p>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" maxLength={connectLimits.email} required aria-invalid={Boolean(fieldErrors.email)} aria-describedby={describedBy("email", "email-help")} className={`mt-2 ${fieldClass}`} />
              <ErrorText id="email-error">{fieldErrors.email}</ErrorText>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label htmlFor="organisation" className="block text-sm font-semibold text-heading">Organisation <span className="font-normal text-muted">(optional)</span></label>
              <input id="organisation" name="organisation" type="text" autoComplete="organization" maxLength={connectLimits.organisation} aria-invalid={Boolean(fieldErrors.organisation)} aria-describedby={describedBy("organisation")} className={`mt-2 ${fieldClass}`} />
              <ErrorText id="organisation-error">{fieldErrors.organisation}</ErrorText>
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-heading">What would help? <span className="font-normal text-muted">(optional)</span></label>
              <select id="interest" name="interest" defaultValue="" aria-invalid={Boolean(fieldErrors.interest)} aria-describedby={describedBy("interest")} className={`mt-2 ${fieldClass}`}>
                <option value="">Choose if useful</option>
                <option value="not_sure">Not sure yet</option>
                <option value="website">Website or digital experience</option>
                <option value="cloud">Cloud or platform foundations</option>
                <option value="ai_automation">AI or automation</option>
                <option value="ongoing_support">Ongoing improvement or support</option>
              </select>
              <ErrorText id="interest-error">{fieldErrors.interest}</ErrorText>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-heading">What would you like to discuss?</label>
            <p id="message-help" className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">Share the problem, the decision in front of you, or whatever context you already have. A formal brief is not required.</p>
            <textarea id="message" name="message" rows={8} maxLength={connectLimits.message} required aria-invalid={Boolean(fieldErrors.message)} aria-describedby={describedBy("message", "message-help")} className={`mt-2 resize-y ${fieldClass}`} />
            <ErrorText id="message-error">{fieldErrors.message}</ErrorText>
          </div>

          <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-hairline pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" disabled={!deliveryEnabled || status === "submitting"} aria-describedby="submit-note connect-availability" className="w-full sm:w-auto">
              {status === "submitting" ? "Sending enquiry" : deliveryEnabled ? "Start the conversation" : "Online sending opens shortly"}
            </Button>
            <p id="submit-note" className="max-w-sm text-sm leading-relaxed text-muted">Only send information you are comfortable sharing in an initial conversation.</p>
          </div>
          <p className="sr-only" role="status" aria-live="polite">{status === "submitting" ? "Sending your enquiry." : ""}</p>
        </fieldset>
      )}
    </form>
  );
}
