import Link from "next/link";

import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";
import { phoneHref } from "@/lib/contact";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">{content.header.announcement}</div>
      </div>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={siteConfig.siteName}>
          <span className="brand-mark" aria-hidden="true">
            WM
          </span>
          <span className="brand-text">
            <span className="brand-name">{siteConfig.brandName}</span>
            <span className="brand-subtitle">{content.header.brandSubtitle}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Nawigacja główna">
          {content.navigation.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-primary" href={phoneHref}>
            {content.header.ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
