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
  heading.style.cssText = 'font-size:clamp(24px,3vw,34px);margin:48px 0 22px;color:var(--text,#e8ecf5)';
  const grid = document.createElement('div');
  grid.className = 'portfolio-additional-grid';
  grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px';

  for (const id of list) {
    const project = catalog[id];
    if (!project) continue;
    const card = document.createElement('article');
    card.className = 'proj-card';
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
    actions.className = 'proj-actions';
    for (const [label, url] of [['View Project',project.demo],['GitHub',project.github]]) {
      if (!url || !/^https:\/\//.test(url)) continue;
      const link = document.createElement('a');
      link.className = 'proj-cta';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label;
      actions.append(link);
    }
    card.append(index,title,desc,chips);
    if (actions.childElementCount) card.append(actions);
    grid.append(card);
  }
  if (grid.childElementCount) wrap.append(heading,grid);
})();
