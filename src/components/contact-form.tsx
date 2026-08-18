'use client';

import { useState } from 'react';

import { site } from '@/content/site';

const { form } = site.contact;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '30px 10px' }}>
        <div
          aria-hidden="true"
          style={{
            width: 66,
            height: 66,
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 22px',
            fontSize: 30,
          }}
        >
          ✓
        </div>
        <h2
          className="display"
          style={{ fontWeight: 700, fontSize: 26, margin: '0 0 12px' }}
        >
          {form.success.title}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'var(--muted)',
            lineHeight: 1.6,
            margin: '0 auto 26px',
            maxWidth: 340,
          }}
        >
          {form.success.body}
        </p>
        <button
          type="button"
          className="btn btn--outline btn--sm"
          onClick={() => setSubmitted(false)}
        >
          {form.success.again}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setError(null);
        setSubmitting(true);

        const formData = new FormData(event.currentTarget);
        const payload = {
          name: formData.get('name'),
          email: formData.get('email'),
          interest: formData.get('interest'),
          message: formData.get('message'),
        };

        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          if (!res.ok) {
            throw new Error('Failed to send');
          }

          setSubmitted(true);
        } catch {
          setError(
            'Something went wrong sending your message. Please try again, or reach out via WhatsApp.'
          );
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <h2
        className="display"
        style={{ fontWeight: 700, fontSize: 26, margin: '0 0 26px' }}
      >
        {form.title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <label className="field">
          <span className="field__label">{form.name.label}</span>
          <input
            className="field__input"
            type="text"
            name="name"
            required
            placeholder={form.name.placeholder}
          />
        </label>

        <label className="field">
          <span className="field__label">{form.email.label}</span>
          <input
            className="field__input"
            type="email"
            name="email"
            required
            placeholder={form.email.placeholder}
          />
        </label>

        <label className="field">
          <span className="field__label">{form.interest.label}</span>
          <select
            className="field__input"
            name="interest"
            defaultValue={form.interest.options[0]}
          >
            {form.interest.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field__label">{form.message.label}</span>
          <textarea
            className="field__input"
            name="message"
            rows={4}
            placeholder={form.message.placeholder}
          />
        </label>

        {error && (
          <p style={{ color: '#c0392b', fontSize: 14, margin: 0 }}>{error}</p>
        )}

        <button
          type="submit"
          className="btn btn--navy btn--block"
          style={{ marginTop: 6, opacity: submitting ? 0.7 : 1 }}
          disabled={submitting}
        >
          {submitting ? 'Sending…' : form.submit}
          <span className="header__ctaDot" />
        </button>
      </div>
    </form>
  );
}
