import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { money } from "../site";

export default function Features() {
  return (
    <section className="narrow features-page">
      <p className="eyebrow">Product</p>
      <h1>A native bookmark manager for Mac</h1>
      <p className="lede">
        StowLink is a native macOS app for saving, organizing, and finding the links you want to
        keep. It lives on your Mac, does not need a StowLink account, and uses a one-time license.
      </p>
      <div className="actions">
        <Link to="/pricing" className={buttonVariants({ size: "lg", className: "cta-button" })}>
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

      <h2>Save links from anywhere</h2>
      <p>
        Copy a URL, then save it without filling out a form. If StowLink is open, press{" "}
        <KbdGroup className="key-combination" aria-label="Command V">
          <Kbd className="h-6 min-w-6 px-1.5 text-xs" aria-hidden="true">
            ⌘
          </Kbd>
          <span aria-hidden="true">+</span>
          <Kbd className="h-6 min-w-6 px-1.5 text-xs" aria-hidden="true">
            V
          </Kbd>
        </KbdGroup>
        . If the window is closed, hold Command and double-tap Shift. The capture stays out of
        the way so you can file the link later.
      </p>

      <h2>Organize with nested folders</h2>
      <p>
        Drag links into folders and subfolders. Group by project, language, client, or whatever
        matches how you work. Browser bookmark bars get messy once a collection grows. Nested
        folders give each saved link a place.
      </p>
      <p>
        If you are already fighting a long bookmark list,{" "}
        <Link to="/blog/why-browser-bookmarks-arent-enough">
          why browser bookmarks are not enough anymore
        </Link>{" "}
        covers the same problem in more detail.
      </p>

      <h2>Find anything quickly</h2>
      <p>
        Search the whole library by title, URL, domain, or folder. You do not have to remember
        the exact name. Press{" "}
        <KbdGroup className="key-combination" aria-label="Command K">
          <Kbd className="h-6 min-w-6 px-1.5 text-xs" aria-hidden="true">
            ⌘
          </Kbd>
          <span aria-hidden="true">+</span>
          <Kbd className="h-6 min-w-6 px-1.5 text-xs" aria-hidden="true">
            K
          </Kbd>
        </KbdGroup>{" "}
        to jump to recent links, folders, and settings.
      </p>

      <h2>Rich link previews</h2>
      <p>
        Each saved page can show a title, description, image, and, when it is a video, a playable
        preview. Six months later, that context is usually more useful than a favicon and a
        truncated title.
      </p>

      <h2>Notes on saved links</h2>
      <p>
        Add a note for why you saved something, what project it belongs to, or what you still need
        to read. Notes stay with the link in your library.
      </p>

      <h2>Built for macOS</h2>
      <p>
        StowLink is a native Mac app for macOS 14 or later. Keyboard shortcuts, local performance,
        and the interface follow Mac conventions instead of wrapping a website.
      </p>

      <h2>Your library stays on your Mac</h2>
      <p>
        Links, folders, notes, and previews are stored locally by default. There is no StowLink
        account, and we do not run a separate cloud database for your library. You can turn on
        iCloud in Settings when you want the same library on your other Macs.{" "}
        <Link to="/privacy">Read the privacy policy</Link>.
      </p>

      <aside className="blog-cta">
        <h2>One purchase. Two Macs.</h2>
        <p>
          StowLink is a one-time {money()} license for up to two Macs. No subscription, and no
          StowLink account.
        </p>
        <Link to="/pricing" className={buttonVariants({ className: "cta-button" })}>
          See pricing
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Link>
      </aside>
    </section>
  );
}
