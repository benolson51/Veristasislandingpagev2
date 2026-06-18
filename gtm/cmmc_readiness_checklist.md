# The CMMC Level 2 Readiness Checklist (for the owner who signs)

_A one-page, plain-English reality check for the CEO/founder of a small defense contractor — from VeriStasis.
No fluff, no sales pitch. If you can't confidently check these boxes, you're not assessment-ready yet._

> Why you, specifically: you're the senior official who signs the SPRS affirmation. That signature carries
> personal False Claims Act exposure. So it's worth ten minutes to know exactly where you stand.

## 1. Do you actually have the three mandatory artifacts?
- [ ] A **System Security Plan (SSP)** that addresses **all 110** NIST SP 800-171 Rev. 2 controls — system
  description, boundary, and how each control is met (or not).
- [ ] A **POA&M** with a remediation plan, owner, and milestone date for every gap.
- [ ] A **policy set** (one per control family) plus the core procedures, control-linked.
- [ ] A **SPRS score posted** to the supplier system — and you know the number.

If any of these is "no," you can't be assessed, and a prime can't accept your flow-down.

## 2. The SPRS score math (where most owners get a nasty surprise)
You don't start at zero and earn points. **You start at 110 and lose points for every unmet control:**
- Each control is worth **5, 3, or 1** point. Unmet = subtract that weight. The floor is **−203**.
- So "we're about 70% there" is **not** a score of 70. If the controls you're missing are the heavy ones,
  your real posted score can be **deeply negative.** We routinely see shops shocked their starting number is
  below zero.
- [ ] You know your **actual** current SPRS score (not a guess).
- [ ] You know which **specific** unmet controls are dragging it down the most.

## 3. The gating-control trap (the one that fails assessments)
Not every gap is equal — and not every gap can be deferred:
- [ ] You know that to use a **POA&M at all**, you must already be at **≥ 80% (SPRS ≥ 88)** at assessment.
- [ ] You know that **certain controls are "must-meet" — they cannot go on a POA&M.** If one of those is
  open on assessment day, you **fail outright, regardless of your score.**
- [ ] You know any POA&M items must be **closed within 180 days** — or the conditional status is lost.

Most shops don't find out which controls are non-negotiable until a C3PAO tells them. By then it's the
expensive way to learn.

## 4. Scope & the things that quietly sink shops
- [ ] You've **defined your CUI boundary** — what systems and people actually touch CUI (smaller scope =
  fewer controls in play, done honestly).
- [ ] You've documented **3.13.11** — FIPS-validated cryptography to protect CUI (a *requirement*, and a very
  common gap; "we use AES" isn't automatically enough).
- [ ] You've handled **external service providers** — your assessor will want a Customer Responsibility
  Matrix and an ESP service description for anyone in your boundary (cloud, MSP, tooling).
- [ ] Your inherited controls (M365 GCC High, Google Workspace, AWS GovCloud) are **documented**, not assumed.

## 5. The affirmation & the clock
- [ ] You know **who signs** the affirmation (you) and that it **recurs annually**.
- [ ] You know **Phase 2 — when Level 2 work requires a C3PAO certificate — begins November 10, 2026**, and
  that C3PAO capacity is scarce.
- [ ] You've accepted that readiness work typically takes **months**, not weeks — so the time to know your
  gap is now, not when a prime asks.

---

### Score yourself
- **0–4 boxes:** you're exposed. A flow-down today would catch you flat.
- **5–9 boxes:** you've started, but the gating controls and SPRS math are where deals get lost.
- **10+ boxes:** you're in good shape — keep it current for the annual affirmation.

_VeriStasis is the done-for-you CMMC Level 2 documentation engine: from your attested answers it generates
your SSP, POA&M, and policies, computes your real SPRS score, and shows the fastest legitimate path to raise
it — packaged C3PAO-ready, fixed-price, with a CMMC expert reviewing before you certify. We generate from
your answers; we don't host CUI or connect to your live systems. Want your real SPRS number? veristasis.com_

> Note: this checklist is educational, not legal advice or a certification. A C3PAO performs the assessment.
