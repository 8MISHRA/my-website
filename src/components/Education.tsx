import { EDUCATION } from "@/constants/data";
import { EDUCATION_TAG, EDUCATION_TITLE } from "@/constants/strings";
import SectionHeader from "./SectionHeader";
import Divider from "./Divider";
import s from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section section-pad-bottom">
      <div className="container">
        <Divider />
        <SectionHeader tag={EDUCATION_TAG} title={EDUCATION_TITLE} />

        <div className={s.list}>
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.institution}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={s.header}>
                <div className={s.degree}>{edu.degree}</div>
                <div className="period-badge">{edu.period}</div>
              </div>
              <div className={s.institution}>{edu.institution}</div>
              <div className={s.badges}>
                <span className="metric-chip">{edu.score}</span>
                <span className="accent-chip">{edu.honors}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
