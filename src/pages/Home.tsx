import { buyProps, money, site } from "../site";

const features = [
  ["Paste and file", "Save a link with ⌘V, or hold ⌘ and double-tap Shift from another app."],
  ["Folders that nest", "Keep work, research, and YouTube trails in alphabetical folders with nested counts."],
  ["Previews that stay", "Titles, descriptions, images, and playable video sit next to the URL."],
  ["Local first", "Your library lives on the Mac. iCloud sync is optional and off by default."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{site.motto}</p>
          <h1>A link library that behaves like a Mac app.</h1>
          <p className="lede">
            StowLink keeps the pages you mean to return to in one native window: sidebar folders,
            fetched previews, and a menu bar that still saves a link after you close the library.
          </p>
          <div className="actions">
            <a className="button primary" {...buyProps}>
              Buy {site.name} · {money()}
            </a>
            <a className="button" href="/download">
              Download for macOS
            </a>
          </div>
          <p className="fine">One-time {money()}. One Mac. macOS 14 or later.</p>
        </div>
        <div className="app-frame" aria-hidden="true">
          <div className="app-chrome">
            <span />
            <span />
            <span />
            <strong>{site.name}</strong>
          </div>
          <div className="app-body">
            <aside>
              <div className="row active">Folders</div>
              <div className="row">Work</div>
              <div className="row indent">Specs</div>
              <div className="row">YouTube</div>
              <div className="row indent">Kids</div>
            </aside>
            <section>
              <article>
                <b>SwiftUI navigation</b>
                <span>developer.apple.com</span>
              </article>
              <article>
                <b>WWDC session notes</b>
                <span>developer.apple.com</span>
              </article>
              <article>
                <b>Folder cards with counts</b>
                <span>stowlink.app</span>
              </article>
            </section>
          </div>
        </div>
      </section>

      <section className="grid">
        {features.map(([title, copy]) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </>
  );
}
