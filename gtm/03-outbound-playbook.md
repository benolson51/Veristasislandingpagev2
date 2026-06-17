# 03 — Outbound Playbook (founder-led, send-ready)

_Copy is final and §12-clean. Personalize only the bracketed tokens: `[First name]`, `[Company]`,
`[trigger]`, `[calendar link]`, `[founder]`. Don't add claims that aren't in the breakdown._

## Week-0 prerequisite: email deliverability (do this before any volume)
Cold email from your primary domain will burn it. Set up:
- A **separate sending domain** (e.g. `getveristasis.com` or `veristasis.io`), not `veristasis.com`.
- **SPF, DKIM, DMARC** on the sending domain.
- 1–2 inboxes on it; **warm them up ~2 weeks** with a warmup tool before ramping. Warmup takes longer than
  this sprint — so in Week 1, send **low volume by hand** from a real inbox (10–20/day) while warmup runs.
- Keep a **suppression list**; honor every opt-out immediately (CAN-SPAM).
- Always include a real physical mailing address + opt-out line in the email footer.

## Cadence math (Ben solo, ~$1,200/mo, quality over volume)
> These cold numbers are the **secondary fill**. The 14-day first-paid push is **warm-led** — see
> [12-first-paid-deal-14-day-sprint.md](12-first-paid-deal-14-day-sprint.md). Warm outreach goes from Ben's
> real inbox/phone/LinkedIn and skips the deliverability warmup.
- Ben researches + personalizes **~10–15 new cold contacts/day** and works follow-ups.
- Realistic over the 30 days, solo (deliverability ramp in Week 1): **~100–120 cold-contacted** (on top of
  the warm list).
- Multi-touch over ~12 business days per prospect: **Email → LinkedIn connect → LinkedIn DM → call/voicemail
  → email → break-up**. Stop the sequence the moment they reply.
- Daily block: ~90 min research/enrichment + ~60 min sending/personalizing + ~30 min follow-ups/replies +
  demo time. See [10-week1-hour-by-hour.md](10-week1-hour-by-hour.md).

## Sequence A — Direct to the affirmation-signer (owner / CEO / COO)

**Touch 1 — Email (Day 1).** Subject lines (A/B test):
- `[Company] + your SPRS affirmation`
- `CMMC Level 2 before you bid`
- `the SSP your prime is going to ask for`

Body:
```
Hi [First name],

If a prime has flowed down a CMMC clause to [Company], you'll need a System Security Plan covering
110 controls, a POA&M for the gaps, and an SPRS score posted — with your signature on the affirmation.

Most shops pay a consultant ~$40k and wait two months for that. We built VeriStasis to do it faster and
fixed-price: you answer a scoped intake, it generates your SSP, POA&M, and policies, computes your real
SPRS score, and shows the shortest legitimate path to raise it. A CMMC expert reviews it before you certify.

No AI black box — it's a deterministic engine you can explain to an assessor. Worth a 20-minute look?

[founder], co-founder, VeriStasis
[calendar link]
```
Footer: physical address + "Reply STOP and I won't email again."

**Touch 2 — LinkedIn connect (Day 2).** No pitch in the note:
```
Hi [First name] — we build CMMC L2 documentation tooling for DIB shops your size. Following [Company]'s work;
would value connecting.
```

**Touch 3 — LinkedIn DM (Day 4, after they accept).**
```
Thanks for connecting, [First name]. Quick one: has a prime asked [Company] for an SSP or SPRS score yet?
We get small contractors to a credible, assessor-ready package in weeks, fixed-price — and an expert checks
it before you certify. Happy to show you a real exported bundle (with the checksum an assessor verifies).
[calendar link]
```

**Touch 4 — Call + voicemail (Day 6).** See script below.

**Touch 5 — Email (Day 9), reply-to T1.**
```
Hi [First name] — one reason to not wait: Phase 2 of CMMC starts Nov 10, 2026, when L2 work needs a C3PAO
certificate, and assessor slots are scarce. Readiness takes months. Even if you're early, knowing your real
SPRS number now tells you how big the gap is. I can send a free CMMC L2 readiness checklist — want it?
```

**Touch 6 — Break-up email (Day 12).**
```
Hi [First name] — I'll stop here so I'm not cluttering your inbox. If CMMC L2 heats up for [Company], we get
you assessment-ready fast and fixed-price. Door's open: [calendar link]. — [founder]
```

## Sequence B — RPO / MSP / consultant channel (secondary track)
**Email 1.** Subject: `reselling CMMC docs to your contractor book`
```
Hi [First name],

You serve a book of defense contractors who all need CMMC Level 2 documentation — and writing each SSP by
hand doesn't scale. VeriStasis generates the SSP, POA&M, policies, SPRS score + roadmap, and a C3PAO-ready
bundle deterministically, and it's built to be resold. Each client isolated; you control the relationship;
the annual affirmation is recurring margin for you, not a one-time project.

We're signing a small number of design-partner RPOs. Worth a 20-minute conversation?

[founder], VeriStasis — [calendar link]
```
**LinkedIn follow + call** mirror Sequence A. Goal: exploratory call, then a design-partner discussion.

## Call opener + discovery (for Touch 4 / booked calls)
**Opener:** "Hi [First name], [founder] from VeriStasis — I'll be quick. We help DIB shops your size produce
the CMMC Level 2 documentation a prime or assessor asks for, fixed-price and in weeks. Did I catch you at an
OK moment for two minutes?"

**Discovery (qualify against ICP + trigger):**
1. "Has a prime flowed down a CMMC or DFARS 7012 clause to you yet — and is there a date attached?"
2. "Do you handle CUI, or is it FCI only?" (disqualifier if FCI-only)
3. "Do you have an SSP and an SPRS score posted today? How current is it?"
4. "Who signs the affirmation — is that you?" (confirm you're with the economic buyer)
5. "Anyone internal owning compliance, or is it landing on you?"
6. "What's your timeline — when do you need to be assessment-ready?"

**If qualified → book the demo.** "Easiest next step: a 30-minute screen-share where I run a scoped intake
and show you a real exported package with the checksum. When works — [calendar link]?"

**Voicemail (≤20 sec):** "Hi [First name], [founder] at VeriStasis — we get DIB shops to CMMC L2
assessment-ready fast and fixed-price, with an expert review before you certify. I'll follow up by email; or
grab time at [calendar link]. Thanks."

## Personalization rules (keeps reply rate up, keeps you honest)
- One specific, true personalization per first-touch: their NAICS/work, a recent DoD award, or the prime
  they likely sub to. No fake flattery.
- Never assert they have a problem you haven't confirmed — frame as "if/when."
- Never state a price in cold copy; anchor against the **consultant baseline** (a real market fact) and say
  "fixed-price." Quote real numbers only on a call/quote (see [05-pricing-and-packaging.md](05-pricing-and-packaging.md)).
- Never imply we host CUI, connect to their systems, are FedRAMP, or that the tool certifies them.
