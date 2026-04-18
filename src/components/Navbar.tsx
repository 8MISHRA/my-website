"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/data";
import {
  NAV_LOGO,
  NAV_LOGO_SUFFIX,
  NAV_CTA_LABEL,
  NAV_CTA_EMAIL,
  NAV_TOGGLE_ARIA,
} from "@/constants/strings";
import s from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ""}`}>
        <div className={s.inner}>
          <div className={s.logo}>
            {NAV_LOGO}<span className={s.logoSuffix}>{NAV_LOGO_SUFFIX}</span>
          </div>

          <ul className={s.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={s.linkItem}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href={NAV_CTA_EMAIL} className={s.cta}>{NAV_CTA_LABEL}</a>

          <button
            className={s.toggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={NAV_TOGGLE_ARIA}
          >
            <span className={s.toggleBar} />
            <span className={s.toggleBar} />
            <span className={s.toggleBar} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile} className={s.mobileLink}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
