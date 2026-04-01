import Link from "next/link";

import { siteConfig } from "@/config/site";
import { content } from "@/content/pl";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="text-flow">
          <h2 className="card-title">{siteConfig.siteName}</h2>
          <p>{content.footer.note}</p>
        </div>

        <nav className="footer-nav" aria-label="Nawigacja stopki">
          {content.navigation.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">{content.footer.copyright}</div>
    </footer>
  );
}
