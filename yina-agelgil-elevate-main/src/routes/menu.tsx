import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import fastingImg from "@/assets/gallery6.webp";
import feastingImg from "@/assets/non-fasting.jpg";
import specialImg from "@/assets/kitfo.jpg";
import cateringImg from "@/assets/gallery3.webp";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Yina Agelgil & Catering · Ethiopian Agelgil in Addis Ababa" },
      { name: "description", content: "Explore our Ethiopian catering menu — fasting (የጾም) agelgil, feasting (የፍስክ) agelgil and special traditional platters. Prices in ETB. Addis Ababa." },
      { property: "og:title", content: "Menu — Yina Agelgil & Catering" },
      { property: "og:description", content: "Fasting, feasting and traditional Ethiopian agelgil platters." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: Menu,
});

const categories = [
  { id: "fast", label: "የጾም አገልግል", en: "Fasting", img: fastingImg },
  { id: "feast", label: "የፍስክ አገልግል", en: "Feasting", img: feastingImg },
  { id: "special", label: "ባህላዊ ልዩ", en: "Special", img: specialImg },
  { id: "catering", label: "የኬተሪንግ አገልግሎት", en: "Catering Service", img: cateringImg },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Menu() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border bg-gradient-sage">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:px-8 md:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-gold"
          >
            Our Menu · ሜኑ
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-am text-4xl font-bold md:text-6xl"
          >
            ልዩ ጣዕም ያላቸው የፆም እና የፍስክ ምግቦች
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl font-am text-muted-foreground"
          >
            ከ ግሩም አቀራረብ ጋር ሁሉንም የዝግጅት አይነቶች በሚስማማ መልኩ እንግዶችን ለማስተናገድ የሚሆኑ ሰፊ አማራጮች አሉን ። ለልዩ ትዕዛዝ እና ለትልልቅ ዝግጅቶች የተለየ ቅናሽ ስላለን ደውለው ያማክሩን።
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative min-h-[280px] overflow-hidden rounded-2xl shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <img
                src={c.img}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-gold opacity-20 transition duration-500 group-hover:scale-150" />
              <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center p-10 text-center">
                <h2 className="font-am text-3xl font-bold text-white">{c.label}</h2>
                <p className="mt-2 text-lg uppercase tracking-widest text-gold">{c.en}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </section>

      <Footer />
    </div>
  );
}
