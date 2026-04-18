import {
  FOOTER_NAME,
  FOOTER_COPY_SUFFIX,
  FOOTER_BACK_TO_TOP,
  FOOTER_GITHUB_LABEL,
  FOOTER_GITHUB_URL,
  FOOTER_LINKEDIN_LABEL,
  FOOTER_LINKEDIN_URL,
} from "@/constants/strings";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.copy}>
          © 2025 <span className={s.copyName}>{FOOTER_NAME}</span>{FOOTER_COPY_SUFFIX}
        </div>
        <div className={s.footerLinks}>
          <a href="#hero" className={s.footerLink}>{FOOTER_BACK_TO_TOP}</a>
          <a href={FOOTER_GITHUB_URL} target="_blank" rel="noopener noreferrer" className={s.footerLink}>
            {FOOTER_GITHUB_LABEL}
          </a>
          <a href={FOOTER_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={s.footerLink}>
            {FOOTER_LINKEDIN_LABEL}
          </a>
        </div>
      </div>
    </footer>
  );
}
