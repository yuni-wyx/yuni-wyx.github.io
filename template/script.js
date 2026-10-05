(() => {
  const c = window.portfolioConfig;
  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
  const link = value => value ? escapeHtml(value) : "";
  const textNodes = { ...c.personal, year: new Date().getFullYear() };

  document.querySelectorAll("[data-config]").forEach(node => {
    const value = textNodes[node.dataset.config];
    if (value) node.textContent = value;
  });
  document.title = `${c.personal.name} — ${c.personal.role}`;
  document.querySelectorAll("[data-link]").forEach(node => {
    const type = node.dataset.link;
    const value = type === "email" ? `mailto:${c.personal.email}` : c.personal[type];
    if (value) node.href = value;
    else node.hidden = true;
  });

  const navItems = c.navigation || [];
  const navMarkup = navItems.map(item => `<a href="#${escapeHtml(item)}">${escapeHtml(item[0].toUpperCase() + item.slice(1))}</a>`).join("");
  $("#desktopNav").innerHTML = navMarkup;
  $("#mobileNav").innerHTML = navMarkup;

  $("#quickFacts").innerHTML = (c.facts || []).map(f => `<div><span>${escapeHtml(f.label)}</span><strong>${escapeHtml(f.value)}</strong></div>`).join("");
  $("#experienceList").innerHTML = (c.experience || []).map(item => `<article class="timeline-item"><div class="timeline-date">${escapeHtml(item.period)}</div><div><p class="item-kicker">${escapeHtml(item.company)}</p><h3>${escapeHtml(item.role)}</h3><p>${escapeHtml(item.description)}</p><div class="tag-list">${(item.tags || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div></div></article>`).join("");
  $("#projectList").innerHTML = (c.projects || []).map((item, index) => `<article class="project-card ${item.featured ? "featured" : ""}"><div class="project-number">0${index + 1}</div><p class="item-kicker">${escapeHtml(item.type)}</p><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="tag-list">${(item.tech || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div><div class="project-links">${item.github ? `<a href="${link(item.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>` : ""}${item.demo ? `<a href="${link(item.demo)}" target="_blank" rel="noreferrer">Live demo ↗</a>` : ""}</div></article>`).join("");
  $("#skillList").innerHTML = Object.entries(c.skills || {}).map(([group, skills]) => `<div class="skill-group"><span class="item-kicker">${escapeHtml(group)}</span><div>${skills.map(skill => `<span>${escapeHtml(skill)}</span>`).join("")}</div></div>`).join("");

  const themes = { midnight: "Midnight", aurora: "Aurora", paper: "Paper" };
  const themeMenu = $("#themeMenu");
  Object.entries(themes).forEach(([key, label]) => { const button = document.createElement("button"); button.type = "button"; button.dataset.theme = key; button.textContent = label; button.addEventListener("click", () => setTheme(key)); themeMenu.appendChild(button); });
  const setTheme = theme => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); themeMenu.hidden = true; $("#themeToggle").setAttribute("aria-expanded", "false"); };
  setTheme(localStorage.getItem("portfolio-theme") || c.theme?.default || "midnight");
  $("#themeToggle").addEventListener("click", () => { themeMenu.hidden = !themeMenu.hidden; $("#themeToggle").setAttribute("aria-expanded", String(!themeMenu.hidden)); });
  const menu = $("#mobileNav"); $("#menuToggle").addEventListener("click", () => { const open = menu.classList.toggle("open"); $("#menuToggle").setAttribute("aria-expanded", String(open)); });
  menu.addEventListener("click", () => { menu.classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded", "false"); });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.12 });
  document.querySelectorAll(".section, .contact-section").forEach(section => { section.classList.add("reveal"); observer.observe(section); });
})();
