"use client";

import { useState } from "react";

const topics = [
  "General enquiry",
  "Donations and 80G receipts",
  "Corporate partnership / CSR",
  "Volunteering",
  "Visiting a programme",
  "Press",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Website enquiry — ${topic}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:hello@nitiseva.org?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-ink/25 bg-paper-warm p-5 sm:p-7 md:p-8">
      <h2 className="text-[1.65rem] leading-tight tracking-[-0.03em]">
        Send a note
      </h2>
      <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft">
        This opens your email app with the message ready to send. We reply
        within two working days.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-[0.92rem] font-medium">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field mt-2"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[0.92rem] font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="field mt-2"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-topic" className="block text-[0.92rem] font-medium">
            What is this about?
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="field mt-2"
          >
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="block text-[0.92rem] font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="field mt-2 resize-y"
            placeholder="Tell us what you need. A real person reads this."
          />
        </div>
      </div>

      <button type="submit" className="btn mt-6 w-full sm:w-auto">
        Open email app <span aria-hidden="true">↗</span>
      </button>

      {sent ? (
        <p role="status" className="mt-4 text-[0.85rem] leading-relaxed text-ink-soft">
          If your email app did not open, write directly to{" "}
          <a href="mailto:hello@nitiseva.org" className="underline underline-offset-2">
            hello@nitiseva.org
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
