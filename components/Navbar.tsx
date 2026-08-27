"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolio } from "@/data/portfolio";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const portfolio = getPortfolio(language);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = portfolio.nav.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [portfolio.nav]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand-link" href="#hero" onClick={closeMenu}>
          <span className="brand-mark">KB</span>
          <span className="brand-copy">
            <span className="brand-text">
              {language === "hi" ? "कृष्णराव भेगड़े" : "Krishnarao Bhegade"}
            </span>
            <span className="brand-tag">
              {language === "hi" ? "मावळ · महाराष्ट्र" : "Maval · Maharashtra"}
            </span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <div className="nav-pill">
            <ul className="nav-list">
              {portfolio.nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={isActive ? "is-active" : undefined}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lang-toggle" aria-label="Language selector">
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "is-active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${language === "hi" ? "is-active" : ""}`}
              onClick={() => setLanguage("hi")}
            >
              हिंदी
            </button>
          </div>

          <a className="nav-cta" href="#biography">
            {portfolio.ui.readStoryCta}
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div className="lang-toggle nav-mobile-lang" aria-label="Language selector">
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "is-active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${language === "hi" ? "is-active" : ""}`}
              onClick={() => setLanguage("hi")}
            >
              हिंदी
            </button>
          </div>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="nav-mobile-backdrop" onClick={closeMenu} aria-hidden="true" />
        <div className="nav-mobile-panel">
          <div className="nav-mobile-head">
            <p>{portfolio.ui.exploreSections}</p>
            <span className="nav-mobile-active">
              {portfolio.nav.find((item) => item.href === `#${activeId}`)?.label ?? portfolio.nav[0].label}
            </span>
          </div>
          <ul className="nav-mobile-list">
            {portfolio.nav.map((item, index) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href} style={{ animationDelay: `${index * 45}ms` }}>
                  <a
                    href={item.href}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span className="mobile-index">{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="nav-mobile-cta button button-primary" href="#biography" onClick={closeMenu}>
            {portfolio.ui.startBioCta}
          </a>
        </div>
      </div>
    </header>
  );
}
