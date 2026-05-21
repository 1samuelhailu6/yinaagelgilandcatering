import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-sage">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-base font-bold">Y</span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight">Yina Agelgil</div>
            <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">& Catering</div>
          </div>
        </div>

        <ul className="hidden items-center gap-4 md:flex">
          <li><Link to="/" className="text-xs font-medium font-am hover:text-gold">Home</Link></li>
          <li><Link to="/menu" className="text-xs font-medium font-am hover:text-gold">Menu</Link></li>
          <li><Link to="/about" className="text-xs font-medium font-am hover:text-gold">About Us</Link></li>
          <li><Link to="/contact" className="text-xs font-medium font-am hover:text-gold">Contact</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a aria-label="Facebook" href="#" className="grid h-8 w-8 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Facebook className="h-3.5 w-3.5" /></a>
          <a aria-label="Instagram" href="#" className="grid h-8 w-8 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Instagram className="h-3.5 w-3.5" /></a>
          <a aria-label="Telegram" href="https://t.me/" className="grid h-8 w-8 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Send className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
