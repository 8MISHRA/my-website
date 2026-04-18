import { CONTACT_LINKS } from "@/constants/data";
import {
  CONTACT_TAG,
  CONTACT_TITLE_LINE1,
  CONTACT_TITLE_LINE2,
  CONTACT_SUBTITLE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
} from "@/constants/strings";
import { LinkedInIcon, GitHubIcon, PhoneIcon } from "./icons";
import Divider from "./Divider";
import s from "./Contact.module.css";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  phone: PhoneIcon,
} as const;

export default function Contact() {
  return (
    <section id="contact" className="section section-pad">
      <div className="container">
        <Divider />
        <div className={s.inner}>
          <div className={`${s.tagCenter} reveal`}>{CONTACT_TAG}</div>

          <h2 className={`${s.title} reveal`} style={{ transitionDelay: ".1s" }}>
            {CONTACT_TITLE_LINE1}
            <br />
            <em>{CONTACT_TITLE_LINE2}</em>
          </h2>

          <p className={`${s.subtitle} reveal`} style={{ transitionDelay: ".2s" }}>
            {CONTACT_SUBTITLE}
          </p>

          <a href={CONTACT_EMAIL_HREF} className={`${s.email} reveal`} style={{ transitionDelay: ".3s" }}>
            {CONTACT_EMAIL}
          </a>

          <div className={`${s.links} reveal`} style={{ transitionDelay: ".4s" }}>
            {CONTACT_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={s.contactLink}
                >
                  <Icon />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
