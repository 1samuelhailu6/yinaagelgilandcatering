import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "መነሻ", en: "Home" },
  { to: "/menu", label: "ሜኑ", en: "Menu" },
  { to: "/about", label: "ስለ እኛ", en: "About" },
  { to: "/contact", label: "ያግኙን", en: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-lg font-bold shadow-soft transition-transform group-hover:scale-105">
            Y
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight">Yina Agelgil</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">& Catering</div>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-gold after:scale-x-100" }}
                className="relative px-4 py-2 text-sm font-medium font-am transition-colors hover:text-gold after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href="tel:+251911000000"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.03] hover:shadow-elegant"
          >
            <Phone className="h-4 w-4" /> ይደውሉ
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <ul className="flex flex-col p-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 font-am font-medium hover:bg-secondary"
                >
                  {l.label} <span className="text-xs text-muted-foreground">— {l.en}</span>
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+251911000000"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
