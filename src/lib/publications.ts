export interface Publication {
  slug: string;
  tag: string;
  category: string;
  title: string;
  description: string;
  year: string;
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
    slug: "uzbekistan-tax-landscape-2024",
    tag: "Tax Briefing",
    category: "Tax",
    title: "Uzbekistan Tax Landscape 2024–2025",
    description:
      "An analysis of recent tax reforms, key changes in legislation, and strategic implications for domestic and foreign-invested entities.",
    year: "2024",
    pages: 24,
    hasRead: true,
  },
  {
    slug: "employer-of-record-central-asia",
    tag: "HR Insight",
    category: "HR",
    title: "Employer of Record in Central Asia",
    description:
      "How foreign companies can hire and manage talent in Uzbekistan without establishing a local legal entity.",
    year: "2024",
    pages: 18,
    hasRead: true,
  },
  {
    slug: "foreign-investment-protection",
    tag: "Legal Brief",
    category: "Legal",
    title: "Foreign Investment Protection in Uzbekistan",
    description:
      "An overview of legal guarantees, bilateral treaties, and dispute resolution mechanisms available to foreign investors.",
    year: "2023",
    pages: 20,
    hasRead: true,
    hasDownload: true,
  },
  {
    slug: "agriculture-agribusiness-opportunities",
    tag: "Market Report",
    category: "Market",
    title: "Agriculture & Agribusiness Opportunities",
    description:
      "Sector analysis of Uzbekistan's agricultural market, export potential, and investment pathways.",
    year: "2023",
    pages: 32,
    hasRead: true,
  },
  {
    slug: "ifrs-adoption-uzbekistan",
    tag: "Compliance Guide",
    category: "Compliance",
    title: "IFRS Adoption in Uzbekistan",
    description:
      "Practical guidance on transitioning from National Accounting Standards to International Financial Reporting Standards.",
    year: "2023",
    pages: 28,
    hasRead: true,
    hasDownload: true,
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
];

export const articles: Record<string, PublicationArticle> = {
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
        text: "Employers are required to make a Unified Social Payment (USP) calculated as a percentage of the total payroll fund. As of 2024, the standard USP rate is 12% of gross payroll for most enterprises. This contribution funds the state pension system, social insurance, and the employment fund.",
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
        text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This is a mandatory employee-side deduction, withheld by the employer alongside PIT. The accumulative pension system was introduced to supplement the state pension and is managed by designated financial institutions.",
      },
      { type: "h2", text: "Reporting Obligations" },
      {
        type: "p",
        text: "All employers must submit payroll reports through the electronic tax filing system (my.soliq.uz). Monthly reports include PIT withholding declarations and USP calculations. Annual reconciliation is required by 1 February following the reporting year.",
      },
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
        type: "p",
        text: "The most frequent compliance issues we encounter among foreign employers in Uzbekistan relate to misclassification of contractors, late remittance of social contributions, and failure to account for in-kind benefits as taxable income. The tax authorities have increased scrutiny of these areas since 2023.",
      },
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
          "Accumulative Pension: 0.1% (employee deduction)",
          "Total employer burden: ~24.1% of gross salary",
        ],
      },
      {
        type: "p",
        text: "Advizen's HR and tax practices work together to ensure that payroll structures are fully compliant with current legislation while optimising the overall cost of employment. For companies entering the market or restructuring existing operations, we provide end-to-end payroll setup, ongoing administration, and regulatory monitoring.",
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
