import { ABOUT_ITEMS, ABOUT_TAGS } from "@/constants/data";
import { ABOUT_TAG, ABOUT_TITLE, ABOUT_PARAGRAPHS } from "@/constants/strings";
import SectionHeader from "./SectionHeader";
import s from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section section-pad">
      <div className="container">
        <SectionHeader tag={ABOUT_TAG} title={ABOUT_TITLE} />

        <div className={s.grid}>
          <div className="reveal" style={{ transitionDelay: ".2s" }}>
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <p key={i} className={s.paragraph}>
                {para.before}
                {para.bold && <strong className={s.bold}>{para.bold}</strong>}
                {para.after}
              </p>
            ))}
            <div className={s.tags}>
              {ABOUT_TAGS.map((tag) => (
                <span key={tag} className={s.tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={`${s.stack} reveal`} style={{ transitionDelay: ".3s" }}>
            {ABOUT_ITEMS.map((item) => (
              <div key={item.title} className={s.item}>
                <div className={s.itemIcon}>{item.icon}</div>
                <div>
                  <div className={s.itemTitle}>{item.title}</div>
                  <div className={s.itemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
