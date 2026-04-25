import { publications, type PublicationArticle } from "./publications";
import outsourcing from "./articles/outsourcing-operational-activities";
import accountingPolicy from "./articles/accounting-policy-tax-purposes";
import franchising from "./articles/franchising-uzbekistan";
import escrow from "./articles/escrow-accounts-uzbekistan";
import payroll from "./articles/payroll-social-contributions";

function build(slug: string, extra: Omit<PublicationArticle, keyof typeof publications[0]>): PublicationArticle {
  const pub = publications.find((p) => p.slug === slug)!;
  return { ...pub, ...extra } as PublicationArticle;
}

export const articles: Record<string, PublicationArticle> = {
  "outsourcing-operational-activities": build("outsourcing-operational-activities", outsourcing),
  "accounting-policy-tax-purposes": build("accounting-policy-tax-purposes", accountingPolicy),
  "franchising-uzbekistan": build("franchising-uzbekistan", franchising),
  "escrow-accounts-uzbekistan": build("escrow-accounts-uzbekistan", escrow),
  "payroll-social-contributions": build("payroll-social-contributions", payroll),
};

export function getArticleBySlug(slug: string): PublicationArticle | undefined {
  return articles[slug];
}
