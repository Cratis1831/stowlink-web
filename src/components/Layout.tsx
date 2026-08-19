import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import Analytics from "@/components/Analytics";
import Seo from "@/components/Seo";
import { site } from "../site";

const nav = [
  ["/blog", "Blog"],
  ["/pricing", "Pricing"],
  ["/support", "Support"],
] as const;

const featuredBadges = [
  {
    href: "https://launchpanda.dev/launches/productivity/stowlink",
    src: "https://launchpanda.dev/images/badges/launchpanda-badge.svg",
    alt: "Launched on stowlink",
    width: 260,
    height: 64,
    rel: "noopener",
  },
  {
    href: "https://lemonlaunch.dev/productivity/stowlink",
    src: "https://lemonlaunch.dev/badge/lemonlaunch-badge-light.svg",
    alt: "Featured on LemonLaunch",
    width: 188,
    height: 56,
    rel: "noopener",
  },
  {
    href: "https://nicklaunches.com/products/stowlink/?utm_source=stowlink.app&utm_medium=badge&utm_campaign=featured",
    src: "https://nicklaunches.com/badges/featured.png",
    alt: "StowLink on Nick Launches",
    width: 244,
    height: 56,
    rel: "noopener",
  },
  {
    href: "https://daniellaunches.com",
    src: "https://daniellaunches.com/badge-light.svg",
    alt: "Featured on DanielLaunches",
    width: 220,
    height: 48,
  },
  {
    href: "https://tinylaunch.com",
    src: "https://tinylaunch.com/tinylaunch_badge_launching_soon.svg",
    alt: "TinyLaunch Badge",
    rel: "noopener",
  },
  {
    href: "https://www.producthunt.com/products/stowlink?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-stowlink",
    src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1227057&theme=neutral&t=1787167110308",
    alt: "StowLink - Your links, neatly stowed. | Product Hunt",
    width: 250,
    height: 54,
    rel: "noopener noreferrer",
  },
] as const;

function FeaturedBadgeLinks({ hidden = false }: { hidden?: boolean }) {
  return featuredBadges.map((badge) => (
    <a
      key={`${hidden ? "dup-" : ""}${badge.href}`}
      href={badge.href}
      target="_blank"
      rel={"rel" in badge ? badge.rel : undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <img
        src={badge.src}
        alt={hidden ? "" : badge.alt}
        width={"width" in badge ? badge.width : undefined}
        height={"height" in badge ? badge.height : undefined}
      />
    </a>
  ));
}

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
            <NavLink to="/privacy">Privacy</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/refunds">Refunds</NavLink>
            <a href={`mailto:${site.supportEmail}`}>Contact</a>
          </nav>
          <div className="footer-end">
            <div className="footer-badges" aria-label="Featured on">
              <div className="footer-badges-track">
                <div className="footer-badges-set">
                  <FeaturedBadgeLinks />
                </div>
                <div className="footer-badges-set" aria-hidden="true">
                  <FeaturedBadgeLinks hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
