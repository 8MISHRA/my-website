import { ACHIEVEMENTS } from "@/constants/data";
import { ACHIEVEMENTS_TAG, ACHIEVEMENTS_TITLE } from "@/constants/strings";
import SectionHeader from "./SectionHeader";
import Divider from "./Divider";
import s from "./Achievements.module.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section section-pad-bottom">
      <div className="container">
        <Divider />
        <SectionHeader tag={ACHIEVEMENTS_TAG} title={ACHIEVEMENTS_TITLE} />

        <div className={s.grid}>
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={ach.title}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={s.icon}>{ach.icon}</div>
              <div>
                <div className={s.title}>{ach.title}</div>
                <div className={s.desc}>{ach.description}</div>
                <div className={s.year}>{ach.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
