(function () {
  'use strict';
  const catalog = window.PortfolioProjects;
  const profiles = window.PortfolioProjectProfiles;
  const profile = document.body.dataset.portfolioProfile;
  const section = document.getElementById('projects');
  if (!catalog || !profiles || !profile || !section) return;
  const list = profiles[profile] || [];
  const wrap = section.querySelector('.wrap');
  if (!wrap || !list.length) return;

  // Hydrate legacy featured cards from the shared catalog without replacing their
  // carefully composed Problem/Built/Outcome markup or visual slot structure.
  const featuredIds = window.PortfolioFeaturedProfiles?.[profile] || [];
  const featuredOverrides = window.PortfolioFeaturedOverrides?.[profile] || {};
  const featuredCards = profile === 'linkedin'
    ? Array.from(section.querySelectorAll('.project-grid > .project-card'))
    : Array.from(section.querySelectorAll('.proj-layout > .proj-card, .proj-stack > .proj-card, .proj-card.proj-wide'));
  for (let i = 0; i < featuredCards.length; i++) {
    const id = featuredIds[i];
    const item = catalog[id];
    if (!item) continue;
    const card = featuredCards[i];
    const copy = featuredOverrides[id] || {};
    card.dataset.projectId = id;
    const title = card.querySelector('.proj-title, .project-title');
    const description = card.querySelector('.proj-desc, .project-desc');
    if (title) title.textContent = copy.name || item.name;
    if (description) description.textContent = copy.description || item.description;
    const actions = card.querySelector('.proj-actions, .project-links');
    if (actions) {
      for (const link of actions.querySelectorAll('a')) {
        const isGithub = /github/i.test(link.textContent);
        const nextUrl = isGithub ? item.github : item.demo;
        if (nextUrl && /^https:\/\//.test(nextUrl)) {
          link.href = nextUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      }
    }
  }

  const heading = document.createElement('h3');
  heading.textContent = 'Additional Projects';
  heading.className = 'portfolio-additional-heading';
  const grid = document.createElement('div');
  grid.className = 'portfolio-additional-grid';

  const iconPaths = {
    auraflow: ['M12 3c-2 4-6 6-6 11a6 6 0 0 0 12 0c0-5-4-7-6-11Z','M9 15c.5 2 2 3 4 3'],
    fitmatch: ['M20.4 4 16 2a4 4 0 0 1-8 0L3.6 4a2 2 0 0 0-1.3 1.5L1.7 9a1 1 0 0 0 .4 1L6 12.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7.5l3.9-2.5a1 1 0 0 0 .4-1l-.6-3.5A2 2 0 0 0 20.4 4Z'],
    'mini-game-hub': ['M7 8h10a5 5 0 0 1 4.8 3.6l.9 3.7a2.5 2.5 0 0 1-4 2.5L16 16H8l-2.7 1.8a2.5 2.5 0 0 1-4-2.5l.9-3.7A5 5 0 0 1 7 8Z','M7 11v5','M4.5 13.5h5','M16 12h.01','M19 14h.01'],
    'book-of-answers': ['M12 7c-3-2-6-2-10-1v14c4-1 7-1 10 1 3-2 6-2 10-1V6c-4-1-7-1-10 1Z','M12 7v14'],
    'stock-copilot': ['M3 18 9 12l4 3 8-9','M16 6h5v5'],
    nailai: ['M12 2v20','M2 12h20','M5 5l14 14','M19 5 5 19'],
    emotionflow: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z']
  };
  const svgNS = 'http://www.w3.org/2000/svg';
  function makeIcon(id) {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.6');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    for (const d of iconPaths[id] || iconPaths['stock-copilot']) {
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      svg.append(path);
    }
    return svg;
  }

  for (const id of list) {
    const project = catalog[id];
    if (!project) continue;
    const card = document.createElement('article');
    card.className = 'proj-card portfolio-additional-card';
    const icon = document.createElement('div');
    icon.className = 'portfolio-project-icon';
    icon.append(makeIcon(id));
    const copy = document.createElement('div');
    copy.className = 'portfolio-project-copy';
    const index = document.createElement('div');
    index.className = 'proj-index';
    index.textContent = project.category;
    const title = document.createElement('div');
    title.className = 'proj-title';
    title.textContent = project.name;
    const desc = document.createElement('div');
    desc.className = 'proj-desc';
    desc.textContent = project.description;
    const chips = document.createElement('div');
    chips.className = 'proj-chips';
    for (const tech of project.tech || []) {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = tech;
      chips.append(chip);
    }
    const actions = document.createElement('div');
    actions.className = 'proj-actions portfolio-project-actions';
    for (const [label, url] of [['View Project',project.demo],['GitHub',project.github]]) {
      if (!url || !/^https:\/\//.test(url)) continue;
      const link = document.createElement('a');
      link.className = 'proj-cta';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label;
      if (label === 'View Project') {
        link.classList.add('portfolio-demo-link');
        const arrow = document.createElement('span');
        arrow.textContent = '↗';
        arrow.setAttribute('aria-hidden','true');
        link.append(arrow);
      }
      actions.append(link);
    }
    copy.append(index,title,desc,chips);
    card.append(icon,copy);
    if (actions.childElementCount) card.append(actions);
    grid.append(card);
  }
  if (grid.childElementCount) wrap.append(heading,grid);
})();
