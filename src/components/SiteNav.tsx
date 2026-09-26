"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#progetti", label: "Progetti" },
  { href: "#competenze", label: "Competenze" },
  { href: "#esperienze", label: "Esperienze" },
  { href: "#formazione", label: "Formazione" },
  { href: "#contatti", label: "Contatti" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-wrap page-wrap">
        <a className="brand" href="#top" aria-label="Emiliano Bana, inizio pagina">EB<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <a className="nav-contact" href="mailto:bana.emi2007@gmail.com">Parliamone <span aria-hidden="true">↗</span></a>
        <button ref={menuButtonRef} className="mobile-menu-button" type="button" aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Navigazione mobile" aria-hidden={!open}>
        {links.map((link, index) => <a href={link.href} key={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><span>0{index + 1}</span>{link.label}</a>)}
        <a className="mobile-nav-email" href="mailto:bana.emi2007@gmail.com" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>bana.emi2007@gmail.com ↗</a>
      </nav>
    </header>
  );
}
