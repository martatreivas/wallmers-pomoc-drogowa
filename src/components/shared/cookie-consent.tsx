"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { content } from "@/content/site-content";

const STORAGE_KEY = "wallmers-cookie-consent";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

type ConsentValue = "accepted" | "necessary";

type StoredConsent = {
  value: ConsentValue;
  expiresAt: number;
};

function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(rawValue) as StoredConsent;

    if (parsedValue.expiresAt <= Date.now()) {
      window.sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    window.sessionStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function saveConsent(value: ConsentValue) {
  const nextValue: StoredConsent = {
    value,
    expiresAt: Date.now() + ONE_DAY_MS,
  };

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextValue));
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = readConsent();
    setIsVisible(!storedConsent);
  }, []);

  const handleChoice = (value: ConsentValue) => {
    saveConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-live="polite" aria-label={content.common.cookieTitle}>
      <div className="cookie-banner-inner">
        <div className="cookie-banner-copy">
          <p className="cookie-banner-kicker">Cookies</p>
          <h2 className="cookie-banner-title">{content.common.cookieTitle}</h2>
          <p className="cookie-banner-description">{content.common.cookieDescription}</p>
          <Link className="cookie-banner-link" href="/polityka-prywatnosci">
            {content.common.cookieLinkLabel}
          </Link>
        </div>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={() => handleChoice("necessary")}
          >
            {content.common.cookieNecessary}
          </button>
          <button
            type="button"
            className="button button-primary"
            onClick={() => handleChoice("accepted")}
          >
            {content.common.cookieAccept}
          </button>
        </div>
      </div>
    </aside>
  );
}
