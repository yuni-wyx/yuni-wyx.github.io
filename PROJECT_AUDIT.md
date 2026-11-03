# Project audit

## Current architecture

- The repository is a static GitHub Pages site with no package manager, build step, or runtime dependencies.
- The root contains several role-specific portfolio pages: `ai-swe.html`, `data.html`, `mle.html`, `robotics.html`, and `linkedin_portfolio.html`.
- The older portfolio is kept under `portfolio/` with separate CSS and JavaScript files, plus a backup under `backup/`.
- The newer role pages keep most CSS and JavaScript inline. They share a dark visual system, responsive breakpoints around 960px and 640px, animated reveal states, a mobile navigation menu, and a custom cursor on fine pointers.
- Personal content, project data, social links, and resume paths are hardcoded in each page. Existing resumes and images live in `files/`, `general_resumes/`, `img/`, and `portfolio/`.

## Preserve

The existing personal portfolio pages, role-specific writing, resume files, project links, visual direction, responsive behavior, and backup files remain untouched. Existing uncommitted edits were also preserved.

## Refactor

The reusable open-source version belongs in `template/` instead of sharing files with the personal site. It uses an external `config.js`, a single semantic HTML shell, shared `styles.css`, and a small `script.js` renderer. This avoids exposing personal information in the public example and avoids forcing users to edit multiple HTML documents.

## Configuration-driven content

The following are now data in `template/config.js`: identity, contact links, resume path, navigation, facts, experience, projects, skills, and the default theme. Missing optional links are omitted by the renderer.

## Risks and decisions

- GitHub Pages serves static files, so relative paths are used and there is no server-side form handling.
- The sample resume is optional and intentionally not copied from the personal portfolio.
- Theme selection is stored in `localStorage`; the configured default is used when a visitor has no saved preference.
- A user can publish the `template/` folder from this repository, but copying its contents to a dedicated repository gives the cleanest GitHub template experience.

## Proposed final architecture

```text
personal portfolio (preserved)
├── ai-swe.html / data.html / mle.html / robotics.html
├── linkedin_portfolio.html
├── portfolio/
└── resumes and personal assets

open-source template/
└── template/
    ├── index.html
    ├── config.js
    ├── script.js
    ├── styles.css
    ├── README.md
    ├── LICENSE
    └── .nojekyll
```
# Portfolio shared-data integration (local working copy, 2026-11-03)

## Content accuracy pass (Phase 1/2, local only)

- Standardized website availability wording to **Open to Relocation** and retained **GPA 3.76/4.0** on role pages. This does not change historical/current residency records.
- Replaced unsubstantiated EmotionFlow percentage claims with the reviewed observation of **57 feedback signals** and **61.4% positive feedback**.
- Separated **MyEdMaster** classifier-training metrics from **NailAI** cloud inference messaging in role-specific cards and LinkedIn project content.
- Strengthened Stock Copilot, AuraFlow, FITMATCH, and NailAI project summaries with concrete engineering action verbs and implementation detail, without inventing impact percentages.
- Updated misleading MLE and Data hero/project labels that had attributed model evaluation metrics to NailAI.
- **Outstanding:** linked PDF resumes remain unchanged because no editable source was supplied. They contain older location wording, and some contain superseded EmotionFlow metrics; regenerate from canonical editable resume sources before publishing.
- **Outstanding:** verify original evaluation artifacts for historical MyEdMaster 0.92 F1, Go1 97K+ sample count, Shopee percentage deltas, and NailAI 200-user/p95 claims before presenting them as independently reproduced performance results.
- The website is still intentionally configured with noindex role pages and no root index page; SEO/entry-point changes are outside Phase 1/2.

- Follow-up: added user-supplied public demo links for AuraFlow, FITMATCH, Mini Game Hub, and The Book of Answers.
- Additional Projects now use full-width horizontal cards, project-specific outline icons, responsive layout, and subtle hover effects.
- Browser automation unavailable in this environment (Playwright browser binary not installed); static checks performed.

- Added a shared eight-project catalog (seven requested projects plus existing Go1).
- Added role-specific additional-project selections across five public pages.
- Existing hand-authored featured cards and public URL paths remain unchanged.
- JavaScript source files pass `node --check`.
- Private GitHub projects (AuraFlow, Mini Game Hub, oracle-book) do not receive public GitHub links. FITMATCH link is unverified and omitted.
- Remaining: migrate legacy featured-card markup into the shared renderer after visual regression testing; add actual screenshots and confirmed public demos.

