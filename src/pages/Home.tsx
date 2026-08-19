import {
  ArrowRight,
  Check,
  CirclePlay,
  FolderTree,
  Keyboard,
  Link2,
  Play,
  Search,
} from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogList from "@/components/blog/BlogList";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { getLatestPosts } from "@/lib/blog";
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
  "One license for two Macs",
];

const screenshots: {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
  copy: ReactNode;
}[] = [
  {
    src: "/stowlink-folders.webp",
    srcSet:
      "/stowlink-folders-640.webp 640w, /stowlink-folders-720.webp 720w, /stowlink-folders-960.webp 960w, /stowlink-folders.webp 1920w",
    alt: "StowLink showing a SwiftUI folder, a saved Apple Developer link, a page preview, and notes",
    title: "Library, preview, and notes.",
    copy: "Open a folder, pick a saved page, and keep the preview and notes beside it.",
  },
  {
    src: "/stowlink-detail.webp",
    srcSet:
      "/stowlink-detail-640.webp 640w, /stowlink-detail-720.webp 720w, /stowlink-detail-960.webp 960w, /stowlink-detail.webp 1920w",
    alt: "StowLink search for swift, with matching pages and videos in the library",
    title: "Find it without digging.",
    copy: "Search by title, URL, or domain and jump to matching pages and videos.",
  },
  {
    src: "/stowlink-search.webp",
    srcSet:
      "/stowlink-search-640.webp 640w, /stowlink-search-720.webp 720w, /stowlink-search-960.webp 960w, /stowlink-search.webp 1920w",
    alt: "StowLink Spotlight Search overlay with recent links, folders, and keyboard shortcuts",
    title: "Spotlight Search from the keyboard.",
    copy: (
      <>
        Press{" "}
        <KbdGroup className="key-combination" aria-label="Command K">
          <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">
            ⌘
          </Kbd>
          <span aria-hidden="true">+</span>
          <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">
            K
          </Kbd>
        </KbdGroup>{" "}
        to jump to recent links, folders, and settings.
      </>
    ),
  },
];

export default function Home() {
  const demoVideoRef = useRef<HTMLVideoElement>(null);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const latestPosts = getLatestPosts(3);

  function playDemo() {
    const video = demoVideoRef.current;
    if (!video) {
      return;
    }
    void video.play();
  }

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
          <p>Save a link, file it, and open its preview.</p>
          <span className="demo-duration">Full workflow in under two minutes</span>
        </div>
        <div
          className={`video-frame${isDemoPlaying ? " is-playing" : ""}`}
          onClick={isDemoPlaying ? undefined : playDemo}
        >
          <video
            ref={demoVideoRef}
            className="demo-video"
            poster="/stowlink-demo-poster.webp"
            preload="none"
            playsInline
            controls={isDemoPlaying}
            width={1280}
            height={894}
            aria-label="StowLink product demo"
            onPlay={() => setIsDemoPlaying(true)}
            onEnded={() => {
              setIsDemoPlaying(false);
              const video = demoVideoRef.current;
              if (video) {
                video.currentTime = 0;
              }
            }}
          >
            <source src="/stowlink-demo.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/stowlink-demo-captions.vtt"
              srcLang="en"
              label="English"
            />
            StowLink product demo
          </video>
          {isDemoPlaying ? null : (
            <>
              <button
                type="button"
                className="play-button"
                aria-label="Play StowLink product demo"
                onClick={playDemo}
              >
                <Play aria-hidden="true" fill="currentColor" />
              </button>
              <div className="video-label">
                <span>Product demo</span>
                <span>01:12</span>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="screenshot-gallery-section" aria-labelledby="screens-title">
        <div className="screenshot-gallery-heading">
          <p className="section-kicker">Inside the app</p>
          <h2 id="screens-title">A closer look.</h2>
        </div>
        <div className="screenshot-gallery">
          {screenshots.map((item) => (
            <article key={item.src} className="screenshot-feature">
              <div className="screenshot-shell">
                <div className="screenshot-topbar" aria-hidden="true">
                  <span className="screenshot-lights">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <img
                  src={item.src}
                  srcSet={item.srcSet}
                  sizes="(max-width: 900px) 92vw, 860px"
                  alt={item.alt}
                  width="1920"
                  height="1277"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="screenshot-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="shortcut-section"
        aria-labelledby="shortcut-title"
      >
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
          <div className="shortcut-card">
            <div className="shortcut-copy">
              <span className="shortcut-label">Search Spotlight</span>
              <strong>Jump to links, folders, and settings</strong>
            </div>
            <KbdGroup className="key-combination" aria-label="Command K">
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">⌘</Kbd>
              <span aria-hidden="true">+</span>
              <Kbd className="h-8 min-w-8 px-2 text-sm" aria-hidden="true">K</Kbd>
            </KbdGroup>
          </div>
          <p className="shortcut-note">Hold Command and double-tap Shift.</p>
        </div>
      </section>

      <section className="feature-section" aria-labelledby="features-title">
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

      {latestPosts.length > 0 ? (
        <section className="blog-teaser-section" aria-labelledby="blog-teaser-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">From the StowLink Blog</p>
              <h2 id="blog-teaser-title">Tips for keeping your digital life organized.</h2>
            </div>
            <p>
              <Link to="/blog" className="blog-teaser-link">
                View all posts
                <ArrowRight aria-hidden="true" />
              </Link>
            </p>
          </div>
          <BlogList posts={latestPosts} />
        </section>
      ) : null}
    </div>
  );
}
