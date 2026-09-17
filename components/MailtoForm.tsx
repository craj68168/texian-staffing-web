"use client";

import type { FormEvent, ReactNode } from "react";

type Props = {
  subject: string;
  children: ReactNode;
  className?: string;
};

export default function MailtoForm({ subject, children, className = "form" }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let body = `${subject}\n\n`;
    for (const [key, value] of formData.entries()) body += `${key}: ${value}\n`;
    window.location.href = `mailto:info@himac.us?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className={className} onSubmit={handleSubmit}>{children}</form>;
}
