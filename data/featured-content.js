// Shared case-study content. Source ownership follows SAFE_CORE and evidence.js.
// Every claim should have one defensible interpretation in an interview.
window.PortfolioFeaturedContent = Object.freeze({
  'stock-copilot': {
    problem:'Financial research spans disconnected market data, fundamentals, news, and portfolio context.',
    built:'Orchestrated intent classification, planning, tool routing, evidence aggregation, and SSE execution traces through FastAPI and LangChain/LCEL.',
    outcome:'Unified five research and portfolio workflow categories with structured schemas and per-tool error capture.',
    stats:[['5','Workflow Types'],['SSE','Streaming'],['LCEL','Tool Routing']]
  },
  auraflow: {
    problem:'Personal skincare advice can overlook owned products, changing conditions, and ingredient conflicts.',
    built:'Integrated user profiles, product inventory retrieval, deterministic safety rules, Gemini-assisted recommendations, and bilingual experiences.',
    outcome:'Validated key personalization and persistence flows with Playwright, including multi-user context isolation in the cloud-backed version.',
    stats:[['EN/ZH','Bilingual'],['E2E','Playwright'],['AI','Grounded Plans']]
  },
  fitmatch: {
    problem:'Apparel catalogs need consistent product-to-size mappings before size advice is explainable.',
    built:'Modeled PostgreSQL/Prisma catalog relationships and built FastAPI/Next.js recommendation paths with boundary-aware fit explanations.',
    outcome:'Validated an audited 1,205-product catalog snapshot with 65 size profiles and 407 chart rows; later catalog counts require a fresh database check.',
    stats:[['1,205','Snapshot Products'],['65','Size Profiles'],['407','Chart Rows']]
  },
  nailai: {
    problem:'Image inference requires reliable asynchronous execution and traceable prediction jobs.',
    built:'Integrated FastAPI, Cloud Run, Pub/Sub, Cloud Storage, idempotent job handling, and BigQuery metadata.',
    outcome:'Recorded zero failures at 200 concurrent users with p95 6.8s in one documented load test.',
    stats:[['200','Test Concurrency'],['0','Test Failures'],['6.8s','p95 Latency']]
  },
  emotionflow: {
    problem:'Emotion-aware recommendations need explicit user preference evidence to evaluate quality.',
    built:'Collected preference choices, ratings, and music-recommendation feedback using Flask, MongoDB, and evaluation tooling.',
    outcome:'Observed 61.4% positive music-recommendation feedback across 57 collected signals; this is not a general LLM acceptance rate.',
    stats:[['57','Music Signals'],['61.4%','Positive Feedback'],['DPO','Export Format']]
  },
  go1: {
    problem:'Vision-based robot control must predict actions from noisy observations under deployment constraints.',
    built:'Aligned ROS/rosbag imagery and motion supervision, trained ResNet-based behavior cloning, and evaluated trajectory-level errors.',
    outcome:'Evaluated 97K+ state-action samples with 0.11 MAE and R² 0.62 in the documented policy-training experiment.',
    stats:[['97K+','Samples'],['0.11','MAE'],['0.62','R²']]
  },
  'go1-vlm': {
    problem:'Multimodal navigation decisions must account for social cues, uncertainty, and runtime latency.',
    built:'Benchmarked Qwen3-VL-30B and InternVL-3.5-14B using structured actions and safety-oriented diagnostic categories.',
    outcome:'Analyzed 13 curated social-navigation rosbags and 2.4K+ labeled sequences, separately from Go1 behavior-cloning training.',
    stats:[['13','Rosbags'],['2.4K+','Sequences'],['2','VLM Families']]
  },
  myedmaster: {
    problem:'Imbalanced medical-image categories require per-class evaluation beyond aggregate accuracy.',
    built:'Benchmarked ResNet variants with cross-validation, calibration, class-imbalance handling, and targeted oversampling.',
    outcome:'Verified 0.92 F1 on 50K+ samples across 22 classes, improved minority-class F1 by 30%, and measured 5× faster per-image inference in a documented setup.',
    stats:[['50K+','Samples'],['0.92','F1'],['5×','Inference Speed']]
  },
  'shopee-validation': {
    problem:'Manual production QA and delayed anomaly reporting did not scale across hundreds of marketplace scenarios.',
    built:'Engineered Go API validation, SQL checks, anomaly detection, and regression monitoring for operational data.',
    outcome:'Reduced manual QA effort by 80% and accelerated reporting by 78% across 800+ documented production scenarios.',
    stats:[['800+','Scenarios'],['−80%','QA Effort'],['+78%','Reporting Speed']]
  }
});
