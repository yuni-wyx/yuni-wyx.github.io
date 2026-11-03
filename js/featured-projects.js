(function () {
  'use strict';
  const section = document.getElementById('projects');
  const role = document.body.dataset.portfolioProfile;
  const projects = window.PortfolioProjects;
  const content = window.PortfolioFeaturedContent;
  const order = window.PortfolioFeaturedProfiles?.[role];
  if (!section || !role || !projects || !content || !order) return;

  function node(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function links(project, isLinkedIn) {
    const actions = node('div', isLinkedIn ? 'project-links' : 'proj-actions');
    for (const [label, url] of [['View Demo', project.demo], ['GitHub', project.github]]) {
      if (!url || !/^https:\/\//.test(url)) continue;
      const a = node('a', isLinkedIn ? 'btn btn-outline' : 'proj-cta', label);
      a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      actions.append(a);
    }
    return actions;
  }
  function chips(project) {
    const wrap = node('div', 'proj-chips');
    for (const skill of project.tech || []) wrap.append(node('span', 'chip', skill));
    return wrap;
  }
  function brief(info) {
    const wrap = node('div', 'proj-brief');
    for (const [label, value] of [['Problem',info.problem],['Built',info.built],['Outcome',info.outcome]]) {
      const row = node('div', 'proj-brief-row');
      row.append(node('div','proj-brief-label',label),node('div','proj-brief-text',value));
      wrap.append(row);
    }
    return wrap;
  }
  function stats(info) {
    const wrap = node('div', 'proj-stats');
    for (const [value, label] of info.stats || []) {
      const stat = node('div','pstat');
      stat.append(node('span','pstat-n',value),node('span','pstat-l',label));
      wrap.append(stat);
    }
    return wrap;
  }
  function go1Visual() {
    // Preserve the original CSS-based quadruped silhouette in the new renderer.
    // This uses the same classes and layer order as the original Robotics card.
    const visual=node('div','go1-visual');
    visual.setAttribute('aria-hidden','true');
    visual.append(node('div','go1-grid'),node('div','go1-orbit'));
    const bot=node('div','go1-bot');
    for (const cls of ['go1-node n1','go1-node n2','go1-node n3',
      'go1-back','go1-body','go1-neck','go1-head',
      'go1-joint j1','go1-joint j2','go1-joint j3','go1-joint j4',
      'go1-leg l1','go1-leg l2','go1-leg l3','go1-leg l4']) bot.append(node('div',cls));
    visual.append(bot,node('div','go1-caption','unitree go1 silhouette'));
    return visual;
  }
  function renderRoleCard(card, project, info, index, slot, id) {
    const body = node('div',slot === 'primary' ? 'proj-feature-copy' : '');
    const heading = node('div','proj-index');
    heading.append(node('span','mono-xs',`${String(index + 1).padStart(2,'0')} / ${project.category.toUpperCase()}`));
    body.append(heading,node('div','proj-domain',(project.tech || []).slice(0,3).join(' • ')),
      node('div','proj-title',project.name),node('div','proj-desc',project.description));
    if (slot === 'primary') body.append(brief(info),stats(info));
    else if (slot === 'stack') body.append(node('div','proj-brief',info.outcome));
    body.append(chips(project));
    if (id === 'go1' && slot === 'primary') body.append(go1Visual());
    const actions=links(project,false);
    if (actions.childElementCount) body.append(actions);
    if (slot === 'primary') {
      const grid=node('div','proj-feature-grid');
      grid.append(body);
      card.replaceChildren(grid);
    } else if (slot === 'wide') {
      const grid=node('div','proj-wide-grid');grid.append(body);card.replaceChildren(grid);
    } else card.replaceChildren(...Array.from(body.childNodes));
  }
  function renderLinkedInCard(card, project, info) {
    const top=node('div','project-top');
    top.append(node('span','project-kicker',(project.tech || []).slice(0,3).join(' · ')));
    const bullets=node('ul','clean');
    for(const value of [info.built,info.outcome]) bullets.append(node('li','',value));
    card.replaceChildren(top,node('h3','project-title',project.name),
      node('p','project-desc',project.description),bullets,links(project,true));
  }
  const linkedIn = role === 'linkedin';
  const cards = linkedIn
    ? Array.from(section.querySelectorAll('.project-grid > .project-card'))
    : Array.from(section.querySelectorAll('.proj-layout > .proj-card, .proj-stack > .proj-card, .proj-card.proj-wide'));
  if (cards.length !== order.length || !order.every(id => projects[id] && content[id])) return;
  order.forEach((id,i) => {
    const card=cards[i],project=projects[id],info=content[id];
    card.dataset.projectId=id;
    if (linkedIn) renderLinkedInCard(card,project,info);
    else renderRoleCard(card,project,info,i,i===0?'primary':i===3?'wide':'stack',id);
  });
  if (!linkedIn) {
    const heroEntries = Array.from(document.querySelectorAll('.hero-entry-grid .hero-entry'));
    if (heroEntries.length === order.length) {
      order.forEach((id,i) => {
        const entry=heroEntries[i],project=projects[id];
        const name=entry.querySelector('.hero-entry-name');
        const copy=entry.querySelector('.hero-entry-copy');
        const kicker=entry.querySelector('.hero-entry-kicker');
        if(name) name.textContent=project.name;
        if(copy) copy.textContent=project.description.length>110 ? project.description.slice(0,107).trimEnd()+'…' : project.description;
        if(kicker) kicker.textContent=project.category;
        entry.href=project.demo || '#projects';
        if(project.demo){entry.target='_blank';entry.rel='noopener noreferrer';}
        else {entry.removeAttribute('target');entry.removeAttribute('rel');}
      });
    }
  }
})();
