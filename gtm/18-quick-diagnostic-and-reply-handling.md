# 18 — Quick Diagnostic + Reply-Handling SOP

_The **back half of the funnel**: turning a reply into a booked Quick Diagnostic → a fixed-price quote → a
close. Touch 1 is easy; this is where revenue is actually won or lost. Pairs with
[04-demo-and-sales-process.md](04-demo-and-sales-process.md), [13-close-kit.md](13-close-kit.md), and the
advisory ladder in [17-advisory-ladder.md](17-advisory-ladder.md). §12-clean throughout._

---

## A. The offer — "Quick Diagnostic + ScorePath™ preview" (the low-friction entry)

**What it is:** a free ~20-minute working session (call or screenshare) where we compute the prospect's
**real, directional SPRS starting number** from a short intake and show a **ScorePath preview** — the top
must-meet gating gaps vs. quick wins. The honest hook: *"here's **your** real starting number, before a prime
or a C3PAO asks for it."*

**What it is NOT (say this plainly — it's the trust play):**
- ❌ Not an assessment, not a certification, not an "official" or "independent" score. The number is the
  **customer's self-assessment, computed from what they tell us** — never our determination. (Retire the word
  "validation.")
- ❌ Not us touching/scanning their systems. We work from what they attest.
- The 20-min number is a **credible starting estimate**; the full deterministic score + documents come with the
  paid package after the complete SmartScope intake and CMMC-RP review.

**The ~12-question diagnostic intake (high-signal subset, not the full ~35):**
1. Do you handle **CUI** or only **FCI**? (drives scope + whether it's L2 at all)
2. Roughly how many people / systems are in scope?
3. Cloud stack — **M365 GCC High / Google Workspace / AWS GovCloud / on-prem**? (inheritance prunes controls)
4. **MFA** on everything touching CUI? (high-weight)
5. **FIPS-validated encryption** for CUI at rest + in transit? (commonly missed; gating)
6. Audit logging / SIEM in place? Incident-response plan? (high-weight)
7. Security-awareness training program? Access control documented?
8. Do you have an **SSP** today? A **POA&M**? A written policy set?
9. Have you **posted an SPRS score**? If so, what is it / when?
10. Has a **prime sent you a flow-down letter** asking for your score? (urgency gate)
11. AS9100 / ITAR / other certs already held? (document-control maturity)
12. Target: any contract/bid or deadline driving this?

**The 20-min flow:** confirm scope (Q1–3) → walk the high-weight gaps (Q4–8) → show the **directional SPRS
number + top 3–5 must-meet gaps** → the conversion ask (below). Keep it teaching, not selling.

**The conversion ask (end of the diagnostic):**
> "So that's your real starting number and the handful of must-meet gaps. The engine builds the full SSP,
> POA&M, ~20 policies and the complete score from here — deterministically, reviewed by our CMMC RP before you
> certify — fixed-price, in weeks. Want me to map that to a tier and send you the fixed quote?"

**Capacity / who runs it:** **Ben** runs the diagnostic call. Paid work routes to **Brian's RP review
(~3–5/wk)** — so book diagnostics freely, but **waitlist paid onboarding at capacity** (scarcity = the sell,
per [05](05-pricing-and-packaging.md)). Never promise a turnaround Brian can't review by.

---

## B. Reply-handling playbook (classify → respond → next step → log)

| Reply type | Response move | CTA | Log status |
|---|---|---|---|
| **Interested / "tell me more"** | Book the diagnostic immediately | booking link / "2 times that work?" | `Diagnostic booked` |
| **"Send info / the checklist"** | Send the 1-page readiness checklist (give-first) + soft next step | "want me to run your number while I'm at it?" | `Nurture — sent asset` |
| **Not now / timing** | Respect it; set a trigger | "When a prime sends the letter, you'll have ~30 days — want me to check back in 60?" | `Nurture — follow-up dated` |
| **Objection** | Map to the leash/objection (below) | re-offer the diagnostic | `Objection — <type>` |
| **"Not interested" / unsubscribe** | Acknowledge once, **stop permanently** | none | `DO NOT CONTACT` |
| **Wrong person / referral** | Thank + ask for the right owner | "who owns compliance/IT?" | `Re-route` |

**Objection → response map (use the playbook leashes verbatim — see [13-close-kit.md](13-close-kit.md) /
master playbook §6):**
- **"Is this AI? I can't defend a black box."** → *"No AI. Deterministic rules over a transparent 110-control
  table — same inputs, same output, fully explainable. That's why it holds up in an assessment, and why a CMMC
  RP still reviews it before you certify."*
- **"We already have an MSP."** → *"Your MSP secures the network; we make the documentation defensible. No
  overlap — a good MSP refers you instead of fearing you."*
- **"Your score isn't official — you're not a C3PAO."** → Agree the cert is official; reframe to what a prime
  can demand **now** (the self-assessed SPRS score). Never puff the score as official. (Leash 2.)
- **"We're already compliant."** → *"Great — is that a posted SPRS score with assessment-ready docs behind it,
  or website language? The 20-min diagnostic tells you which, free."*
- **Price** → don't discount in the open; anchor against the ~$40k consultant baseline; flex **setup** 1:1 only,
  never recurring (see [05](05-pricing-and-packaging.md)).

**Hard rule:** "not interested" / unsubscribe = **permanent stop**, logged. No exceptions (CAN-SPAM + the brand).

---

## C. Booking path (remove all friction from "yes")

- **Primary:** a one-click booking link in every CTA. ⚠️ **Dependency (close-readiness gate):** the site
  contact form / a real scheduling link must be live — confirm with Brian (`deploy/` re-upload + test submit).
- **Fallback that always works:** "Reply with two times that work and I'll send an invite" + Ben's direct line
  (559) 207-1925.
- A "yes" should **never** wait on infrastructure — if the link isn't live, use the fallback that day.

---

## D. Hand-off to quote & close (after the diagnostic)

1. Map their scope to a tier: **Audit Foundation → C3PAO-Ready Package → Always Current → RP Partner**
   (default the proposal to C3PAO-Ready Package or higher; Audit Foundation only as a down-sell).
2. Send the **fixed-price quote** (confirm the number against real scope — no hourly meter).
3. Run the **[13-close-kit.md](13-close-kit.md)** deliverables list + agreement.
4. On signature → schedule Brian's intake + RP review on a date he confirms.

---

## E. Tracking (CRM-lite — log every prospect)

`Company · Contact + title · Channel · Last touch (date) · Reply type · Diagnostic (booked/done) ·
Directional SPRS · Tier mapped · Quote sent · Status · Next action + date · DNC?`

Even a single spreadsheet/board with these columns beats memory. Update it Friday with the week's numbers
(replace assumed funnel rates with real ones, per the master playbook cadence).
