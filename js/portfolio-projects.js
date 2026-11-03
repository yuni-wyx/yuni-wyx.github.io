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

  const heading = document.createElement('h3');
  heading.textContent = 'Additional Projects';
  heading.className = 'portfolio-additional-heading';
  const grid = document.createElement('div');
  grid.className = 'portfolio-additional-grid';

  const iconPaths = {
    auraflow: ['M12 3c-2 4-6 6-6 11a6 6 0 0 0 12 0c0-5-4-7-6-11Z','M9 15c.5 2 2 3 4 3'],
    fitmatch: ['M8 4 4 7 2 12l5 2 2-3v9h10v-9l2 3 2-2-2-5-5-3-2 3h-3L8 4Z'],
    'mini-game-hub': ['M6 9h12a5 5 0 0 1 4.7 4l.7 5a2 2 0 0 1-3.2 1.8L17 17H7l-3.2 2.8A2 2 0 0 1 .6 18l.7-5A5 5 0 0 1 6 9Z','M8 12v5','M5.5 14.5h5','M16 13h.01','M19 15h.01'],
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
