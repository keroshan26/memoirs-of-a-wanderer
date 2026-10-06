# Memoirs of a Wanderer — The Cutting Room

The website for keroshangovender.com. A static site (plain HTML/CSS/JS),
hosted free on Cloudflare Pages.

## Repository layout

```
public/      ← THE LIVE WEBSITE. Everything in here is published.
  index.html         homepage (The Cutting Room + Nocturne gallery)
  assets/            shared stylesheet (read.css) + scripts (protect.js)
  images/            photos (watermarked) + social share card
  reviews/           one .html file per game review
  articles/          one .html file per article / photo-essay
  robots.txt         lets search engines crawl; points to the sitemap
  sitemap.xml        list of pages for Google

templates/   ← NOT PUBLISHED. Lives on GitHub only, hidden from visitors.
  REVIEW_TEMPLATE.html    starting point for a new game review
  ARTICLE_TEMPLATE.html   starting point for a new article
  HOW-TO-POST.md          plain-English guide for posting
```

## Important: Cloudflare Pages setting

The **build output directory must be set to `public`**. That is what keeps
the `templates/` folder on GitHub but off the live website. Framework preset:
None. Build command: leave blank.

## How to post

See `templates/HOW-TO-POST.md`. Short version: copy a template, create a new
file in `public/reviews/` or `public/articles/`, edit the `✏️ EDIT` parts,
commit. The site rebuilds automatically.
