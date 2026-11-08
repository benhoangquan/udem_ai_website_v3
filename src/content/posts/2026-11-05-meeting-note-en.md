---
slugId: "2026-11-05-meeting-note"
lang: "en"
title: "From Fragile Moderation to World Models: What's Really Brewing in AI Safety"
author: "Quan Tran"
date: "2026-11-05"
venue: "Université de Montréal"
tags: ["ai-safety", "world-models", "open-weights", "ml-engineering", "udem-ai"]
summary: "Takeaways from our team discussion: why post-hoc moderation and unlearning fail on open weights, the 'drowning the fish' reasoning-poisoning hypothesis, the paradigm shift toward World Models, and technical taste in the era of vibe coding."
---

During our latest team discussion, we unpacked a paradox haunting the AI ecosystem: as models grow increasingly autonomous, conventional safety guardrails are rapidly hitting their limits. From open-weight security vulnerabilities to nascent research directions and redefining the engineer's craft, here is an overview of the core ideas steering our work.

---

### 1. Why Conventional Moderation Is at a Dead End

LLM safety has long relied on superficial band-aids:

* **Post-hoc filtering:** Intercepting the model's final output to block unsafe responses. Problem: on open-weight models, the underlying information remains intact within weights and latent representations.
* **Chain-of-Thought (CoT) monitoring:** Auditing step-by-step reasoning tokens. Problem: neural networks can encode information implicitly across reasoning steps without triggering explicit alarms.
* **Safe-by-Design and its trade-offs:**
  * *Deep Ignorance* (scrubbing data before pretraining): Leaves massive conceptual voids that degrade general model capability (e.g., crippling broad biological reasoning to prevent bioweapon risks).
  * *Machine Unlearning* (post-training ablation): Extremely fragile. On open models, a few dozen minutes of fine-tuning and a handful of dollars in compute typically suffice to resurrect scrubbed knowledge.

---

### 2. Research Direction: "Drowning the Fish"

Given how easily unlearning can be circumvented, the goal shifts from erasing information to **drowning it under a critical mass of plausible false data**.

Our experimental hypothesis: intentionally poisoning a model's grasp of a specific domain using synthetic falsehoods could make subsequent recovery via fine-tuning exponentially harder and more compute-intensive than an inhibitory mask. A test protocol is currently in preparation on a benign technical subfield (e.g., targeted differential calculus) to benchmark resilience against recovery attacks.

---

### 3. Autoregressive Models vs. World Models

An autoregressive LLM predicts the next token by converging toward the statistical mean of its training distribution. Even when amplified by sophisticated test-time scaffolding, it excels at synthesis and recombination but struggles to capture divergent creative leaps or grounded physical dynamics.

This is where the pivot toward **World Models** (originating from robotics and latent environment representations) changes the paradigm. Instead of compressing text from the web, these architectures model causal world dynamics, paving the way for significantly more reliable planning and forward simulation.

---

### 4. The Craft of Coding in the Era of Vibe Coding

As automated tools conquer every layer of the stack—from deployment pipelines down to GPU kernel generation—a fundamental question resurfaces: why continue hand-crafting code or formalizing mathematical proofs manually?

The answer boils down to one word: **taste** (technical discernment).

As Grant Sanderson (*3Blue1Brown*) reminds us, the true value of an engineer or researcher lies not in raw computation, but in the mental scaffolding that frames problems and asks the right questions. Working with foundational primitives directly—deriving proofs, writing custom optimizers—remains the only reliable way to hone the intuition necessary to catch subtle hallucinations when automated agents accelerate execution in the background.

---

### Next steps

* **Experimental Project:** Initial benchmarks on reasoning poisoning and unlearning robustness.
* **Schedule:** Next session in room 3195 (or remote) and participation in the Google Hackathon.
