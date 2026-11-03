# Yuni Wu — Portfolio & Developer Portfolio Template

This repository contains the personal portfolio site and a separate, reusable open-source template.

## Personal portfolio

https://yuni-wyx.github.io

The existing role-specific pages and personal assets are preserved in the repository root and `portfolio/`.

### Shared project catalog (incremental integration)

The five root portfolio pages load `data/projects.js`, `data/profiles.js`, and
`js/portfolio-projects.js`. The shared catalog contains project descriptions,
technologies, and verified public links; the profile file selects additional
projects for each role. Existing featured project cards remain in their original
HTML for visual and content compatibility, pending a separate migration.

To add a project, create a unique ID in `data/projects.js`, then add that ID to
the appropriate role arrays in `data/profiles.js`. Missing demo/GitHub URLs are
intentionally omitted from rendered buttons. Do not link private repositories.
The Additional Projects rows use `css/portfolio-projects.css` for responsive
layout, matching outline icons, hover interaction, and reduced-motion support.

Preview locally with a static server, such as `python3 -m http.server 8000`,
then open each role page (`ai-swe.html`, `data.html`, `mle.html`,
`robotics.html`, and `linkedin_portfolio.html`). No build process is required.

## Developer Portfolio Template

The framework-free template is in [`template/`](./template/). It is designed for Software, AI, ML, and Data Engineers who want a responsive GitHub Pages portfolio without React, npm, or a build step.

- Edit one file: [`template/config.js`](./template/config.js)
- Preview three themes: Midnight, Aurora, and Paper
- Optional fields and links hide automatically
- Includes setup and GitHub Pages instructions

For the cleanest public release, copy the contents of `template/` into a new GitHub repository and enable GitHub Pages.
