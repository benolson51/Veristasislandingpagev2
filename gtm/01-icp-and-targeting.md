# 01 — ICP & Targeting

_How to find the exact people who must sign an SPRS affirmation under a CMMC Level 2 obligation — and the
RPOs who serve them. Methods and search strings only; do not fabricate specific companies or contacts._

## Direct ICP (the buyer we lead with)
**Firmographic**
- US defense industrial base (DIB) contractor or subcontractor.
- ~20–200 employees (sweet spot 30–120). Big enough to handle CUI, too small for an internal GRC/CISO team.
- Handles **CUI** (not just FCI) — has a real Level 2 obligation, not Level 1.
- Manufacturing / machine shops / precision components / aerospace / engineering services are dense with fit.

**Trigger (this is what makes them buyable now)**
- A prime has flowed down a **DFARS 7012 / CMMC clause** with a date, OR
- They're bidding a solicitation that references CMMC L2, OR
- They've been **asked for an SSP or an SPRS score** and don't have a credible one, OR
- They have an SPRS score posted that's low/stale and a Phase-2 deadline looming.

**Buying committee**
- **Economic buyer / champion = the senior official who signs the SPRS affirmation** — owner, CEO,
  President, or COO. Personal FCA exposure makes them both motivated and allergic to overclaiming vendors.
- **Influencer = IT lead / MSP contact / "the person who got handed compliance"** (often an office manager
  or quality manager). They feel the pain daily; they're a great first reply, but the signer must be in the room to close.
- **Quality / contracts manager** — frequently the one who received the flow-down email.

## Anti-ICP (disqualify fast — don't waste founder hours)
- Level 1 / FCI-only shops (no CUI) → wrong product.
- Firms that handle no CUI at all.
- Large primes with their own CISO/GRC org → they build, not buy this.
- Pure commercial (non-DoD) manufacturers with no flow-down.

## Real prospecting methods + exact search strings
> Compliance note: respect each source's Terms of Service; don't scrape where prohibited. Cold **email** must
> comply with **CAN-SPAM** (truthful headers/subject, a physical mailing address, and a working opt-out).
> Cold outreach to a business role is permitted; honor opt-outs immediately and keep a suppression list.

### 1. SAM.gov (entities registered to do business with the government)
- Filter active registrations by **NAICS** codes dense with CUI-handling DoD suppliers, e.g.:
  - `332710` Machine shops · `336411` Aircraft mfg · `336412` Aircraft engine/parts ·
    `334511` Search/detection/navigation instruments · `336992` Military armored vehicles/tank parts ·
    `541330` Engineering services · `541715` R&D physical/engineering/life sciences ·
    `332994` Small arms/ordnance · `334290` Other communications equipment.
- Cross-filter by state/region to cluster outreach (and to find local references).
- Pull entity name + location; then find the signer on LinkedIn (next step). SAM gives the company; not the buyer.

### 2. USAspending.gov / FPDS (who actually wins DoD work)
- Search awards by **awarding agency = Dept. of Defense**, recipient business size = **small business**,
  the NAICS above, recent fiscal years. Award history confirms a live DoD relationship (= flow-down risk).
- Export recipient lists; dedupe against SAM hits to prioritize firms with **recent** DoD awards.

### 3. DoD SBIR/STTR awardees (dibbs / SBIR.gov)
- SBIR.gov award search → agency **DoD**, recent years. SBIR winners are small, innovative, often newly
  facing CUI obligations and short on compliance staff — high fit and reachable founders.

### 4. Prime supplier networks
- Major primes publish supplier registration / "doing business with us" portals and supplier-diversity
  directories. These list the small subs who are receiving flow-downs **right now**. Use them to find
  contractors by tier and commodity, then enrich for the signer.

### 5. APEX Accelerators (formerly PTACs) — prospects AND a channel lead
- The national APEX Accelerator network advises small DIB firms on government contracting (and CMMC).
- Two uses: (a) their event calendars / client communities surface contractors who are actively pursuing DoD
  work; (b) **the accelerators themselves are channel/referral partners** — they constantly get asked "who do
  I use for my SSP?" Add them to the RPO/referral list below.

### 6. Industry bodies & manufacturing networks
- NDIA (and state/chapter affiliates), state defense alliances, and the MEP (Manufacturing Extension
  Partnership) center in each state. Member directories and event attendee lists = clusters of fit accounts,
  plus partnership/speaking opportunities.

### 7. Cyber AB Marketplace (for the RPO/C3PAO channel, not direct buyers)
- The Cyber AB marketplace lists **RPOs, C3PAOs, and RPs**. This is the source list for the secondary
  channel track and for partnership (a C3PAO can't write the docs they assess — referral fit).

### 8. LinkedIn Sales Navigator (find the human / the signer)
- This is how you turn a company name into the affirmation-signer. Saved-search filters:
  - **Geography:** target state/metro.
  - **Industry:** Defense & Space Manufacturing; Aviation & Aerospace; Industrial Machinery Mfg;
    Mechanical/Industrial Engineering.
  - **Company headcount:** 11–50 and 51–200.
  - **Seniority / title:** Owner, Founder, CEO, President, COO; secondary: "Quality Manager",
    "Contracts Manager", "IT Manager", "Compliance".
  - **Keywords:** "CMMC", "NIST 800-171", "DFARS", "ITAR", "defense", "DoD supplier".
- Save as a lead list; export the company + person to the CRM. Use the firmographic sources above to seed
  account lists, then Sales Nav to pinpoint the person.

## Secondary: RPO / channel target-list method
- Start from the **Cyber AB Marketplace** RPO list + **APEX Accelerators** + **MSPs that already serve DIB
  shops** (search LinkedIn: "MSP" + "CMMC" / "defense").
- Qualify an RPO as a partner target if: they serve a **book of 10+ contractor clients**, they currently
  hand off SSP writing (or do it painfully by hand), and they sell recurring services (so the affirmation
  retention model resonates as **margin expansion**).
- Goal for 30 days: a list of **8–10** RPO/consultant/MSP targets, **2–3** exploratory calls opened.
  (Channel won't close this month; we're validating it.)

## Output of this workstream (what to actually build in Week 1)
- A **CRM account list of ~300 qualified contractors** with: company, NAICS, location, DoD-award signal,
  trigger hypothesis, and — where findable — the **signer's name + LinkedIn**.
- A separate **RPO list of 8–10** with the qualifying notes above.
- Both feed [03-outbound-playbook.md](03-outbound-playbook.md). Tracker columns in
  [08-metrics-and-tracking.md](08-metrics-and-tracking.md).
