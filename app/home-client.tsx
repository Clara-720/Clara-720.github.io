"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "de" | "en";

const copy = {
  de: {
    skip: "Zum Inhalt springen",
    nav: { skills: "Studium & Kompetenzen", project: "Projekte", experience: "Berufserfahrung", contact: "Kontakt" },
    languageLabel: "Sprache wechseln",
    hero: {
      eyebrow: "Bochum, Deutschland",
      title: "Mingjing Hou",
      role: "Linguistic Data Science · NLP · Data Analysis · Digital Marketing",
      intro: "Masterstudentin in Linguistic Data Science an der Ruhr-Universität Bochum mit praktischer Erfahrung in NLP und Datenanalyse sowie fast drei Jahren Berufserfahrung im Digital Marketing. In meinem Forschungsprojekt analysiere ich mit NLP-Methoden, Python und statistischen Verfahren Unterschiede zwischen Filmbeschreibungen und Zuschauerreviews.",
      projectCta: "Projekt ansehen",
      resumeCta: "Lebenslauf herunterladen",
      contactCta: "Kontakt",
      portraitAlt: "Porträt von Mingjing Hou",
    },
    figuresLabel: "Ausgewählte Kennzahlen",
    figures: [
      { value: "209", label: "Filme im Forschungskorpus" },
      { value: "4.680", label: "englische IMDb-Reviews" },
      { value: "6", label: "Filmherkunftsländer" },
    ],
    project: {
      label: "02 / Projekte",
      sectionTitle: "Von Daten zu nachvollziehbaren Ergebnissen.",
      status: "Master-Forschungsprojekt",
      title: "Cinematic Emotion Map",
      intro: "Eine länderübergreifende Untersuchung emotionaler Unterschiede zwischen offiziellen TMDB-Filmbeschreibungen und englischsprachigen IMDb-Nutzerreviews.",
      open: "Interaktive Karte öffnen",
      previewAlt: "Vorschau der interaktiven Cinematic Emotion Map mit sechs Ländern und Sentiment-Gap-Daten",
      previewCaption: "Interaktive 2D-Karte · Projektvorschau",
      questionLabel: "Forschungsfrage",
      question: "Wie unterscheiden sich narrative Darstellung und Publikumsrezeption – und lassen sich diese Unterschiede über Länder hinweg vergleichen?",
      dataLabel: "Daten",
      data: "209 Filme · 4.680 IMDb-Reviews · sechs Herkunftsländer · TMDB-Metadaten",
      methodsLabel: "Methoden",
      methods: "Python · pandas · Hugging Face Transformers · DistilRoBERTa · KeyBERT · paired t-test · OLS / HC3",
      validationLabel: "Statistische Prüfung",
      validation: "Sentiment Gap · gepaarter t-Test · OLS-Regression mit HC3-robusten Standardfehlern",
      outputLabel: "Output",
      output: "Interaktive 2D-Karte zur Gegenüberstellung von offizieller Filmerzählung und Publikumsstimme. Insgesamt zeigte sich ein signifikanter positiver Sentiment Gap zwischen Filmbeschreibungen und Nutzerreviews: Nutzerreviews waren insgesamt positiver als offizielle Filmbeschreibungen; zwischen den Herkunftsländern wurden keine signifikanten Unterschiede festgestellt.",
    },
    experience: {
      label: "03 / Berufserfahrung",
      title: "Analyse, die Teams weiterbringt.",
      tti: {
        date: "11/2022–09/2025",
        company: "TTI Asia, Inc.",
        meta: "A Berkshire Hathaway Company · Digital Marketing Specialist · Shanghai",
        blocks: [
          { label: "Social Media & Content", text: "Analyse und Content-Planung für die Social-Media-Kanäle des Unternehmens auf LinkedIn, YouTube, WeChat und Bilibili im asiatisch-pazifischen Raum. Erstellung von HTML-Bannern, Postern, Kurzvideos und Materialien für E-Mail-Kampagnen zur Unterstützung der digitalen Marketingmaßnahmen des Unternehmens." },
          { label: "Performance Analysis", text: "Analyse zentraler KPIs wie Impressions, Clicks, CTR, Pageviews, Video Views und Follower Growth zur Identifikation von Optimierungspotenzialen und Ableitung datenbasierter Maßnahmen." },
          { label: "Campaigns & Collaboration", text: "Umsetzung digitaler Marketingprojekte für Supplier Promotions, Messekampagnen und Company News in Zusammenarbeit mit regionalen Sales-, Supplier- und Design-Teams." },
        ],
        links: [
          { label: "LinkedIn · TTI Asia", href: "https://www.linkedin.com/company/tti-asia/" },
          { label: "YouTube · TTI Asia", href: "https://www.youtube.com/@TTIAsia" },
        ],
        metrics: [
          { value: "0 → 1", label: "YouTube-Kanal von Grund auf aufgebaut" },
          { value: "+108%", label: "LinkedIn-Follower, Q2 2025 vs. Q2 2023" },
          { value: "4.563 → 9.864", label: "WeChat-Follower, 2022–2025" },
          { value: "980 → 4.796", label: "WeChat-Quartalsaufrufe, 2022–2025" },
        ],
      },
      unilever: {
        date: "01/2021–04/2021",
        company: "Unilever (China) Co., Ltd.",
        meta: "Marketing Intern · Shanghai",
        text: "Marktforschung und Analyse von Kundenbedürfnissen zur Produkteinführung von OMO; Unterstützung nutzerzentrierter Verpackungskonzepte und zielgruppengerechter Kommunikation.",
      },
    },
    skills: {
      label: "01 / Studium & Kompetenzen",
      title: "Werkzeuge für Analyse, Modelle und Visualisierung.",
      groups: [
        { title: "Programming & Data", items: ["Python", "SQL", "R", "pandas"] },
        { title: "BI & Visualization", items: ["Power BI"] },
        { title: "NLP & ML", items: ["Hugging Face Transformers", "DistilRoBERTa", "KeyBERT"] },
        { title: "Tools", items: ["Git"] },
      ],
      educationLabel: "Studium",
      education: [
        { date: "09/2025–heute", degree: "M.A. Linguistic Data Science", school: "Ruhr-Universität Bochum" },
        { date: "09/2018–06/2022", degree: "B.A. Germanistik", school: "East China University of Science and Technology" },
      ],
      courseworkLabel: "Relevante Kurse",
      coursework: "Computational Linguistics and AI · Linguistic Data Science · Natural Language Generation",
      languagesLabel: "Sprachen",
      languages: ["Chinesisch · Muttersprache", "Englisch · C1", "Deutsch · B2"],
    },
    sideProject: {
      label: "Side Project",
      title: "Social Media Account Management",
      meta: "Weibo · Chinese Social Media · 340K+ Followers",
      body: "Eigenständig aufgebautes Musik-Content-Projekt mit Fokus auf Content-Planung, Songtextübersetzung und kontinuierliche Optimierung.",
    },
    contact: {
      label: "04 / Kontakt",
      title: "Lust auf Austausch?",
      body: "Ich freue mich über Austausch zu Data Analysis, AI, NLP, Digital Marketing und datengetriebenen Projekten.",
      emailLabel: "E-Mail",
      linkedinLabel: "LinkedIn",
      location: "Bochum, Deutschland",
    },
    footer: "Mingjing Hou · Linguistic Data Science · NLP",
  },
  en: {
    skip: "Skip to content",
    nav: { skills: "Education & skills", project: "Projects", experience: "Professional experience", contact: "Contact" },
    languageLabel: "Switch language",
    hero: {
      eyebrow: "Bochum, Germany",
      title: "Mingjing Hou",
      role: "Linguistic Data Science · NLP · Data Analysis · Digital Marketing",
      intro: "Master’s student in Linguistic Data Science at Ruhr University Bochum with hands-on experience in NLP and data analysis, plus nearly three years of professional digital marketing experience. In my research project, I analyse differences between film descriptions and audience reviews using NLP methods, Python and statistical techniques.",
      projectCta: "View project",
      resumeCta: "Download CV",
      contactCta: "Contact",
      portraitAlt: "Portrait of Mingjing Hou",
    },
    figuresLabel: "Selected figures",
    figures: [
      { value: "209", label: "films in the research corpus" },
      { value: "4,680", label: "English IMDb reviews" },
      { value: "6", label: "film-origin countries" },
    ],
    project: {
      label: "02 / Projects",
      sectionTitle: "From data to results people can follow.",
      status: "Master's research project",
      title: "Cinematic Emotion Map",
      intro: "A cross-country study of emotional differences between official TMDB film descriptions and English-language IMDb audience reviews.",
      open: "Explore the interactive map",
      previewAlt: "Preview of the interactive Cinematic Emotion Map showing six countries and sentiment-gap data",
      previewCaption: "Interactive 2D map · project preview",
      questionLabel: "Research question",
      question: "How do narrative representation and audience reception differ—and can those differences be compared across countries?",
      dataLabel: "Data",
      data: "209 films · 4,680 IMDb reviews · six countries of origin · TMDB metadata",
      methodsLabel: "Methods",
      methods: "Python · pandas · Hugging Face Transformers · DistilRoBERTa · KeyBERT · paired t-test · OLS / HC3",
      validationLabel: "Statistical testing",
      validation: "Sentiment Gap · paired t-test · OLS regression with HC3 robust standard errors",
      outputLabel: "Output",
      output: "Interactive 2D map comparing official film narratives with audience voice. Found audience reviews to be significantly more positive than official film descriptions overall, while no significant cross-country differences were detected.",
    },
    experience: {
      label: "03 / Professional experience",
      title: "Analysis that moves teams forward.",
      tti: {
        date: "Nov 2022–Sep 2025",
        company: "TTI Asia, Inc.",
        meta: "A Berkshire Hathaway Company · Digital Marketing Specialist · Shanghai",
        blocks: [
          { label: "Social Media & Content", text: "Analysed and planned content for the company’s social-media channels on LinkedIn, YouTube, WeChat and Bilibili across Asia-Pacific. Created HTML banners, posters, short-form videos and email campaign materials to support the company’s digital marketing activities." },
          { label: "Performance Analysis", text: "Analysed core KPIs including impressions, clicks, CTR, page views, video views and follower growth to identify optimisation opportunities and derive data-based actions." },
          { label: "Campaigns & Collaboration", text: "Delivered digital marketing projects for supplier promotions, trade-fair campaigns and company news in collaboration with regional sales, supplier and design teams." },
        ],
        links: [
          { label: "LinkedIn · TTI Asia", href: "https://www.linkedin.com/company/tti-asia/" },
          { label: "YouTube · TTI Asia", href: "https://www.youtube.com/@TTIAsia" },
        ],
        metrics: [
          { value: "0 → 1", label: "YouTube channel built from the ground up" },
          { value: "+108%", label: "LinkedIn followers, Q2 2025 vs. Q2 2023" },
          { value: "4,563 → 9,864", label: "WeChat followers, 2022–2025" },
          { value: "980 → 4,796", label: "WeChat quarterly page views, 2022–2025" },
        ],
      },
      unilever: {
        date: "Jan–Apr 2021",
        company: "Unilever (China) Co., Ltd.",
        meta: "Marketing Intern · Shanghai",
        text: "Conducted market research and customer-needs analysis for the OMO product launch, supporting user-centred packaging concepts and audience-specific communication.",
      },
    },
    skills: {
      label: "01 / Education & skills",
      title: "Tools for analysis, models and visualisation.",
      groups: [
        { title: "Programming & Data", items: ["Python", "SQL", "R", "pandas"] },
        { title: "BI & Visualization", items: ["Power BI"] },
        { title: "NLP & ML", items: ["Hugging Face Transformers", "DistilRoBERTa", "KeyBERT"] },
        { title: "Tools", items: ["Git"] },
      ],
      educationLabel: "Education",
      education: [
        { date: "Sep 2025–present", degree: "M.A. Linguistic Data Science", school: "Ruhr University Bochum" },
        { date: "Sep 2018–Jun 2022", degree: "B.A. German Studies", school: "East China University of Science and Technology" },
      ],
      courseworkLabel: "Relevant coursework",
      coursework: "Computational Linguistics and AI · Linguistic Data Science · Natural Language Generation",
      languagesLabel: "Languages",
      languages: ["Chinese · Native", "English · IELTS 7", "German · B2"],
    },
    sideProject: {
      label: "Side Project",
      title: "Social Media Account Management",
      meta: "Weibo · Chinese Social Media · 340K+ Followers",
      body: "An independently built music content project focused on content planning, lyric translation and continuous optimisation.",
    },
    contact: {
      label: "04 / Contact",
      title: "Let’s connect.",
      body: "I’m happy to connect about Data Analysis, AI, NLP, digital marketing and data-driven projects.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      location: "Bochum, Germany",
    },
    footer: "Mingjing Hou · Linguistic Data Science · NLP",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("mingjing-portfolio-language");
    if (saved === "de" || saved === "en") {
      setLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("mingjing-portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <nav className="main-nav" aria-label={language === "de" ? "Hauptnavigation" : "Main navigation"}>
          <a href="#skills">{t.nav.skills}</a><a href="#project">{t.nav.project}</a><a href="#experience">{t.nav.experience}</a><a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          <button type="button" className={language === "de" ? "active" : ""} aria-pressed={language === "de"} onClick={() => changeLanguage("de")}>DE</button><span aria-hidden="true">/</span><button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1 id="hero-title">{t.hero.title}</h1><p className="hero-role">{t.hero.role}</p><p className="hero-intro">{t.hero.intro}</p><div className="hero-actions"><a className="button button-primary" href="https://clara-720.github.io/cinematic-emotion-map-research/" target="_blank" rel="noreferrer">{t.hero.projectCta}<span aria-hidden="true">↗</span></a><a className="button button-secondary" href="/Mingjing-Hou-CV.pdf" download="Mingjing-Hou-CV.pdf">{t.hero.resumeCta}<span aria-hidden="true">↗</span></a><a className="button button-tertiary" href="#contact">{t.hero.contactCta}</a></div><a className="hero-email" href="mailto:Mingjing.Hou@outlook.com">Mingjing.Hou@outlook.com</a></div>
          <div className="portrait-column"><div className="portrait-frame"><Image className="portrait" src="/mingjing-hou.jpeg" alt={t.hero.portraitAlt} width={1086} height={1478} priority sizes="(max-width: 760px) 82vw, 34vw" /></div></div>
        </section>

        <section className="project-section" id="project"><p className="section-label">{t.project.label}</p><div className="section-content project-content"><p className="project-section-title">{t.project.sectionTitle}</p><div className="project-heading"><div><p className="project-status"><span className="project-status-dot" aria-hidden="true" />{t.project.status}</p><h2>{t.project.title}</h2></div><p className="project-intro">{t.project.intro}</p></div><section className="project-figures" aria-label={t.figuresLabel}><p className="project-figures-label">{t.figuresLabel}</p><div className="project-figure-list">{t.figures.map((figure) => <div className="project-figure" key={figure.label}><strong>{figure.value}</strong><span>{figure.label}</span></div>)}</div></section><a className="project-preview" href="https://clara-720.github.io/cinematic-emotion-map-research/" target="_blank" rel="noreferrer" aria-label={t.project.open}><Image src="/cinematic-emotion-map-preview.png" alt={t.project.previewAlt} width={1677} height={890} loading="lazy" sizes="(max-width: 760px) 100vw, 72vw" /><span className="preview-caption">{t.project.previewCaption}<span aria-hidden="true">↗</span></span></a><div className="case-grid"><article><span>{t.project.questionLabel}</span><p>{t.project.question}</p></article><article><span>{t.project.dataLabel}</span><p>{t.project.data}</p></article><article><span>{t.project.methodsLabel}</span><p>{t.project.methods}</p></article><article><span>{t.project.validationLabel}</span><p>{t.project.validation}</p></article><article><span>{t.project.outputLabel}</span><p>{t.project.output}</p></article></div><a className="text-link text-link-light" href="https://clara-720.github.io/cinematic-emotion-map-research/" target="_blank" rel="noreferrer">{t.project.open}<span aria-hidden="true">↗</span></a><aside className="side-project-inline"><span>{t.sideProject.label}</span><h3>{t.sideProject.title}</h3><strong>{t.sideProject.meta}</strong><p>{t.sideProject.body}</p></aside></div></section>

        <section className="section section-light" id="experience"><p className="section-label">{t.experience.label}</p><div className="section-content"><h2 className="section-title-wide">{t.experience.title}</h2><div className="timeline"><article className="role role-featured"><time>{t.experience.tti.date}</time><div className="role-body"><h3>{t.experience.tti.company}</h3><p className="role-meta">{t.experience.tti.meta}</p><div className="role-detail-blocks">{t.experience.tti.blocks.map((block) => <div className="role-detail-block" key={block.label}><h4>{block.label}</h4><p>{block.text}</p></div>)}</div><div className="role-links">{t.experience.tti.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<span aria-hidden="true">↗</span></a>)}</div><div className="metric-row">{t.experience.tti.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></article><article className="role"><time>{t.experience.unilever.date}</time><div className="role-body"><h3>{t.experience.unilever.company}</h3><p className="role-meta">{t.experience.unilever.meta}</p><p className="role-intro">{t.experience.unilever.text}</p></div></article></div></div></section>

        <section className="section section-dark skills-section" id="skills"><p className="section-label">{t.skills.label}</p><div className="section-content"><h2 className="section-title-wide">{t.skills.title}</h2><div className="skill-columns">{t.skills.groups.map((group) => <div className="skill-block" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div><div className="credentials-grid"><div><h3 className="credential-title">{t.skills.educationLabel}</h3>{t.skills.education.map((item) => <article className="education-item" key={item.degree}><time>{item.date}</time><div><strong>{item.degree}</strong><span>{item.school}</span></div></article>)}<p className="coursework"><strong>{t.skills.courseworkLabel}</strong><span>{t.skills.coursework}</span></p></div><div><h3 className="credential-title">{t.skills.languagesLabel}</h3><ul className="languages-list">{t.skills.languages.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>

        <section className="contact-section" id="contact"><p className="section-label section-label-inverse">{t.contact.label}</p><div className="section-content contact-content"><p className="contact-location">{t.contact.location}</p><h2>{t.contact.title}</h2><p className="contact-body">{t.contact.body}</p><div className="contact-links"><a href="mailto:Mingjing.Hou@outlook.com"><span>{t.contact.emailLabel}</span><strong>Mingjing.Hou@outlook.com</strong><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/mingjinghou" target="_blank" rel="noreferrer"><span>{t.contact.linkedinLabel}</span><strong>www.linkedin.com/in/mingjinghou</strong><span aria-hidden="true">↗</span></a></div></div></section>
      </main>
      <footer><span>{t.footer}</span><span>© {new Date().getFullYear()}</span></footer>
    </>
  );
}
