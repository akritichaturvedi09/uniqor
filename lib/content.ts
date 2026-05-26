export const palette = {
  void: '#040B14',
  night: '#081420',
  graphite: '#0D1F2E',
  cyan: '#21D4FD',
  teal: '#28E0B9',
  mint: '#A7F3D0',
  amber: '#F6C85F',
  risk: '#FF6B5F',
  white: '#F5FAFF',
  slate: '#9FB5C8'
} as const;

export const nav = [
  { label: 'Trust gap', href: '#trust-gap' },
  { label: 'Audit trail', href: '#audit' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Governance', href: '#governance' }
] as const;

export const hero = {
  eyebrow: 'The Core Intelligence Stack for Critical Systems',
  title: 'Agent infrastructure for critical systems.',
  subheadline:
    'Uniqor gives institutions secure, governed, auditable AI that reasons across departments, systems, policies, and workflows — so every decision can be traced, defended, and trusted.',
  support:
    'Not another copilot. A foundational intelligence layer for organizations where accuracy, accountability, and governance are non-negotiable.',
  primaryCta: 'Request institutional briefing',
  secondaryCta: 'Explore the intelligence core'
} as const;

export const trustSignals = [
  { label: 'Governance by default', value: 'Policy-aware' },
  { label: 'Decision traceability', value: 'Source → rule → output' },
  { label: 'Secure inference', value: 'Controlled boundaries' },
  { label: 'Institutional memory', value: 'Dynamic state' }
] as const;

export const trustGap = {
  eyebrow: 'The trust gap',
  title: 'AI is scaling faster than institutional trust.',
  body:
    'When decisions span systems, policies, and departments, isolated copilots become operational risk. Outputs may be impressive, but without native governance, auditability, and accountability, institutions cannot defend what the AI decided or why it decided it.',
  cards: [
    {
      title: 'Fragmented context',
      text: 'Legal sees one record. Compliance sees another. Operations works from a third. Intelligence breaks when the institution is represented as disconnected fragments.',
      signal: 'Context drift',
      tone: 'risk'
    },
    {
      title: 'Governance after the fact',
      text: 'Validation is often bolted on after output generation. That creates audit gaps exactly where regulated decisions require evidence, ownership, and control.',
      signal: 'Audit exposure',
      tone: 'amber'
    },
    {
      title: 'Unstable decision integrity',
      text: 'Model behavior changes across teams, time, workflows, and data freshness. In high-stakes environments, inconsistency becomes systemic risk.',
      signal: 'Variance detected',
      tone: 'risk'
    }
  ]
} as const;

export const core = {
  eyebrow: 'The governed core',
  title: 'One intelligence layer that makes institutional decisions traceable.',
  body:
    'Uniqor embeds governed intelligence directly into institutional operations, so validation survives handoffs, workflow changes, model routing, and audit scrutiny.',
  bullets: [
    'Absorbs institutional data into an actionable knowledge base.',
    'Anchors outputs to policies, permissions, evidence, and current system state.',
    'Routes every decision through governance, validation, and traceability.',
    'Creates an institutional memory that improves through monitored outcomes.'
  ]
} as const;

export const auditTrail = [
  {
    step: 'Input',
    meta: 'Request context, role, permission, scope',
    detail: 'The system captures the decision boundary before reasoning begins.'
  },
  {
    step: 'Context',
    meta: 'Dynamic state retrieval + institutional memory',
    detail: 'Authoritative data, prior decisions, and current workflow state are assembled.'
  },
  {
    step: 'Policy check',
    meta: 'SOPs, regulations, playbooks, thresholds',
    detail: 'Rules of the institution are applied as part of the inference path.'
  },
  {
    step: 'Reasoning',
    meta: 'Cross-system reconciliation + validation',
    detail: 'Contradictions are detected, resolved, or escalated for human authority.'
  },
  {
    step: 'Validation',
    meta: 'Source integrity, confidence, variance control',
    detail: 'The output is tested against available evidence and decision constraints.'
  },
  {
    step: 'Output',
    meta: 'Structured recommendation + rationale',
    detail: 'Decision owners receive a defensible output, not an opaque answer.'
  },
  {
    step: 'Audit ledger',
    meta: 'Immutable lineage + outcome monitoring',
    detail: 'What was decided, when, by whom, and on what basis remains available.'
  }
] as const;

export const architectureLayers = [
  {
    number: '01',
    name: 'Application Shell',
    subtitle: 'Where institutional users and systems interact.',
    capabilities: ['Multi-tenant UI', 'Admin portal', 'RBAC / SSO', 'API gateway', '40+ connectors']
  },
  {
    number: '02',
    name: 'Decision Intelligence Engine',
    subtitle: 'Where reasoning becomes governable decision work.',
    capabilities: ['Semantic unifier', 'Reasoning validation', 'Conflict resolution', 'Decision traceability', 'Policy enforcement']
  },
  {
    number: '03',
    name: 'Knowledge & State Store',
    subtitle: 'Where institutional memory stays current.',
    capabilities: ['Unified entity model', 'Dynamic state', 'Institutional knowledge', 'Decision history', 'Outcome signals']
  },
  {
    number: '04',
    name: 'Inference Core',
    subtitle: 'Where requests are classified, routed, checked, and logged.',
    capabilities: ['Query classifier', 'Context builder', 'Policy gate', 'Decision router', 'Secure model routing']
  }
] as const;

export const useCases = [
  {
    sector: 'Legal',
    grade: 'Authority-grade research',
    visual: 'Case law graph',
    text:
      'Verified legal research, contract review, submission audit, and citation validation anchored to source authority and client context.',
    outputs: ['Verified citations', 'Privilege-aware context', 'Review lineage']
  },
  {
    sector: 'Healthcare',
    grade: 'Diagnostic-grade precision',
    visual: 'Patient timeline',
    text:
      'Workflow-embedded checks against clinical protocols with a complete trace from inputs to recommendation to rationale.',
    outputs: ['Protocol validation', 'Patient-state memory', 'Escalation trace']
  },
  {
    sector: 'Government',
    grade: 'Policy-grade reasoning',
    visual: 'Policy traceability map',
    text:
      'Transparent decision support for public-sector environments where adherence, recordkeeping, and explainability are mandatory.',
    outputs: ['Policy lineage', 'Public accountability', 'Immutable record']
  },
  {
    sector: 'Finance',
    grade: 'Risk-grade consistency',
    visual: 'Variance monitor',
    text:
      'Unified decision logic across risk and compliance systems, with continuous monitoring to reduce drift and variance.',
    outputs: ['Repeatable thresholds', 'Drift monitoring', 'Defensible decisions']
  }
] as const;

export const whyNow = [
  {
    title: 'Models are becoming interchangeable.',
    text: 'The durable advantage is moving away from raw model access and toward institutional data readiness, governance, and inference-time control.'
  },
  {
    title: 'Agents need enterprise state.',
    text: 'Enterprise agents cannot reliably act without permissions, workflow context, current system state, and institution-specific policy memory.'
  },
  {
    title: 'Regulated AI requires evidence.',
    text: 'Institutions need AI outputs that survive legal, clinical, public, financial, and compliance scrutiny — not just impressive answers.'
  }
] as const;

export const governance = [
  {
    title: 'Secure inference boundaries',
    text: 'Sensitive records remain inside controlled pathways where access, routing, and exposure are governed by role, system, and policy.'
  },
  {
    title: 'Policy gates at inference time',
    text: 'Rules are evaluated during the decision path, before the output reaches the workflow owner.'
  },
  {
    title: 'Immutable audit trails',
    text: 'Every material decision can preserve source context, applied rules, routing path, rationale, owner, and outcome.'
  },
  {
    title: 'Human accountability',
    text: 'Uniqor does not remove responsible authority. It gives decision owners the evidence needed to act, review, and defend.'
  }
] as const;

export const principles = [
  {
    name: 'Clarity',
    text: 'Cut through complexity so decision-makers know what matters, what changed, and why it matters now.',
    signal: 'Remove ambiguity'
  },
  {
    name: 'Credibility',
    text: 'Earn trust through evidence-led communication, transparent reasoning, and governed institutional behavior.',
    signal: 'Prove the work'
  },
  {
    name: 'Consistency',
    text: 'Keep decisions reliable and repeatable across systems, departments, time, and scale.',
    signal: 'Stabilize outcomes'
  }
] as const;

export const footer = {
  title: 'Institutional intelligence should be governed before it is scaled.',
  text:
    'Uniqor is built for organizations where correctness must be traceable, reasoning must be defensible, and accountability cannot be outsourced to a black box.',
  cta: 'Begin the institutional briefing'
} as const;
