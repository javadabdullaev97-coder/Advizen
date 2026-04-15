"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, Clock, User, BookOpen } from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection, { HorizontalLine } from "@/components/AnimatedSection";
import { getArticleBySlug, publications } from "@/lib/publications";

export default function ArticlePageClient({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-luxury text-4xl text-foreground mb-4">
            Article not found
          </h1>
          <Link
            href="/library"
            className="text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            Return to Library
          </Link>
        </div>
      </section>
    );
  }

  /* ── Adjacent articles ────────────────────────────────── */
  const readablePublications = publications.filter((p) => p.hasRead);
  const currentIndex = readablePublications.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? readablePublications[currentIndex - 1] : null;
  const next =
    currentIndex < readablePublications.length - 1
      ? readablePublications[currentIndex + 1]
      : null;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 3 }}
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[200px]"
        />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <Link
              href="/library"
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Library
            </Link>
            <span className="text-white/[0.15]">/</span>
            <span className="tracking-luxury text-primary">{article.tag}</span>
          </motion.div>

          {/* Tag pill */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block text-xs tracking-[0.2em] uppercase text-primary-light/80 border border-primary-light/20 rounded-full px-3 py-1 mb-8"
          >
            {article.category}
          </motion.span>

          {/* Title */}
          <TextReveal
            text={article.title}
            as="h1"
            mode="line"
            className="heading-luxury text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08] max-w-3xl"
            delay={0.4}
          />

          {/* Subtitle */}
          {article.subtitle && (
            <RevealLine delay={0.6}>
              <p className="text-lg text-white/50 mt-6 max-w-xl leading-relaxed">
                {article.subtitle}
              </p>
            </RevealLine>
          )}

          {/* Meta row */}
          <RevealLine delay={0.7}>
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/[0.06]">
              {article.author && (
                <div className="flex items-center gap-2 text-white/40">
                  <User className="w-3.5 h-3.5" />
                  <span className="text-sm">{article.author}</span>
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center gap-2 text-white/40">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-white/40">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-sm">{article.pages} pages</span>
              </div>
              <span className="font-mono text-xs text-white/25">{article.year}</span>
            </div>
          </RevealLine>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────── */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {article.content.map((block, i) => {
            const delay = Math.min(i * 0.04, 0.4);

            if (block.type === "h2") {
              return (
                <AnimatedSection key={i} delay={delay}>
                  <h2 className="heading-luxury text-2xl md:text-3xl text-foreground mt-16 mb-6 leading-snug">
                    {block.text}
                  </h2>
                </AnimatedSection>
              );
            }

            if (block.type === "h3") {
              return (
                <AnimatedSection key={i} delay={delay}>
                  <h3 className="heading-luxury text-xl md:text-2xl text-foreground mt-12 mb-4 leading-snug">
                    {block.text}
                  </h3>
                </AnimatedSection>
              );
            }

            if (block.type === "p") {
              return (
                <AnimatedSection key={i} delay={delay}>
                  <p className="text-white/60 leading-[1.8] mb-6">{block.text}</p>
                </AnimatedSection>
              );
            }

            if (block.type === "ul" && block.items) {
              return (
                <AnimatedSection key={i} delay={delay}>
                  <ul className="space-y-3 mb-8 pl-1">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/55 leading-relaxed">
                        <span className="shrink-0 w-1 h-1 rounded-full bg-primary-light/60 mt-[0.65rem]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              );
            }

            if (block.type === "blockquote") {
              return (
                <AnimatedSection key={i} delay={delay}>
                  <blockquote className="relative my-10 pl-6 py-4 border-l-2 border-primary/40">
                    <p className="text-white/70 italic leading-relaxed text-lg font-serif">
                      {block.text}
                    </p>
                  </blockquote>
                </AnimatedSection>
              );
            }

            if (block.type === "divider") {
              return (
                <div key={i} className="my-12">
                  <HorizontalLine />
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>

      {/* ── Download CTA (if applicable) ─────────────────── */}
      {article.hasDownload && (
        <section className="py-16 bg-surface border-y border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-foreground font-serif text-lg mb-1">
                Download the full PDF
              </p>
              <p className="text-sm text-white/40">
                {article.pages} pages — Free access
              </p>
            </div>
            <MagneticButton variant="primary" as="a" href={`/downloads/${article.slug}.pdf`}>
              <Download className="w-4 h-4" />
              Download PDF
            </MagneticButton>
          </div>
        </section>
      )}

      {/* ── Adjacent Article Nav ─────────────────────────── */}
      <section className="bg-surface border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 divide-x divide-white/[0.06]">
            {prev ? (
              <Link
                href={`/library/${prev.slug}`}
                className="group py-10 px-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-muted-dark group-hover:text-foreground group-hover:-translate-x-1 transition-all shrink-0" />
                <div>
                  <p className="text-xs text-muted-dark uppercase tracking-wider mb-1">
                    Previous
                  </p>
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors text-sm">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/library/${next.slug}`}
                className="group py-10 px-6 flex items-center justify-end gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-dark uppercase tracking-wider mb-1">
                    Next
                  </p>
                  <p className="text-foreground/80 group-hover:text-foreground transition-colors text-sm">
                    {next.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-dark group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[180px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <TextReveal
              text="Need expert guidance?"
              as="h2"
              className="heading-luxury text-3xl md:text-5xl text-foreground mb-8"
            />
            <RevealLine delay={0.2}>
              <p className="text-muted leading-relaxed mb-12 max-w-lg mx-auto">
                Our advisory team is ready to help you navigate the complexities
                of operating in Uzbekistan.
              </p>
            </RevealLine>
            <MagneticButton variant="primary" as="a" href="/contact">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
