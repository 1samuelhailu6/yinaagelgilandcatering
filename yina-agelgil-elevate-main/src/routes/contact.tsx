import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yina Agelgil & Catering · Addis Ababa" },
      { name: "description", content: "Get in touch with Yina Agelgil & Catering in Addis Ababa, Ethiopia. Call, WhatsApp, Telegram or send a message. Get directions via Google Maps." },
      { property: "og:title", content: "Contact — Yina Agelgil & Catering" },
      { property: "og:description", content: "Call, WhatsApp or visit us in Addis Ababa, Ethiopia." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="bg-gradient-sage">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.25em] text-gold">
            Contact us · ያግኙን
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-3xl font-am text-4xl font-bold md:text-6xl"
          >
            ለቀጣይ ዝግጅትዎ <span className="text-gold">እንተባበር</span>
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 rounded-3xl bg-card p-8 shadow-soft md:p-10"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="mt-1 font-am text-sm text-muted-foreground">በ24 ሰዓት ውስጥ ምላሽ እንሰጣለን።</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="ሙሉ ስም / Full name" required>
                <input required type="text" className="input-style" placeholder="አበበ ከበደ" />
              </Field>
              <Field label="ስልክ / Phone" required>
                <input required type="tel" className="input-style" placeholder="+251 911 ..." />
              </Field>
              <Field label="ኢሜል / Email">
                <input type="email" className="input-style" placeholder="you@example.com" />
              </Field>
              <Field label="የዝግጅት አይነት / Event type">
                <select className="input-style">
                  <option>ሰርግ — Wedding</option>
                  <option>ሐዘን — Funeral</option>
                  <option>ልደት — Birthday</option>
                  <option>ምርቃት — Graduation</option>
                  <option>ድርጅት — Corporate</option>
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="መልዕክት / Message">
                  <textarea rows={5} className="input-style" placeholder="ስለ ዝግጅትዎ ያጋሩን..." />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-am font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.03]"
            >
              <Send className="h-4 w-4" /> {sent ? "ተልኳል ✓ Sent" : "ላክ / Send"}
            </button>

            <style>{`.input-style{width:100%;border-radius:0.75rem;border:1px solid var(--border);background:var(--background);padding:0.75rem 1rem;font-size:0.9rem;outline:none;transition:border-color .2s, box-shadow .2s}.input-style:focus{border-color:var(--gold);box-shadow:0 0 0 3px color-mix(in oklab,var(--gold) 18%, transparent)}`}</style>
          </motion.form>

          {/* Sidebar contact */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactCard icon={Phone} title="Call now · ይደውሉ" desc="+251 911 000 000" href="tel:+251911000000" cta="Call" />
            <ContactCard icon={MessageCircle} title="WhatsApp" desc="በፍጥነት ለማነጋገር" href="https://wa.me/251911000000" cta="Chat" />
            <ContactCard icon={Send} title="Telegram" desc="@yinaagelgil" href="https://t.me/yinaagelgil" cta="Open" />
            <ContactCard icon={Mail} title="Email" desc="hello@yinaagelgil.com" href="mailto:hello@yinaagelgil.com" cta="Email" />

            <div className="rounded-2xl glass p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <h3 className="font-am font-bold">አድራሻ · Address</h3>
                  <p className="mt-1 font-am text-sm text-muted-foreground">Bole Sub-city, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <h3 className="font-am font-bold">የስራ ሰዓት · Hours</h3>
                  <p className="mt-1 font-am text-sm text-muted-foreground">Mon–Sun · 8:00 – 22:00</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-elegant"
        >
          <iframe
            title="Yina Agelgil & Catering location in Addis Ababa"
            src="https://www.google.com/maps?q=Bole,+Addis+Ababa,+Ethiopia&output=embed"
            width="100%"
            height="460"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </motion.div>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Bole,+Addis+Ababa,+Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 font-am font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.03]"
          >
            <MapPin className="h-4 w-4" /> Get Directions
          </a>
          <a
            href="tel:+251911000000"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-am font-semibold text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-am text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, title, desc, href, cta }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; href: string; cta: string }) {
  return (
    <a href={href} className="group flex items-center justify-between gap-4 rounded-2xl bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-elegant">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-am font-bold">{title}</div>
          <div className="text-sm text-muted-foreground">{desc}</div>
        </div>
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition group-hover:opacity-100">{cta} →</span>
    </a>
  );
}
