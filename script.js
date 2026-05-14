const streams = [
  {
    name: "Acquire",
    className: "acquire",
    description: "Acquire focuses on how customers evaluate, buy, integrate, and adopt Open GI products and services. It covers both commercial buying decisions and technical adoption decisions. This stream is concerned with growth, operational efficiency, API quality, security, compliance, stability, scalability, trusted data, total cost of ownership, and confidence in the platform.",
    purpose: "Acquire focuses on how customers evaluate, buy, integrate, and adopt Open GI products and services.",
    serves: ["CEO / Buyer", "CTO", "Development Manager / Integrator", "CISO"],
    understands: [
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
    className: "distribute",
    description: "Distribute focuses on how insurance products are developed, placed, traded, distributed, monitored, and optimised across insurers, MGAs, delegated authority brokers, underwriters, and broker channels. This stream is concerned with distribution reach, capacity, quote and bind journeys, broker trust, underwriting profitability, operational efficiency, product development, observability, performance, data, and ROI.",
    purpose: "Distribute focuses on how insurance products are developed, placed, traded, distributed, monitored, and optimised.",
    serves: ["Insurer Distribution / Product Manager", "MGA / Distribution Owner", "Product & Distribution Owner, DA Scheme Broker", "Delegated Authority Broker, Open Market", "Underwriter", "Distribution CEO / Senior Commercial Owner"],
    understands: [
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
    className: "serve",
    description: "Serve focuses on how agents and consumers use the platform once products and services are live. It covers agent journeys, consumer journeys, call centre and web journeys, self-service, assisted service, policy changes, renewals, documentation, payments, performance, compliance, accessibility, conversion, and customer outcomes.",
    purpose: "Serve focuses on how agents and consumers use the platform once products and services are live.",
    serves: ["High-Volume Agent", "Specialist Agent", "End-to-End Multi-Skilled Agent", "Digital Self-Service Consumer", "Assisted Channel Consumer", "Price and Cover-Conscious Consumer", "Accessibility or Vulnerability Needs Consumer"],
    understands: [
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

const personas = [
  {
    name: "CEO / Buyer",
    stream: "Acquire",
    profileBasis: "Detailed persona profile from the value stream work",
    summary: "Senior commercial decision-maker focused on business performance, growth, cost control, risk, and long-term platform value.",
    role: "The CEO / Buyer is the senior commercial decision-maker. They are accountable for business performance, customer access, insurer relationships, cost control, regulatory pressure, growth, and the commercial risk of platform change. They are not only buying technology. They are deciding whether the platform can support the business safely, commercially, and strategically.",
    keyCharacteristics: ["Commercially focused, strategic, risk-aware, and outcome-led.", "Values stability, speed to value, transparency, governance, referenceability, and control of critical data.", "Evaluates vendors based on ecosystem fit, including CRM, data lake, cloud strategy, integration capability, and operating model fit.", "Values reusability, consistency, and integration capability across multiple brands."],
    goals: ["Protect volume before pursuing growth.", "Avoid market shrinkage during platform change.", "Improve combined ratio and operating leverage.", "Reduce unit cost and reinvest savings into rate.", "Simplify the estate to fewer core operational systems.", "Use data to win capacity conversations.", "Improve loss ratio and profitability.", "Future-proof the technology footprint.", "Gain trustworthy MI for faster decision-making.", "Scale without simply adding headcount."],
    painPoints: ["Revenue leakage during change.", "Panel risk and aggregator volatility.", "Brittle or sprawling technology.", "Re-keying that drives error and cost.", "Slow or untrusted MI.", "Delayed visibility of loss ratio and profitability.", "Tension between “one system” messaging and the real need for composable architecture.", "Pressure to simplify technology while remaining open to ecosystem innovation."],
    decisionRole: "The CEO / Buyer is influenced by operations leaders, CTO or CIO stakeholders, trading and placement teams, and compliance or risk teams. Their decision criteria include phase-based delivery, operational efficiency, MI quality and timeliness, ease of integration, regulatory evidence, and commercial terms that match cash and EBIT cadence.",
    opportunities: ["Better executive-level value story.", "Trusted MI and reporting.", "Operational stability and observability.", "Clear compliance evidence.", "Integration confidence across brands.", "Reduced total cost of ownership.", "Clear pricing and billing model.", "Composable architecture narrative.", "Transparent data ownership."]
  },
  {
    name: "CTO",
    stream: "Acquire",
    profileBasis: "Derived from the IT / Developer persona group and Developer / Integrator profile",
    summary: "Technical strategy owner focused on architecture fit, integration quality, scalability, resilience, and future operating model.",
    role: "The CTO owns the technical strategy and decides whether the platform fits the organisation’s long-term architecture, integration model, scalability needs, and future operating model. They are less focused on individual API calls and more focused on whether the platform can become part of a sustainable, flexible, and scalable technology estate.",
    keyCharacteristics: ["Strategic, architecture-led, technically pragmatic, and risk-aware.", "Cares about long-term platform evolution, integration quality, data flows, system resilience, API maturity, cloud readiness, observability, and technical governance.", "Wants proof that the platform can support multiple brands, products, channels, and future change without creating heavy vendor dependency."],
    goals: ["Reduce technical debt.", "Improve integration consistency.", "Support scalable architecture.", "Enable automation across journeys.", "Avoid brittle point-to-point integrations.", "Improve data availability across the business.", "Support composable architecture.", "Reduce reliance on vendor-led change.", "Align the platform with cloud, CRM, data lake, and wider ecosystem strategy."],
    painPoints: ["Lack of orchestration guidance.", "Incomplete or hard-to-access API documentation.", "Unclear integration patterns.", "Difficulty mapping platform data into centralised group systems.", "Limited sandbox or mock environments.", "Inconsistent API behaviour.", "Concerns about long-term extensibility.", "Difficulty proving technical fit to other senior stakeholders."],
    decisionRole: "The CTO is a key technical approver. They influence whether Open GI is seen as technically credible, future-ready, and suitable for enterprise adoption. They ask whether the platform can integrate with the ecosystem, automate key journeys, provide the required data, scale across brands or business units, and support proper observability and governance.",
    opportunities: ["Clear API strategy.", "Developer portal.", "API orchestration guidance.", "End-to-end journey examples.", "Sandbox and mock environments.", "Event stream documentation.", "Integration patterns for CRM, data lake, and cloud ecosystems.", "Observability and platform health visibility.", "Reusable architecture guidance.", "Reduced vendor dependency."]
  },
  {
    name: "Development Manager / Integrator",
    stream: "Acquire",
    profileBasis: "Detailed Developer / Integrator persona profile from the value stream work",
    summary: "Practical implementation lead focused on API clarity, documentation, testing, automation, and delivery confidence.",
    role: "The Development Manager / Integrator is responsible for practical implementation. They assess whether the platform is easy to integrate with, test, document, automate, and maintain. They are close to the actual delivery work and feel the impact of poor documentation, inconsistent APIs, unclear examples, and missing technical environments.",
    keyCharacteristics: ["Hands-on, practical, implementation-focused, and detail-sensitive.", "Focuses on usability, clarity, and real implementation effort.", "May work internally or through external development agencies.", "Wants predictable, well-structured API behaviour.", "Often most affected by poor documentation quality and API inconsistency."],
    goals: ["Access APIs immediately without unnecessary bureaucracy.", "Understand whether APIs are intuitive and logically structured.", "Chain APIs into broker-specific journeys.", "Build reusable patterns across multiple brands or products.", "Reduce friction in development cycles.", "Avoid vendor dependency.", "Use events and extensibility to automate workflows.", "Reduce the need for repeated manual development effort."],
    painPoints: ["Lack of orchestration guidance.", "API documentation behind login or incomplete.", "Difficulty ingesting or mapping data into centralised group systems.", "No sandbox, mock environments, or usable examples.", "Unclear end-to-end journey patterns.", "Reduced ability to test integration assumptions early.", "Slow delivery when simple changes require vendor involvement."],
    decisionRole: "They influence implementation confidence and technical feasibility. Their non-negotiables include APIs covering required end-to-end journeys such as quote, bind, and renewal; clear documentation; a well-structured developer portal; sandbox or mock environments; and availability of required data for ingestion.",
    opportunities: ["Developer portal improvements.", "Clear API documentation.", "Self-service sandbox access.", "Mock environments.", "Quote to bind to renewal API examples.", "Reusable boilerplates.", "API testing tools.", "Event stream guidance.", "Integration quickstarts.", "Reduced vendor dependency."]
  },
  {
    name: "CISO",
    stream: "Acquire",
    profileBasis: "Derived from Acquire themes around security, compliance, GDPR, FCA, ISO, SOC 2, stability, and third-party risk",
    summary: "Security and risk authority focused on compliance evidence, data protection, resilience, auditability, and third-party risk.",
    role: "The CISO is responsible for ensuring the platform and its integrations meet security, compliance, resilience, regulatory, and data protection expectations. They may not be the buyer, but they can approve, delay, challenge, or block adoption if security and compliance risks are not clear.",
    keyCharacteristics: ["Risk-focused, evidence-led, compliance-driven, and protective of business and customer data.", "Cares about third-party risk, data ownership, auditability, resilience, access control, regulatory evidence, incident readiness, and security patterns.", "Needs clarity rather than reassurance. They want proof."],
    goals: ["Minimise third-party risk.", "Protect customer and business data.", "Ensure GDPR and FCA alignment.", "Support ISO or SOC 2 expectations.", "Improve auditability.", "Ensure integrations follow secure patterns.", "Avoid hidden data exposure.", "Reduce operational and regulatory risk.", "Ensure platform resilience and stability."],
    painPoints: ["Lack of transparent security evidence.", "Unclear data ownership or IP boundaries.", "Unclear access models.", "Limited auditability.", "Insufficient evidence of regulatory compliance.", "Concerns about third-party integration risk.", "Weak documentation around data flows.", "Concerns about platform stability, availability, or incident handling."],
    decisionRole: "The CISO influences procurement confidence, technical sign-off, risk approval, and compliance readiness. They ask where the data goes, who owns the data, how access is controlled, how activity is audited, how the platform supports GDPR and FCA obligations, what happens if something fails, and how compliance can be proved.",
    opportunities: ["Clear security and compliance documentation.", "GDPR and FCA evidence.", "ISO / SOC 2 readiness material.", "Data ownership transparency.", "Audit logs and access control visibility.", "Secure API patterns.", "Integration security guidance.", "Operational resilience evidence.", "Incident and observability reporting.", "Compliance-friendly platform documentation."]
  },
  {
    name: "Insurer Distribution / Product Manager",
    stream: "Distribute",
    profileBasis: "Detailed persona profile from the value stream work",
    summary: "Distribution and product owner focused on broker reach, profitable underwriting, product performance, and scalable distribution.",
    role: "The Insurer Distribution / Product Manager is responsible for expanding broker distribution, protecting underwriting profitability, monitoring product performance, and ensuring products reach the right market efficiently. They sit between commercial strategy, underwriting discipline, broker relationships, and operational delivery.",
    keyCharacteristics: ["Analytical, data-led, commercially sharp, risk-aware, relationship-balanced, and outcome-driven.", "Focuses on profitability, claims ratios, broker performance, and distribution quality, not just quote volume.", "Comfortable giving feedback to software houses and brokers.", "Thinks in multi-year plans rather than only short-term fixes."],
    goals: ["Achieve wide broker distribution across diverse broker types.", "Protect and grow market appetite.", "Maintain profitable underwriting through better data and analytics.", "Reduce claims exposure and portfolio volatility.", "Improve operational efficiency through automation.", "Deploy new products, variants, or changes faster.", "Demonstrate clear ROI from distribution partnerships.", "Enable consistent and predictable product performance in market."],
    painPoints: ["Stretched internal resources.", "Difficulty balancing long-term strategy with short-term market pressure.", "Limited visibility into broker performance beyond volume.", "Complexity across direct, panel, delegated authority, and broker channels.", "High cost and complexity of broker onboarding.", "Dependence on change requests instead of self-serve configuration.", "Risk of poor claims ratio from low-quality premium or risk profiles.", "Need for better quote data and enriched underwriting information."],
    decisionRole: "They make data-led decisions and look for reliable MI to analyse profitability, claim trends, broker performance, and predictability. Their decision-making is conservative, structured, document-heavy, data-informed, relationship-reassurance-led, profitability-driven, compliance-sensitive, and often buy-over-build oriented.",
    opportunities: ["Distribution performance reporting.", "Broker performance insight.", "Profitability and claims ratio analytics.", "Faster broker onboarding.", "Self-serve product and broker configuration.", "Portfolio performance insight.", "Compliance and audit evidence.", "Reliable data services.", "Scalable distribution tooling.", "Clear link between capacity placed and outcomes achieved."]
  },
  {
    name: "MGA / Distribution Owner",
    stream: "Distribute",
    profileBasis: "Derived from Distribute themes around MGA, distribution, capacity, ROI, operational efficiency, and product development",
    summary: "Distribution owner focused on panel trust, quote and bind performance, broker adoption, and capacity confidence.",
    role: "The MGA / Distribution Owner is responsible for making MGA products easy to access, trade, manage, and trust. They need brokers to use their panel confidently and need the platform to support efficient quote and bind journeys.",
    keyCharacteristics: ["Commercially focused, broker-oriented, delivery-minded, and highly sensitive to trading friction.", "Balances insurer capacity, broker demand, product performance, and operational efficiency."],
    goals: ["Grow distribution.", "Increase quote and bind completion.", "Improve broker confidence.", "Provide a panel brokers trust and rely on.", "Make trading easier after migration.", "Reduce operational friction.", "Improve visibility of product and broker performance.", "Maintain stable capacity relationships."],
    painPoints: ["Low broker adoption.", "Inefficient quote and bind journeys.", "Unclear appetite visibility.", "Slow broker activation.", "Poor panel trust.", "Limited visibility of distribution outcomes.", "Manual workarounds after migration.", "Difficulty proving distribution value to insurers."],
    decisionRole: "They influence product direction, broker experience, panel strategy, and distribution priorities. They ask whether brokers can quote and bind efficiently, whether the panel is trusted, which products and partners are performing, and whether capacity and ROI are protected.",
    opportunities: ["In-platform quote and bind journeys.", "Broker panel trust.", "Seamless broker activation.", "Appetite clarity.", "Distribution performance insight.", "Capacity outcome reporting.", "Trading observability.", "Migration continuity.", "Faster product and broker setup."]
  },
  {
    name: "Product & Distribution Owner, DA Scheme Broker",
    stream: "Distribute",
    profileBasis: "Detailed persona profile from the value stream work",
    summary: "Scheme performance owner focused on product optimisation, delegated authority, insurer confidence, profitability, and self-service change.",
    role: "The Product & Distribution Owner for a DA Scheme Broker owns product or scheme performance across build, governance, distribution, and sometimes wholesale relationships. They are a key influencer in buying decisions and remain accountable after platform acquisition.",
    keyCharacteristics: ["Data-driven, efficiency-focused, commercially aggressive, pragmatic, technically focused, and interested in self-sufficiency.", "Manages schemes proactively and looks for optimisation opportunities.", "Values strong insurer partnerships and trust with underwriters."],
    goals: ["Maintain stable insurer capacity and annual GWP capacity.", "Increase GWP through acceptance expansion and pricing optimisation.", "Reduce scheme analysis time through self-service dashboards.", "Reduce time to market for product build and optimisation.", "Understand which partners drive profitable business versus volume.", "Use no-code product optimisation and distribution tooling.", "Improve commission models.", "Negotiate better premiums, commissions, and adjustments with insurers.", "Build insurer confidence through transparent claims data and fraud controls."],
    painPoints: ["Technical transparency issues.", "Inability to verify live product changes without vendor reliance.", "Analytics blindness when referrals spike.", "Little drill-down into referral reasons.", "Difficulty ingesting or mapping data into centralised group systems.", "No sandbox, mock environments, or examples.", "Manual analysis burden per scheme.", "Developer bottlenecks for simple rate changes.", "Competitors adjusting pricing faster.", "Binder coverage changes.", "Different capacity providers requiring different data.", "Need for flexible domains."],
    decisionRole: "Their decision-making starts with insurer alignment because delegated authority contract terms need to be agreed before technical implementation. They use collaborative validation with actuaries, senior developers, architects, and IT security. They often work with a pilot-then-scale mindset and balance speed with perfection.",
    opportunities: ["Self-service product optimisation.", "No-code configuration.", "Scheme performance dashboards.", "Referral reason analysis.", "Pricing simulation.", "Capacity and binder data management.", "Sandbox and mock environments.", "Transparent product change control.", "Partner profitability insight.", "Faster rate and rule changes.", "Flexible risk domains.", "Data-led insurer reporting."]
  },
  {
    name: "Delegated Authority Broker, Open Market",
    stream: "Distribute",
    profileBasis: "Derived from Distribute notes on delegated authority brokers, open market brokers, efficiency, control, speed, data, stable capacity, ROI, and operational efficiency",
    summary: "Broker focused on placing varied or complex risks efficiently while maintaining control, market access, and visibility.",
    role: "The Open Market Delegated Authority Broker places risks that may not fit straightforward delegated schemes. They often need speed, control, market access, and flexibility when placing business.",
    keyCharacteristics: ["Risk-led, relationship-driven, detail-sensitive, and focused on finding suitable markets for varied or more complex risks.", "Needs control over submissions and visibility of where the risk is in the process."],
    goals: ["Place risks efficiently.", "Reduce manual effort.", "Maintain control over submissions.", "Get timely responses from insurers or markets.", "Understand appetite clearly.", "Avoid repeated data entry.", "Protect client relationships.", "Access stable capacity."],
    painPoints: ["Slow placement processes.", "Unclear insurer appetite.", "Repeated data entry.", "Inconsistent market responses.", "Limited quote progress visibility.", "Manual workarounds.", "Poor handoff between systems or channels.", "Difficulty handling more complex risks within rigid product flows."],
    decisionRole: "They influence platform adoption through day-to-day usage. If the platform slows them down or removes control, they may avoid it or move work outside the system.",
    opportunities: ["Flexible risk domains.", "Low-friction open market trading.", "Better insurer appetite visibility.", "Quote status transparency.", "Faster broker activation.", "Reduced re-keying.", "Better submission tracking.", "Clearer referral and response handling."]
  },
  {
    name: "Underwriter",
    stream: "Distribute",
    profileBasis: "Derived from Distribute notes and DA Scheme Broker profile, especially underwriting control, referral analysis, capacity, claims data, fraud controls, and profitable business",
    summary: "Risk and portfolio quality owner focused on appetite, referrals, underwriting control, capacity, and profitable growth.",
    role: "The Underwriter is responsible for protecting underwriting quality, assessing risk, reviewing referrals, managing appetite, and ensuring delegated trading does not compromise portfolio performance.",
    keyCharacteristics: ["Analytical, control-focused, risk-aware, and quality-driven.", "Needs reliable data and clear rules to make confident decisions.", "Sensitive to poor risk information, unclear appetite, and high referral volumes without meaningful explanation."],
    goals: ["Protect portfolio performance.", "Reduce poor claims outcomes.", "Improve risk selection.", "Understand referral reasons.", "Align broker behaviour with appetite.", "Use transparent performance data.", "Build confidence in delegated authority relationships.", "Support profitable growth.", "Maintain control without slowing trading unnecessarily."],
    painPoints: ["Poor risk data.", "Limited visibility of broker decisions.", "Too many manual referrals.", "Unclear referral reasons.", "Weak appetite alignment.", "Limited capacity outcome reporting.", "Poor claims and fraud visibility.", "Difficulty understanding which partners produce profitable business."],
    decisionRole: "They influence product rules, appetite settings, referral logic, capacity decisions, and underwriting controls. They ask whether the business is writing the right risks, why referrals are increasing, which brokers are profitable, which products need adjustment, whether the data can be trusted, and whether controls are strong enough.",
    opportunities: ["Better data capture.", "Appetite management.", "Referral visibility.", "Referral reason analytics.", "Capacity outcome reporting.", "Claims and fraud insight.", "Partner profitability reporting.", "Underwriting performance dashboards.", "Flexible risk domains.", "Clear product and rule change visibility."]
  },
  {
    name: "Distribution CEO / Senior Commercial Owner",
    stream: "Distribute",
    profileBasis: "Derived from Distribute notes that identify CEO as part of the insurer persona breakdown and focus on ROI, distribution, operational efficiency, capacity, and strategic outcomes",
    summary: "Senior commercial owner focused on profitable distribution, ROI, capacity performance, broker adoption, and strategic growth.",
    role: "The Distribution CEO or Senior Commercial Owner is responsible for the strategic and commercial performance of the distribution model. They care about whether distribution activity creates measurable value, supports profitable growth, and strengthens market position.",
    keyCharacteristics: ["Strategic, growth-focused, ROI-led, commercially accountable, and concerned with long-term performance.", "Needs confidence that product distribution, capacity placement, broker adoption, and platform investment all support business outcomes."],
    goals: ["Grow profitable distribution.", "Improve operational efficiency.", "Protect capacity relationships.", "Increase market reach.", "Understand ROI from distribution partnerships.", "Improve trading performance.", "Support scalable distribution models.", "Reduce friction in broker and insurer relationships."],
    painPoints: ["Unclear ROI.", "Inefficient trading operations.", "Poor visibility of product performance.", "Limited insight into capacity outcomes.", "Slow broker onboarding.", "Difficulty scaling distribution activity.", "Poor evidence for strategic decisions.", "Fragmented reporting across channels or partners."],
    decisionRole: "They influence investment, strategic priorities, partner confidence, and product direction. They are likely to prioritise capabilities that improve growth, capacity performance, and measurable distribution outcomes.",
    opportunities: ["Distribution performance reporting.", "ROI visibility.", "Operational efficiency tools.", "Capacity performance insight.", "Broker adoption insight.", "Strategic MI.", "Trading observability.", "Partner performance dashboards.", "Clear evidence of commercial value."]
  },
  {
    name: "High-Volume Agent",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Serve notes and Agent backlog items",
    summary: "Fast-paced operational user focused on speed, accuracy, compliance, workload management, and customer handling.",
    role: "The High-Volume Agent handles frequent customer interactions across inbound calls, outbound calls, quotes, renewals, MTAs, payments, document requests, and service queries. They work in a fast-paced environment where system speed, interface clarity, and reliable workflows directly affect performance.",
    keyCharacteristics: ["Task-focused, speed-sensitive, process-driven, and measured against operational targets.", "Relies heavily on clear screens, fast system response, guided workflows, and easy access to customer and policy information."],
    goals: ["Complete tasks quickly and accurately.", "Avoid unnecessary system friction.", "Reduce manual work.", "Serve customers confidently.", "Meet performance and quality targets.", "Stay compliant during live customer interactions.", "Avoid re-keying and repeated steps.", "Find the right information quickly."],
    painPoints: ["Slow system performance.", "Too many screens.", "Repeated data entry.", "Unclear journey state.", "Fragmented systems.", "Poor web-to-agent handoff.", "Limited workload tools.", "Inconsistent documentation flows.", "Difficulty prioritising inbound and outbound work."],
    decisionRole: "They do not usually make buying decisions, but they strongly influence product success through adoption and feedback. In the journey, their decisions are immediate and practical: what does the customer need, what information is required, what action is available, what must be completed for compliance, and what is the fastest safe route to resolution.",
    opportunities: ["Customisable and adaptive user interface.", "High performance processing and low latency.", "Workload management and operational tools.", "Regulatory, quality, and script compliance.", "Document and pack generation.", "Ability to take payment.", "Unified omni-system experience.", "Self-serve and web-to-agent accuracy.", "Customer outcome insights and measurement."]
  },
  {
    name: "Specialist Agent",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Serve notes on specialist roles and low-volume niche business",
    summary: "Knowledge-led user focused on complex journeys, specialist products, judgement, appetite, and compliance.",
    role: "The Specialist Agent handles more complex, niche, regulated, or non-standard customer journeys. They may work on specialist lines of business, unusual risks, complex MTAs, manual referrals, renewals, or cases that require judgement and product knowledge.",
    keyCharacteristics: ["Knowledge-led, accuracy-focused, compliance-aware, and more dependent on detailed context.", "Needs the system to support judgement, not force complex cases through overly rigid flows."],
    goals: ["Place or service business confidently.", "Reduce avoidable referrals.", "Improve appetite alignment.", "Understand underwriting guidance.", "Handle edge cases safely.", "Support customer needs accurately.", "Avoid poor-fit decisions.", "Stay compliant while using professional judgement."],
    painPoints: ["Unclear appetite rules.", "Too many declines or referrals.", "Limited visibility of underwriting rationale.", "Fragmented customer or policy context.", "Rigid question sets.", "Difficulty handling niche scenarios.", "Manual workarounds.", "Poor support for complex products or journeys."],
    decisionRole: "Their decisions are guided by product rules, underwriting appetite, customer context, compliance requirements, risk detail, and the quality of available information. They need strong system support when deciding whether to proceed, refer, amend, decline, or request more information.",
    opportunities: ["Placement and appetite management.", "Comprehensive multi-line of business processing.", "Regulatory, quality, and script compliance.", "Better referral handling.", "Clearer underwriting guidance.", "Better risk context.", "Improved document generation.", "Customer outcome measurement.", "Support for niche and specialist journeys."]
  },
  {
    name: "End-to-End Multi-Skilled Agent",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Serve notes on end-to-end multi-skilled roles",
    summary: "Broad-skilled user focused on continuity across quote, sale, payment, servicing, MTA, renewal, and documentation journeys.",
    role: "The End-to-End Multi-Skilled Agent supports customers across multiple stages of the policy lifecycle. They may handle quotes, sales, payments, MTAs, renewals, document requests, policy servicing, and general customer queries.",
    keyCharacteristics: ["Flexible, context-switching, broad-skilled, and dependent on consistency across journeys.", "Needs customer context to follow them across quote, sale, payment, policy change, renewal, and servicing tasks."],
    goals: ["Complete the full customer task without unnecessary handoffs.", "Move between journeys without losing context.", "Avoid duplicated data entry.", "Understand what has happened and what happens next.", "Maintain compliance across different task types.", "Resolve customer needs efficiently.", "Improve first-contact resolution."],
    painPoints: ["Disconnected systems.", "Inconsistent UI patterns.", "Duplicated data entry.", "Unclear journey state.", "Inconsistent document flows.", "Poor visibility of customer history.", "Separate payment, document, and compliance processes.", "Lack of continuity between tasks."],
    decisionRole: "Their decisions are driven by journey state, customer need, available actions, product rules, compliance prompts, and whether the system gives enough context to proceed.",
    opportunities: ["Unified omni-system experience.", "Customisable and adaptive UI.", "Document and pack generation.", "Ability to take payment.", "Self-serve and web-to-agent accuracy.", "Workload management.", "Customer outcome insights and measurement.", "Consistent cross-journey design patterns."]
  },
  {
    name: "Digital Self-Service Consumer",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Serve Consumer journey notes and Consumer backlog items",
    summary: "Consumer who wants to complete insurance tasks independently online with clarity, confidence, and minimal friction.",
    role: "The Digital Self-Service Consumer wants to complete insurance tasks independently online. They may get a quote, buy a policy, renew, make a change, view documents, or complete simple servicing tasks.",
    keyCharacteristics: ["Convenience-led, digitally confident to some degree, and sensitive to friction.", "May be comfortable online, but still needs clear explanations when dealing with insurance terminology, cover, assumptions, pricing, and exclusions."],
    goals: ["Complete tasks independently.", "Understand the cover.", "Trust the price.", "Avoid unnecessary calls.", "Complete the journey quickly.", "Know what happens next.", "Receive clear confirmation.", "Feel confident they have made the right choice."],
    painPoints: ["Confusing questions.", "Unclear cover.", "Poor explanations.", "Uncertainty around price.", "Inaccessible journeys.", "Poor error handling.", "Limited ability to complete changes online.", "Lack of confidence that the task has been completed correctly."],
    decisionRole: "Their decisions are shaped by price, cover, trust, ease of completion, clarity of questions, brand confidence, and whether they feel supported if something becomes unclear.",
    opportunities: ["Coverage fit for needs.", "Competitive and fair pricing.", "Frictionless journeys.", "Self-sufficiency.", "Accessibility.", "Clear confirmation and documentation.", "Digital-first journey measurement.", "Customer outcome insights."]
  },
  {
    name: "Assisted Channel Consumer",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Serve Consumer journey notes around web-to-call-centre and call-centre-to-web journeys",
    summary: "Consumer who moves between digital and human-supported channels and needs continuity, reassurance, and clear handoff.",
    role: "The Assisted Channel Consumer moves between digital and human-supported channels. They may start online and then call, or start in the call centre and later continue digitally.",
    keyCharacteristics: ["Support-seeking, confidence-sensitive, and likely to switch channel when the journey becomes unclear, stressful, complex, or blocked.", "Needs continuity between web, aggregator, direct, and call centre journeys."],
    goals: ["Get reassurance.", "Avoid repeating information.", "Complete the task with support.", "Move between channels smoothly.", "Understand what has already happened.", "Trust that the agent has the right context.", "Finish the journey without starting again."],
    painPoints: ["Poor web-to-call-centre handoff.", "Repeated questions.", "Inconsistent information across channels.", "Unclear next steps.", "Long call times.", "Lack of confidence that the agent has full context.", "Loss of information between digital and assisted journeys."],
    decisionRole: "Their decisions are shaped by confidence, perceived complexity, urgency, emotional state, and whether they trust the digital journey enough to continue independently.",
    opportunities: ["Channel management.", "Self-serve and web-to-agent accuracy.", "Unified customer context.", "Better consumer entry-point tracking.", "Clear journey state.", "Customer outcome measurement.", "Improved conversion observability.", "Better assisted journey continuity."]
  },
  {
    name: "Price and Cover-Conscious Consumer",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Consumer backlog items around coverage, price, ease of business, and transparent journeys",
    summary: "Consumer focused on suitable cover, fair pricing, transparency, comparison, and renewal confidence.",
    role: "The Price and Cover-Conscious Consumer is focused on getting the right insurance cover at a price they understand and trust. They may compare options through direct, aggregator, renewal, or assisted channels.",
    keyCharacteristics: ["Comparison-oriented, value-sensitive, and trust-sensitive.", "May switch provider if they do not understand the price, do not trust the cover, or feel the journey is too difficult."],
    goals: ["Get suitable cover.", "Understand the price.", "Trust that the price is fair.", "Compare options confidently.", "Avoid being underinsured.", "Avoid overpaying.", "Understand exclusions and assumptions.", "Feel confident before buying or renewing."],
    painPoints: ["Unclear cover.", "Confusing pricing.", "Difficulty comparing options.", "Lack of transparency.", "Uncertainty around exclusions.", "Fear of choosing the wrong product.", "Low confidence in renewal value.", "Poor explanation of why price has changed."],
    decisionRole: "Their decisions are shaped by price, cover, comparison points, trust, brand confidence, policy wording, renewal context, and perceived fairness.",
    opportunities: ["Coverage fit for needs.", "Competitive and fair pricing.", "Clearer cover explanation.", "Transparent quote journeys.", "Frictionless quote-to-sale journeys.", "Customer outcome insights.", "Renewal clarity.", "Clear explanation of price changes."]
  },
  {
    name: "Accessibility or Vulnerability Needs Consumer",
    stream: "Serve",
    profileBasis: "Proposed gap-fill from Consumer backlog items around WCAG, Consumer Duty, accessibility, inclusive journeys, and customer outcomes",
    summary: "Consumer who may need additional support, accessible design, plain language, channel choice, and fair outcomes.",
    role: "This consumer may need additional support due to accessibility needs, lower digital confidence, financial vulnerability, comprehension challenges, situational stress, or other factors that make insurance journeys harder to complete.",
    keyCharacteristics: ["May need plain language, accessible design, human support, reassurance, more time, or channel choice.", "More affected by unclear wording, inaccessible design, hidden assumptions, complex decisions, and poor support routes."],
    goals: ["Complete the task fairly and safely.", "Understand their options.", "Make informed choices.", "Access support when needed.", "Avoid pressure or confusion.", "Use a journey that does not exclude them.", "Receive the right outcome regardless of channel or ability."],
    painPoints: ["Inaccessible interfaces.", "Complex questions.", "Unclear instructions.", "Limited support options.", "Confusing documentation.", "Difficulty understanding cover.", "Difficulty understanding price.", "Lack of clarity around assumptions, exclusions, or next steps."],
    decisionRole: "Their decisions are shaped by comprehension, accessibility, emotional state, support availability, trust, and clarity of information.",
    opportunities: ["WCAG-aligned journeys.", "Consumer Duty support.", "Inclusive content design.", "Clear explanations.", "Channel management.", "Assisted support.", "Customer outcome measurement.", "Accessible documentation.", "Fair pricing and cover clarity."]
  }
];

const streamClass = (streamName) => streams.find((stream) => stream.name === streamName)?.className || "acquire";
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const createList = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;

const createDetailBlock = (title, content) => `
  <section class="detail-block">
    <h4>${title}</h4>
    ${Array.isArray(content) ? createList(content) : `<p>${content}</p>`}
  </section>
`;

const createPersonaCard = (persona, index) => {
  const id = `persona-${index + 1}-${slugify(persona.name)}`;
  const badgeClass = streamClass(persona.stream);

  return `
    <article class="persona-card" data-stream="${persona.stream}">
      <button class="persona-card__toggle" type="button" aria-expanded="false" aria-controls="${id}">
        <span class="persona-card__header-copy">
          <span class="persona-card__meta">
            <span class="stream-badge stream-badge--${badgeClass}">${persona.stream}</span>
            <span>Profile basis: ${persona.profileBasis}</span>
          </span>
          <span class="persona-card__title">${persona.name}</span>
          <span class="persona-card__summary">${persona.summary}</span>
        </span>
        <span class="persona-card__affordance" aria-hidden="true">+</span>
      </button>
      <div class="persona-card__panel" id="${id}">
        <div class="persona-card__details">
          ${createDetailBlock("Stream name", persona.stream)}
          ${createDetailBlock("Profile basis", persona.profileBasis)}
          ${createDetailBlock("Role", persona.role)}
          ${createDetailBlock("Key characteristics", persona.keyCharacteristics)}
          ${createDetailBlock("Goals and motivations", persona.goals)}
          ${createDetailBlock("Pain points and challenges", persona.painPoints)}
          ${createDetailBlock("Decision-making role", persona.decisionRole)}
          ${createDetailBlock("Product opportunities", persona.opportunities)}
        </div>
      </div>
    </article>
  `;
};

const renderPersonas = () => {
  const container = document.querySelector("#personas-streams");
  container.innerHTML = streams.map((stream) => {
    const streamPersonas = personas.filter((persona) => persona.stream === stream.name);
    return `
      <section class="stream-section stream-section--${stream.className}" aria-labelledby="${slugify(stream.name)}-title">
        <div class="stream-section__header">
          <div>
            <span class="stream-badge stream-badge--${stream.className}">${stream.name}</span>
            <h3 id="${slugify(stream.name)}-title">${stream.name}</h3>
            <p>${stream.description}</p>
          </div>
          <span class="persona-count">${streamPersonas.length} personas</span>
        </div>
        <div class="persona-list">
          ${streamPersonas.map((persona, index) => createPersonaCard(persona, personas.indexOf(persona))).join("")}
        </div>
      </section>
    `;
  }).join("");
};

const renderValueStreams = () => {
  const container = document.querySelector("#value-stream-cards");
  container.innerHTML = streams.map((stream) => `
    <article class="value-stream-card value-stream-card--${stream.className}">
      <div class="value-stream-card__intro">
        <span class="stream-badge stream-badge--${stream.className}">${stream.name}</span>
        <h3>${stream.name}</h3>
        <div class="purpose-box">
          <h4>Purpose</h4>
          <p>${stream.purpose}</p>
        </div>
      </div>
      <div class="value-stream-card__grid">
        ${createDetailBlock("Who it serves", stream.serves)}
        ${createDetailBlock("What this stream helps us understand", stream.understands)}
        ${createDetailBlock("Key product themes", stream.themes)}
      </div>
    </article>
  `).join("");
};

const setPanelHeights = () => {
  document.querySelectorAll(".persona-card__toggle").forEach((button) => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    panel.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? `${panel.scrollHeight}px` : "0px";
  });
};

const setCardExpanded = (button, shouldExpand) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const affordance = button.querySelector(".persona-card__affordance");
  button.setAttribute("aria-expanded", String(shouldExpand));
  affordance.textContent = shouldExpand ? "−" : "+";
  panel.style.maxHeight = shouldExpand ? `${panel.scrollHeight}px` : "0px";
};

const bindPersonaToggles = () => {
  document.querySelectorAll(".persona-card__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      setCardExpanded(button, !isExpanded);
    });
  });
};

const bindTabs = () => {
  const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      tabButtons.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("tab-button--active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.hidden = !isActive;
        panel.classList.toggle("tab-panel--active", isActive);
      });

      if (target === "personas") {
        setPanelHeights();
      }
    });
  });
};

const bindBulkControls = () => {
  document.querySelector("#expand-all").addEventListener("click", () => {
    document.querySelectorAll(".persona-card__toggle").forEach((button) => setCardExpanded(button, true));
  });

  document.querySelector("#collapse-all").addEventListener("click", () => {
    document.querySelectorAll(".persona-card__toggle").forEach((button) => setCardExpanded(button, false));
  });
};

const setActiveSideNav = () => {
  document.querySelectorAll(".side-nav__link").forEach((link) => {
    link.classList.toggle("side-nav__link--active", link.dataset.navItem === "personas");
    if (link.dataset.navItem === "personas") {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

renderPersonas();
renderValueStreams();
bindPersonaToggles();
bindTabs();
bindBulkControls();
setActiveSideNav();
window.addEventListener("resize", setPanelHeights);
