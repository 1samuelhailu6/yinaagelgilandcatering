import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import doroImg from "@/assets/dish-doro.jpg";
import beyaynetuImg from "@/assets/dish-beyaynetu.jpg";
import kitfoImg from "@/assets/dish-kitfo.jpg";
import heroImg from "@/assets/hero-feast.jpg";

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

type Item = { name: string; en: string; desc: string; price: string; img: string };
type Category = { id: string; label: string; en: string; items: Item[] };

const categories: Category[] = [
  {
    id: "fast",
    label: "የጾም አገልግል",
    en: "Fasting platters",
    items: [
      { name: "የጾም በያይነቱ", en: "Vegan Beyaynetu", desc: "ሽሮ፣ ምስር፣ ጎመን፣ ዱባ፣ ቲማቲም ሰላጣ።", price: "ETB 650", img: beyaynetuImg },
      { name: "ሽሮ ፍትፍት", en: "Shiro Fitfit", desc: "በቅመም የበለፀገ ሽሮ ከእንጀራ ጋር።", price: "ETB 380", img: beyaynetuImg },
      { name: "ምስር ወጥ", en: "Misir Wat", desc: "ቀይ ምስር በቅመም በበርበሬ የተዘጋጀ።", price: "ETB 420", img: beyaynetuImg },
    ],
  },
  {
    id: "feast",
    label: "የፍስክ አገልግል",
    en: "Feasting platters",
    items: [
      { name: "ዶሮ ወጥ", en: "Doro Wat", desc: "ባህላዊ የዶሮ ወጥ ከእንቁላል ጋር።", price: "ETB 780", img: doroImg },
      { name: "ስጋ ጥብስ", en: "Sega Tibs", desc: "በቅቤና በቅመም የተጠበሰ ስጋ።", price: "ETB 820", img: doroImg },
      { name: "ቦዘና ሺሮ", en: "Bozena Shiro", desc: "በስጋ የተዘጋጀ ልዩ ሽሮ።", price: "ETB 560", img: doroImg },
    ],
  },
  {
    id: "special",
    label: "ባህላዊ ልዩ አገልግል",
    en: "Special traditional",
    items: [
      { name: "ክትፎ ስፔሻል", en: "Kitfo Special", desc: "ክትፎ ከአይብ፣ ጎመንና ቅቤ ጋር።", price: "ETB 950", img: kitfoImg },
      { name: "ጎረድ ጎረድ", en: "Gored Gored", desc: "በቅቤና ሚጥሚጣ የተዘጋጀ ጥሬ ስጋ።", price: "ETB 980", img: kitfoImg },
      { name: "ሙሉ አገልግል", en: "Full Agelgil", desc: "ለ4–6 ሰዎች የተዘጋጀ ሙሉ ድግስ።", price: "ETB 2,400", img: heroImg },
    ],
  },
];

function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <div className="min-h-screen bg-background">
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
            ዘመናዊ ጣዕም <span className="text-gold">በባህላዊ ግሩም</span> አቀራረብ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl font-am text-muted-foreground"
          >
            ሁሉንም የዝግጅት አይነቶች በሚስማማ መልኩ ለማስተናገድ ሰፊ ምርጫ አለን — ከጾም እስከ ፍስክ።
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 font-am text-sm font-semibold transition ${
                active === c.id
                  ? "bg-gradient-gold text-primary-foreground shadow-elegant"
                  : "bg-card text-foreground hover:bg-secondary shadow-soft"
              }`}
            >
              {c.label} <span className="text-xs opacity-70">· {c.en}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {current.items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.en} — ${item.name} Ethiopian dish`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-xl font-bold">{item.name}</h2>
                  <span className="font-display text-lg font-bold text-gold">{item.price}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.en}</p>
                <p className="mt-3 font-am text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-12 text-center font-am text-sm text-muted-foreground">
          ለልዩ ምግቦች እና ለትልልቅ ዝግጅቶች ዋጋ በተናጥል ይተመናል። ለማማከር{" "}
          <a href="tel:+251911000000" className="font-semibold text-gold hover:underline">ይደውሉ</a>።
        </p>
      </section>

      <Footer />
    </div>
  );
}
