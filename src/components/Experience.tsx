import { EXPERIENCE } from "@/constants/data";
import { EXPERIENCE_TAG, EXPERIENCE_TITLE } from "@/constants/strings";
import SectionHeader from "./SectionHeader";
import Divider from "./Divider";
import s from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section section-pad-bottom">
      <div className="container">
        <Divider />
        <SectionHeader tag={EXPERIENCE_TAG} title={EXPERIENCE_TITLE} />

        <div className={s.timeline}>
          <div className={s.timelineLine} />

          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.role + exp.period}
              className={`${s.expItem} reveal`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={s.dotWrap}>
                <div className={s.dot} />
              </div>

              <div className={s.expCard}>
                <div className={s.header}>
                  <div className={s.role}>{exp.role}</div>
                  <div className="period-badge">{exp.period}</div>
                </div>

                <div className="company-label" style={{ marginBottom: 16 }}>{exp.company}</div>

                <ul className={s.points}>
                  {exp.points.map((point, j) => (
                    <li key={j} className={s.point}>
                      <span className={s.pointArrow}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className={s.metrics}>
                  {exp.metrics.map((m) => (
                    <span key={m} className="metric-chip">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
