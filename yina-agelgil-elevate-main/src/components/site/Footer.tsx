import { Link } from "@tanstack/react-router";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-header-footer">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="font-display text-sm font-bold tracking-tight">Yina Agelgil & Catering</div>
        </div>

        <ul className="flex items-center justify-center gap-3 flex-wrap flex-1">
          <li><Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-gold underline underline-offset-4" }} className="text-xs font-medium font-am hover:text-gold">Home</Link></li>
          <li><Link to="/menu" activeProps={{ className: "text-gold underline underline-offset-4" }} className="text-xs font-medium font-am hover:text-gold">Menu</Link></li>
          <li><Link to="/about" activeProps={{ className: "text-gold underline underline-offset-4" }} className="text-xs font-medium font-am hover:text-gold whitespace-nowrap">About Us</Link></li>
          <li><Link to="/contact" activeProps={{ className: "text-gold underline underline-offset-4" }} className="text-xs font-medium font-am hover:text-gold">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a aria-label="Telegram" href="https://t.me/Abayeagelgil1" className="grid h-8 w-8 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110"><Send className="h-3.5 w-3.5" /></a>
          <a aria-label="TikTok" href="https://www.tiktok.com/@yina_agelgil" className="grid h-8 w-8 place-items-center rounded-full bg-card text-gold shadow-soft transition hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.87 2.89 2.89 0 0 1-2.88-2.87 2.89 2.89 0 0 1 2.88-2.88c.3 0 .59.05.87.14v-3.5a6.37 6.37 0 0 0-.87-.07A6.35 6.35 0 0 0 3.34 17.7a6.35 6.35 0 0 0 6.35 6.36 6.35 6.35 0 0 0 6.35-6.36V8.82a8.28 8.28 0 0 0 4.55 1.46V6.69a4.78 4.78 0 0 1-.35 0z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
