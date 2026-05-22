import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-header-footer border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 relative">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="font-display text-base font-bold tracking-tight">Yina Agelgil & Catering</div>
        </Link>

        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
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
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-gold underline underline-offset-4" }}
                  className="block rounded-lg px-4 py-3 font-am font-medium hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+251911000000"
                className="flex items-center justify-center gap-2 rounded-full border border-gold px-5 py-3 text-sm font-semibold text-gold"
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
