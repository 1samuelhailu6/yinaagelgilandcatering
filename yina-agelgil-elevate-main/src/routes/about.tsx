import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero.webp";
import kitfoImg from "@/assets/kitfo.jpg";

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

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="bg-gradient-sage">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">About us · ስለ እኛ</p>
            <h1 className="mt-3 font-am text-4xl font-bold leading-tight md:text-6xl">
              ጣፋጭ ምግቦች ከ ልዩ መስተንግዶ ጋር
            </h1>
            <p className="mt-6 font-am text-lg leading-relaxed text-muted-foreground">
              ይና አገልግል እና ኬተሪንግ በአዲስ አበባ የተመሰረተ የ ኬተሪንግ አገልግሎት አቅራቢ ድርጅት ነው። ላለፉት አስር አመታት ለሰርግ፣ ለሐዘን፣ ለልደት፣ ለምርቃት እና ለድርጅት ፕሮግራሞች ጥራት ያለው አገልግሎት በመስጠት ይታወቃል። በይና አገልግል እና ኬተሪንግ ጥራት፣ ንፅህና፣ ታማኝነት እና የደንበኛ እርካታ የምንመራባቸው ዋና እሴቶች ናቸው። እያንዳንዱን ዝግጅት እንደ ራሳችን ዝግጅት በመቁጠር እናስተናግድልዎታለን፣ ምክንያቱም የእርስዎ ደስታ የእኛም ስኬት ነው።
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={heroImg} alt="Yina Agelgil traditional Ethiopian feast" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience strip */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div {...fadeUp} className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={kitfoImg} alt="Kitfo - traditional Ethiopian dish" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Experience</p>
            <p className="mt-5 font-am text-muted-foreground">
              ከትንሽ የቤተሰብ ስብሰባ እስከ ትላልቅ ሰርግ እና የድርጅት ፕሮግራሞች ድረስ የተለያዩ ዝግጅቶችን ለዓመታት በተሳካ ሁኔታ አከናውነናል። እያንዳንዱ ዝግጅት ለእኛ ልዩ ነው።
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { target: 200, suffix: "+", label: "Events" },
                { target: 10, suffix: "+", label: "Years" },
                { target: 100, suffix: "%", label: "Customer Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-gold">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
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
