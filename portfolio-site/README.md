# Your portfolio site: a guide to the files

Keep ALL of these together in one folder. The pages load their styling,
scripts, and textures from the other files.

## What each file does

| File | What it is | Edit it when you want to... |
|------|-----------|-----------------------------|
| `index.html` | The main page: all the words and the order of sections | change text, add a job, add a project, add a skill |
| `style.css` | The look: colors, fonts, sizes, stone textures, animations | change a color, a font size, spacing |
| `site.js` | Small behaviors: phone menu, slide-in animation, footer year | rarely (maybe to change animation timing) |
| `textures/` | Eight small picture files that draw the stone | almost never (each file explains itself) |
| `case-study-template.html` | A blank project write-up to copy | start a new case study |
| `cement-boat.html` | A draft case study with your boat details | finish the boat write-up |
| `photos/` | Your pictures. File names are listed in `photos/README.txt` | add photos |
| `resume.pdf` | Export your resume as a PDF and save it here with this name | (add it so the download buttons work) |

## How to read the code

Every file starts with a comment block (text between `<!--` and `-->` in
HTML, or between `/*` and `*/` in CSS and JavaScript). Those blocks explain
the file, and there are comments before every section. Comments never show
on the page. They are only notes for you.

## Where to change common things

| I want to change... | Go to | Look for |
|---|---|---|
| The headline | `index.html` | `<h1>` (search for "I build systems") |
| The intro paragraph | `index.html` | `hero-intro` |
| My contact links | `index.html` | `contact-links` |
| The red accent color | `style.css` | `--color-accent` (top of the file) |
| The stone colors | `style.css` | `--color-wall`, `--color-stone-panel`, `--color-dark-stone` |
| The fonts | `style.css` and the `<link>` in `<head>` | `--font-headings`, `--font-labels`, `--font-body` |
| How wide the page is | `style.css` | `--page-max-width` |
| How fast things slide in | `style.css` | section 18, the `animation:` lines |
| Add a job | `index.html` | copy a whole `timeline-item` block |
| Add a project | `index.html` | copy a whole `project-row` block |
| Add a skill | `index.html` | copy one `<span class="tag">...</span>` |
| Add a photo | the `photos/` folder | use the exact file name shown in the frame |

## Naming guide (what the class names mean)

| Name in the HTML | What it is |
|---|---|
| `container` | keeps content centered and not too wide |
| `slide-in` | a section that slides in when you scroll to it |
| `section-label` | the small dark tag above a section title |
| `section-divider` | the row of round holes between sections |
| `leadership-card` | the big ASME card |
| `role-path`, `role` | the President / VP / member boxes |
| `stat-plate` | a dark plate with a big number |
| `info-grid`, `info-block` | a grid of small stone blocks with a title and list |
| `step-list` | numbered steps with arrows |
| `timeline`, `timeline-item` | the experience timeline and one job in it |
| `facts-table`, `facts-row` | the Degree / Minor / GPA table |
| `skill-grid`, `skill-group` | the technical skills boxes |
| `project-list`, `project-row` | the projects list and one project in it |
| `activity-card` | the orchestra card |
| `photo-slot` | a picture frame |
| `tag`, `tag-row` | small outlined keyword chips |
| `date-label` | small red dates |
| `org-line` | the small line under a heading (employer, school) |

## Editing and previewing

1. Install VS Code (free) and open this folder in it.
2. Install the "Live Server" extension, right-click `index.html`, and choose
   "Open with Live Server". The browser refreshes each time you save.
   (Without it: double-click `index.html`, edit, save, refresh the browser.)
3. Press Ctrl+F (Cmd+F on Mac) to find text.
4. Only change words between tags, and keep a backup copy of the folder.
5. Right-click the page and choose "Inspect" to try CSS changes live; copy the
   ones you like into `style.css`.

## Adding a case study

1. Copy `case-study-template.html` and rename it (for example `my-project.html`).
2. Replace each highlighted `[Add: ...]` prompt. Search for `class="todo"`.
3. Delete the dashed banner and the `noindex` line near the top when finished.
4. Link it from a `project-row` in `index.html`:
   `<a href="my-project.html">Case study →</a>`

## Publishing

Upload the whole folder to your host (Netlify, Cloudflare Pages, or GitHub
Pages). Upload it again after each change.
