---
name: svs-content-review
user-invocable: true
description: Master content review for Signal View Screening Services. Runs the client reviewer, SEO reviewer, and medical claims reviewer in parallel against any draft, then synthesizes all feedback into one consolidated, prioritized report. Use this after drafting any SVS content — blog posts, newsletters, landing page copy, email campaigns. Trigger when Mike says "review this," "full review," "run it through everything," "content review," or any request to evaluate a piece before publishing.
---

# SVS Content Review — Master Orchestrator

This skill runs a comprehensive content review by launching three specialized reviewers in parallel against the same draft, then consolidating their feedback into a single prioritized action plan.

## How this works

When this skill is triggered:

1. **Identify the content to review.** If Mike pastes it or points to a file, use that. If unclear, ask.

2. **Launch three parallel Agent subagents**, each with the full content to review:

   **Agent 1 — Client Reviewer** (`svs-client-reviewer`)
   Read the skill file at `.claude/skills/svs-client-reviewer/SKILL.md` and use its full instructions as the agent prompt. Append the draft content to review at the end. The agent should return feedback in all six categories defined in the skill (First Impression, Emotional Response, Trust & Credibility, Objections & Hesitations, Conversion Verdict 1-5, Specific Suggestions).

   **Agent 2 — SEO Reviewer** (`svs-seo-reviewer`)
   Read the skill file at `.claude/skills/svs-seo-reviewer/SKILL.md` and use its full instructions as the agent prompt. Append the draft content to review at the end. The agent should return keyword analysis, heading structure review, meta description draft, title tag, local SEO assessment, internal linking suggestions, and priority fixes.

   **Agent 3 — Medical Claims Reviewer** (`svs-medical-reviewer`)
   Read the skill file at `.claude/skills/svs-medical-reviewer/SKILL.md` and use its full instructions as the agent prompt. Append the draft content to review at the end. The agent should return line-by-line flags (red/yellow/green), a publish-readiness verdict, and verified claims.

3. **Collect all three results and synthesize into one consolidated report.**

## Consolidated report format

Present the final report to Mike in this structure:

---

### Content Review: [Piece Title]

**Client Conversion Score:** [X/5]
**Medical Verdict:** [Publish-Ready / Needs Minor Edits / Needs Significant Revision]
**SEO Readiness:** [Good / Needs Work / Poor]

---

### 🔴 Must-Fix (address before publishing)

Items from any reviewer that are blockers:
- Medical red flags (inaccurate claims, liability risks, diagnostic language overreach)
- Client conversion score ≤ 3 (the piece isn't convincing enough to convert)
- Major SEO issues that would prevent the piece from being found at all

For each item: what the problem is, which reviewer flagged it, and a specific fix.

### 🟡 Should-Fix (significantly improves the piece)

Items that aren't blockers but would meaningfully improve performance:
- Medical yellow flags (imprecise language, missing qualifiers)
- Client hesitations and unanswered objections
- SEO gaps (missing keywords, weak headings, no local signals)
- Trust or credibility gaps identified by the client reviewer

For each item: what it is, which reviewer flagged it, and a suggested fix.

### 🟢 Nice-to-Have (polish and optimization)

Items that are fine to ship without but would make the piece stronger:
- Featured snippet restructuring opportunities
- Additional internal linking
- Minor wording improvements from any reviewer
- Medical green flags (could be stronger with a source)

### SEO Deliverables

- **Title tag:** [under 60 chars]
- **Meta description:** [150-160 chars]
- **Primary keyword:** [keyword]
- **Internal linking suggestions:** [list with anchor text]

### Revision Checklist

A numbered, prioritized list of every change to make — ordered by impact. Mike (or Claude) can work through this list top to bottom in one revision pass.

1. [highest impact fix]
2. [second highest]
3. ...

---

## Important notes

- **Do not revise the content yourself.** This skill produces the review. Revision is a separate step that Mike will request.
- **Conflicts between reviewers:** If the medical reviewer flags something that the client reviewer loved (e.g., a dramatic stat), note the conflict and recommend the medically safe version. Medical accuracy always wins over conversion impact.
- **Voice protection:** If the SEO reviewer suggests changes that would break Mike's voice (keyword-stuffing a heading, adding corporate phrasing), note it and suggest a voice-compatible alternative. Never recommend changes that would make the piece sound generic.
- **Be concise in the consolidated report.** Mike doesn't need to see every detail from all three reviews — he needs the prioritized action list. Include enough context to understand each item, but don't duplicate the full sub-reviews.
