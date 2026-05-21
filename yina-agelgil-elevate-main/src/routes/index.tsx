import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Leaf, ShieldCheck, Sparkles, Star, Utensils } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.webp";
import doroImg from "@/assets/dish-doro.jpg";
import beyaynetuImg from "@/assets/dish-beyaynetu.jpg";
import kitfoImg from "@/assets/dish-kitfo.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yina Agelgil & Catering — Ethiopian Catering in Addis Ababa" },
      { name: "description", content: "Premium Ethiopian agelgil & catering in Addis Ababa for weddings, funerals, birthdays, graduations and corporate events. ለሰርግ፣ ለሐዘን፣ ለልደት፣ ለምርቃት ጥራት ያለው አገልግሎት።" },
      { property: "og:title", content: "Yina Agelgil & Catering — Ethiopian Catering in Addis Ababa" },
      { property: "og:description", content: "Premium Ethiopian catering in Addis Ababa. ለሁሉም ልዩ ዝግጅቶች ጣፋጭ የአገልግል አገልግሎት።" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const events = [
  { am: "ለሰርግ", en: "Weddings", desc: "ለሕይወትዎ ልዩ ቀን የተዘጋጀ ሙሉ የአገልግል አገልግሎት።", icon: Heart },
  { am: "ለሐዘን", en: "Funeral & Memorial", desc: "በታክት እና በትህትና የተዘጋጀ የሐዘን ምግብ አገልግሎት።", icon: Leaf },
  { am: "ለልደት", en: "Birthdays", desc: "ለልደት ቀንዎ የተለየ ጣዕም እና አቀራረብ።", icon: Sparkles },
  { am: "ለምርቃት", en: "Graduation", desc: "የስኬት ቀንዎን በሚገባ ለማክበር።", icon: Star },
  { am: "ለድርጅት ዝግጅቶች", en: "Corporate Events", desc: "ለድርጅት ዝግጅቶች ሙያዊ የካተሪንግ አገልግሎት።", icon: Utensils },
];

const dishes = [
  { name: "ዶሮ ወጥ", en: "Doro Wat", img: doroImg, desc: "በቅመም የበለፀገ ባህላዊ የዶሮ ወጥ ከእንቁላል ጋር።" },
  { name: "በያይነቱ", en: "Beyaynetu", img: beyaynetuImg, desc: "የጾም በያይነቱ — ሽሮ፣ ምስር፣ ጎመን፣ ዱባ።" },
  { name: "ክትፎ", en: "Kitfo", img: kitfoImg, desc: "በቅቤና ሚጥሚጣ የተዘጋጀ ልዩ ክትፎ ከአይብ ጋር።" },
];

const testimonials = [
  { name: "ሀና ተስፋዬ", quote: "ምግቡ በጣም ጣፋጭ እና ንፁህ ነበር።" },
  { name: "ዳዊት በቀለ", quote: "ለሰርጋችን እጅግ ጥሩ አገልግሎት ሰጥተዋል።" },
  { name: "ራሄል አለሙ", quote: "እንግዶቻችን ሁሉ በጣም ወደውታል።" },
  { name: "ቤተልሔም ግርማ", quote: "ሙያዊ፣ በሰዓቱ እና በተግባር የተሞላ አገልግሎት።" },
  { name: "ሳሚ ታደሰ", quote: "የአቀራረቡ ውበት እና የምግቡ ጣዕም ድንቅ ነበር።" },
];

const trust = [
  { icon: ShieldCheck, title: "የንፅህና ደረጃ", desc: "በከፍተኛ የንፅህና መስፈርቶች የተዘጋጀ።" },
  { icon: Sparkles, title: "ዘመናዊ አቀራረብ", desc: "ባህላዊ ጣዕም ከዘመናዊ አቀራረብ ጋር።" },
  { icon: Heart, title: "በፍቅር የተዘጋጀ", desc: "ለእያንዳንዱ እንግዳ ልዩ ትኩረት።" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ethiopian traditional feast in a mesob basket with injera and varied wats — Yina Agelgil catering"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_color-mix(in_oklab,var(--cream)_55%,transparent),transparent_60%)]" />

        <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-28 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-4xl font-am text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
          >
            ለሁሉም ልዩ ዝግጅቶች <span className="text-gold">ዘመናዊ</span> እና ጣፋጭ
            <br className="hidden sm:block" /> የአገልግል አገልግሎት
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl font-am text-base text-white/90 sm:text-lg"
          >
            ለሰርግ፣ ለልደት፣ ለምርቃት፣ ለሐዘን እና ለድርጅት ፕሮግራሞች በጥራት የተዘጋጀ አገልግሎት።
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-am font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.04]"
            >
              ሜኑ ይመልከቱ <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-am font-semibold text-white transition hover:bg-white/15"
            >
              ያግኙን
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <motion.div {...fadeUp} className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Signature dishes</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">ልዩ የተመረጡ ምግቦች</h2>
          <p className="mt-3 font-am text-muted-foreground">ለመክሰስ የሚያስችሉ ጥቂት ምሳሌዎች ከበለጸገ ሜኑዋችን።</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {dishes.map((d, i) => (
            <motion.article
              key={d.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.en} — ${d.name} Ethiopian dish by Yina Agelgil catering`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{d.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-gold">{d.en}</span>
                </div>
                <p className="mt-2 font-am text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-sage py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">ለምን እኛን ይመርጡ?</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl glass p-8 shadow-soft transition hover:-translate-y-1"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-soft">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-am text-xl font-bold">{t.title}</h3>
                <p className="mt-2 font-am text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <motion.div {...fadeUp} className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Services by event</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">በዝግጅት አይነት የእኛ አገልግሎቶች</h2>
          </div>
          <Link to="/contact" className="font-am text-sm text-gold hover:underline">ለማማከር ያግኙን →</Link>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.div
              key={e.en}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-gold opacity-10 transition group-hover:scale-150" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-gold">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-am text-2xl font-bold">{e.am}</h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.en}</p>
              <p className="mt-3 font-am text-sm text-muted-foreground">{e.desc}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 font-am text-sm font-semibold text-gold">
                ይዘዙ <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Gallery</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">ከስራዎቻችን ጥቂቶቹ</h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {[weddingImg, corporateImg, heroImg].map((img, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`overflow-hidden rounded-2xl shadow-soft ${i === 0 ? "md:row-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Ethiopian catering event setup ${i + 1} by Yina Agelgil`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="overflow-hidden bg-gradient-sage py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">የደንበኞቻችን አስተያየት</h2>
          </motion.div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--cream)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--cream)] to-transparent" />
          <div className="flex gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure key={i} className="w-[340px] flex-shrink-0 rounded-2xl glass p-7 shadow-soft">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 font-am text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-display text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-am text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Addis Ababa</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--ink)] to-[color:color-mix(in_oklab,var(--gold)_30%,var(--ink))] p-10 text-center shadow-elegant md:p-16"
        >
          <h2 className="font-am text-3xl font-bold text-white md:text-5xl">ለቀጣይ ዝግጅትዎ ዝግጁ ነን</h2>
          <p className="mx-auto mt-4 max-w-xl font-am text-white/80">
            ለዋጋ ግምት እና ለማማከር አሁኑኑ ያግኙን — በ24 ሰዓት ውስጥ ምላሽ እንሰጣለን።
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+251911000000" className="rounded-full bg-gradient-gold px-7 py-3.5 font-am font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.04]">
              ይደውሉ +251 911 000 000
            </a>
            <Link to="/contact" className="rounded-full border border-white/30 px-7 py-3.5 font-am font-semibold text-white transition hover:bg-white/10">
              መልዕክት ይላኩ
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
