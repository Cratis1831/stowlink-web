import {
  ArrowRight,
  Check,
  CirclePlay,
  FolderTree,
  Keyboard,
  Link2,
  Pause,
  Play,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { site } from "../site";

const features = [
  {
    icon: Keyboard,
    title: "Save from anywhere",
    copy: "Use a global shortcut without opening the app.",
  },
  {
    icon: FolderTree,
    title: "Organize with nested folders",
    copy: "Drag links into folders and subfolders.",
  },
  {
    icon: CirclePlay,
    title: "Rich previews and video",
    copy: "See titles, descriptions, images, and playable videos.",
  },
  {
    icon: Search,
    title: "Search your entire library",
    copy: "Find links by folder, title, URL, or domain.",
  },
];

const details = [
  "Native macOS app",
  "One-time purchase",
  "No account required",
  "One license for one Mac",
];

export default function Home() {
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  return (
    <div className="home-page">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Badge variant="outline" className="hero-badge">
            <Link2 aria-hidden="true" />
            Built for macOS 14+
          </Badge>
          <h1 id="hero-title">{site.motto}</h1>
          <p className="hero-lede">
            Save, organize, and find every link in one native Mac app.
          </p>
          <div className="hero-actions">
            <Link
              to="/pricing"
              className={buttonVariants({ size: "lg", className: "cta-button" })}
            >
              Get StowLink
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
            <Link
              to="/download"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "cta-button secondary-cta",
              })}
            >
              Download for macOS
            </Link>
          </div>
          <ul className="hero-details" aria-label="Purchase details">
            {details.map((detail) => (
              <li key={detail}>
                <Check aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
        </div>

      </section>

      <section className="demo-section" aria-labelledby="demo-title">
        <div className="demo-copy">
          <p className="section-kicker">Quick demo</p>
          <h2 id="demo-title">See StowLink in action.</h2>
          <p>
            Save a link, file it, and open its preview.
          </p>
          <span className="demo-duration">Full workflow in under two minutes</span>
        </div>
        <div
          className={`video-frame${isDemoPlaying ? " is-playing" : ""}`}
          aria-label="StowLink product demo preview"
        >
          <img
            src="/stowlink-library.webp"
            alt="Preview frame for the StowLink product walkthrough"
            width="3022"
            height="2080"
            loading="lazy"
            onAnimationEnd={() => setIsDemoPlaying(false)}
          />
          <button
            type="button"
            className="play-button"
            aria-label={isDemoPlaying ? "Pause StowLink product demo" : "Play StowLink product demo"}
            onClick={() => setIsDemoPlaying((playing) => !playing)}
          >
            {isDemoPlaying ? (
              <Pause aria-hidden="true" fill="currentColor" />
            ) : (
              <Play aria-hidden="true" fill="currentColor" />
            )}
          </button>
          <span className="video-progress" aria-hidden="true" />
          <div className="video-label">
            <span>{isDemoPlaying ? "Playing preview" : "Product demo"}</span>
            <span>00:18</span>
          </div>
        </div>
      </section>

      <section className="shortcut-section" aria-labelledby="shortcut-title">
        <div className="shortcut-heading">
          <p className="section-kicker">Quick capture</p>
          <h2 id="shortcut-title">Save a link in seconds.</h2>
          <p>Copy the URL, then use the shortcut that fits your workflow.</p>
        </div>
        <div className="shortcut-grid">
          <div className="shortcut-card">
            <div className="shortcut-copy">
              <span className="shortcut-label">StowLink is open</span>
              <strong>Save from your clipboard</strong>
            </div>
            <KbdGroup className="key-combination" aria-label="Command V">
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">⌘</Kbd>
              <span aria-hidden="true">+</span>
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">V</Kbd>
            </KbdGroup>
          </div>
          <div className="shortcut-card">
            <div className="shortcut-copy">
              <span className="shortcut-label">Window is closed</span>
              <strong>Save without opening StowLink</strong>
            </div>
            <KbdGroup
              className="key-combination"
              aria-label="Hold Command and double tap Shift"
            >
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">⌘</Kbd>
              <span aria-hidden="true">+</span>
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">⇧</Kbd>
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">⇧</Kbd>
            </KbdGroup>
          </div>
        </div>
        <p className="shortcut-note">Hold Command and double-tap Shift.</p>
      </section>

      <section id="features" className="feature-section" aria-labelledby="features-title">
        <div className="section-heading feature-heading">
          <div>
            <p className="section-kicker">The essentials</p>
            <h2 id="features-title">Save it once. Find it fast.</h2>
          </div>
          <p>Everything needed to keep links useful.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="feature-card">
              <CardHeader>
                <span className="feature-icon">
                  <Icon aria-hidden="true" />
                </span>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{copy}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="product-stage" aria-labelledby="product-title">
        <div className="section-heading product-heading">
          <div>
            <p className="section-kicker">Your library</p>
            <h2 id="product-title">Made to feel at home on your Mac.</h2>
          </div>
          <p>
            Folders, previews, and notes in one clear view.
          </p>
        </div>
        <figure className="screenshot-shell">
          <div className="screenshot-topbar" aria-hidden="true">
            <span>StowLink</span>
            <span>Library view</span>
          </div>
          <img
            src="/stowlink-library.webp"
            alt="StowLink showing nested folders, saved links, a website preview, organization details, and notes"
            width="3022"
            height="2080"
            fetchPriority="high"
          />
          <figcaption>
            Your complete StowLink library.
          </figcaption>
        </figure>
      </section>

    </div>
  );
}
