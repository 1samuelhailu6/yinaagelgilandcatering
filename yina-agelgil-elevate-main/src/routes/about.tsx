import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, ChefHat, Eye, Leaf, ShieldCheck, Target } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-feast.jpg";
import weddingImg from "@/assets/event-wedding.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yina Agelgil & Catering · Addis Ababa, Ethiopia" },
      { name: "description", content: "ይና አገልግል እና ካተሪንግ — በአዲስ አበባ የተመሰረተ ዘመናዊ የምግብ አገልግሎት ድርጅት። Mission, vision, hygiene standards and 10+ years of catering experience." },
      { property: "og:title", content: "About Yina Agelgil & Catering" },
      { property: "og:description", content: "Premium Ethiopian catering rooted in tradition, delivered with modern standards." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="bg-gradient-sage">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">About us · ስለ እኛ</p>
            <h1 className="mt-3 font-am text-4xl font-bold leading-tight md:text-6xl">
              ባህልን ከ<span className="text-gold">ዘመናዊነት</span> ጋር አጣምረን
            </h1>
            <p className="mt-6 font-am text-lg leading-relaxed text-muted-foreground">
              ይና አገልግል እና ካተሪንግ በአዲስ አበባ የተመሰረተ ዘመናዊ የምግብ አገልግሎት ድርጅት ነው። ላለፉት አስር አመታት ለሰርግ፣ ለሐዘን፣ ለልደት፣ ለምርቃት እና ለድርጅት ፕሮግራሞች ጥራት ያለው አገልግሎት በመስጠት ይታወቃል።
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={heroImg} alt="Yina Agelgil traditional Ethiopian feast" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass p-5 shadow-soft md:block">
              <div className="font-display text-3xl font-bold text-gold">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-2xl bg-card p-8 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold">Our Mission · ተልዕኮ</h2>
            <p className="mt-3 font-am text-muted-foreground">
              የኢትዮጵያን ባህላዊ ምግብ በከፍተኛ ጥራት፣ በዘመናዊ አቀራረብ እና በተመጣጣኝ ዋጋ ለእያንዳንዱ ደንበኛ ማቅረብ።
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl bg-card p-8 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold">Our Vision · ራዕይ</h2>
            <p className="mt-3 font-am text-muted-foreground">
              በምስራቅ አፍሪካ ቀዳሚ የኢትዮጵያ አገልግል እና ካተሪንግ አገልግሎት መሆን።
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-gradient-sage py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div {...fadeUp} className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Standards</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">የንፅህና እና ጥራት መርሆዎች</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "የንፅህና ደረጃ", d: "በዓለም አቀፍ ደረጃ ባለ የንፅህና መስፈርቶች የተዘጋጀ።" },
              { icon: Leaf, t: "ትኩስ ግብዓቶች", d: "በየቀኑ ከታማኝ አቅራቢዎች የተገዙ ግብዓቶች።" },
              { icon: ChefHat, t: "የተመረቁ ሼፎች", d: "ልምድ ያላቸው ሼፎች በእጁ ዝግጅት።" },
              { icon: Award, t: "የተረጋገጠ ጥራት", d: "በመቶዎች የተደገፉ የስኬታማ ዝግጅቶች።" },
              { icon: Target, t: "በሰዓቱ አቅርቦት", d: "ዝግጅት ሳይዘገይ በትክክለኛው ሰዓት ይደርሳል።" },
              { icon: Eye, t: "ዘመናዊ አቀራረብ", d: "የእይታ ውበትን ከጣዕም ጋር አዋህደን።" },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl glass p-6 shadow-soft"
              >
                <s.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-am text-lg font-bold">{s.t}</h3>
                <p className="mt-2 font-am text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience strip */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div {...fadeUp} className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={weddingImg} alt="Ethiopian wedding catering setup by Yina Agelgil" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Experience</p>
            <h2 className="mt-3 font-display text-4xl font-bold">500+ ዝግጅቶችን አከናውነናል</h2>
            <p className="mt-5 font-am text-muted-foreground">
              ከትንሽ የቤተሰብ ስብሰባ እስከ ትላልቅ የድርጅት ፕሮግራሞች ድረስ የተለያዩ ዝግጅቶችን በተሳካ ሁኔታ አከናውነናል። እያንዳንዱ ዝግጅት ለእኛ ልዩ ነው።
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[["500+", "Events"], ["10+", "Years"], ["98%", "Repeat"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-gradient-gold px-6 py-3 font-am font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.03]">
              ለማማከር ያግኙን
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
