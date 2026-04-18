interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <div className="reveal section-tag">{tag}</div>
      <h2 className="reveal section-title" style={{ transitionDelay: ".1s" }}>{title}</h2>
      {subtitle && (
        <p className="reveal section-sub" style={{ transitionDelay: ".2s" }}>{subtitle}</p>
      )}
    </>
  );
}
