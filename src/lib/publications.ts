export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
  date?: string;
  pages: number;
  hasDownload?: boolean;
  hasRead?: boolean;
}

export interface PublicationArticle extends Publication {
  subtitle?: string;
  author?: string;
  readTime?: string;
  content: {
    type: "h2" | "h3" | "p" | "ul" | "blockquote" | "divider";
    text?: string;
    items?: string[];
  }[];
}

export const publications: Publication[] = [
  {
    slug: "outsourcing-operational-activities",
    tag: "Advisory",
    category: "Advisory",
    title: "Benefits of Outsourcing Operational Activities",
    description:
      "Streamline your operations and amplify growth. Discover why strategic outsourcing is the key to efficiency and compliance in Uzbekistan.",
    year: "2024",
    date: "2024-04-24",
    pages: 8,
    hasRead: true,
  },
  {
    slug: "payroll-social-contributions",
    tag: "HR Guide",
    category: "HR",
    title: "Payroll & Social Contributions",
    description:
      "A detailed breakdown of payroll taxes, social contributions, and reporting obligations for employers in Uzbekistan.",
    year: "2022",
    pages: 16,
    hasRead: true,
  },
  {
    slug: "escrow-accounts-uzbekistan",
    tag: "Legal Briefing",
    category: "Legal",
    title: "Escrow Accounts in Uzbekistan: New Rules for Property and Vehicle Transactions",
    description:
      "From April 2026, escrow accounts are mandatory for all real estate and vehicle transactions. We break down the legislative changes, timelines, and what buyers and sellers must know.",
    year: "2026",
    pages: 10,
    hasRead: true,
  },
];

export const articles: Record<string, PublicationArticle> = {
  "outsourcing-operational-activities": {
    ...publications.find((p) => p.slug === "outsourcing-operational-activities")!,
    subtitle: "Streamline your operations and amplify growth with strategic outsourcing in Uzbekistan.",
    author: "Advizen Advisory Team",
    readTime: "6 min read",
    content: [
      {
        type: "p",
        text: "In the competitive landscape of Uzbekistan, businesses are constantly seeking intelligent strategies to enhance efficiency, reduce costs, and sharpen their focus on core competencies. While familiar in Western markets, outsourcing operational activities is rapidly gaining traction as a vital solution for companies navigating the unique complexities of this dynamic region. At Advizen, we recognise that offloading non-core functions is not just about cost savings — it is a strategic move that empowers your business for sustainable growth.",
      },
      { type: "h2", text: "What is Outsourcing and Why is it Essential Today?" },
      {
        type: "p",
        text: "Outsourcing involves delegating specific business functions or processes to external service providers. This model originated in developed economies as an effective way to streamline operations, and its popularity stems from the mutual benefits it offers. Companies gain the ability to transfer certain responsibilities from their internal staff to expert external teams, leading to significant savings on personnel costs. For management, outsourcing means not only shifting duties but also transferring associated liabilities, allowing them to dedicate more energy and resources to strategic development and primary business objectives.",
      },
      {
        type: "p",
        text: "The effectiveness of outsourcing has been proven in practice, embraced by businesses of all sizes — from agile startups to major multinational corporations. By entrusting specific functions to external specialists, a company can reduce its internal headcount, thereby lowering expenses related to salaries, taxes, and the establishment and maintenance of physical workstations. This collaboration is formalised through a service agreement, where the outsourcing firm assumes responsibility for executing specified functions and accountability for its personnel's work.",
      },
      { type: "h2", text: "The Power of Outsourced Services: A Closer Look" },
      {
        type: "p",
        text: "While various functions can be outsourced, services like accounting, legal compliance, and HR administration are among the most sought-after due to their specialised nature and critical importance. Leveraging these services through an expert partner offers a multitude of advantages:",
      },
      {
        type: "ul",
        items: [
          "Access to Elite Expertise and Quality Assurance: Your business gains immediate access to highly qualified specialists who are experts in their respective fields — accounting, tax law, labour legislation. These professionals possess deep knowledge of current legislation, continuously upgrade their skills, and adhere to best practices, ensuring top-tier service quality.",
          "Enhanced Focus on Core Business Operations: Free your internal teams from the burden of complex administrative tasks and specialised compliance functions. With experts managing these responsibilities, your employees can concentrate on their core duties, driving productivity and innovation directly related to your primary business goals.",
          "Optimised Resource Allocation and Cost Savings: Eliminate the significant overheads associated with maintaining internal departments — salaries, social contributions, office space, software licences, and training. Outsourcing converts these fixed costs into flexible, predictable service fees, leading to substantial savings and more efficient resource management.",
          "Uninterrupted Service and Reliability: Unlike internal staff, outsourced professionals do not take sick leave, go on vacation, or take maternity leave that could disrupt critical operations. Your services remain consistent and reliable, ensuring continuous support for your business.",
          "Mitigated Risk and Robust Compliance: Staying updated with Uzbekistan's constantly evolving regulatory landscape — from tax codes to labour laws and licensing requirements — is a complex challenge. An outsourcing partner bears the responsibility for ensuring your compliance, significantly reducing your legal and financial risks.",
          "Scalability and Flexibility: Outsourced services can be easily scaled up or down to match your business's fluctuating needs, whether you're expanding rapidly or navigating a period of consolidation.",
        ],
      },
      { type: "h2", text: "Choosing Your Strategic Outsourcing Partner" },
      {
        type: "p",
        text: "While many firms offer operational outsourcing services today, selecting a partner who provides genuinely high-quality solutions, acts as a reliable ally, and delivers effective strategies for business development is paramount. At Advizen, we offer professional, high-level services in tax and legal consulting, accounting, customs, financial, and HR services. Our seasoned and highly qualified experts are dedicated to helping you optimise your operations, uncover hidden reserves, and elevate your company's success through our integrated 'one-stop shop' approach.",
      },
      {
        type: "blockquote",
        text: "By partnering with Advizen, you can leverage our comprehensive expertise to save resources and empower your company to develop faster and more dynamically in the promising Uzbek market.",
      },
    ],
  },
  "escrow-accounts-uzbekistan": {
    ...publications.find((p) => p.slug === "escrow-accounts-uzbekistan")!,
    subtitle: "What the 2025–2026 legislative reforms mean for buyers, sellers, and developers",
    author: "Advizen Legal Practice",
    readTime: "9 min read",
    content: [
      {
        type: "p",
        text: "Uzbekistan has introduced mandatory escrow accounts for real estate and vehicle transactions in two legislative waves. The first wave — targeting shared construction (off-plan housing) — came into force on January 1, 2026. The second wave extended escrow requirements to all real estate and qualifying vehicle transactions from April 1, 2026. Taken together, these reforms fundamentally change how property and asset purchases are structured and funded in the country.",
      },
      { type: "h2", text: "Background: Why Escrow?" },
      {
        type: "p",
        text: "Prior to these reforms, buyers of off-plan apartments and other real estate transferred funds directly to developers and sellers with limited legal protection if construction stalled or the seller defaulted. The government's stated objective — articulated in the Presidential Decree on the 'Single Housing Lifecycle' concept — is to protect buyer funds, increase market transparency, and align Uzbekistan's property market practices with international standards.",
      },
      { type: "h2", text: "Part 1: Shared Construction Escrow (Effective January 1, 2026)" },
      {
        type: "p",
        text: "Under the Presidential Decree introducing the 'Single Housing Lifecycle' principle, developers selling off-plan residential units are now required to collect buyer funds through bank escrow accounts rather than directly. The transition was phased:",
      },
      {
        type: "ul",
        items: [
          "July 1 – December 31, 2025: parallel operation of the old and new systems; developers could use either model",
          "From January 1, 2026: escrow-only model mandatory for all new shared construction agreements",
        ],
      },
      {
        type: "p",
        text: "Under the escrow model, buyer funds are held in a designated account at an authorised bank and are only released to the developer once the property is formally handed over to the buyer.",
      },
      { type: "h3", text: "Key Requirements for Developers" },
      {
        type: "ul",
        items: [
          "Developers must contribute a minimum of 30% of their own funds before project financing can be drawn",
          "The interest rate on project financing is linked to the balance held in escrow",
          "Escrow funds cannot be arrested, suspended, or seized in connection with claims against the developer",
          "If a developer delays handover by more than 6 months, the buyer acquires the right to terminate and recover all deposited funds in full",
        ],
      },
      { type: "h2", text: "Part 2: General Property and Vehicle Escrow (Effective April 1, 2026)" },
      {
        type: "p",
        text: "From April 1, 2026, escrow accounts became mandatory for all purchase and sale transactions involving real estate and vehicles not older than 10 years (categories M, N, O, and G).",
      },
      { type: "h3", text: "Fee Structure" },
      {
        type: "ul",
        items: [
          "Real estate transactions: 206,000 UZS per transaction (fixed, regardless of value)",
          "Vehicle transactions: 103,000 UZS per transaction (fixed)",
        ],
      },
      {
        type: "blockquote",
        text: "For a property sold at 500,000 USD, the old 0.5% commission model would have cost approximately 2,500 USD. Under the new fixed-fee regime, the same transaction costs approximately 15 USD equivalent — a reduction of over 99%.",
      },
      { type: "h2", text: "Compliance Considerations and Key Risks" },
      { type: "h3", text: "Understating Contract Price" },
      {
        type: "p",
        text: "Escrow funds must match the stated contract price and flow through a regulated bank, creating an evidentiary paper trail. Tax authorities and financial intelligence units have direct visibility. Buyers who agree to declare a lower price expose themselves to potential liability under tax and anti-money laundering legislation.",
      },
      { type: "h3", text: "Foreign Currency Transactions" },
      {
        type: "p",
        text: "Real estate transactions in Uzbekistan are denominated in Uzbek som for official purposes. Parties negotiating in USD must account for exchange rate movements between agreement signing and registration completion.",
      },
      { type: "divider" },
      { type: "h2", text: "Summary of Key Dates and Rules" },
      {
        type: "ul",
        items: [
          "January 1, 2026: escrow mandatory for all new shared construction agreements",
          "April 1, 2026: escrow mandatory for all real estate and qualifying vehicle transactions",
          "Developer minimum equity: 30% own funds required before project financing",
          "Buyer exit right: 6-month delay triggers full refund right",
          "Escrow fee (real estate): 206,000 UZS fixed",
          "Escrow fee (vehicles): 103,000 UZS fixed",
        ],
      },
    ],
  },
  "payroll-social-contributions": {
    ...publications.find((p) => p.slug === "payroll-social-contributions")!,
    subtitle: "A practical guide for employers operating in Uzbekistan",
    author: "Advizen HR Practice",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
      },
      { type: "h2", text: "Personal Income Tax" },
      {
        type: "p",
        text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. This replaced the previous progressive scale and represents one of the lowest PIT rates in Central Asia. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
      },
      {
        type: "ul",
        items: [
          "Flat rate: 12% on gross salary",
          "Withholding: employer obligation, remitted monthly",
          "Non-residents: 12% rate applies equally; no additional surcharge",
          "Dividend income: taxed separately at 5%",
        ],
      },
      { type: "h2", text: "Unified Social Payment (USP)" },
      {
        type: "p",
        text: "Employers are required to make a Unified Social Payment (USP) of 12% of gross payroll. This contribution funds the state pension system, social insurance, and the employment fund.",
      },
      {
        type: "blockquote",
        text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
      },
      {
        type: "ul",
        items: [
          "Standard rate: 12% of gross payroll (employer cost)",
          "Budget organisations and certain SMEs: reduced rates may apply",
          "Paid monthly alongside PIT remittance",
          "Late payment attracts penalties at the Central Bank refinancing rate",
        ],
      },
      { type: "h2", text: "Individual Accumulative Pension Contribution" },
      {
        type: "p",
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance.",
      },
      { type: "h2", text: "Reporting Obligations" },
      {
        type: "ul",
        items: [
          "Monthly PIT withholding report — due by the 10th of the following month",
          "Monthly USP declaration — submitted alongside PIT report",
          "Annual payroll reconciliation — due by 1 February",
          "Employee income certificates — issued upon request or termination",
        ],
      },
      { type: "h2", text: "Common Compliance Risks" },
      {
        type: "ul",
        items: [
          "Contractor misclassification — individuals performing employee functions must be on payroll",
          "In-kind benefits (housing, transport, meals) are taxable at market value",
          "Bonuses and one-time payments are subject to PIT at the standard 12% rate",
          "Failure to file monthly reports attracts administrative fines",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Summary of Key Rates (2024)" },
      {
        type: "ul",
        items: [
          "Personal Income Tax: 12% (flat, withheld by employer)",
          "Unified Social Payment: 12% (employer cost, on gross payroll)",
          "Accumulative Pension: 0.1% (included in PIT)",
          "Total employer burden: ~24% of gross salary",
        ],
      },
    ],
  },
};

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug: string): PublicationArticle | undefined {
  return articles[slug];
}

export function getAllPublicationSlugs(): string[] {
  return publications.filter((p) => p.hasRead).map((p) => p.slug);
}

export function sortedPublications(pubs: Publication[]): Publication[] {
  return [...pubs].sort((a, b) => {
    const ta = a.date ? new Date(a.date).getTime() : new Date(`${a.year}-01-01`).getTime();
    const tb = b.date ? new Date(b.date).getTime() : new Date(`${b.year}-01-01`).getTime();
    return tb - ta;
  });
}
