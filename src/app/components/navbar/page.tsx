"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DarkModeToogle } from "../darkModeToogle/DarkModeToogle";

const links = [
  ["/", "Home"],
  ["/#selected-work", "Work"],
  ["/#about", "About"],
  ["/components/contact", "Contact"],
] as const;

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">B</span><span>Bimal<span className="brand-dot">.</span></span></Link>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map(([href, label]) => {
            const active = href === "/" ? pathname === "/" : href.startsWith("/#") ? pathname === "/" : pathname === href;
            return <Link key={label} href={href} onClick={() => setOpen(false)} className={active ? "nav-link nav-link-active" : "nav-link"}>{label}</Link>;
          })}
          <div className="nav-mobile-theme"><DarkModeToogle /></div>
        </div>
        <div className="nav-actions"><Link href="/components/contact" className="nav-cta">Let’s talk <span>↗</span></Link><div className="nav-desktop-theme"><DarkModeToogle /></div></div>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
    </header>
  );
};

export default Navbar;
