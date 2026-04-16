"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import AuroraBackground from "@/components/AuroraBackground";

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Data ─────────────────────────────────────────────── */

const contactStrip = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+998 (33) 488 48 88",
    href: "tel:+998334884888",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@advizenco.com",
    href: "mailto:info@advizenco.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Tashkent, Uzbekistan",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9 : 00 – 18 : 00",
    href: undefined,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Initial response",
    text: "Within 24 hours of your inquiry.",
  },
  {
    num: "02",
    title: "Discovery call",
    text: "A 30-minute consultation to understand your needs.",
  },
  {
    num: "03",
    title: "Tailored proposal",
    text: "Detailed scope of work and engagement structure.",
  },
  {
    num: "04",
    title: "Engagement begins",
    text: "Dedicated team assigned to your account.",
  },
];

/* ── Animated form field ─────────────────────────────── */

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  delay = 0,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.55, delay, ease: luxuryEase }}
    >
      <label
        htmlFor={id}
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-red-400/70" : "text-white/25"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(e.target.value.length > 0);
        }}
        className="w-full py-3 bg-transparent text-foreground/90 placeholder:text-white/10 focus:outline-none text-sm"
      />
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #7A1A1A 50%, transparent 100%)",
          }}
          animate={{
            width: focused ? "100%" : filled ? "80%" : "0%",
            x: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.45 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Animated textarea ───────────────────────────────── */

function FormTextarea({
  id,
  label,
  placeholder,
  delay = 0,
}: {
  id: string;
  label: string;
  placeholder: string;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.55, delay, ease: luxuryEase }}
    >
      <label
        htmlFor={id}
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-red-400/70" : "text-white/25"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setFilled(e.target.value.length > 0);
        }}
        className="w-full py-3 bg-transparent text-foreground/90 placeholder:text-white/10 focus:outline-none resize-none text-sm"
      />
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #7A1A1A 50%, transparent 100%)",
          }}
          animate={{
            width: focused ? "100%" : filled ? "80%" : "0%",
            x: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.45 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Animated select ─────────────────────────────────── */

function FormSelect({ delay = 0 }: { delay?: number }) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.55, delay, ease: luxuryEase }}
    >
      <label
        htmlFor="service"
        className={`block text-[10px] uppercase tracking-[0.18em] mb-3 transition-colors duration-300 ${
          focused ? "text-red-400/70" : "text-white/25"
        }`}
      >
        Area of Interest
      </label>
      <div className="relative">
        <select
          id="service"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setFilled(e.target.value.length > 0);
          }}
          className="w-full py-3 bg-transparent text-foreground/90 focus:outline-none cursor-pointer appearance-none text-sm"
        >
          <option value="" className="bg-[#171717] text-white/40">
            Select a service
          </option>
          <option value="tax" className="bg-[#171717]">Tax Consulting</option>
          <option value="legal" className="bg-[#171717]">Legal Advisory</option>
          <option value="finance" className="bg-[#171717]">Finance &amp; Accounting</option>
          <option value="hr" className="bg-[#171717]">Human Resources</option>
          <option value="marketing" className="bg-[#171717]">Strategic Marketing</option>
          <option value="funding" className="bg-[#171717]">Funding &amp; Grants</option>
          <option value="other" className="bg-[#171717]">Other</option>
        </select>
        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
      </div>
      <div className="relative h-px bg-white/[0.07]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #7A1A1A 50%, transparent 100%)",
          }}
          animate={{
            width: focused ? "100%" : filled ? "80%" : "0%",
            x: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.45 : 0,
          }}
          transition={{ duration: 0.5, ease: luxuryEase }}
        />
      </div>
    </motion.div>
  );
}

/* ── Timeline step ───────────────────────────────────── */

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative flex gap-5">
      {/* Dot + line */}
      <div className="relative flex flex-col items-center shrink-0">
        <motion.div
          className="relative w-2.5 h-2.5 rounded-full border border-primary/50 bg-background z-10 mt-[5px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1, ease: luxuryEase }}
        >
          <motion.div
            className="absolute inset-[2px] rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.35 }}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-1 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(122,26,26,0.35) 0%, transparent 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 + 0.25, ease: luxuryEase }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className={isLast ? "pb-0" : "pb-8"}
        initial={{ opacity: 0, x: 16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.15 + 0.1, ease: luxuryEase }}
      >
        <span className="font-mono text-[10px] text-primary/55 tracking-widest">
          {step.num}
        </span>
        <h4 className="text-sm font-medium text-foreground/85 mt-1 mb-1.5">
          {step.title}
        </h4>
        <p className="text-xs text-white/35 leading-relaxed">{step.text}</p>
      </motion.div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(200);
  const mouseY = useMotionValue(200);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const mouseGlow = useTransform(
    [smoothX, smoothY],
    ([x, y]: number[]) =>
      `radial-gradient(500px circle at ${x}px ${y}px, rgba(122, 26, 26, 0.08), transparent 55%)`
  );

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <AuroraBackground>
        <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
              className="tracking-luxury text-white/35 mb-6"
            >
              Contact
            </motion.p>

            <TextReveal
              text="Begin a conversation"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08] max-w-3xl"
              delay={0.25}
            />

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.55, ease: luxuryEase }}
              className="h-px w-28 bg-gradient-to-r from-primary/60 to-transparent origin-left mt-9 mb-9"
            />

            <RevealLine delay={0.65}>
              <p className="text-base md:text-lg text-white/45 max-w-xl leading-relaxed">
                Every engagement starts with understanding. Reach out and our
                team will respond within 24 hours.
              </p>
            </RevealLine>
          </div>
        </section>
      </AuroraBackground>

      {/* ── Contact Strip ─────────────────────────── */}
      <div className="bg-surface border-y border-white/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05]">
            {contactStrip.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: luxuryEase }}
                  className="group relative"
                >
                  {/* Hover bg sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative py-8 px-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.15, y: -2 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.06] bg-white/[0.02] mb-3 group-hover:border-primary/20 group-hover:bg-primary/[0.05] transition-colors duration-300"
                    >
                      <Icon className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-light/80 transition-colors duration-300" />
                    </motion.div>
                    <p className="tracking-luxury text-white/25 mb-2">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs text-foreground/70 hover:text-foreground transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs text-foreground/70">{item.value}</p>
                    )}
                  </div>
                  {/* Bottom hover accent line */}
                  <div className="absolute bottom-0 inset-x-0 h-px bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Section ──────────────────────────── */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
            {/* ── Form (glow-card treatment) ───────── */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.9, ease: luxuryEase }}
              >
                {/* Outer glow-card wrapper */}
                <div
                  className="glow-card"
                  ref={formRef}
                  onMouseMove={handleMouseMove}
                >
                  <div className="glow-card-spinner" />
                  <div className="glow-card-backdrop" />
                  <div className="glow-card-content p-8 md:p-10 lg:p-12">
                    <div className="glow-card-glow" />

                    {/* Mouse-tracking radial glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-0"
                      style={{ background: mouseGlow }}
                    />

                    <div className="relative z-10">
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="tracking-luxury text-white/25 mb-2"
                      >
                        Inquiry
                      </motion.p>
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25, ease: luxuryEase }}
                        className="heading-luxury text-2xl md:text-3xl text-foreground/90 mb-10"
                      >
                        Send us a message
                      </motion.h2>

                      <form className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                          <FormField id="firstName" label="First Name" placeholder="John" delay={0.05} />
                          <FormField id="lastName" label="Last Name" placeholder="Doe" delay={0.1} />
                        </div>
                        <FormField id="email" label="Email" type="email" placeholder="john@company.com" delay={0.15} />
                        <FormField id="company" label="Company" placeholder="Company name" delay={0.2} />
                        <FormSelect delay={0.25} />
                        <FormTextarea id="message" label="Message" placeholder="Tell us about your project or question..." delay={0.3} />

                        <motion.div
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.35, ease: luxuryEase }}
                          className="flex items-center justify-between pt-2 gap-6"
                        >
                          <MagneticButton variant="primary" type="submit">
                            <Send className="w-4 h-4" />
                            Send message
                          </MagneticButton>
                          <p className="text-[10px] text-white/20 tracking-wide hidden sm:block">
                            We respond within 24 hours
                          </p>
                        </motion.div>
                      </form>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Sidebar ──────────────────────────── */}
            <div className="lg:col-span-5 flex flex-col gap-12">

              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
              >
                <p className="tracking-luxury text-white/25 mb-8">What to Expect</p>
                <div>
                  {processSteps.map((step, i) => (
                    <TimelineStep
                      key={step.num}
                      step={step}
                      index={i}
                      isLast={i === processSteps.length - 1}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: luxuryEase }}
                className="h-px bg-gradient-to-r from-white/[0.07] to-transparent origin-left"
              />

              {/* Direct contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
                className="relative rounded border border-white/[0.05] bg-white/[0.015] p-7 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

                <p className="tracking-luxury text-white/25 mb-5">Prefer direct contact?</p>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@advizenco.com", href: "mailto:info@advizenco.com" },
                    { icon: Phone, label: "Call us", value: "+998 (33) 488 48 88", href: "tel:+998334884888" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="group flex items-center justify-between p-3 rounded border border-white/[0.04] hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-white/25 group-hover:text-primary-light/70 transition-colors duration-300 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5">{label}</p>
                          <p className="text-sm text-foreground/75 group-hover:text-foreground/95 transition-colors duration-200">{value}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-primary-light/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.05] flex items-center gap-3">
                  <MapPin className="w-3.5 h-3.5 text-white/20 shrink-0" />
                  <p className="text-xs text-white/30 leading-relaxed">
                    Tashkent, Uzbekistan — Mon to Fri, 9:00 – 18:00
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
