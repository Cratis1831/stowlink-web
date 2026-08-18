import { NavLink, Outlet } from "react-router-dom";
import { buyProps, money, site } from "../site";

const nav = [
  ["/", "Product"],
  ["/pricing", "Pricing"],
  ["/download", "Download"],
  ["/support", "Support"],
] as const;

export default function Layout() {
  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <img src="/app-icon.png" width="28" height="28" alt="" />
          <span>{site.name}</span>
        </NavLink>
        <nav>
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <a className="button primary" {...buyProps}>
          Buy {money()}
        </a>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          {site.name} is a native macOS app. Payments are handled by Lemon Squeezy as merchant of record.
        </p>
        <nav>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/refunds">Refunds</NavLink>
          <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </nav>
      </footer>
    </div>
  );
}
