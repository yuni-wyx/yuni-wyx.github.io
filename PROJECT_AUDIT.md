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
