export interface SuccessStory {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  duration: string;
  systems: string[];
  challenge: string;
  challengeDetails: string[];
  solution: string;
  solutionDetails: string[];
  results: { metric: string; label: string; description: string }[];
  approach: { phase: string; title: string; body: string }[];
  quote?: { text: string; author: string; role: string };
  accentColor: string;
  tags: string[];
  featured?: boolean;
}

export const successStories: SuccessStory[] = [
  {
    slug: 'odoo-ai-transformation',
    title: 'Odoo Implementation & AI Adoption Strategy: 4× Productivity Leap',
    tagline: 'How an enterprise operations overhaul combined with AI workflow intelligence drove a 4× jump in team productivity.',
    client: 'Mid-Size Manufacturing & Distribution Enterprise',
    industry: 'Manufacturing & Distribution',
    duration: '6 months',
    systems: ['Workflow Orchestration Systems', 'AI-Assisted Operational Systems', 'Productivity Transformation Systems'],
    featured: true,
    accentColor: '#6C54FF',
    tags: ['Odoo', 'ERP', 'AI Adoption', 'Workflow Intelligence', 'Productivity'],
    challenge:
      'A 200+ person manufacturing and distribution company was running operations on a patchwork of disconnected tools — spreadsheets, legacy ERP modules, and manual approval chains — that had been accumulating technical debt for nearly a decade.',
    challengeDetails: [
      'Over 60% of team time consumed by manual data entry, reconciliation, and status-chasing across departments',
      'No single source of truth — finance, inventory, sales, and procurement operated in functional siloes',
      'Approvals bottlenecked on email chains; average order-to-dispatch cycle stretched to 5+ days',
      'Management lacked real-time visibility into operations, forcing reactive decisions based on weekly reports',
      'Previous ERP implementation had failed, leaving team resistant to technology change',
    ],
    solution:
      'Systems Valley designed a complete operational transformation in two parallel tracks: a carefully sequenced Odoo ERP implementation across all core functions, and a complementary AI adoption layer that embedded intelligence directly into daily workflows.',
    solutionDetails: [
      'Full Odoo implementation spanning inventory, procurement, sales, manufacturing, and accounting — designed for adoption, not just configuration',
      'AI-assisted documentation and process capture tools to eliminate manual reporting and status updates',
      'Custom workflow automation for approvals, purchase orders, and dispatch triggers',
      'Real-time operational dashboards replacing weekly reporting cycles',
      'Change management and AI adoption training program for all 200+ staff',
      'Intelligent exception-handling systems to flag and route anomalies automatically',
    ],
    results: [
      { metric: '4×', label: 'Productivity Increase', description: 'Team output per person quadrupled within 3 months of full deployment' },
      { metric: '68%', label: 'Reduction in Manual Tasks', description: 'Over two-thirds of repetitive operational work automated or AI-assisted' },
      { metric: '1.2 days', label: 'Order-to-Dispatch Cycle', description: 'Down from 5+ days — a 76% reduction in end-to-end order processing time' },
      { metric: '100%', label: 'Real-Time Visibility', description: 'Full live operational dashboards across all departments for leadership' },
    ],
    approach: [
      { phase: '01', title: 'Systems Audit & Process Mapping', body: 'Before touching any tool, we spent 3 weeks deeply mapping every workflow, approval chain, and data handoff. This became the blueprint for the entire transformation.' },
      { phase: '02', title: 'Phased Odoo Implementation', body: 'We implemented Odoo in functional waves — starting with inventory and procurement (highest pain), then sales and manufacturing, then finance — ensuring each wave was stable before the next.' },
      { phase: '03', title: 'AI Layer Design & Deployment', body: 'Parallel to the ERP rollout, we designed and deployed AI-assisted workflows: intelligent document processing, automated status updates, anomaly detection, and decision support dashboards.' },
      { phase: '04', title: 'Adoption & Evolution', body: 'We ran a structured 6-week adoption program, training teams not just on the tools but on new operational habits. Post-launch, we stayed embedded to iterate based on actual usage patterns.' },
    ],
    quote: {
      text: "Systems Valley didn't just implement software — they redesigned how our entire business operates. The 4× productivity number is real, and more importantly, our team actually uses the system because it was designed for how they work.",
      author: 'Operations Director',
      role: 'Mid-Size Manufacturing Enterprise',
    },
  },
  {
    slug: 'edtech-demand-conversion-system',
    title: 'EdTech Demand & Conversion Intelligence System: 3× Conversion Rate',
    tagline: 'Engineering an AI-native demand and conversion system that tripled sign-up conversion and halved customer acquisition cost.',
    client: 'EdTech Learning Platform',
    industry: 'Education Technology',
    duration: '4 months',
    systems: ['Intelligent Demand Systems', 'Conversion Intelligence Systems', 'Customer Experience Intelligence'],
    featured: true,
    accentColor: '#8875FF',
    tags: ['EdTech', 'Demand Generation', 'Conversion Optimization', 'AI Systems', 'Growth'],
    challenge:
      'A growing EdTech platform had strong course content but was losing potential learners at every stage of the acquisition funnel. Traffic was inconsistent, conversion rates were under 2%, and the team had no systematic way to understand or influence learner decisions.',
    challengeDetails: [
      'Conversion rate sitting at 1.8% — well below industry benchmarks for premium EdTech',
      'No systematic demand generation — relying entirely on paid ads with no organic or intelligent nurturing',
      'Learner journey completely linear — no personalization, no re-engagement, no intelligent triggers',
      'High customer acquisition cost making unit economics unsustainable at scale',
      'No data infrastructure to understand what was driving (or killing) conversions',
    ],
    solution:
      'We designed and deployed a full Demand-to-Conversion intelligence system — mapping the entire learner decision journey and rebuilding every touchpoint with AI-assisted personalization and behavioral intelligence.',
    solutionDetails: [
      'AI-assisted content demand engine generating targeted, intent-matched content across channels',
      'Behavioral segmentation system identifying learner intent signals in real time',
      'Dynamic landing page system with variant testing and AI-optimized conversion flows',
      'Intelligent email and retargeting sequences triggered by learner behavior patterns',
      'Micro-offer architecture to reduce commitment friction and build trust progressively',
      'Conversion attribution system providing clear ROI visibility across all channels',
    ],
    results: [
      { metric: '3×', label: 'Conversion Rate', description: 'From 1.8% to 5.4% — a full tripling of the lead-to-enrolment conversion rate' },
      { metric: '52%', label: 'CAC Reduction', description: 'Customer acquisition cost halved through intelligent targeting and higher conversion efficiency' },
      { metric: '4.2×', label: 'Organic Demand Growth', description: 'Organic discovery and inbound interest grew over 4× through the demand content engine' },
      { metric: '38%', label: 'Higher LTV', description: 'Learners acquired through the intelligent system showed significantly higher course completion and repeat purchase rates' },
    ],
    approach: [
      { phase: '01', title: 'Learner Decision Mapping', body: 'We spent two weeks mapping the complete learner decision psychology — from awareness through consideration to commitment — identifying every friction point and motivation lever.' },
      { phase: '02', title: 'Demand System Architecture', body: 'We designed a multi-channel demand engine combining AI-assisted content, paid intelligence, and organic compounding — each channel feeding data back into the system.' },
      { phase: '03', title: 'Conversion Flow Engineering', body: 'We rebuilt every conversion touchpoint with behavioral intelligence — dynamic personalization, progressive commitment architecture, and intelligent re-engagement flows.' },
      { phase: '04', title: 'Measurement & Iteration', body: 'We established a full attribution model and ran weekly iteration cycles — testing, learning, and compounding improvements throughout the engagement.' },
    ],
    quote: {
      text: 'We went from flying blind on acquisition to having a system that actually learns and improves. The 3× conversion improvement was real, but what surprised us most was how much we now understand about our learners.',
      author: 'Head of Growth',
      role: 'EdTech Learning Platform',
    },
  },
  {
    slug: 'retail-cx-intelligence',
    title: 'Retail Customer Experience Intelligence: 40% Retention Lift',
    tagline: 'Transforming a transactional retail brand into a relationship-driven experience engine through intelligent customer systems.',
    client: 'Premium Retail Brand',
    industry: 'Retail & Consumer',
    duration: '5 months',
    systems: ['Customer Experience Intelligence Systems', 'AI-Assisted Operational Systems'],
    featured: false,
    accentColor: '#9B8CFF',
    tags: ['Retail', 'Customer Experience', 'Retention', 'Personalization', 'AI'],
    challenge:
      'A premium retail brand with a loyal but shrinking customer base was losing repeat buyers to both online competitors and private-label alternatives. Customer experience was generic, loyalty programs were underperforming, and the brand had no real intelligence about its best customers.',
    challengeDetails: [
      'Repeat purchase rate declining 3% quarter-on-quarter despite heavy loyalty program investment',
      'Customer data siloed across POS, e-commerce, and loyalty systems with no unified view',
      'One-size-fits-all communication strategy — same message to all segments',
      'No early warning system to identify at-risk customers before they churned',
    ],
    solution:
      'We built a Customer Experience Intelligence System that unified customer data, applied behavioral segmentation with AI, and engineered personalized engagement flows for each customer segment.',
    solutionDetails: [
      'Unified customer data platform integrating POS, e-commerce, loyalty, and support data',
      'AI-powered behavioral segmentation identifying 8 distinct customer archetypes',
      'Personalized engagement system — different message, timing, and offer for each segment',
      'Churn prediction model with automated retention intervention triggers',
      'Post-purchase experience system driving loyalty through intelligent follow-up and recommendations',
    ],
    results: [
      { metric: '40%', label: 'Retention Improvement', description: 'Repeat purchase rate increased 40% within 4 months of full system deployment' },
      { metric: '2.8×', label: 'Loyalty Program ROI', description: 'Same loyalty budget achieved 2.8× better results through intelligent targeting' },
      { metric: '31%', label: 'Average Order Value', description: 'AI-powered recommendations drove a 31% increase in basket size per visit' },
      { metric: '65%', label: 'Churn Reduction', description: 'At-risk customer identification and intervention reduced churn by 65%' },
    ],
    approach: [
      { phase: '01', title: 'Customer Intelligence Audit', body: 'We mapped the entire existing customer data landscape, identified gaps, and designed the unified intelligence architecture.' },
      { phase: '02', title: 'Segmentation & Persona Intelligence', body: 'Using behavioral and transactional data, we built 8 distinct customer archetypes — each with a tailored engagement strategy.' },
      { phase: '03', title: 'Experience System Deployment', body: 'We deployed personalized communication flows, recommendation engines, and retention intervention systems across all customer touchpoints.' },
      { phase: '04', title: 'Continuous Optimization', body: 'Monthly iteration cycles refined segment definitions, messaging, and intervention timing based on actual performance data.' },
    ],
  },
  {
    slug: 'b2b-saas-growth-system',
    title: 'B2B SaaS Intelligent Growth System: 2× Pipeline in 90 Days',
    tagline: 'Building a systematic, AI-assisted demand and pipeline engine that doubled qualified pipeline within a single quarter.',
    client: 'B2B SaaS Platform',
    industry: 'Software / B2B Technology',
    duration: '3 months',
    systems: ['Intelligent Demand Systems', 'Conversion Intelligence Systems', 'Productivity Transformation Systems'],
    featured: false,
    accentColor: '#6C54FF',
    tags: ['B2B SaaS', 'Pipeline Generation', 'Demand Systems', 'Sales Intelligence'],
    challenge:
      'A B2B SaaS company with a strong product was stalling on growth. Their sales team was spending more time on manual prospecting and CRM hygiene than on actual selling. Pipeline was thin and unpredictable.',
    challengeDetails: [
      'Sales team spending 60% of time on non-selling activities (prospecting, data entry, follow-up management)',
      'No systematic demand generation — growth entirely dependent on founder relationships and referrals',
      'CRM data quality degraded to the point where pipeline forecasts were unreliable',
      'No intelligence on which leads were most likely to convert — all prospects treated equally',
    ],
    solution:
      'We designed and deployed an Intelligent Growth System — combining AI-assisted demand generation, lead intelligence scoring, and automated workflow orchestration to free the sales team to focus entirely on high-value conversations.',
    solutionDetails: [
      'AI-assisted outbound demand engine targeting ideal customer profile with personalized, intent-matched outreach',
      'Lead intelligence scoring model combining firmographic, behavioral, and engagement signals',
      'CRM automation layer eliminating 90% of manual data entry and follow-up management',
      'Intelligent nurture sequences for prospects not yet sales-ready',
      'Sales intelligence dashboard giving reps full context before every conversation',
    ],
    results: [
      { metric: '2×', label: 'Qualified Pipeline', description: 'Qualified pipeline doubled within 90 days of system deployment' },
      { metric: '58%', label: 'More Selling Time', description: 'Sales team recaptured 58% of their time from manual tasks back to actual selling' },
      { metric: '3.1×', label: 'Outreach Conversion', description: 'AI-personalized outreach converted 3.1× better than the previous manual approach' },
      { metric: '40%', label: 'Faster Sales Cycle', description: 'Better lead qualification and intelligence compressed average sales cycle by 40%' },
    ],
    approach: [
      { phase: '01', title: 'Revenue Operations Audit', body: 'Full audit of the existing sales process, CRM data quality, and team time allocation to identify highest-leverage intervention points.' },
      { phase: '02', title: 'ICP Intelligence Design', body: 'Built an ideal customer profile intelligence model combining historical win data, behavioral patterns, and market signals.' },
      { phase: '03', title: 'Demand & Automation Deployment', body: 'Deployed the AI-assisted outbound engine, CRM automation, and lead scoring system in a single coordinated rollout.' },
      { phase: '04', title: 'Sales Enablement & Iteration', body: 'Trained the sales team on the new system and iterated weekly on messaging, targeting, and qualification criteria.' },
    ],
  },
];
