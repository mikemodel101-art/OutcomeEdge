/* ------------------------------------------------------------------ */
/*  OutcomeEdge — content layer (CMS-ready)                            */
/*  Single source of truth for services, transformations, people and   */
/*  blog posts. Posts are also seeded into PostgreSQL (src/db/seed).   */
/* ------------------------------------------------------------------ */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  readTime: number;
  image: string;
  featured: boolean;
  content: PostBlock[];
};

/* ------------------------ Home: three pillars ----------------------- */

export const PILLARS = [
  {
    index: "01",
    title: "Outcome-Aligned Execution",
    description:
      "Strategic initiatives are funded but progress becomes fragmented across teams. We help establish clear ownership, decision flow, and execution rhythm so priorities begin moving predictably.",
  },
  {
    index: "02",
    title: "Conscious Leadership Development",
    description:
      "When leadership teams lack reliable delivery signals, decision-making slows and initiative risk increases. We help leaders gain real visibility into progress, risk, and outcome indicators.",
  },
  {
    index: "03",
    title: "High-Impact Team Cohesion",
    description:
      "Cross-team coordination breakdowns often delay launches and increase execution waste. We help teams operate with shared priorities and fewer hidden dependencies.",
  },
];

export const CREDENTIALS = [
  {
    org: "Sony PlayStation",
    note: "Supported alignment across complex delivery streams ahead of the PS5 launch window.",
  },
  {
    org: "Google",
    note: "Helped product org leaders regain execution clarity on cross-team priorities.",
  },
  {
    org: "Molson Coors",
    note: "Improved delivery predictability across multi-team programs.",
  },
];

export const BIZ_IMPACT = [
  "Faster progress on funded initiatives",
  "Earlier validation of major product bets",
  "Reduced execution uncertainty for leadership",
  "Better utilization of engineering investment",
];

/* ------------------------------ Services ---------------------------- */

export const SERVICES = [
  {
    index: "01",
    title: "Strategic Initiative Acceleration",
    description:
      "When initiatives stall due to unclear ownership, fragmented priorities, or slow decision flow, we help leadership restore execution momentum — within weeks, not quarters.",
    points: ["Ownership & decision-flow mapping", "Execution rhythm installation", "Weekly outcome signals", "Momentum reviews with leadership"],
    image:
      "https://images.pexels.com/photos/7212946/pexels-photo-7212946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cta: "Discuss Your Priority Initiative",
    intent: "initiative",
  },
  {
    index: "02",
    title: "Execution Confidence for Leadership Teams",
    description:
      "Modern leadership demands more than expertise and execution. We help leaders strengthen self-awareness, build authentic trust, and develop the presence needed to lead with clarity, resilience, and influence in times of uncertainty and change.",
    points: ["Conscious leadership coaching", "Progress, risk & outcome visibility", "Executive alignment sessions", "Leading through uncertainty"],
    image:
      "https://images.pexels.com/photos/8124420/pexels-photo-8124420.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cta: "Explore Leadership Development",
    intent: "leadership",
  },
  {
    index: "03",
    title: "Cross-Team Execution Stabilization",
    description:
      "We reduce delays caused by hidden dependencies, misaligned planning cycles, and coordination overhead so initiatives move predictably across teams.",
    points: ["Dependency & handoff mapping", "Shared priority alignment", "Planning-cycle synchronization", "Coordination overhead reduction"],
    image:
      "https://images.pexels.com/photos/7652182/pexels-photo-7652182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cta: "Discuss Your Priority Initiative",
    intent: "initiative",
  },
];

/* -------------------------------- GCC ------------------------------- */

export const GCC_FAILURES = [
  {
    title: "US–India leadership misalignment",
    text: "Decisions slow down, expectations diverge, and trust erodes across geographies.",
  },
  {
    title: "Teams that look strong on paper but don't execute together",
    text: "Low trust, fear of conflict, weak accountability, and disengagement quietly compound.",
  },
  {
    title: "Processes that don't fit the team or context",
    text: "Imported models, tools, or \u201cbest practices\u201d create friction instead of flow.",
  },
];

export const GCC_BRINGS = [
  {
    title: "Leadership Alignment Across Borders",
    text: "We align US and India leaders on decisions, ownership, and outcomes.",
  },
  {
    title: "Team Effectiveness at the Core",
    text: "We fix trust, accountability, and execution so teams deliver predictably.",
  },
  {
    title: "Outcome-Driven Execution Models",
    text: "We design ways of working that fit your teams and business — not frameworks.",
  },
];

export const GCC_WHO = [
  "Companies planning a new GCC",
  "Companies with GCCs launched in the last 6–18 months that are struggling",
  "PE-backed or board-driven organizations under pressure to show results",
  "Leaders who know the problem is not talent — it's alignment and execution",
];

export const GCC_EXPERIENCE = [
  "Faster leadership alignment",
  "Teams that execute without constant escalation",
  "Fewer re-orgs, resets, and \u201ctransformation fatigue\u201d",
  "GCCs that deliver outcomes — not just capacity",
];

/* --------------------------- Client wins ---------------------------- */

export type Transformation = {
  index: string;
  label: string;
  org: string;
  sub: string;
  image: string;
  points: string[];
  outcome: string;
  quote: { text: string; role: string };
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    index: "A",
    label: "Strategic Clarity & Reliable Delivery",
    org: "Google Cloud",
    sub: "Security & Product Teams",
    image:
      "https://images.pexels.com/photos/7652050/pexels-photo-7652050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    points: [
      "Trust-based collaboration and shared purpose",
      "Visible prioritization and progress tracking",
      "Stable delivery cadence with fewer surprises",
    ],
    outcome:
      "Teams that were once siloed became predictable, cohesive, and strategically aligned.",
    quote: {
      text: "Amitabh's approach changed how our teams communicate and deliver. Trust and clarity became our competitive advantage.",
      role: "VP of Engineering, Google Cloud",
    },
  },
  {
    index: "B",
    label: "Quality, Morale & Operational Efficiency",
    org: "Blue Shield of California",
    sub: "Healthcare Delivery",
    image:
      "https://images.pexels.com/photos/7693729/pexels-photo-7693729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    points: [
      "Higher delivery quality with measurable progress",
      "Faster time-to-market for key initiatives",
      "Stronger cross-team collaboration and morale",
    ],
    outcome:
      "Leadership and teams now move confidently toward strategic goals.",
    quote: {
      text: "This work didn't just improve delivery — it changed how we collaborate and make decisions.",
      role: "Senior Director, Operations, Blue Shield of California",
    },
  },
  {
    index: "C",
    label: "Leadership + Accountability at Scale",
    org: "Molson Coors",
    sub: "Product Teams",
    image:
      "https://images.pexels.com/photos/6248988/pexels-photo-6248988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    points: [
      "Stronger ownership and accountability",
      "Enhanced team collaboration and decision-making",
      "Embedded practices that support long-term cohesion",
    ],
    outcome:
      "The organization gained predictability, deeper leadership engagement, and sustained team performance.",
    quote: {
      text: "What stands out is the deep human focus — trust, communication, and ownership took center stage.",
      role: "Senior Manager, Molson Coors",
    },
  },
  {
    index: "D",
    label: "Global Delivery Alignment",
    org: "Sony PlayStation",
    sub: "Enterprise Product Delivery",
    image:
      "https://images.pexels.com/photos/3860811/pexels-photo-3860811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    points: [
      "Cross-discipline alignment across product, design, and engineering",
      "Transparent visibility into high-impact work",
      "Faster, measurable progress toward product milestones",
    ],
    outcome:
      "A legacy product launch became a business milestone — named one of the Top 10 Coolest Products by TIME.",
    quote: {
      text: "OutcomeEdge helped us see work differently — with clarity, alignment, and purpose across teams.",
      role: "Director, SW Architecture, Sony PlayStation",
    },
  },
];

export const IMPACT_GLANCE = [
  "Predictable delivery and cadence",
  "Strong cross-functional trust and collaboration",
  "Leadership alignment on strategy and execution",
  "Higher quality outcomes and faster releases",
  "Teams empowered to own decisions",
];

/* ---------------------------- Testimonials -------------------------- */

export const TESTIMONIALS = [
  {
    text: "No notes. Thank you for leading us through these exercises and equipping us with tools for the challenges in life.",
    name: "Leo R.",
    role: "Workshop Participant",
  },
  {
    text: "Thank you for sharing yourself with us and giving us a glimpse of a different path in life.",
    name: "EK",
    role: "Program Participant",
  },
  {
    text: "I appreciated Amit's warmth and candor. His conviction in the practice was very evident and gave me a lot of reasons to buy in.",
    name: "M",
    role: "Leadership Program Participant",
  },
  {
    text: "This wasn't a framework. It was clarity in action.",
    name: "AS",
    role: "Product Delivery Head",
  },
  {
    text: "They helped us see what we meant to deliver — and then do it.",
    name: "EK",
    role: "Leader in Tech Transformation",
  },
  {
    text: "We stopped firefighting and started performing.",
    name: "HB",
    role: "Senior Director, Healthcare Org",
  },
];

/* ------------------------------- About ------------------------------ */

export const CORE_VALUES = ["Respect", "Integrity", "Partnership", "Teamwork", "Excellence"];

export const FOUNDER = {
  name: "Amitabh Sinha",
  role: "Founder & Transformation Partner",
  image:
    "https://images.pexels.com/photos/4345160/pexels-photo-4345160.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=1100&fit=crop",
};

export const MEMBERS = [
  { name: "Patrick Foster", role: "Agile Coach" },
  { name: "Joseph Tabilona", role: "Graphic Designer" },
  { name: "Harshita Singh Behal", role: "Senior Business Marketing" },
  { name: "Ronie Gallego", role: "Web Developer" },
];

export const PARTNERS = [
  { name: "Jeff Patton", role: "Chief Troublemaker" },
  { name: "Craig Thielen", role: "Digital Business Strategist | Executive Coach" },
  { name: "Shubham Rastogi", role: "Founder, Recro" },
  { name: "Michael de la Maza", role: "PhD, MIT · CEC · Co-founder, Demingway.com" },
  { name: "Elena Vassilieva", role: "Innovation Leader Coach & Agile Transformation Adviser" },
  { name: "Sherman Gomberg", role: "CST, CTC, ICAgile Authorized Instructor" },
  { name: "Steve Martin", role: "Certified Scrum Trainer · CST, PMI-ACP" },
  { name: "Alireza Boloorchi", role: "PhD in Computer Science" },
  { name: "Jeff Cheeney", role: "Trainer & Coach, Soaring Connections" },
  { name: "Kate Gonzales", role: "Principal, Agile Coach" },
];

export const ADVISORS = [
  {
    name: "Hernan Tocuyo",
    role: "Global Consulting Group US",
    detail: "MBA, MIT Business School · PMP · SAFe SPC6 / LPM6 & RTE6",
  },
];

/* ------------------------------ Contact ----------------------------- */

export const CONTACT = {
  address: "Outcome Edge, Thomas Dr, Palo Alto, CA 94303",
  phone: "+1 (650) 798-7021",
  email: "business@agilonomics.com",
  linkedin: "https://www.linkedin.com/in/amitabhsinha",
};

export const CONTACT_REASONS = [
  { value: "strategy", label: "Book a 30-Minute Consultation" },
  { value: "initiative", label: "Priority Initiative" },
  { value: "leadership", label: "Leadership Development" },
  { value: "gcc", label: "GCC — Build or Fix" },
  { value: "coaching", label: "Coaching & Workshops" },
  { value: "other", label: "Something Else" },
] as const;

/* ------------------------------- Blog ------------------------------- */

export const POST_CATEGORIES = [
  "All",
  "AI & Modern Ways of Working",
  "Leadership & Decision Making",
  "Outcome Execution",
  "Team Performance & Design",
] as const;

const AMITABH = { author: "Amitabh Sinha", authorRole: "Founder & Transformation Partner" };
const TEAM = { author: "OutcomeEdge Team", authorRole: "Knowledge Center" };

export const POSTS: Post[] = [
  {
    slug: "teams-busy-not-delivering",
    title: "Why Teams Stay Busy but Don't Deliver Outcomes",
    excerpt:
      "High activity, low impact: calendars are full, boards are moving, and yet the outcomes that matter keep slipping. Here's what's actually going on.",
    category: "Outcome Execution",
    ...AMITABH,
    date: "2026-02-03",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/3860811/pexels-photo-3860811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    content: [
      {
        type: "p",
        text: "Walk into most engineering organizations and you'll find motion everywhere: standups on time, velocity charts trending, boards full of tickets. Ask what changed for a customer last quarter, and the room gets quieter. Activity is not the same as progress — but it is much easier to schedule.",
      },
      { type: "h2", text: "The busy-ness trap" },
      {
        type: "p",
        text: "Teams stay busy because busy is measurable and safe. Outcomes are neither. An outcome forces a team to declare what will be different in the world — and accept the risk of being wrong. When ownership and decision flow are unclear, teams rationally retreat to output: more tickets, more ceremonies, more status.",
      },
      {
        type: "list",
        items: [
          "Replace 'what did you do' with 'what moved' in every review.",
          "Give each initiative one owner and one visible outcome signal.",
          "Cap work in progress hard — motion without finish lines is waste.",
          "Make saying 'this isn't moving the outcome' a rewarded behavior.",
        ],
      },
      {
        type: "quote",
        text: "A team can be perfectly executing the wrong plan. Busyness is the organization's favorite hiding place.",
      },
    ],
  },
  {
    slug: "where-ai-helps-teams",
    title: "Where AI Actually Helps Teams (and Where It Doesn't)",
    excerpt:
      "AI supports teams with clear alignment and execution. It does nothing for teams hiding behind ambiguity — except accelerate the confusion.",
    category: "AI & Modern Ways of Working",
    ...AMITABH,
    date: "2026-01-20",
    readTime: 7,
    image:
      "https://images.pexels.com/photos/8937618/pexels-photo-8937618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true,
    content: [
      {
        type: "p",
        text: "Every leadership offsite now has an AI slide. The promise is real: faster code, instant analysis, shorter cycles. But tools multiply whatever system they land in — clarity gets faster clarity, and chaos gets faster chaos.",
      },
      { type: "h2", text: "Where it genuinely helps" },
      {
        type: "list",
        items: [
          "Inner-loop speed: generation, tests, refactoring, documentation.",
          "Signal extraction: incident forensics, dependency mapping, planning inputs.",
          "Onboarding: new team members query the codebase like a patient senior.",
        ],
      },
      { type: "h2", text: "Where it doesn't" },
      {
        type: "p",
        text: "AI cannot fix unclear ownership, misaligned priorities, or a decision flow that requires fourteen approvals. Point a copilot at a team with eleven priorities and you get more half-finished work, faster, with better formatting.",
      },
      {
        type: "quote",
        text: "Buy the copilots after you've fixed the cockpit — not as a substitute for one.",
      },
    ],
  },
  {
    slug: "leadership-mistake-kills-ownership",
    title: "The #1 Leadership Mistake That Kills Team Ownership",
    excerpt:
      "Control erodes ownership more than leaders realize. Every rescued decision quietly teaches a team to wait for the next rescue.",
    category: "Leadership & Decision Making",
    ...AMITABH,
    date: "2026-01-13",
    readTime: 5,
    image:
      "https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "Leaders who care deeply often cause the problem they're trying to prevent. A decision escalates, the leader answers quickly and well, the team ships — and one more loop of dependency closes. Repeat for a year and you have a brilliant leader surrounded by a passive team.",
      },
      { type: "h2", text: "Ownership is a muscle, control is atrophy" },
      {
        type: "p",
        text: "Ownership grows when people make consequential decisions and live with the results in a safe environment. Every intercepted decision removes a rep. The short-term quality gain costs long-term capability — and the invoice arrives as slow decision flow and disengaged seniors.",
      },
      {
        type: "list",
        items: [
          "Answer questions with questions: 'What do you recommend, and why?'",
          "Define decision boundaries explicitly — then honor them publicly.",
          "Debrief outcomes, don't preempt them.",
        ],
      },
      {
        type: "quote",
        text: "The fastest way to become the bottleneck is to keep proving how useful you are.",
      },
    ],
  },
  {
    slug: "talking-about-flow",
    title: "We Keep Talking About Flow — But Forget What's Actually Moving",
    excerpt:
      "Teams map flow, measure flow, and optimize flow. Leaders want smoother handoffs and fewer bottlenecks. Yet the thing flowing is rarely the thing that matters.",
    category: "Outcome Execution",
    ...TEAM,
    date: "2026-01-06",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/6949364/pexels-photo-6949364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "Flow has become the religion of modern delivery: we map value streams, instrument lead times, and celebrate smoother handoffs. But somewhere in the instrumentation, a question got lost — what, exactly, is flowing?",
      },
      { type: "h2", text: "Tickets flow. Value is supposed to." },
      {
        type: "p",
        text: "If the item crossing your board is a task fragment that no customer could ever recognize, optimizing its speed is polishing a cog so the machine can spin faster in neutral. Flow only matters when the unit of flow is a unit of value.",
      },
      {
        type: "list",
        items: [
          "Make the flowing unit something a customer or stakeholder can feel.",
          "Measure the time from 'start of real work' to 'someone benefited'.",
          "Kill flow metrics for work that shouldn't exist at all.",
        ],
      },
      {
        type: "quote",
        text: "A perfectly optimized conveyor belt into the void is still a conveyor into the void.",
      },
    ],
  },
  {
    slug: "imitation-trap",
    title: "The Imitation Trap: When Teams Copy the Wrong Things from Leaders",
    excerpt:
      "Influence is not optional — it's automatic. The question is what gets replicated when teams unconsciously mirror their leaders.",
    category: "Leadership & Decision Making",
    ...AMITABH,
    date: "2025-12-16",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/7693730/pexels-photo-7693730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "Teams don't copy what leaders say. They copy what leaders do under pressure: how they react to bad news, whether they interrupt, whose time they treat as cheap, what they celebrate and what they quietly excuse. The imitation trap is that this replication is invisible to the person being replicated.",
      },
      { type: "h2", text: "Your calendar is a culture document" },
      {
        type: "p",
        text: "Declare 'people first' while skipping one-on-ones, and the org chart learns which is real. Preach empowerment while rewriting your team's slide at midnight, and every lead in the building learns what empowerment actually means here.",
      },
      {
        type: "list",
        items: [
          "Audit your last ten pressure moments — they are your real values deck.",
          "Reward the messengers of bad news, visibly and immediately.",
          "Model the behavior once, in public, and let the system copy it.",
        ],
      },
      {
        type: "quote",
        text: "Culture is not inherited from the values page. It's inherited from the leader's worst Tuesday.",
      },
    ],
  },
  {
    slug: "boundaries-lead-well",
    title: "Boundaries Aren't Optional — They're the Only Way to Lead Well",
    excerpt:
      "Burnout rarely arrives with alarms. It builds through the steady pull of unbounded availability — and leaders set the temperature.",
    category: "Leadership & Decision Making",
    ...TEAM,
    date: "2025-12-02",
    readTime: 5,
    image:
      "https://images.pexels.com/photos/3760374/pexels-photo-3760374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "People talk about burnout as if it arrives with alarms and flashing lights. In reality it arrives quietly: one more late reply, one more 'quick sync' at 9pm, one more weekend that 'couldn't be helped'. Boundaries don't fail suddenly — they erode in increments nobody names.",
      },
      { type: "h2", text: "Boundaries are a delivery feature" },
      {
        type: "p",
        text: "Exhausted teams don't produce better outcomes; they produce longer recovery curves, worse decisions, and quiet attrition of exactly the people you can least afford to lose. A leader who protects recovery is not being soft — they are protecting the asset that delivers.",
      },
      {
        type: "list",
        items: [
          "Define quiet hours and honor them yourself first.",
          "Push back on urgency inflation: label true emergencies as rare.",
          "Review load monthly, not just performance annually.",
        ],
      },
      {
        type: "quote",
        text: "A team's boundaries are a mirror of its leader's respect for tomorrow's work.",
      },
    ],
  },
  {
    slug: "stop-calling-it-scrum",
    title: "Stop Calling It Scrum If You're Not Delivering to Users",
    excerpt:
      "Events, boards, standups, even clean burndowns — and yet nothing reaches a user. That's not Scrum. It's ceremony with a tan.",
    category: "Team Performance & Design",
    ...AMITABH,
    date: "2025-11-18",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/5313161/pexels-photo-5313161.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "I've walked into far too many teams where Scrum is happening on the surface — events, boards, standups, even clean burndowns. But when I ask what reached a user in the last sprint, the room starts negotiating with the definition of 'reached'.",
      },
      { type: "h2", text: "The increment is the point" },
      {
        type: "p",
        text: "Scrum exists to produce a usable, valuable increment inside a short box of time. If your definition of done ends at 'merged to the release branch', you've built a factory that stores inventory and calls it dinner. Feedback is the meal; the increment is how you get to eat.",
      },
      {
        type: "list",
        items: [
          "Redefine done to include 'a user could touch this'.",
          "Shorten the path to production before adding any new ritual.",
          "Demo to someone who can say 'no' — that's the vitality of the review.",
        ],
      },
      {
        type: "quote",
        text: "If users never see it, the sprint didn't happen. The calendar did.",
      },
    ],
  },
  {
    slug: "no-blockers-all-stuck",
    title: "When 'No Blockers' Means 'We're All Stuck'",
    excerpt:
      "Every day, across thousands of teams, 'No Blockers' gets repeated like a badge of efficiency. Often it's a signal of the opposite.",
    category: "Team Performance & Design",
    ...TEAM,
    date: "2025-11-04",
    readTime: 5,
    image:
      "https://images.pexels.com/photos/7653569/pexels-photo-7653569.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "'No blockers' repeated for fourteen straight standups while nothing ships is not a green light — it's a culture signal. It usually means raising a blocker is expensive: someone will schedule a meeting, assign homework, or read it as weakness.",
      },
      { type: "h2", text: "Blockers are the confession of a healthy system" },
      {
        type: "p",
        text: "Teams that surface blockers early ship faster than teams that heroically absorb them. The standup's job is not to report comfort; it's to transfer pain to the person best positioned to remove it. Silence isn't flow — it's friction going underground.",
      },
      {
        type: "list",
        items: [
          "Thank blockers publicly; treat their removal as leadership work, not admin.",
          "Ask 'what's slower than it should be?' — it surfaces politely hidden blockers.",
          "Track blocker age like incident age. Old blockers compound quietly.",
        ],
      },
      {
        type: "quote",
        text: "A team that never says 'blocked' has stopped telling you the truth.",
      },
    ],
  },
  {
    slug: "automation-real-collaboration",
    title: "Can Automation Create Space for Real Collaboration?",
    excerpt:
      "'Automate everything' became the new productivity gospel. But somewhere along the way, the point — better human work — got automated out of the conversation.",
    category: "AI & Modern Ways of Working",
    ...TEAM,
    date: "2025-10-21",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/7652182/pexels-photo-7652182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "We used to think automation was about efficiency: fewer clicks, faster handovers, shorter cycles. But efficiency was never the finish line — it's the setup. The real question is what humans do with the time the machines return.",
      },
      { type: "h2", text: "Automate the paste, protect the thinking" },
      {
        type: "p",
        text: "Status aggregation, environment setup, regression passes, first-draft documentation — automate these aggressively. Then protect the reclaimed hours for the work that can't be automated: alignment conversations, customer contact, hard trade-offs, and the conflicts healthy teams need to have.",
      },
      {
        type: "list",
        items: [
          "Track reclaimed time and reassign it deliberately — or it evaporates into more meetings.",
          "Automate reporting, never accountability.",
          "Let teams choose their automation targets; they know where the toil lives.",
        ],
      },
      {
        type: "quote",
        text: "Automation buys hours. Leadership decides whether those hours become collaboration or just more queue.",
      },
    ],
  },
  {
    slug: "teams-structured-to-fail",
    title: "Why Most Teams Are Structured to Fail",
    excerpt:
      "Bad structure undermines delivery before work even begins. The org chart decides what's possible long before talent gets a say.",
    category: "Team Performance & Design",
    ...AMITABH,
    date: "2025-10-07",
    readTime: 7,
    image:
      "https://images.pexels.com/photos/7693729/pexels-photo-7693729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "Before the first sprint, before the first line of code, the structure has already placed its bets. Who depends on whom? Who must approve? Where does context live? Teams don't fail loudly at the end — they fail silently at the design stage.",
      },
      { type: "h2", text: "The anatomy of a failing structure" },
      {
        type: "list",
        items: [
          "Teams organized around components, so every feature crosses three of them.",
          "Accountability split from authority: owners of outcomes without control of inputs.",
          "Shared people: '10% of this person's time' is where priorities go to die.",
          "Handoffs framed as collaboration — delivery by relay race.",
        ],
      },
      {
        type: "p",
        text: "The fix is rarely heroic effort inside the structure; it's redrawing the structure around outcomes. Durable, cross-functional teams with end-to-end mandates beat internally-optimized silos every single quarter.",
      },
      {
        type: "quote",
        text: "You cannot scrum your way out of a structure that makes shipping somebody else's job.",
      },
    ],
  },
  {
    slug: "accountability-vanishes",
    title: "When Accountability Vanishes — Who Holds the Line for Delivery?",
    excerpt:
      "Delivery depends on an invisible thread connecting commitment, clarity, and follow-through. When that thread frays, everyone notices except the process.",
    category: "Outcome Execution",
    ...TEAM,
    date: "2025-09-23",
    readTime: 6,
    image:
      "https://images.pexels.com/photos/7433919/pexels-photo-7433919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "In every organization, delivery depends on more than plans and processes. It depends on accountability — the invisible thread connecting commitment, clarity, and follow-through. When that thread breaks, dashboards stay green while dates quietly move.",
      },
      { type: "h2", text: "Accountability is designed, not demanded" },
      {
        type: "p",
        text: "Vague ownership produces vigorous blamelessness. 'The team owns it' often means nobody does. Real accountability systems name one owner per outcome, make progress legible weekly, and treat missed commitments as system feedback — not personal failure.",
      },
      {
        type: "list",
        items: [
          "One owner per outcome, named in the same sentence as the outcome.",
          "A weekly signal the owner publishes themselves — no proxies.",
          "Misses trigger a 'what did the system do?' review, not a courtroom.",
        ],
      },
      {
        type: "quote",
        text: "Where everyone is responsible, no one is — and the calendar keeps the receipts.",
      },
    ],
  },
  {
    slug: "beyond-work-items-ai-era",
    title: "Beyond Work Items: Rethinking Project Management in the AI Era",
    excerpt:
      "For decades, project management ran on one artifact: the work item. When AI can decompose, track, and report, what remains human?",
    category: "AI & Modern Ways of Working",
    ...TEAM,
    date: "2025-09-09",
    readTime: 7,
    image:
      "https://images.pexels.com/photos/38964725/pexels-photo-38964725.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "For decades, project management relied on one central artifact: the work item. Tasks, stories, issues — broken down, logged, and tracked across boards. AI is quietly absorbing this mechanical layer: decomposition, estimation drafts, status aggregation, risk flagging from patterns.",
      },
      { type: "h2", text: "What remains when the clipboard learns to think" },
      {
        type: "p",
        text: "What remains is the part that was always the real job: negotiating priorities, reading the room, deciding what not to build, protecting focus, and holding the line between stakeholders and teams. Project management is graduating from ticket administration to judgment infrastructure.",
      },
      {
        type: "list",
        items: [
          "Automate status; never automate a decision.",
          "Spend the saved hours on alignment where misalignment is costliest.",
          "Treat AI plans as drafts to argue with, not orders to execute.",
        ],
      },
      {
        type: "quote",
        text: "The clipboard is learning to think. The leader's job is to keep judging.",
      },
    ],
  },
  {
    slug: "moving-fast-cutting-conversations",
    title: "Are We Moving Fast or Cutting Conversations Short?",
    excerpt:
      "Short meetings, quick cycles, streamlined rituals — on paper it looks efficient. The quality of outcomes tells a different story.",
    category: "Outcome Execution",
    ...AMITABH,
    date: "2025-08-26",
    readTime: 5,
    image:
      "https://images.pexels.com/photos/6950048/pexels-photo-6950048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false,
    content: [
      {
        type: "p",
        text: "Modern teams pride themselves on speed. Short meetings, quick cycles, streamlined rituals — all designed to keep momentum high. On paper it looks efficient. But watch closely and you'll often see something else: alignment debt accumulating in the gaps where conversations used to be.",
      },
      { type: "h2", text: "Speed is resolution times direction" },
      {
        type: "p",
        text: "The expensive conversations are the ones about trade-offs: what we're not doing, what 'done' honestly means, who decides when we disagree. Cut those short and the disagreement doesn't vanish — it re-emerges as rework, polite sabotage, and the meeting after the meeting.",
      },
      {
        type: "list",
        items: [
          "Shorten status, lengthen decisions — not the reverse.",
          "End debates with a named decider and a written 'why'.",
          "Treat recurring confusion as a skipped conversation, not a people problem.",
        ],
      },
      {
        type: "quote",
        text: "The conversation you skip today returns as the escalation you attend next quarter.",
      },
    ],
  },
];
