"use client";

import { useId, useState } from "react";

import type { FaqItem } from "@/content/site";

/** One-open-at-a-time accordion, matching the design's single `faq` index. */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="faq">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question} className="faq__item">
            <button
              type="button"
              className="faq__question"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.question}
              <span className="faq__sign" aria-hidden="true">
                {open ? "−" : "+"}
              </span>
            </button>
            {/* Always rendered, toggled with `hidden`, so the answer text ships
                in the HTML for crawlers (and keeps `aria-controls` pointing at
                a real element). Google allows FAQ answers to sit behind an
                expander provided they are present in the markup. */}
            <div id={panelId} className="faq__answer" hidden={!open}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
