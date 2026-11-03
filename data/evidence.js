// Canonical public-facing evidence registry, aligned with resume SAFE_CORE.
// Numbers are scoped measurements, not general production guarantees.
// Keep sourceRef stable; update a metric only after verifying its source artifact.
window.PortfolioEvidence = Object.freeze({
  emotionflow: {
    sourceRef: 'emotionflow',
    feedback: { count: 57, positiveRatePct: 61.4, scope: 'music recommendations' },
    excludedClaims: ['57% recommendation acceptance', '34% hallucination reduction']
  },
  nailai: {
    sourceRef: 'nailai',
    loadTest: { concurrentUsers: 200, failures: 0, p95Seconds: 6.8, scope: 'one documented load test' },
    ownership: 'Cloud Run, Pub/Sub, Cloud Storage, BigQuery inference and metadata workflows'
  },
  myedmaster: {
    sourceRef: 'myedmaster',
    modelEvaluation: { sampleCountMin: 50000, classes: 22, f1: 0.92, minorityF1LiftPct: 30 },
    latency: { beforeSeconds: 0.15, afterSeconds: 0.03 },
    ownership: 'model training, class-imbalance evaluation, ablation and inference latency'
  },
  go1: {
    sourceRef: 'go1',
    policyEvaluation: { sampleCountMin: 97000, mae: 0.11, r2: 0.62 },
    ownership: 'ROS/rosbag, behavior cloning, supervised state-action evaluation'
  },
  'go1-vlm': {
    sourceRef: 'go1_vlm',
    benchmark: { rosbags: 13, labeledSequencesMin: 2400 },
    ownership: 'Qwen/InternVL decision benchmarking, uncertainty, latency and safety boundaries'
  },
  fitmatch: {
    sourceRef: 'fitmatch',
    catalogSnapshot: { products: 1205, sizeProfiles: 65, chartRows: 407, relationships: 1205, baselineCasesPassed: 24 },
    note: 'SAFE_CORE snapshot, not asserted to be the latest live catalog count'
  },
  shopee: {
    sourceRef: 'shopee',
    scope: { scenariosMin: 800, qaWorkloadReductionPct: 80, reportingSpeedImprovementPct: 78, queryLatencyReductionPct: 15 }
  },
  stock: { sourceRef: 'stock_intelligence_copilot', workflows: ['research', 'explain', 'trade', 'watchlist', 'portfolio'] },
  auraflow: { sourceRef: 'auraflow', note: 'Cloud-backed v2 and local-first versions must be described separately' }
});
