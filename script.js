const cards = Array.from(document.querySelectorAll(".interview-card"));
const toggles = Array.from(document.querySelectorAll(".accordion-toggle"));
const toggleAllButton = document.querySelector("#toggle-all");
const searchInput = document.querySelector("#card-search");
const emptyState = document.querySelector("#empty-state");
const pageViews = Array.from(document.querySelectorAll(".page-view"));
const navLinks = Array.from(document.querySelectorAll(".side-nav__link[href]"));
const personaStreamList = document.querySelector("#personas-stream-list");
const valueStreamList = document.querySelector("#value-stream-list");
const personaTabs = Array.from(document.querySelectorAll(".personas-tab"));
const personaPanels = Array.from(document.querySelectorAll(".personas-tab-panel"));
const personaExpandAllButton = document.querySelector("#personas-expand-all");
const personaCollapseAllButton = document.querySelector("#personas-collapse-all");

const personaStreams = [
  {
    name: "Acquire",
    description: "Acquire focuses on how customers evaluate, buy, integrate, and adopt Open GI products and services. It covers both commercial buying decisions and technical adoption decisions. This stream is concerned with growth, operational efficiency, API quality, security, compliance, stability, scalability, trusted data, total cost of ownership, and confidence in the platform.",
    personas: [
      {
        name: "CEO / Buyer",
        summary: "Senior commercial decision-maker focused on business performance, growth, cost control, risk, and long-term platform value.",
        role: "The CEO / Buyer is the senior commercial decision-maker. They are accountable for business performance, customer access, insurer relationships, cost control, regulatory pressure, growth, and the commercial risk of platform change. They are not only buying technology. They are deciding whether the platform can support the business safely, commercially, and strategically.",
        characteristics: [
          "Commercially focused, strategic, risk-aware, and outcome-led.",
          "Values stability, speed to value, transparency, governance, referenceability, and control of critical data.",
          "Evaluates vendors based on ecosystem fit, including CRM, data lake, cloud strategy, integration capability, and operating model fit.",
          "Values reusability, consistency, and integration capability across multiple brands."
        ],
        goals: [
          "Protect volume before pursuing growth.",
          "Avoid market shrinkage during platform change.",
          "Improve combined ratio and operating leverage.",
          "Reduce unit cost and reinvest savings into rate.",
          "Simplify the estate to fewer core operational systems.",
          "Use data to win capacity conversations.",
          "Gain trustworthy MI for faster decision-making.",
          "Scale without simply adding headcount."
        ],
        painPoints: [
          "Revenue leakage during change.",
          "Panel risk and aggregator volatility.",
          "Brittle or sprawling technology.",
          "Re-keying that drives error and cost.",
          "Slow or untrusted MI.",
          "Delayed visibility of loss ratio and profitability.",
          "Pressure to simplify technology while remaining open to ecosystem innovation."
        ],
        decisionRole: "The CEO / Buyer is influenced by operations leaders, CTO or CIO stakeholders, trading and placement teams, and compliance or risk teams. Their decision criteria include phase-based delivery, operational efficiency, MI quality and timeliness, ease of integration, regulatory evidence, and commercial terms that match cash and EBIT cadence.",
        opportunities: [
          "Better executive-level value story.",
          "Trusted MI and reporting.",
          "Operational stability and observability.",
          "Clear compliance evidence.",
          "Integration confidence across brands.",
          "Reduced total cost of ownership.",
          "Clear pricing and billing model.",
          "Composable architecture narrative.",
          "Transparent data ownership."
        ]
      },
      {
        name: "CTO",
        summary: "Technical strategy owner focused on architecture fit, integration quality, scalability, resilience, and future operating model.",
        role: "The CTO owns the technical strategy and decides whether the platform fits the organisation’s long-term architecture, integration model, scalability needs, and future operating model. They are less focused on individual API calls and more focused on whether the platform can become part of a sustainable, flexible, and scalable technology estate.",
        characteristics: [
          "Strategic, architecture-led, technically pragmatic, and risk-aware.",
          "Cares about platform evolution, integration quality, data flows, resilience, API maturity, cloud readiness, observability, and technical governance.",
          "Wants proof that the platform can support multiple brands, products, channels, and future change without creating heavy vendor dependency."
        ],
        goals: [
          "Reduce technical debt.",
          "Improve integration consistency.",
          "Support scalable architecture.",
          "Enable automation across journeys.",
          "Avoid brittle point-to-point integrations.",
          "Improve data availability across the business.",
          "Support composable architecture.",
          "Reduce reliance on vendor-led change.",
          "Align the platform with cloud, CRM, data lake, and wider ecosystem strategy."
        ],
        painPoints: [
          "Lack of orchestration guidance.",
          "Incomplete or hard-to-access API documentation.",
          "Unclear integration patterns.",
          "Difficulty mapping platform data into centralised group systems.",
          "Limited sandbox or mock environments.",
          "Inconsistent API behaviour.",
          "Concerns about long-term extensibility."
        ],
        decisionRole: "The CTO is a key technical approver. They influence whether Open GI is seen as technically credible, future-ready, and suitable for enterprise adoption. They ask whether the platform can integrate with the ecosystem, automate key journeys, provide the required data, scale across brands or business units, and support proper observability and governance.",
        opportunities: [
          "Clear API strategy.",
          "Developer portal.",
          "API orchestration guidance.",
          "End-to-end journey examples.",
          "Sandbox and mock environments.",
          "Event stream documentation.",
          "Integration patterns for CRM, data lake, and cloud ecosystems.",
          "Observability and platform health visibility.",
          "Reusable architecture guidance.",
          "Reduced vendor dependency."
        ]
      },
      {
        name: "Development Manager / Integrator",
        summary: "Practical implementation lead focused on API clarity, documentation, testing, automation, and delivery confidence.",
        role: "The Development Manager / Integrator is responsible for practical implementation. They assess whether the platform is easy to integrate with, test, document, automate, and maintain. They are close to the actual delivery work and feel the impact of poor documentation, inconsistent APIs, unclear examples, and missing technical environments.",
        characteristics: [
          "Hands-on, practical, implementation-focused, and detail-sensitive.",
          "Focuses on usability, clarity, and real implementation effort.",
          "May work internally or through external development agencies.",
          "Wants predictable, well-structured API behaviour."
        ],
        goals: [
          "Access APIs immediately without unnecessary bureaucracy.",
          "Understand whether APIs are intuitive and logically structured.",
          "Chain APIs into broker-specific journeys.",
          "Build reusable patterns across multiple brands or products.",
          "Reduce friction in development cycles.",
          "Avoid vendor dependency.",
          "Use events and extensibility to automate workflows."
        ],
        painPoints: [
          "Lack of orchestration guidance.",
          "API documentation behind login or incomplete.",
          "Difficulty ingesting or mapping data into centralised group systems.",
          "No sandbox, mock environments, or usable examples.",
          "Unclear end-to-end journey patterns.",
          "Slow delivery when simple changes require vendor involvement."
        ],
        decisionRole: "They influence implementation confidence and technical feasibility. Their non-negotiables include APIs covering required end-to-end journeys such as quote, bind, and renewal; clear documentation; a well-structured developer portal; sandbox or mock environments; and availability of required data for ingestion.",
        opportunities: [
          "Developer portal improvements.",
          "Clear API documentation.",
          "Self-service sandbox access.",
          "Mock environments.",
          "Quote to bind to renewal API examples.",
          "Reusable boilerplates.",
          "API testing tools.",
          "Event stream guidance.",
          "Integration quickstarts.",
          "Reduced vendor dependency."
        ]
      },
      {
        name: "CISO",
        summary: "Security and risk authority focused on compliance evidence, data protection, resilience, auditability, and third-party risk.",
        role: "The CISO is responsible for ensuring the platform and its integrations meet security, compliance, resilience, regulatory, and data protection expectations. They may not be the buyer, but they can approve, delay, challenge, or block adoption if security and compliance risks are not clear.",
        characteristics: [
          "Risk-focused, evidence-led, compliance-driven, and protective of business and customer data.",
          "Cares about third-party risk, data ownership, auditability, resilience, access control, regulatory evidence, incident readiness, and security patterns.",
          "Needs clarity rather than reassurance. They want proof."
        ],
        goals: [
          "Minimise third-party risk.",
          "Protect customer and business data.",
          "Ensure GDPR and FCA alignment.",
          "Support ISO or SOC 2 expectations.",
          "Improve auditability.",
          "Ensure integrations follow secure patterns.",
          "Avoid hidden data exposure.",
          "Reduce operational and regulatory risk."
        ],
        painPoints: [
          "Lack of transparent security evidence.",
          "Unclear data ownership or IP boundaries.",
          "Unclear access models.",
          "Limited auditability.",
          "Insufficient evidence of regulatory compliance.",
          "Concerns about third-party integration risk.",
          "Weak documentation around data flows."
        ],
        decisionRole: "The CISO influences procurement confidence, technical sign-off, risk approval, and compliance readiness. They ask where the data goes, who owns the data, how access is controlled, how activity is audited, how the platform supports GDPR and FCA obligations, what happens if something fails, and how compliance can be proved.",
        opportunities: [
          "Clear security and compliance documentation.",
          "GDPR and FCA evidence.",
          "ISO / SOC 2 readiness material.",
          "Data ownership transparency.",
          "Audit logs and access control visibility.",
          "Secure API patterns.",
          "Integration security guidance.",
          "Operational resilience evidence.",
          "Incident and observability reporting.",
          "Compliance-friendly platform documentation."
        ]
      }
    ]
  },
  {
    name: "Distribute",
    description: "Distribute focuses on how insurance products are developed, placed, traded, distributed, monitored, and optimised across insurers, MGAs, delegated authority brokers, underwriters, and broker channels. This stream is concerned with distribution reach, capacity, quote and bind journeys, broker trust, underwriting profitability, operational efficiency, product development, observability, performance, data, and ROI.",
    personas: [
      {
        name: "Insurer Distribution / Product Manager",
        summary: "Expands broker distribution while protecting underwriting profitability and product performance.",
        role: "Responsible for expanding broker distribution, protecting underwriting profitability, monitoring product performance, and ensuring products reach the right market efficiently.",
        characteristics: [
          "Commercially focused on profitable reach and broker performance.",
          "Balances distribution quality, compliance evidence, and portfolio performance insight.",
          "Needs scalable tooling that supports reliable product monitoring."
        ],
        goals: [
          "Grow high-quality broker distribution.",
          "Protect profitability and claims ratios.",
          "Onboard brokers efficiently.",
          "Monitor performance with reliable MI."
        ],
        painPoints: [
          "Limited visibility of broker performance.",
          "Slow onboarding or product change processes.",
          "Unclear distribution quality signals.",
          "Manual portfolio monitoring."
        ],
        decisionRole: "Influences whether distribution tooling supports profitable scale, compliance confidence, broker onboarding, and ongoing product performance management.",
        opportunities: [
          "Portfolio performance dashboards.",
          "Broker onboarding workflows.",
          "Distribution quality reporting.",
          "Claims ratio and profitability insight.",
          "Compliance evidence packs.",
          "Scalable distribution tooling."
        ]
      },
      {
        name: "MGA / Distribution Owner",
        summary: "Makes MGA products easy for brokers to access, trade, manage, and trust.",
        role: "Responsible for making MGA products easy to access, trade, manage, and trust across broker panels and capacity relationships.",
        characteristics: [
          "Trading-led and adoption-focused.",
          "Cares about broker panel trust, appetite clarity, and quote and bind performance.",
          "Needs observability across migration, capacity, and distribution performance."
        ],
        goals: [
          "Increase broker adoption.",
          "Maintain stable capacity relationships.",
          "Clarify appetite and trading rules.",
          "Keep migration continuity and trading performance visible."
        ],
        painPoints: [
          "Broker uncertainty during change.",
          "Weak quote and bind visibility.",
          "Capacity relationship risk.",
          "Limited distribution performance insight."
        ],
        decisionRole: "Shapes product and platform choices by assessing whether brokers can trust, understand, and trade MGA products efficiently.",
        opportunities: [
          "Broker panel trust indicators.",
          "Quote and bind performance reporting.",
          "Appetite guidance.",
          "Migration dashboards.",
          "Trading observability.",
          "Capacity relationship insight."
        ]
      },
      {
        name: "Product & Distribution Owner, DA Scheme Broker",
        summary: "Owns delegated authority scheme performance across build, governance, optimisation, and distribution.",
        role: "Owns product or scheme performance across build, governance, distribution, and sometimes wholesale relationships.",
        characteristics: [
          "Product-led, governance-aware, and data-driven.",
          "Focuses on delegated authority performance, GWP growth, stable insurer capacity, and product optimisation.",
          "Needs self-service dashboards and flexible configuration."
        ],
        goals: [
          "Grow GWP safely.",
          "Optimise schemes using data.",
          "Support insurer reporting.",
          "Control product changes and risk domains."
        ],
        painPoints: [
          "Limited no-code configuration.",
          "Slow pricing or referral analysis.",
          "Weak sandbox environments.",
          "Inflexible risk domains and product change control."
        ],
        decisionRole: "Evaluates whether the platform helps manage delegated authority schemes with governance, data-led reporting, configuration control, and performance insight.",
        opportunities: [
          "Self-service dashboards.",
          "No-code configuration.",
          "Referral analysis.",
          "Pricing simulation.",
          "Sandbox environments.",
          "Flexible risk domains.",
          "Data-led insurer reporting."
        ]
      },
      {
        name: "Delegated Authority Broker, Open Market",
        summary: "Places risks that do not fit straightforward delegated schemes and needs fast, visible open market trading.",
        role: "Places risks that may not fit straightforward delegated schemes and needs control over submission, quote progress, referrals, and market access.",
        characteristics: [
          "Fast-moving, control-focused, and market-aware.",
          "Values appetite clarity, submission visibility, stable capacity, and reduced re-keying.",
          "Needs low-friction open market trading."
        ],
        goals: [
          "Place non-standard risks efficiently.",
          "Understand appetite and capacity quickly.",
          "Track quote progress and referrals.",
          "Reduce duplicated data entry."
        ],
        painPoints: [
          "Unclear appetite fit.",
          "Poor submission status visibility.",
          "Re-keying across systems.",
          "Slow referral handling."
        ],
        decisionRole: "Influences adoption by judging whether the trading journey improves placement speed, market control, and referral transparency.",
        opportunities: [
          "Open market trading flows.",
          "Submission visibility.",
          "Appetite matching.",
          "Referral tracking.",
          "Quote progress updates.",
          "Re-keying reduction."
        ]
      },
      {
        name: "Underwriter",
        summary: "Protects underwriting quality, manages appetite, reviews referrals, and safeguards portfolio performance.",
        role: "Responsible for protecting underwriting quality, assessing risk, reviewing referrals, managing appetite, and ensuring delegated trading does not compromise portfolio performance.",
        characteristics: [
          "Risk-led, evidence-focused, and portfolio-aware.",
          "Cares about referral reasons, claims insight, fraud insight, partner profitability, and rule clarity.",
          "Needs dashboards that support fast and consistent decisions."
        ],
        goals: [
          "Improve risk selection.",
          "Protect capacity outcomes.",
          "Maintain appetite clarity.",
          "Understand partner profitability and portfolio trends."
        ],
        painPoints: [
          "Limited visibility of referral drivers.",
          "Weak claims or fraud context.",
          "Unclear product and rule visibility.",
          "Slow underwriting decision support."
        ],
        decisionRole: "Influences whether delegated distribution can scale without weakening underwriting control, profitability, or appetite discipline.",
        opportunities: [
          "Underwriting dashboards.",
          "Referral reason analytics.",
          "Claims and fraud insight.",
          "Appetite management tools.",
          "Partner profitability reporting.",
          "Product and rule visibility."
        ]
      },
      {
        name: "Distribution CEO / Senior Commercial Owner",
        summary: "Owns the strategic and commercial performance of the distribution model.",
        role: "Responsible for the strategic and commercial performance of the distribution model, including profitable distribution, ROI, partner performance, and evidence of commercial value.",
        characteristics: [
          "Strategic, commercially accountable, and outcome-led.",
          "Looks across capacity performance, broker adoption, market reach, operational efficiency, and partner performance.",
          "Needs strategic MI that proves value."
        ],
        goals: [
          "Improve ROI and profitable growth.",
          "Expand market reach.",
          "Increase broker adoption.",
          "Improve operational efficiency and partner performance."
        ],
        painPoints: [
          "Unclear commercial value evidence.",
          "Fragmented partner and capacity reporting.",
          "Limited strategic MI.",
          "Difficulty connecting operational metrics to ROI."
        ],
        decisionRole: "Sets direction and approves investment based on whether the distribution model can prove commercial value, efficient growth, and partner performance.",
        opportunities: [
          "Strategic MI.",
          "ROI dashboards.",
          "Capacity performance reporting.",
          "Broker adoption insight.",
          "Partner performance scorecards.",
          "Commercial value evidence."
        ]
      }
    ]
  },
  {
    name: "Serve",
    description: "Serve focuses on how agents and consumers use the platform once products and services are live. It covers agent journeys, consumer journeys, call centre and web journeys, self-service, assisted service, policy changes, renewals, documentation, payments, performance, compliance, accessibility, conversion, and customer outcomes.",
    personas: [
      {
        name: "High-Volume Agent",
        summary: "Handles frequent customer interactions and needs fast, accurate, compliant workflows.",
        role: "Handles frequent customer interactions across inbound calls, outbound calls, quotes, renewals, MTAs, payments, document requests, and service queries.",
        characteristics: [
          "Task-focused, time-pressured, and accuracy-driven.",
          "Needs low latency, clear workflows, document generation, and payment capability.",
          "Cares about compliance, workload, web-to-agent accuracy, and outcomes."
        ],
        goals: [
          "Complete interactions quickly and accurately.",
          "Maintain compliance while managing workload.",
          "Generate documents and take payments without friction.",
          "Deliver better customer outcomes."
        ],
        painPoints: [
          "Slow screens or processing.",
          "Unclear workflows.",
          "Manual document or payment steps.",
          "Inaccurate web-to-agent handoff."
        ],
        decisionRole: "Influences operational adoption by revealing whether day-to-day workflows support speed, accuracy, compliance, and customer outcomes.",
        opportunities: [
          "Low-latency journeys.",
          "Clear guided workflows.",
          "Document generation.",
          "Payment capability.",
          "Workload management.",
          "Web-to-agent accuracy."
        ]
      },
      {
        name: "Specialist Agent",
        summary: "Handles complex, niche, regulated, or non-standard journeys requiring judgement and guidance.",
        role: "Handles complex, niche, regulated, or non-standard customer journeys that require specialist product knowledge, judgement, and support for edge cases.",
        characteristics: [
          "Expert, judgement-led, and detail-sensitive.",
          "Focuses on specialist products, appetite, underwriting guidance, referrals, and compliance.",
          "Needs context-rich journeys for complex risk."
        ],
        goals: [
          "Resolve complex cases confidently.",
          "Access clear underwriting and appetite guidance.",
          "Handle referrals and regulated journeys safely.",
          "Support niche product needs."
        ],
        painPoints: [
          "Poor support for edge cases.",
          "Limited complex risk context.",
          "Unclear underwriting guidance.",
          "Compliance risk in non-standard journeys."
        ],
        decisionRole: "Highlights whether the platform can support specialist judgement, compliant handling, and complex journey resolution.",
        opportunities: [
          "Specialist journey patterns.",
          "Underwriting guidance.",
          "Referral support.",
          "Complex risk context.",
          "Niche journey configuration.",
          "Compliance prompts."
        ]
      },
      {
        name: "End-to-End Multi-Skilled Agent",
        summary: "Supports customers across the policy lifecycle and needs continuity, context, and consistent UI patterns.",
        role: "Supports customers across multiple stages of the policy lifecycle, including quote, sale, payment, MTA, renewal, documentation, and servicing.",
        characteristics: [
          "Flexible, customer-context focused, and lifecycle-aware.",
          "Values continuity, reduced handoffs, first-contact resolution, and consistent UI patterns.",
          "Needs a unified omni-system experience."
        ],
        goals: [
          "Resolve issues first time.",
          "Keep customer context across journeys.",
          "Reduce handoffs and duplicated work.",
          "Manage workload across multiple task types."
        ],
        painPoints: [
          "Fragmented systems.",
          "Inconsistent interface patterns.",
          "Lost customer context.",
          "Too many handoffs between teams or tools."
        ],
        decisionRole: "Shows whether the platform enables cross-lifecycle service, operational continuity, and a unified agent experience.",
        opportunities: [
          "Unified omni-system experience.",
          "Consistent UI patterns.",
          "Customer context panels.",
          "First-contact resolution support.",
          "Cross-journey workload management.",
          "Reduced handoff workflows."
        ]
      },
      {
        name: "Digital Self-Service Consumer",
        summary: "Wants to complete insurance tasks independently online with clarity, confidence, and confirmation.",
        role: "Wants to complete insurance tasks independently online, from understanding cover and price through to completing changes and receiving confirmation.",
        characteristics: [
          "Self-sufficient, convenience-led, and confidence-seeking.",
          "Cares about clear cover, fair pricing, frictionless journeys, accessibility, and confirmation.",
          "Expects digital journeys to be measurable and outcome-focused."
        ],
        goals: [
          "Complete tasks without calling.",
          "Understand cover and price clearly.",
          "Receive confirmation and reassurance.",
          "Use accessible journeys on their own terms."
        ],
        painPoints: [
          "Unclear cover wording.",
          "Friction in digital flows.",
          "Lack of confirmation.",
          "Poor accessibility or self-service support."
        ],
        decisionRole: "Their behaviour indicates whether self-service journeys are clear, accessible, trusted, and effective enough to reduce assisted demand.",
        opportunities: [
          "Self-service journeys.",
          "Cover clarity.",
          "Confirmation messaging.",
          "Accessibility improvements.",
          "Digital measurement.",
          "Customer outcome insights."
        ]
      },
      {
        name: "Assisted Channel Consumer",
        summary: "Moves between digital and human-supported channels and needs continuity without repeating information.",
        role: "Moves between digital and human-supported channels when reassurance, support, or completion help is needed.",
        characteristics: [
          "Reassurance-seeking and channel-flexible.",
          "Cares about web-to-agent handoff, customer context, journey state, and avoiding repeated information.",
          "Needs conversion and outcome visibility across channels."
        ],
        goals: [
          "Get human help without losing progress.",
          "Avoid repeating information.",
          "Understand the current journey state.",
          "Complete tasks with reassurance."
        ],
        painPoints: [
          "Broken handoffs.",
          "Repeated questions.",
          "Unclear journey state.",
          "Poor visibility of conversion outcomes."
        ],
        decisionRole: "Reveals whether assisted and digital channels work together as one journey rather than disconnected experiences.",
        opportunities: [
          "Web-to-agent handoff.",
          "Channel continuity.",
          "Customer context sharing.",
          "Journey state visibility.",
          "Outcome measurement.",
          "Conversion observability."
        ]
      },
      {
        name: "Price and Cover-Conscious Consumer",
        summary: "Looks for suitable cover at a price they understand, compare, and trust.",
        role: "Focused on getting suitable insurance cover at a price they understand and trust, especially when comparing options or renewing.",
        characteristics: [
          "Value-aware, detail-checking, and trust-sensitive.",
          "Focuses on cover clarity, price transparency, exclusions, assumptions, fair pricing, and renewal confidence.",
          "Needs explanations of price changes."
        ],
        goals: [
          "Understand what is covered and excluded.",
          "Compare options confidently.",
          "Trust renewal and price changes.",
          "Choose suitable cover without confusion."
        ],
        painPoints: [
          "Unclear assumptions or exclusions.",
          "Opaque price changes.",
          "Difficult comparison.",
          "Low confidence that cover is suitable."
        ],
        decisionRole: "Signals whether proposition, content, and pricing explanations support fair value, confidence, and informed decisions.",
        opportunities: [
          "Cover comparison.",
          "Price transparency.",
          "Renewal explanations.",
          "Exclusion and assumption clarity.",
          "Fair pricing content.",
          "Cover suitability prompts."
        ]
      },
      {
        name: "Accessibility or Vulnerability Needs Consumer",
        summary: "May need additional support, inclusive content, channel choice, and fair outcomes.",
        role: "May need additional support due to accessibility needs, lower digital confidence, financial vulnerability, comprehension challenges, or situational stress.",
        characteristics: [
          "Support-sensitive, context-dependent, and outcome-vulnerable.",
          "Needs WCAG-aligned journeys, plain language, inclusive content, assisted support, accessible documentation, and channel choice.",
          "Consumer Duty and fair outcomes are central."
        ],
        goals: [
          "Use accessible journeys and documentation.",
          "Understand information in plain language.",
          "Choose the right channel for support.",
          "Reach fair outcomes without unnecessary barriers."
        ],
        painPoints: [
          "Inaccessible forms or documents.",
          "Complex language.",
          "Limited assisted support.",
          "Poor recognition of vulnerability or stress."
        ],
        decisionRole: "Helps assess whether journeys meet accessibility, Consumer Duty, inclusive design, and fair outcome expectations.",
        opportunities: [
          "WCAG-aligned journeys.",
          "Plain language content.",
          "Accessible documentation.",
          "Assisted support pathways.",
          "Channel choice.",
          "Fair outcome measurement."
        ]
      }
    ]
  }
];

const valueStreams = [
  {
    name: "Acquire",
    purpose: "Acquire focuses on how customers evaluate, buy, integrate, and adopt Open GI products and services.",
    serves: [
      "CEO / Buyer",
      "CTO",
      "Development Manager / Integrator",
      "CISO"
    ],
    understand: [
      "Why customers choose or reject a platform.",
      "What commercial and technical confidence they need.",
      "How API quality, integration, compliance, and stability influence adoption.",
      "What evidence is needed to support buying and procurement decisions.",
      "How the platform supports growth, scalability, and operational efficiency."
    ],
    themes: [
      "APIs and developer experience.",
      "Compliance and regulatory assurance.",
      "Operational stability and observability.",
      "Trusted MI and data insights.",
      "Total cost of ownership.",
      "Integration confidence.",
      "Security and third-party risk."
    ]
  },
  {
    name: "Distribute",
    purpose: "Distribute focuses on how insurance products are developed, placed, traded, distributed, monitored, and optimised.",
    serves: [
      "Insurer Distribution / Product Manager",
      "MGA / Distribution Owner",
      "Product & Distribution Owner, DA Scheme Broker",
      "Delegated Authority Broker, Open Market",
      "Underwriter",
      "Distribution CEO / Senior Commercial Owner"
    ],
    understand: [
      "How insurer capacity is placed and managed.",
      "How brokers quote, bind, refer, and trade business.",
      "How product owners optimise schemes and delegated authority products.",
      "How underwriting quality and profitability are protected.",
      "How distribution performance, broker adoption, and ROI are measured."
    ],
    themes: [
      "Quote and bind journeys.",
      "Broker panel trust.",
      "Flexible risk domains.",
      "Broker activation.",
      "Capacity outcome reporting.",
      "Referral visibility.",
      "Scheme performance dashboards.",
      "Product optimisation.",
      "Trading observability.",
      "Partner profitability insight."
    ]
  },
  {
    name: "Serve",
    purpose: "Serve focuses on how agents and consumers use the platform once products and services are live.",
    serves: [
      "High-Volume Agent",
      "Specialist Agent",
      "End-to-End Multi-Skilled Agent",
      "Digital Self-Service Consumer",
      "Assisted Channel Consumer",
      "Price and Cover-Conscious Consumer",
      "Accessibility or Vulnerability Needs Consumer"
    ],
    understand: [
      "How agents complete operational and customer-facing tasks.",
      "How consumers move through digital, assisted, and call centre journeys.",
      "Where friction appears in quote, sale, MTA, renewal, payment, and document journeys.",
      "How accessibility, self-service, compliance, and customer outcomes are supported.",
      "How performance and usability affect both agent productivity and customer experience."
    ],
    themes: [
      "Customisable and adaptive agent UI.",
      "Low latency and high performance processing.",
      "Regulatory, quality, and script compliance.",
      "Workload management.",
      "Document and pack generation.",
      "Payment capability.",
      "Unified omni-system experience.",
      "Web-to-agent accuracy.",
      "Self-service.",
      "Accessibility and inclusive journeys.",
      "Customer outcome measurement."
    ]
  }
];

const listItems = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const setCardExpanded = (button, shouldExpand) => {
  const panelId = button.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  const label = button.querySelector(".accordion-toggle__text");

  button.setAttribute("aria-expanded", String(shouldExpand));
  label.textContent = shouldExpand ? "Collapse" : "Expand";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const syncToggleAllLabel = () => {
  if (!toggleAllButton) return;

  const visibleButtons = cards
    .filter((card) => !card.hidden)
    .map((card) => card.querySelector(".accordion-toggle"));

  const allVisibleExpanded = visibleButtons.length > 0 && visibleButtons.every(
    (button) => button.getAttribute("aria-expanded") === "true"
  );

  toggleAllButton.textContent = allVisibleExpanded ? "Collapse all" : "Expand all";
};

const updateOpenPanelHeights = () => {
  toggles.forEach((button) => {
    if (button.getAttribute("aria-expanded") === "true") {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });

  document.querySelectorAll(".persona-card-toggle[aria-expanded='true']").forEach((button) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });
};

const showPage = (pageName) => {
  const targetPage = pageName === "personas" ? "personas" : "interviews";

  pageViews.forEach((view) => {
    view.hidden = view.dataset.view !== targetPage;
  });

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href") === "#personas" ? "personas" : "interviews";
    const isActive = linkPage === targetPage;

    link.classList.toggle("side-nav__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const getPageFromHash = () => window.location.hash.replace("#", "") || "interviews";

const setPersonasTab = (tabName) => {
  personaTabs.forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.personasTab === tabName));
  });

  personaPanels.forEach((panel) => {
    panel.hidden = panel.dataset.personasPanel !== tabName;
  });

  updateOpenPanelHeights();
};

const setPersonaCardExpanded = (button, shouldExpand) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const label = button.querySelector(".persona-card-toggle__text");

  button.setAttribute("aria-expanded", String(shouldExpand));
  label.textContent = shouldExpand ? "Collapse" : "Expand";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const renderPersonaStreams = () => {
  if (!personaStreamList) return;

  personaStreamList.innerHTML = personaStreams.map((stream, streamIndex) => `
    <section class="personas-stream-section" aria-labelledby="personas-stream-${streamIndex}">
      <div class="personas-stream-section__header">
        <p class="eyebrow">Value stream</p>
        <h2 id="personas-stream-${streamIndex}">${stream.name}</h2>
        <p>${stream.description}</p>
      </div>
      <div class="persona-card-list">
        ${stream.personas.map((persona, personaIndex) => {
          const cardId = `${stream.name.toLowerCase()}-${personaIndex}`.replace(/[^a-z0-9]+/g, "-");
          return `
            <article class="persona-card">
              <div class="persona-card-header">
                <div>
                  <span class="stream-badge">${stream.name}</span>
                  <h3>${persona.name}</h3>
                  <p>${persona.summary}</p>
                </div>
                <button class="persona-card-toggle" type="button" aria-expanded="false" aria-controls="persona-panel-${cardId}">
                  <span class="persona-card-toggle__text">Expand</span>
                  <span class="chevron" aria-hidden="true"></span>
                </button>
              </div>
              <div class="persona-card-content" id="persona-panel-${cardId}">
                <div class="persona-card-content__inner">
                  <div class="persona-detail-block persona-detail-block--wide"><h4>Role</h4><p>${persona.role}</p></div>
                  <div class="persona-detail-block"><h4>Key characteristics</h4>${listItems(persona.characteristics)}</div>
                  <div class="persona-detail-block"><h4>Goals and motivations</h4>${listItems(persona.goals)}</div>
                  <div class="persona-detail-block"><h4>Pain points and challenges</h4>${listItems(persona.painPoints)}</div>
                  <div class="persona-detail-block persona-detail-block--wide"><h4>Decision-making role</h4><p>${persona.decisionRole}</p></div>
                  <div class="persona-detail-block persona-detail-block--wide"><h4>Product opportunities</h4>${listItems(persona.opportunities)}</div>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");
};

const renderValueStreams = () => {
  if (!valueStreamList) return;

  valueStreamList.innerHTML = valueStreams.map((stream) => `
    <article class="value-stream-card">
      <div class="value-stream-card__header">
        <span class="stream-badge">${stream.name}</span>
        <h2>${stream.name}</h2>
      </div>
      <div class="value-stream-card__grid">
        <div class="persona-detail-block persona-detail-block--wide"><h3>Purpose</h3><p>${stream.purpose}</p></div>
        <div class="persona-detail-block"><h3>Who it serves</h3>${listItems(stream.serves)}</div>
        <div class="persona-detail-block"><h3>What this stream helps us understand</h3>${listItems(stream.understand)}</div>
        <div class="persona-detail-block persona-detail-block--wide"><h3>Key product themes</h3>${listItems(stream.themes)}</div>
      </div>
    </article>
  `).join("");
};

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setCardExpanded(button, !isExpanded);
    syncToggleAllLabel();
  });
});

if (toggleAllButton) {
  toggleAllButton.addEventListener("click", () => {
    const visibleCards = cards.filter((card) => !card.hidden);
    const shouldExpand = visibleCards.some(
      (card) => card.querySelector(".accordion-toggle").getAttribute("aria-expanded") === "false"
    );

    visibleCards.forEach((card) => {
      setCardExpanded(card.querySelector(".accordion-toggle"), shouldExpand);
    });

    syncToggleAllLabel();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchableText = `${card.textContent} ${card.dataset.searchContent}`.toLowerCase();
      const isMatch = searchableText.includes(query);

      card.hidden = !isMatch;

      if (isMatch) {
        visibleCount += 1;
      }
    });

    emptyState.hidden = visibleCount !== 0;
    updateOpenPanelHeights();
    syncToggleAllLabel();
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    showPage(link.getAttribute("href").replace("#", ""));
  });
});

personaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setPersonasTab(tab.dataset.personasTab);
  });
});

renderPersonaStreams();
renderValueStreams();

document.querySelectorAll(".persona-card-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setPersonaCardExpanded(button, !isExpanded);
  });
});

if (personaExpandAllButton) {
  personaExpandAllButton.addEventListener("click", () => {
    document.querySelectorAll(".persona-card-toggle").forEach((button) => {
      setPersonaCardExpanded(button, true);
    });
  });
}

if (personaCollapseAllButton) {
  personaCollapseAllButton.addEventListener("click", () => {
    document.querySelectorAll(".persona-card-toggle").forEach((button) => {
      setPersonaCardExpanded(button, false);
    });
  });
}

window.addEventListener("hashchange", () => {
  showPage(getPageFromHash());
});

window.addEventListener("resize", updateOpenPanelHeights);
showPage(getPageFromHash());
syncToggleAllLabel();
