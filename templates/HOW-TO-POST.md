# How to post a review or article — The Cutting Room

Hey Keroshan 👋 — this is everything you need to put a new game review or
article live on the site. No coding knowledge needed. You only ever type in
the browser on GitHub; the site updates itself about a minute after you save.

Two kinds of posts, two templates:
- **Game review** → use `templates/REVIEW_TEMPLATE.html`
- **News / opinion / photo-essay** → use `templates/ARTICLE_TEMPLATE.html`

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
- **Photos are protected:** the gallery images are watermarked and right-click
  is disabled, so you don't need to do anything extra when adding images.

Any question, ask Kayla — or just try it; the worst case is you delete the
file and start again.
