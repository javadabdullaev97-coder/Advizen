export default {
  subtitle: "A practical guide for employers operating in Uzbekistan",
  author: "Advizen HR Practice",
  readTime: "8 min read",
  content: [
    {
      type: "p" as const,
      text: "Uzbekistan's payroll framework has undergone significant reform in recent years, with the government simplifying rates, consolidating social contributions, and introducing digital reporting obligations. For foreign companies employing staff locally — whether through a subsidiary, representative office, or Employer of Record arrangement — understanding these obligations is essential to compliant operations.",
    },
    { type: "h2" as const, text: "Personal Income Tax" },
    {
      type: "p" as const,
      text: "Since January 2023, Uzbekistan applies a flat personal income tax (PIT) rate of 12% on all employment income. The tax is withheld at source by the employer and remitted monthly to the State Tax Committee.",
    },
    {
      type: "ul" as const,
      items: [
        "Flat rate: 12% on gross salary",
        "Withholding: employer obligation, remitted monthly",
        "Non-residents: 12% rate applies equally; no additional surcharge",
        "Dividend income: taxed separately at 5%",
      ],
    },
    { type: "h2" as const, text: "Unified Social Payment (USP)" },
    {
      type: "blockquote" as const,
      text: "The USP is an employer-borne cost, not deducted from the employee's salary. It is calculated on top of gross compensation.",
    },
    {
      type: "ul" as const,
      items: [
        "Standard rate: 12% of gross payroll (employer cost)",
        "Budget organisations and certain SMEs: reduced rates may apply",
        "Paid monthly alongside PIT remittance",
        "Late payment attracts penalties at the Central Bank refinancing rate",
      ],
    },
    { type: "h2" as const, text: "Individual Accumulative Pension Contribution" },
    {
      type: "p" as const,
      text: "Employees contribute 0.1% of their gross salary to an individual accumulative pension account. This deduction is included within the PIT calculation and withheld by the employer as part of the overall income tax remittance.",
    },
    { type: "h2" as const, text: "Reporting Obligations" },
    {
      type: "ul" as const,
      items: [
        "Monthly PIT withholding report — due by the 10th of the following month",
        "Monthly USP declaration — submitted alongside PIT report",
        "Annual payroll reconciliation — due by 1 February",
        "Employee income certificates — issued upon request or termination",
      ],
    },
    { type: "h2" as const, text: "Common Compliance Risks" },
    {
      type: "ul" as const,
      items: [
        "Contractor misclassification — individuals performing employee functions must be on payroll",
        "In-kind benefits (housing, transport, meals) are taxable at market value",
        "Bonuses and one-time payments are subject to PIT at the standard 12% rate",
        "Failure to file monthly reports attracts administrative fines",
      ],
    },
    { type: "divider" as const },
    { type: "h2" as const, text: "Summary of Key Rates (2024)" },
    {
      type: "ul" as const,
      items: [
        "Personal Income Tax: 12% (flat, withheld by employer)",
        "Unified Social Payment: 12% (employer cost, on gross payroll)",
        "Accumulative Pension: 0.1% (included in PIT)",
        "Total employer burden: ~24% of gross salary",
      ],
    },
  ],
};
