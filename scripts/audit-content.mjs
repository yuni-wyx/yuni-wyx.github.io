import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.createContext(context);
for (const filename of ['data/evidence.js', 'data/projects.js', 'data/profiles.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, { filename });
}
const evidence = context.window.PortfolioEvidence;
const projects = context.window.PortfolioProjects;
const profiles = context.window.PortfolioProjectProfiles;
const pages = {
  'ai-swe': 'ai-swe.html', data: 'data.html', mle: 'mle.html',
  robotics: 'robotics.html', linkedin: 'linkedin_portfolio.html'
};
let checks = 0;
function check(condition, message) { assert.ok(condition, message); checks++; }

check(evidence.emotionflow.feedback.count === 57, 'EmotionFlow feedback count');
check(evidence.emotionflow.feedback.positiveRatePct === 61.4, 'EmotionFlow positive rate');
check(evidence.emotionflow.feedback.scope === 'music recommendations', 'Feedback scope');
check(evidence.nailai.loadTest.concurrentUsers === 200, 'NailAI load-test concurrency');
check(evidence.nailai.loadTest.failures === 0, 'NailAI load-test failures');
check(evidence.nailai.loadTest.p95Seconds === 6.8, 'NailAI p95');
check(evidence.myedmaster.sourceRef !== evidence.nailai.sourceRef, 'Model and serving ownership distinct');
check(evidence.go1.sourceRef !== evidence['go1-vlm'].sourceRef, 'Go1 and VLM ownership distinct');
check(projects.nailai.description.includes('in one documented load test'), 'NailAI benchmark qualification');
check(projects.emotionflow.description.includes('music recommendations'), 'EmotionFlow feedback qualification');

for (const [role, filename] of Object.entries(pages)) {
  const html = fs.readFileSync(path.join(root, filename), 'utf8');
  check(html.includes('data/evidence.js') && html.includes('data/projects.js'), `${role}: catalog scripts`);
  check(html.indexOf('data/evidence.js') < html.indexOf('data/projects.js'), `${role}: load order`);
  check(html.includes('Open to Relocation'), `${role}: mobility wording`);
  check(!html.includes('Colorado, USA'), `${role}: stale location wording`);
  check(!/57% recommendation acceptance|34% hallucination|hallucination reduction/i.test(html), `${role}: superseded metrics`);
  check(!/href=["']#["']/.test(html), `${role}: placeholder links`);
  check(Array.isArray(profiles[role]), `${role}: profile exists`);
  check(new Set(profiles[role]).size === profiles[role].length, `${role}: no duplicate additional projects`);
  for (const id of profiles[role]) check(Boolean(projects[id]), `${role}: missing catalog project ${id}`);
}

const otherFiles = ['index-private.html', 'README.md', 'PROJECT_AUDIT.md'];
for (const filename of otherFiles) check(fs.existsSync(path.join(root, filename)), `${filename} exists`);
for (const [id, project] of Object.entries(projects)) {
  check(Boolean(project.name && project.description), `${id}: content`);
  for (const field of ['demo', 'github']) {
    if (project[field]) check(/^https:\/\//.test(project[field]), `${id}: valid ${field} URL`);
  }
}
console.log(`PASS: ${checks} portfolio content checks across ${Object.keys(pages).length} role pages.`);
console.log('Note: linked PDF resumes and live external URLs are not validated by this script.');
