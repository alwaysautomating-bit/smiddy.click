# Blue Dot Technology — implementation

Static HTML/CSS built from the Claude Design export. Nothing to build or install: open the files directly or serve the folder with any static host.

```
site/                      Marketing site
  index.html               Landing page   (from "Landing Page.dc.html")
  founder.html             Founder Journey (from "Founder Journey.dc.html")
  css/site.css             Shared tokens and components
  js/site.js               Scroll reveal for "01 / What we do"
  images/                  Photos (see below)

templates/                 Printable document templates, US Letter
  article.html             1 page   — the editorial formula, with an "Under the hood" disclosure
  case-study.html          5 pages  — cover, challenge, approach, results, takeaways
  engineering-data-model.html  10 pages — cover, text, diagrams, flow chart, tables, appendix
  skill-file.html          1 page   — skill card
  css/doc.css              Shared page box, type, tables, flow chart
  js/fit.js                Shrinks page cards to fit on narrow screens (screen only)
```

## Photos

The design has three empty photo spots. Each one shows a styled placeholder until you add the file:

| Spot | File |
|---|---|
| Landing hero (DFW skyline) | `site/images/skyline.jpg` |
| Landing band (editorial / architecture) | `site/images/editorial.jpg` |
| Founder Journey (founder photo) | `site/images/founder.jpg` |

Grayscale is applied automatically. The skyline also gets extra contrast and a blue multiply overlay. Use photos at least 2000px wide.

## Templates

Open a template in a browser and print it, or save it as PDF, with margins set to **None** and **Background graphics** turned on. Each `<section class="page">` prints as exactly one sheet, and anything that runs past the page is cut off, so keep copy within each page. Replace the `[bracketed]` placeholders with real content. To fill a figure placeholder (`.figure__box`), swap its inner `<p>` for an `<img>` or inline `<svg>`.

## Open items

- **GET IN TOUCH** buttons point at `#contact` and are marked `TODO`. They need a real destination, such as a `mailto:` address or a booking link.
- The nav **WORK** link and **WORK WITH US** scroll within the landing page, because the design has no separate Work page. **ABOUT** goes to the Founder Journey.
