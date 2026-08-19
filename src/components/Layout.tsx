import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import Analytics from "@/components/Analytics";
import Seo from "@/components/Seo";
import { site } from "../site";

const nav = [
  ["/pricing", "Pricing"],
  ["/support", "Support"],
] as const;

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="site-shell">
      <Seo />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="brand" aria-label={`${site.name} home`}>
            <img src="/app-icon-128.webp" width="34" height="34" alt="" />
            <span>{site.name}</span>
          </NavLink>
          <nav className="primary-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Product
            </NavLink>
            <a href="/#features">Features</a>
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </nav>
          <NavLink to="/pricing" className={buttonVariants({ className: "header-buy" })}>
            Get Started
            <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
          </NavLink>
        </div>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/app-icon-128.webp" width="30" height="30" alt="" />
            <div>
              <strong>{site.name}</strong>
              <span>{site.motto}</span>
            </div>
          </div>
          <nav aria-label="Legal and support links">
            <NavLink to="/download">Download</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/refunds">Refunds</NavLink>
            <a href={`mailto:${site.supportEmail}`}>Contact</a>
          </nav>
          <p>Built for macOS.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
