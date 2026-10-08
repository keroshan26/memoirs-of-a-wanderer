# How to post a review, article or gallery photo — The Cutting Room

Hey Keroshan 👋 — this is everything you need to put a new game review or
article live on the site. No coding knowledge needed. You only ever type in
the browser on GitHub; the site updates itself about a minute after you save.

Three kinds of posts:
- **Game review** → use `templates/REVIEW_TEMPLATE.html`
- **News / opinion / photo-essay** → use `templates/ARTICLE_TEMPLATE.html`
- **Gallery photo (Nocturne)** → use the photo-prep page — see *Posting a photo to the gallery* below

The templates live in the `templates/` folder. They are **not** on the live
website — viewers can never see them. They're just your starting points.

---

## Posting, step by step

**1. Copy the template.**
On GitHub, open `templates/REVIEW_TEMPLATE.html` (for a game) or
`templates/ARTICLE_TEMPLATE.html` (for an article). Click the **copy icon**
(top-right of the file view) to copy the whole thing.

**2. Make the new page.**
- For a review: open the `public/reviews/` folder.
- For an article: open the `public/articles/` folder.

Click **Add file → Create new file**. Name it in lowercase with dashes and
end it in `.html`, e.g. `hollow-knight-silksong.html`. The name becomes the
web address, so keep it clean: it'll live at
`keroshangovender.com/reviews/hollow-knight-silksong.html`.

**3. Paste and write.**
Paste the template into the empty file. Now change only the parts marked
`✏️ EDIT`. Everything else (the design, the fonts, the layout) looks after
itself — don't touch it.

Inside the article body:
- Each paragraph goes between `<p>` and `</p>`.
- A section heading is `<h2 class="serif">Your heading</h2>`.
- A pull-quote (reviews) is `<blockquote>Your line.</blockquote>`.
- To tint a word blue in the title, wrap it: `the <em>Elden Lord</em>`.

**4. Save it.**
Scroll down, click **Commit new file**. That's it — the site rebuilds on its
own and your page is live in about a minute.

**5. Two tiny finishing touches** (so people can find the post):

- **Add it to the sitemap** (helps Google find it). Open
  `public/sitemap.xml`, copy one of the `<url>…</url>` lines, paste it, and
  change the address to your new page. Commit.

- **Link it on the homepage.** Open `public/index.html`:
  - Reviews → find the `CRITIC RANTS` section.
  - Articles → find the `CLIPPED DISPATCHES` section.
  Copy one existing card block, paste it as a new one, and change the title,
  text, and the link (`href="…"`) to point at your new page. Commit.

Done. Refresh the site after a minute and it's there.

---

## Posting a photo to the gallery (Nocturne)

Photos are a separate job from reviews and articles, because a photo straight
off a phone or camera is far too big for the web (often 5–10 MB). Every
gallery photo needs to be **shrunk, watermarked and compressed** first. There's
a page that does all of that for you.

**1. Prep the photo.** Open **keroshangovender.com/tools/photo-prep.html**
(bookmark it — it isn't linked anywhere on the site and Google won't list it).

- Tap the box and choose your photo. Wide (landscape) shots look best.
- It shrinks the photo to 1600px, adds the small *© keroshangovender.com*
  watermark in the corner, compresses it to around 150–300 KB, and strips the
  hidden location data from the file. The photo never leaves your device.
- Fill in the boxes: a **file name** (lowercase-with-dashes, e.g.
  `harbour-at-dusk`), the **plate** (the next number — the gallery is on
  Plate IV, so the next is `Plate V — Harbour`), the **title** (the blue italic
  part goes in its own box), and a short **caption**.
- **Caption side:** photos alternate left/right down the page. Pick the
  opposite side to the photo above yours. (Plate IV is on the right, so the
  next one goes on the left.)
- Tap **Download photo**, then **Copy code**. Keep the page open.

**2. Upload the photo.** On GitHub, open `public/images/` → **Add file →
Upload files** → drop in the downloaded photo → **Commit changes**.

**3. Add it to the gallery.** Open `public/index.html`, click the pencil to
edit, and search the page (Ctrl+F / Cmd+F) for:

    <!-- END OF GALLERY PHOTOS -->

Click on the empty line just **above** it and paste the code you copied.
Commit.

**4. (Optional) Update the intro line.** The gallery intro says *"Four
photographs from the North Coast…"*. Search `index.html` for
`photographs from` and change the number.

Done — about a minute later the photo is live in the gallery.

> **Doing it by hand instead?** `templates/GALLERY_PHOTO_TEMPLATE.html` has the
> same block with the ✏️ EDIT parts marked. You'd still need to resize and
> watermark the photo yourself, so the prep page is much easier.

> **iPhone photos:** if the prep page says it can't open the file, it's an
> iPhone HEIC photo. Open the prep page in Safari on the iPhone itself (it
> converts automatically), or set Settings → Camera → Formats → *Most
> Compatible*.

---

## A few rules of thumb

- **Filenames:** lowercase, dashes-not-spaces, always `.html`. No capitals,
  no apostrophes, no spaces. Good: `the-blood-of-dawnwalker.html`.
- **Titles for Google:** name reviews the way people search — e.g.
  "Silksong review — is it worth it?" pulls far more traffic than "My
  thoughts." Fill in the `<title>` and `description` at the top of the file.
- **Cover image (optional):** to add one, upload a picture into
  `public/images/` first, then point the `<figure class="cover">` at it. No
  image? Just delete that whole `<figure>` block.
- **Made a mess?** Nothing you do here can break the live site permanently —
  every save is a separate version on GitHub, and a bad page can be deleted
  or rolled back. Don't be afraid to experiment.
- **Photos are protected:** right-click is disabled on the site, and every
  gallery photo carries the watermark — as long as you run it through the
  photo-prep page first. Don't upload photos straight off your phone.

Any question, ask Kayla — or just try it; the worst case is you delete the
file and start again.
