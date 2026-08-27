import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type PortfolioSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  index?: string;
  tone?: "light" | "dark" | "charcoal";
};

export default function PortfolioSection({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  index,
  tone = "light",
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      className={`section section-${tone} ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-shell">
        {index ? (
          <span className="section-index" aria-hidden="true">
            {index}
          </span>
        ) : null}
        <Reveal className="section-header">
          <header>
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            <h2 id={`${id}-title`} className="section-title">
              <span className="title-text">{title}</span>
            </h2>
            {lead ? <p className="section-lead">{lead}</p> : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
