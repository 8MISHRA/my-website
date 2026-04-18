import { SKILLS } from "@/constants/data";
import { SKILLS_TAG, SKILLS_TITLE, SKILLS_SUBTITLE } from "@/constants/strings";
import SectionHeader from "./SectionHeader";
import Divider from "./Divider";
import s from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section section-pad-bottom">
      <div className="container">
        <Divider />
        <SectionHeader tag={SKILLS_TAG} title={SKILLS_TITLE} subtitle={SKILLS_SUBTITLE} />

        <div className={s.grid}>
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className={`${s.group} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={s.groupHeader}>
                <div className={s.groupIcon}>{group.icon}</div>
                {group.category}
              </div>
              <div className={s.chipList}>
                {group.chips.map((chip) => (
                  <span key={chip} className={s.chip}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
