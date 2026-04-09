"use client";

import { useState } from "react";
import { usePortfolioContent } from "@/components/providers/AppProviders";

type FormStatus = "idle" | "submitting" | "success" | "fallback" | "error";

interface ContactFormProps {
  contactEmail: string;
}

export function ContactForm({ contactEmail }: ContactFormProps) {
  const { ui } = usePortfolioContent();
  const contactOptions = ui.contactOptions;
  const defaultOption = contactOptions[0]?.value ?? "internship";
  const [values, setValues] = useState({
    name: "",
    email: "",
    projectType: defaultOption,
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const selectedContactOption =
    contactOptions.find((option) => option.value === values.projectType) ??
    contactOptions[0];
  const projectTypeLabel = selectedContactOption?.label ?? values.projectType;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    const subject = `[Portfolio] ${projectTypeLabel} - ${values.name}`;
    const body = [
      `${ui.contactNameLabel}: ${values.name}`,
      `${ui.contactEmailLabel}: ${values.email}`,
      `${ui.contactContextLabel}: ${projectTypeLabel}`,
      "",
      values.message,
    ].join("\n");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            subject,
            message: values.message,
            projectType: projectTypeLabel,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("Formspree Error:", errorData);
          throw new Error(ui.sendFailureMessage);
        }

        setStatus("success");
        setFeedback(ui.sendSuccessMessage);
        setValues({
          name: "",
          email: "",
          projectType: defaultOption,
          message: "",
        });
        return;
      }

      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("fallback");
      setFeedback(ui.sendFallbackMessage);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedback(
        error instanceof Error && error.message === ui.sendFailureMessage
          ? ui.sendFailureMessage
          : ui.sendErrorMessage
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">{ui.contactNameLabel}</span>
          <input
            required
            type="text"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition focus:border-primary"
            placeholder={ui.contactNamePlaceholder}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">{ui.contactEmailLabel}</span>
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition focus:border-primary"
            placeholder={ui.contactEmailPlaceholder}
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-foreground">{ui.contactContextLabel}</span>
        <select
          value={values.projectType}
          onChange={(event) =>
            setValues((current) => ({ ...current, projectType: event.target.value }))
          }
          className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition focus:border-primary"
        >
          {contactOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-foreground">{ui.contactMessageLabel}</span>
        <textarea
          required
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          rows={6}
          className="w-full rounded-[1.5rem] border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
          placeholder={ui.contactMessagePlaceholder}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-muted-foreground">{ui.contactHelperText}</p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? ui.submittingLabel : ui.submitLabel}
        </button>
      </div>

      <div aria-live="polite" className="min-h-6">
        {feedback ? (
          <p className={`text-sm ${status === "error" ? "text-red-400" : "text-primary"}`}>
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
