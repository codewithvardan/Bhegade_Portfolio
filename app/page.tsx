"use client";

import AmbientEffects from "@/components/AmbientEffects";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Reveal from "@/components/Reveal";
import SafeImage from "@/components/SafeImage";
import { useLanguage } from "@/context/LanguageContext";
import { images } from "@/data/images";
import { getPortfolio } from "@/data/portfolio";

export default function HomePage() {
  const { language } = useLanguage();
  const portfolio = getPortfolio(language);
  const { personal, ui } = portfolio;

  const marqueeItems =
    language === "hi"
      ? [
          "मावळभूषण",
          "शिक्षण महर्षि",
          "2 बार विधायक",
          "2 बार विधान परिषद सदस्य",
          "NMVPM",
          "NMIET 2008",
          "तळेगांव दाभाडे",
          "मावळ तालुका",
        ]
      : [
          "Mavalbhushan",
          "Shikshan Maharshi",
          "2-term MLA",
          "2-term MLC",
          "NMVPM",
          "NMIET 2008",
          "Talegaon Dabhade",
          "Maval Taluka",
        ];

  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skipToMain}
      </a>
      <AmbientEffects />
      <Navbar />
      <BackToTop />

      <main id="main">
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <div className="hero-orbit orbit-a" aria-hidden="true" />
          <div className="hero-orbit orbit-b" aria-hidden="true" />
          <div className="hero-mesh" aria-hidden="true" />
          <p className="hero-watermark" aria-hidden="true">
            MAVAL
          </p>

          <div className="page hero-grid">
            <div className="hero-content">
              <p className="hero-eyebrow anim-fade-up" style={{ animationDelay: "0.05s" }}>
                <span className="pulse-dot" aria-hidden="true" />
                {personal.popularNames.join(" · ").replace(/"/g, "")}
              </p>
              <h1 id="hero-title" className="hero-brand anim-fade-up" style={{ animationDelay: "0.18s" }}>
                <span className="hero-name-line">{personal.fullName.split(" ").slice(0, 2).join(" ")}</span>
                <span className="hero-name-accent">{personal.fullName.split(" ").slice(2).join(" ")}</span>
              </h1>
              <p className="hero-subtitle anim-fade-up" style={{ animationDelay: "0.32s" }}>
                {personal.shortIntro}
              </p>
              <p className="hero-meta anim-fade-up" style={{ animationDelay: "0.44s" }}>
                {language === "hi" ? `जन्म ${personal.dateOfBirth}` : `Born ${personal.dateOfBirth}`}
                <span className="meta-sep" aria-hidden="true" />
                {personal.placeOfBirth}
              </p>
              <div
                className="badge-row anim-fade-up"
                style={{ animationDelay: "0.56s" }}
                aria-label="Popular names and titles"
              >
                {personal.popularNames.map((name) => (
                  <span className="badge badge-on-dark" key={name}>
                    {name}
                  </span>
                ))}
              </div>
              <div className="hero-actions anim-fade-up" style={{ animationDelay: "0.68s" }}>
                <a className="button button-primary" href="#biography">
                  <span>{ui.storyBtn}</span>
                  <span className="button-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="button button-secondary" href="#timeline">
                  {ui.timelineBtn}
                </a>
              </div>
              <div className="hero-stats anim-fade-up" style={{ animationDelay: "0.8s" }} aria-label="Key highlights">
                {[
                  { value: "2×", label: ui.statsLabels.mla },
                  { value: "2×", label: ui.statsLabels.mlc },
                  { value: "NMVPM", label: ui.statsLabels.nmvpm },
                  { value: "2008", label: ui.statsLabels.nmiet },
                ].map((stat) => (
                  <div className="hero-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <nav className="hero-quick-nav anim-fade-up" style={{ animationDelay: "0.92s" }} aria-label="Quick section links">
                {portfolio.nav.slice(4, 9).map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hero-portrait-wrap anim-portrait">
              <div className="portrait-ring" aria-hidden="true" />
              <div className="portrait-ring ring-delayed" aria-hidden="true" />
              <div className="hero-portrait-frame">
                <SafeImage
                  className="hero-portrait-image"
                  src={images.hero.src}
                  alt={images.hero.alt}
                  placeholderLabel={images.hero.placeholderLabel}
                />
              </div>
              <div className="portrait-caption anim-fade-up" style={{ animationDelay: "0.9s" }}>
                <span>1936 — 2025</span>
                <strong>{language === "hi" ? "मावळ का गौरव" : "Pride of Maval"}</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i>·</i>
              </span>
            ))}
          </div>
        </div>

        <PortfolioSection
          id="biography"
          index="01"
          tone="light"
          eyebrow={ui.sectionTitles.biography.eyebrow}
          title={ui.sectionTitles.biography.title}
          lead={ui.sectionTitles.biography.lead}
        >
          <div className="fact-list two-col">
            {[
              [language === "hi" ? "संपूर्ण जीवन यात्रा" : "Complete life journey", portfolio.biography.completeLifeJourney],
              [language === "hi" ? "मुख्य मील का पत्थर" : "Major milestones", portfolio.biography.majorMilestones],
              [language === "hi" ? "सामना की गई चुनौतियां" : "Challenges faced", portfolio.biography.challengesFaced],
              [language === "hi" ? "महत्वपूर्ण मोड़" : "Turning points", portfolio.biography.turningPoints],
              [language === "hi" ? "महत्वपूर्ण उपलब्धियां" : "Important achievements", portfolio.biography.importantAchievements],
              [language === "hi" ? "पारिवारिक पृष्ठभूमि" : "Family background", personal.familyBackground],
            ].map(([label, value], index) => (
              <Reveal
                as="article"
                className="fact-item glass-card"
                key={label}
                delay={index * 80}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <span className="fact-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="fact-label">{label}</span>
                <p className="fact-value">{value}</p>
              </Reveal>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="timeline"
          index="02"
          tone="dark"
          eyebrow={ui.sectionTitles.timeline.eyebrow}
          title={ui.sectionTitles.timeline.title}
          lead={ui.sectionTitles.timeline.lead}
        >
          <ol className="timeline">
            {portfolio.timeline.map((event, index) => (
              <Reveal
                as="li"
                className="timeline-item"
                key={`${event.year}-${event.title}`}
                delay={index * 70}
                variant="left"
              >
                <article className="timeline-card">
                  <span className="timeline-year">{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </PortfolioSection>

        <PortfolioSection
          id="political-journey"
          index="03"
          tone="light"
          eyebrow={ui.sectionTitles.politicalJourney.eyebrow}
          title={ui.sectionTitles.politicalJourney.title}
          lead={ui.sectionTitles.politicalJourney.lead}
        >
          <div className="journey-rail">
            {portfolio.politicalJourney.map((item, index) => (
              <Reveal
                as="article"
                className="journey-card glass-card"
                key={item.label}
                delay={index * 70}
                variant="up"
              >
                <span className="journey-step">{String(index + 1).padStart(2, "0")}</span>
                <span className="fact-label">{item.label}</span>
                <p className="fact-value">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="education"
          index="04"
          tone="charcoal"
          eyebrow={ui.sectionTitles.education.eyebrow}
          title={ui.sectionTitles.education.title}
          lead={ui.sectionTitles.education.lead}
        >
          <div className="card-grid mosaic three-col">
            {portfolio.educationalContribution.map((block, index) => (
              <Reveal
                as="article"
                className={`card tilt-card ${index === 0 || index === 4 ? "span-wide" : ""}`}
                key={block.title}
                delay={index * 70}
                variant="scale"
              >
                <div className="card-top">
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{block.title}</h3>
                </div>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="social"
          index="05"
          tone="light"
          eyebrow={ui.sectionTitles.social.eyebrow}
          title={ui.sectionTitles.social.title}
          lead={ui.sectionTitles.social.lead}
        >
          <div className="card-grid dual-spotlight">
            {portfolio.socialContributions.map((block, index) => (
              <Reveal
                as="article"
                className="card spotlight-card"
                key={block.title}
                delay={index * 80}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="leadership"
          index="06"
          tone="dark"
          eyebrow={ui.sectionTitles.leadership.eyebrow}
          title={ui.sectionTitles.leadership.title}
          lead={ui.sectionTitles.leadership.lead}
        >
          <div className="card-grid leadership-grid">
            {portfolio.leadershipStyle.map((block, index) => (
              <Reveal
                as="article"
                className="card leadership-card"
                key={block.title}
                delay={index * 70}
                variant="up"
              >
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
          <Reveal className="quote-card cinematic-quote" delay={140} variant="up">
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>{portfolio.quotesNote.replace(/^"|"$/g, "")}</p>
              <p className="quote-source">— {personal.fullName}</p>
            </blockquote>
          </Reveal>
        </PortfolioSection>

        <PortfolioSection
          id="awards"
          index="07"
          tone="light"
          eyebrow={ui.sectionTitles.awards.eyebrow}
          title={ui.sectionTitles.awards.title}
          lead={ui.sectionTitles.awards.lead}
        >
          <div className="fact-list two-col">
            {portfolio.awards.map((item, index) => (
              <Reveal
                as="article"
                className="fact-item award-card glass-card"
                key={item.label}
                delay={index * 70}
                variant="scale"
              >
                <span className="fact-label">{item.label}</span>
                <p className="fact-value">{item.value}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="quote-card cinematic-quote" delay={140} variant="up">
            <blockquote>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>{portfolio.testimonial.text}</p>
              <p className="quote-source">— {portfolio.testimonial.source}</p>
            </blockquote>
          </Reveal>
        </PortfolioSection>

        <PortfolioSection
          id="legacy"
          index="08"
          tone="charcoal"
          eyebrow={ui.sectionTitles.legacy.eyebrow}
          title={ui.sectionTitles.legacy.title}
          lead={ui.sectionTitles.legacy.lead}
        >
          <div className="card-grid three-col">
            {portfolio.legacy.map((block, index) => (
              <Reveal
                as="article"
                className="card legacy-card"
                key={block.title}
                delay={index * 70}
                variant="up"
              >
                <h3>{block.title}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="references"
          index="09"
          tone="light"
          eyebrow={ui.sectionTitles.references.eyebrow}
          title={ui.sectionTitles.references.title}
          lead={ui.sectionTitles.references.lead}
        >
          <ul className="reference-list">
            {portfolio.references.map((ref, index) => (
              <Reveal
                as="li"
                className="reference-item"
                key={ref.title}
                delay={index * 55}
                variant="left"
              >
                <span className="ref-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{ref.title}</strong>
                  <p>{ref.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </PortfolioSection>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <h2>{personal.fullName}</h2>
            <a className="button button-ghost" href="#hero">
              {ui.backToTop}
            </a>
          </div>
          <p>{portfolio.footer.institutionLine}</p>
          <p>{portfolio.footer.contentNote}</p>
        </div>
      </footer>
    </>
  );
}
