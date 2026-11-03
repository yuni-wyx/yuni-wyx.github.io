// Existing HTML preserves featured-card visual layout. These mappings identify
// the featured projects in visual order and choose complementary additional work.
window.PortfolioProjectProfiles = Object.freeze({
  'ai-swe': ['auraflow','fitmatch','mini-game-hub','book-of-answers'],
  'data': ['fitmatch','stock-copilot','auraflow'],
  'mle': ['auraflow','fitmatch'],
  'robotics': ['fitmatch','auraflow'],
  'linkedin': ['fitmatch','auraflow','mini-game-hub','book-of-answers']
});
window.PortfolioFeaturedProfiles = Object.freeze({
  'ai-swe': ['emotionflow','nailai','stock-copilot','go1'],
  'data': ['shopee-validation','nailai','emotionflow','go1'],
  'mle': ['nailai','emotionflow','go1','stock-copilot'],
  'robotics': ['go1','nailai','emotionflow','stock-copilot'],
  'linkedin': ['nailai','emotionflow','go1','stock-copilot']
});
window.PortfolioFeaturedOverrides = Object.freeze({
  'ai-swe': {
    emotionflow: {name:'EmotionFlow — LLM Preference & Evaluation System'},
    nailai: {name:'NailAI — Cloud-Deployed Inference'},
    go1: {description:'Demonstrated ROS-based state-action learning and deployment-aware residual diagnostics for Unitree Go1 navigation.'}
  },
  data: {
    nailai: {name:'NailAI — Inference Metadata Pipeline',description:'Instrumented asynchronous image-inference requests, jobs, and prediction metadata to support operational monitoring and troubleshooting.'},
    emotionflow: {name:'EmotionFlow — Feedback & Evaluation Data Flow',description:'Collected structured preference and music-recommendation feedback to analyze LLM application quality.'},
    go1: {name:'CAIRO Go1 — Robotics Data Pipeline',description:'Converted ROS/rosbag telemetry into reproducible state-action datasets for model evaluation.'}
  },
  mle: {
    nailai: {name:'NailAI — Cloud-Native Vision Inference'},
    emotionflow: {name:'EmotionFlow — LLM Preference & Evaluation'}
  },
  robotics: {
    nailai: {name:'NailAI — Cloud-Native Vision Inference'},
    emotionflow: {name:'EmotionFlow — Feedback Evaluation'},
    go1: {description:'Engineered image-to-action behavior cloning, ROS integration, and evaluation diagnostics for Unitree Go1; the VLM navigation benchmark is a separate research track.'}
  },
  linkedin: {
    nailai: {name:'NailAI — Cloud-Native Vision Inference'},
    emotionflow: {name:'EmotionFlow — LLM Preference & Evaluation'},
    go1: {name:'Go1 — CAIRO Vision-Based Imitation Learning'}
  }
});
