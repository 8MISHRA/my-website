"use client";

import { useEffect, useRef } from "react";
import { HERO_STATS } from "@/constants/data";
import {
  HERO_BADGE,
  HERO_FIRST_NAME,
  HERO_LAST_NAME,
  HERO_ROLE,
  HERO_TAGLINE_BOLD,
  HERO_TAGLINE_REST,
  HERO_TAGLINE_LINE2,
  HERO_CTA_PRIMARY,
  HERO_CTA_PRIMARY_HREF,
  HERO_CTA_SECONDARY,
  HERO_CTA_SECONDARY_HREF,
} from "@/constants/strings";
import s from "./Hero.module.css";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const visual = visualRef.current;
    if (content) {
      content.style.opacity = "0";
      content.style.transform = "translateY(24px)";
      setTimeout(() => {
        content.style.transition = "opacity .9s ease, transform .9s ease";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
      }, 100);
    }
    if (visual) {
      visual.style.opacity = "0";
      setTimeout(() => {
        visual.style.transition = "opacity .9s ease";
        visual.style.opacity = "1";
      }, 400);
    }
  }, []);

  return (
    <section id="hero" className={s.section}>
      <div className={s.grid}>
        <div ref={contentRef}>
          <div className={s.badge}>
            <span className={s.badgeDot} />
            {HERO_BADGE}
          </div>

          <h1 className={s.title}>
            {HERO_FIRST_NAME}
            <br />
            <span className={s.titleAccent}>{HERO_LAST_NAME}</span>
          </h1>

          <p className={s.role}>{HERO_ROLE}</p>

          <p className={s.tagline}>
            I build <strong className={s.taglineBold}>{HERO_TAGLINE_BOLD}</strong>{" "}
            {HERO_TAGLINE_REST}
            <br />
            {HERO_TAGLINE_LINE2}
          </p>

          <div className={s.actions}>
            <a href={HERO_CTA_PRIMARY_HREF} className="btn-primary">{HERO_CTA_PRIMARY}</a>
            <a href={HERO_CTA_SECONDARY_HREF} className="btn-secondary">{HERO_CTA_SECONDARY}</a>
          </div>
        </div>

        <div ref={visualRef} className={s.visual}>
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className={s.statCard}>
              <div className={s.statNum}>{stat.value}</div>
              <div className={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
