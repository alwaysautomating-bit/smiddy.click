# Proof library

Every public demonstration links back to the capability it proves, with its
implementation status and limitations recorded here. This is the single source
for the website, the portfolio, sales conversations and AI enablement work.

**This repository is public.** Keep entries public-safe: no client or employer
names, no NDA'd specifics, no real data, no security internals beyond what a
customer would be told.

## Status vocabulary

Use these terms exactly, on the site and everywhere else.

| Status | Means | Bar to claim it |
|---|---|---|
| **Working build** | Front end and back end built, MVP or further, running on test data | The capability runs end to end in the real software; captures or a walkthrough show it |
| **Working demo** | A public version anyone can open and try | A visitor can do the thing end to end on the public web, with no hidden dependency |
| **Prototype** | Early or partial; not a finished capability | Anything short of a working build |

Status is about how far the build has got. Whether a visitor can see it is recorded separately, under "Public availability".

Data labels: **Illustrative** (seeded demonstration data) or **Synthetic** (generated test data only).

Rules:

- Never imply a capability is implemented until it is. "Working build" is not "production-ready": name the missing integrations.
- Every public demo page carries a "What this proves" block: the capability, what is built, what is not yet.
- Wording from the ICARUS handoff applies: say "aligned to / evidence for", never "compliant" or "certified"; don't over-claim bank-change detection.
- Edits to captures for publication (names, URLs) are disclosed on the page.

## Entries

### Traceable Metrics

- **Public page:** `site/work/traceable-metrics.html` · homepage card
- **Capability:** every reported number reconciles to its source records, approvals, documents and timing.
- **Status:** Working build · Illustrative data
- **Built:** versioned metrics; drill-through that reconciles at every level; source lineage (invoice → subcontract → change order → field event); approvals with evidence; three clocks (occurred / recorded / first documented); explain change vs prior period, assembled from records, not model-written; exceptions with gaps stated, not filled; server-enforced restricted view with disclosure; pinned, verifiable snapshots.
- **Not yet:** no live accounting or project-management integration; captured against a test data store (live database migration not applied at capture time).
- **Source:** ICARUS `docs/demo/traceable-metrics/` (steps 01–14), captured 2026-11-05.
- **Media:** `site/work/media/0[1-9]*-cost-*.webp`, `1[1-4]-cost-*.webp`, `metrics-construction.mp4`, `metrics-teaser.mp4`.

### Traceable Procurement

- **Public page:** `site/work/traceable-procurement.html` · homepage card
- **Capability:** the award decision, quotes, deliveries, invoices and payment readiness behind every purchase order.
- **Status:** Working build · Illustrative data
- **Built:** seven-stage lifecycle; award decision with competing quotes and policy; award history kept, never overwritten; partial deliveries and invoices; procurement approval tracked separately from payment verification; computed exceptions; explain change.
- **Not yet:** no live purchasing or accounting integration; test data store.
- **Source:** ICARUS `docs/demo/traceable-metrics/` (steps 15–25).
- **Media:** `site/work/media/1[5-9]-proc-*.webp`, `2*-proc-*.webp`, `metrics-procurement.mp4`.

### Vendor Onboarding & Payment Controls

- **Public page:** `site/work/vendor-onboarding.html` · homepage card
- **Capability:** a vendor can be set up immediately, but nothing is releasable for payment until onboarding is complete and the current bank instructions are verified by phone.
- **Status:** Working build · Synthetic data
- **Built:** soft existence (unverified staged vendor linkable to work); hard payment block; single-use onboarding link and public vendor form; receipt showing last four only; security warning; Log Verification Call; one Locked Payment Path card on vendor and invoice screens.
- **Not yet:** no real banking data until production-grade key management, a separate vault project and real authentication exist; outbound email; a live payment path calling the release check; vendor document upload from the public form.
- **Publication edits:** bank name replaced with "Example Bank, N.A."; onboarding link replaced with `example.com/vendor-intake/demo` (disclosed on the page). Captures showing full account numbers or an error toast are excluded.
- **Source:** ICARUS `docs/demo/vendor-onboarding/`.

### CMMC Controls Generator

- **Public page:** `site/work/cmmc-controls.html` · homepage card
- **Capability:** control-driven compliance documents: one control record generates the policy, procedure, evidence plan and assessment prep (interview, examine, observe), specific to the company's own systems. Helps small contractors prepare before a paid assessment.
- **Status:** Working build · Illustrative data · Standalone app (not part of ICARUS)
- **Built:** onboarding with environment inference; overview, policy, procedure, technical, evidence, validation and assessment views projected from canonical control records; implementation-profile swap (Entra ID / Okta) that rewrites every output; generated policy manual outlines; Express + React app; 19 architecture tests passing (verified 2026-11-11).
- **Not yet:** three controls modelled end to end (AC.L2-3.1.1, AC.L2-3.1.2, AU.L2-3.3.1); a catalog file lists 99 of the 110 control IDs but isn't wired into the UI; evidence connectors are simulated, no live ingestion; AI assist endpoints exist but were not used in any published capture.
- **Wording:** never "compliant" or "certified". It is preparation and evidence for an assessment, not a certification or a substitute for an authorized assessor.
- **Naming note:** the repo's positioning doc calls the product "Icarus". The site uses "CMMC Controls Generator" to avoid confusion with the ICARUS operations platform.
- **Source:** `alwaysautomating-bit/cmmc-level-2-compliance-engine` at 7a3e012, captured with Playwright against a local run (no Gemini key; no AI calls fired in captured views).
- **Media:** `site/work/media/cmmc-*.webp`, `card-cmmc.webp`.

### Field capture

- **Public mention:** homepage, "Also on the bench" (no demo page yet)
- **Capability:** people away from a desk send photos, notes, delivery proof and inspection records from a phone via QR code or guest link, with no app or login; submissions are reviewed before they become evidence.
- **Status:** Working build · no public media yet
- **Built (ICARUS):** QR submit tokens (create, revoke, validate), guest capture sessions, evidence types, pending-submission review, assignment candidates (`server/ops/src/routes/qrCapture.ts`, `guestCapture.ts`, `evidence.ts`; `services/assignments.ts`).
- **Not yet:** not every integration is production-ready; no public demo yet (walkthrough on request). Earlier copy about reconciling against schedule and change orders was removed until verified.

### Discovery Flow

- **Public mention:** homepage, "Also on the bench"
- **Capability:** sorts a company's workflows by what each one needs: an AI assistant, plain automation, a process fix, an engineering handoff, or nothing.
- **Status:** Working build (front end and back end at MVP or further, per owner, 2026-11-11) · Synthetic data
- **Verified here:** the standalone front end loads and runs with no errors. Back-end source is not in this repo; link it here when it is referenced.
- **Public availability:** walkthrough on request. The current build carries employer-specific branding and domain; it needs a neutral version before it becomes a public working demo.

### Draft-and-review assistant

- **Public mention:** homepage, "Also on the bench"
- **Capability:** turns messy intake notes into a first draft, quotes the notes it relied on, flags what's missing, and waits for a specialist to approve; ships with an eval set that reports failures.
- **Status:** Working build (front end and back end at MVP or further, per owner, 2026-11-11)
- **Verified here:** the standalone front end loads; its rule-based eval check runs offline. Live drafting needs the model back end, so the standalone file alone can't draft on the public web.
- **Public availability:** walkthrough on request. To become a public working demo: neutral branding, plus a hosted back end for live drafting or saved example drafts with their source references and review states.

## Adding an entry

1. Confirm the capability exists (code, routes, tests), not only its UI.
2. Pick the status from the table above; record the data label.
3. Record what is built, what is not yet, the source of every image, and any publication edits.
4. Add the "What this proves" block to the public page, and link the page here.
