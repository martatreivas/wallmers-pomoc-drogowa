"use client";

import Link from "next/link";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { siteConfig } from "@/config/site";
import { content } from "@/content/site-content";
import { phoneHref, whatsappHref } from "@/lib/contact";

type ContactModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

type ContactModalProviderProps = {
  children: ReactNode;
};

type ContactModalTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const value = useMemo<ContactModalContextValue>(
    () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    [],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <div
        className={`contact-modal-shell${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="contact-modal-backdrop"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
          aria-label={content.common.closeLabel}
        />
        <div
          className="contact-modal-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          aria-describedby="contact-modal-description"
        >
          <button
            type="button"
            className="contact-modal-close"
            onClick={() => setIsOpen(false)}
            aria-label={content.common.closeLabel}
          >
            ×
          </button>

          <p className="contact-modal-kicker">Kontakt 24/7</p>
          <h2 className="contact-modal-title" id="contact-modal-title">
            {content.common.contactModalTitle}
          </h2>
          <p className="contact-modal-description" id="contact-modal-description">
            {content.common.contactModalDescription}
          </p>

          <div className="contact-modal-actions">
            <Link
              className="button button-primary button-large"
              href={phoneHref}
              onClick={() => setIsOpen(false)}
            >
              {content.common.callButton}
            </Link>
            <Link
              className="button button-secondary button-large"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              {content.common.whatsappButton}
            </Link>
          </div>

          <div className="contact-modal-summary">
            <div className="contact-modal-summary-item">
              <span className="contact-label">Telefon</span>
              <span className="contact-copy strong-copy">{siteConfig.defaultPhone}</span>
            </div>
            <div className="contact-modal-summary-item">
              <span className="contact-label">Obszar działania</span>
              <span className="contact-copy">{siteConfig.serviceArea}</span>
            </div>
          </div>
        </div>
      </div>
    </ContactModalContext.Provider>
  );
}

export function ContactModalTrigger({
  children,
  className = "button button-primary",
}: ContactModalTriggerProps) {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("ContactModalTrigger must be used within ContactModalProvider.");
  }

  return (
    <button type="button" className={className} onClick={context.openModal}>
      {children}
    </button>
  );
}
