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
} from "lucide-react";
import TextReveal, { RevealLine } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const luxuryEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Data ─────────────────────────────────────────────── */

const contactDetails = [
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

/* ── Animated form input ─────────────────────────────── */

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
      className="relative"
    >
      <label
        htmlFor={id}
        className={`block text-xs uppercase tracking-widest mb-3 transition-colors duration-300 ${
          focused ? "text-primary-light" : "text-white/30"
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
        className="w-full px-0 py-3 bg-transparent text-foreground placeholder:text-white/15 focus:outline-none transition-colors"
      />
      {/* Animated underline */}
      <div className="relative h-px w-full bg-white/[0.06]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
          }}
          initial={false}
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            marginLeft: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.4 : 0,
          }}
          transition={{ duration: 0.4, ease: luxuryEase }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
      className="relative"
    >
      <label
        htmlFor={id}
        className={`block text-xs uppercase tracking-widest mb-3 transition-colors duration-300 ${
          focused ? "text-primary-light" : "text-white/30"
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
        className="w-full px-0 py-3 bg-transparent text-foreground placeholder:text-white/15 focus:outline-none transition-colors resize-none"
      />
      <div className="relative h-px w-full bg-white/[0.06]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
          }}
          initial={false}
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            marginLeft: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.4 : 0,
          }}
          transition={{ duration: 0.4, ease: luxuryEase }}
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay, ease: luxuryEase }}
      className="relative"
    >
      <label
        htmlFor="service"
        className={`block text-xs uppercase tracking-widest mb-3 transition-colors duration-300 ${
          focused ? "text-primary-light" : "text-white/30"
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
          className="w-full px-0 py-3 bg-transparent text-foreground focus:outline-none transition-colors cursor-pointer appearance-none"
        >
          <option value="" className="bg-[#1A1A1A]">
            Select a service
          </option>
          <option value="tax" className="bg-[#1A1A1A]">
            Tax Consulting
          </option>
          <option value="legal" className="bg-[#1A1A1A]">
            Legal Advisory
          </option>
          <option value="finance" className="bg-[#1A1A1A]">
            Finance &amp; Accounting
          </option>
          <option value="hr" className="bg-[#1A1A1A]">
            Human Resources
          </option>
          <option value="marketing" className="bg-[#1A1A1A]">
            Strategic Marketing
          </option>
          <option value="funding" className="bg-[#1A1A1A]">
            Funding &amp; Grants
          </option>
          <option value="other" className="bg-[#1A1A1A]">
            Other
          </option>
        </select>
        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
      </div>
      <div className="relative h-px w-full bg-white/[0.06]">
        <motion.div
          className="absolute inset-y-0 left-1/2 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), transparent)",
          }}
          initial={false}
          animate={{
            width: focused ? "100%" : filled ? "100%" : "0%",
            marginLeft: focused ? "-50%" : filled ? "-50%" : "0%",
            opacity: focused ? 1 : filled ? 0.4 : 0,
          }}
          transition={{ duration: 0.4, ease: luxuryEase }}
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
    <motion.div
      ref={ref}
      className="relative flex gap-5"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: luxuryEase }}
    >
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative w-3 h-3 rounded-full border border-primary/40 bg-background z-10 mt-1.5 shrink-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.12 + 0.2,
            ease: luxuryEase,
          }}
        >
          <motion.div
            className="absolute inset-[3px] rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.12 + 0.4 }}
          />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-primary/25 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12 + 0.3,
              ease: luxuryEase,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? "pb-0" : "pb-7"}>
        <span className="text-[10px] font-mono text-primary/50 tracking-widest">
          {step.num}
        </span>
        <h4 className="text-sm font-medium text-foreground/90 mt-1 mb-1.5">
          {step.title}
        </h4>
        <p className="text-sm text-white/35 leading-relaxed">{step.text}</p>
      </div>
    </motion.div>
  );
}

/* ── Contact detail item ─────────────────────────────── */

function ContactItem({
  item,
  index,
}: {
  item: (typeof contactDetails)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      className="group flex items-center gap-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: luxuryEase }}
    >
      <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-primary/20 group-hover:bg-primary/[0.04] transition-colors duration-300">
        <Icon className="w-4 h-4 text-white/30 group-hover:text-primary-light/70 transition-colors duration-300" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5">
          {item.label}
        </p>
        {item.href ? (
          <a
            href={item.href}
            className="text-sm text-foreground/80 hover:text-primary-light transition-colors duration-200"
          >
            {item.value}
          </a>
        ) : (
          <p className="text-sm text-foreground/80">{item.value}</p>
        )}
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const gradientBg = useTransform(
    [smoothX, smoothY],
    ([x, y]: number[]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 13, 13, 0.045), transparent 60%)`
  );

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
              className="tracking-luxury text-white/30 mb-6"
            >
              Contact
            </motion.p>

            <TextReveal
              text="Begin a conversation"
              as="h1"
              mode="line"
              className="heading-luxury text-5xl md:text-7xl text-foreground leading-[1.08]"
              delay={0.2}
            />

            {/* Decorative gradient line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
              className="h-px w-32 bg-gradient-to-r from-primary/50 to-transparent origin-left mt-8 mb-8"
            />

            <RevealLine delay={0.6}>
              <p className="text-lg text-white/40 max-w-xl leading-relaxed">
                Every engagement starts with understanding. Reach out and our
                team will respond within 24 hours.
              </p>
            </RevealLine>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────── */}
      <section className="pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            {/* ── Form ─────────────────────────────── */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <motion.div
                ref={formRef}
                onMouseMove={handleMouseMove}
                className="relative rounded-2xl border border-white/[0.04] p-8 md:p-12 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                style={{ background: gradientBg }}
              >
                {/* Top highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="tracking-luxury text-white/25 mb-2"
                >
                  Inquiry
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: luxuryEase }}
                  className="heading-luxury text-2xl md:text-3xl text-foreground/90 mb-10"
                >
                  Send us a message
                </motion.h2>

                <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <FormField
                      id="firstName"
                      label="First Name"
                      placeholder="John"
                      delay={0.1}
                    />
                    <FormField
                      id="lastName"
                      label="Last Name"
                      placeholder="Doe"
                      delay={0.15}
                    />
                  </div>

                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="john@company.com"
                    delay={0.2}
                  />

                  <FormField
                    id="company"
                    label="Company"
                    placeholder="Company name"
                    delay={0.25}
                  />

                  <FormSelect delay={0.3} />

                  <FormTextarea
                    id="message"
                    label="Message"
                    placeholder="Tell us about your project or question..."
                    delay={0.35}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: luxuryEase }}
                    className="pt-2"
                  >
                    <MagneticButton variant="primary" type="submit">
                      <Send className="w-4 h-4" />
                      Send message
                    </MagneticButton>
                  </motion.div>
                </form>
              </motion.div>
            </div>

            {/* ── Sidebar ──────────────────────────── */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-10">
              {/* Contact details */}
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="tracking-luxury text-white/25 mb-6"
                >
                  Get in Touch
                </motion.p>
                <div className="space-y-5">
                  {contactDetails.map((item, i) => (
                    <ContactItem key={item.label} item={item} index={i} />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="h-px bg-gradient-to-r from-white/[0.06] to-transparent origin-left"
              />

              {/* Process timeline */}
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="tracking-luxury text-white/25 mb-8"
                >
                  What to Expect
                </motion.p>
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
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                className="h-px bg-gradient-to-r from-white/[0.06] to-transparent origin-left"
              />

              {/* Office location */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: luxuryEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white/30" />
                  </div>
                  <p className="tracking-luxury text-white/25">Our Office</p>
                </div>
                <p className="text-foreground/80 mb-2 ml-[52px]">
                  Tashkent, Uzbekistan
                </p>
                <p className="text-sm text-white/35 leading-relaxed ml-[52px]">
                  Located in the heart of Tashkent, serving businesses across
                  Uzbekistan and the broader Central Asian region.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
