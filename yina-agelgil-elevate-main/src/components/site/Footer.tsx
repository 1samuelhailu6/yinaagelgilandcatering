import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-sage">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-xl font-bold">Y</span>
            <div>
              <div className="font-display text-xl font-bold">Yina Agelgil & Catering</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">ይና አገልግል እና ካተሪንግ</div>
            </div>
          </div>
          <p className="mt-5 max-w-md font-am text-sm leading-relaxed text-muted-foreground">
            በአዲስ አበባ የተመሰረተ ዘመናዊ የአገልግል እና ካተሪንግ አገልግሎት። ለሰርግ፣ ለሐዘን፣ ለልደት፣ ለምርቃት እና ለድርጅት ፕሮግራሞች ጥራት ያለው ምግብ።
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Facebook className="h-4 w-4" /></a>
            <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Telegram" href="https://t.me/" className="grid h-10 w-10 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Send className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home / መነሻ</Link></li>
            <li><Link to="/menu" className="hover:text-gold">Menu / ሜኑ</Link></li>
            <li><Link to="/about" className="hover:text-gold">About / ስለ እኛ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact / ያግኙን</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Bole, Addis Ababa, Ethiopia</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> <a href="tel:+251911000000" className="hover:text-gold">+251 911 000 000</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> <a href="mailto:hello@yinaagelgil.com" className="hover:text-gold">hello@yinaagelgil.com</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold" /> Mon–Sun · 8:00 – 22:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Yina Agelgil & Catering — Addis Ababa, Ethiopia.</p>
          <p className="font-am">በፍቅር በአዲስ አበባ የተዘጋጀ።</p>
        </div>
      </div>
    </footer>
  );
}
