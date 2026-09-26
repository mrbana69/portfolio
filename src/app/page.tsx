import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Reveal from "@/components/Reveal";
import ProjectArtwork from "@/components/ProjectArtwork";
import SmoothScroll from "@/components/animations/SmoothScroll";

const skills = [
  {
    title: "IT & sistemi",
    items: ["Windows", "Linux", "macOS", "Hardware", "Troubleshooting", "Configurazione sistemi", "Stampanti e periferiche"],
  },
  {
    title: "Reti",
    items: ["TCP/IP", "LAN", "DNS", "DHCP", "Cisco", "Configurazione e diagnostica"],
  },
  {
    title: "Sviluppo",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Python", "Git"],
  },
  {
    title: "Piattaforme",
    items: ["GitHub", "Vercel", "Supabase", "Cloudflare R2"],
  },
];

const experiences = [
  {
    period: "A.S. 2023/24",
    title: "ASSOVasto",
    detail: "Supporto tecnico e prime basi di amministrazione dei sistemi.",
    type: "Esperienza pratica",
  },
  {
    period: "A.S. 2024/25",
    title: "Studioware",
    detail: "80 ore di sviluppo software: middleware, unit testing, UML e lavoro in team.",
    type: "Percorso formativo",
  },
  {
    period: "A.S. 2024/25",
    title: "Erasmus+ · Riga",
    detail: "30 giorni all'estero e 100 ore di formazione in un contesto internazionale.",
    type: "Formazione",
  },
  {
    period: "A.S. 2024/25",
    title: "RESET",
    detail: "Hardware, software e assistenza diretta: la tecnologia vista da chi la usa.",
    type: "Esperienza pratica",
  },
];

function SectionHeading({ number, eyebrow, title, intro, titleId }: { number: string; eyebrow: string; title: React.ReactNode; intro?: string; titleId?: string }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-index">{number} / 06</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <Reveal>
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <SiteNav />
      <main id="contenuto">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid page-wrap">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker"><span className="status-dot" /> Emiliano Bana <span className="eyebrow-separator">/</span> Informatica, UniMol</p>
              <h1 id="hero-title">IT <span className="ampersand">&amp;</span><br />Web Developer<span className="hero-period">.</span></h1>
              <p className="hero-description">Mi piace capire cosa non funziona, rimetterlo in sesto e poi costruire qualcosa di nuovo. Tra sistemi, reti e applicazioni web.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#progetti">Guarda i progetti <ArrowRight size={16} aria-hidden="true" /></a>
                <a className="button button-text" href="#contatti">Parliamone <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-aside" aria-label="Profilo in breve">
              <div className="hero-note">
                <span className="note-number">01</span>
                <p>Pratica prima della teoria,<br />curiosità sempre accesa.</p>
              </div>
              <div className="hero-note">
                <span className="note-number">02</span>
                <p>Dal PC che non parte<br />al sito che va online.</p>
              </div>
              <div className="hero-scroll"><span>Scorri per conoscere il mio lavoro</span><ArrowDown size={15} aria-hidden="true" /></div>
            </div>
          </div>
          <div className="hero-bottom page-wrap"><span>VASTO, ITALIA</span><span>STUDENT · BUILDER · TROUBLESHOOTER</span><span>01—06</span></div>
        </section>

        <section className="about section-shell" id="chi-sono" aria-labelledby="about-title">
          <div className="page-wrap">
            <SectionHeading number="01" eyebrow="Un po' di contesto" title={<>La tecnologia,<br />senza misteri.</>} titleId="about-title" />
            <div className="about-content" data-reveal>
              <p className="about-lead">Mi interessano sia le cose che si vedono — le interfacce, i siti — sia tutto quello che c&apos;è dietro perché funzionino.</p>
              <div className="about-body">
                <p>Ho un background pratico nell&apos;assistenza, nell&apos;hardware e nella configurazione dei sistemi. Lavoro con Windows, Linux e macOS, mi muovo tra reti e troubleshooting e sviluppo applicazioni web.</p>
                <p>Oggi studio Informatica all&apos;Università degli Studi del Molise. Fuori dalle lezioni continuo a sperimentare con progetti personali e ad approfondire temi come la cybersecurity, sempre con la curiosità di capire come funzionano davvero le cose.</p>
                <a className="inline-link" href="#esperienze">Il mio percorso <ArrowRight size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="about-rule"><span>UN APPROCCIO PRATICO</span><span>01 — 04</span></div>
          </div>
        </section>

        <section className="projects section-shell" id="progetti" aria-labelledby="projects-title">
          <div className="page-wrap">
            <SectionHeading number="02" eyebrow="Lavori scelti" title={<>Dal problema<br />a qualcosa di utile.</>} intro="Tre progetti diversi, un filo comune: provare, risolvere i vincoli e portare le idee sul web." titleId="projects-title" />
            <div className="project-list">
              <article className="project-card" data-reveal>
                <a className="project-visual project-visual-muzak project-visual-link" href="https://muzakeventi.com" target="_blank" rel="noopener noreferrer" aria-label="Visita il sito di MUZAK Glam Eventi, si apre in una nuova scheda">
                  <ProjectArtwork variant="muzak" />
                  <span className="project-visit">Visita il sito <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="project-info">
                  <div className="project-meta"><span>01</span><span>PROGETTO CLIENTE · WEB DEVELOPMENT</span></div>
                  <h3>MUZAK <span>Glam Eventi</span></h3>
                  <p className="project-summary">Una piattaforma per presentare gli eventi e tenere insieme contenuti, fotografie e strumenti di gestione.</p>
                  <dl className="project-breakdown">
                    <div><dt>Esigenza</dt><dd>Raccontare gli eventi e aggiornare il materiale senza disperderlo tra strumenti diversi.</dd></div>
                    <div><dt>Realizzazione</dt><dd>Sito pubblico e funzionalità per il team, con gestione dei contenuti e delle gallery.</dd></div>
                    <div><dt>Implementazione</dt><dd>Next.js e React; Supabase per i dati, Cloudflare R2 per le immagini, deploy su Vercel e immagini WebP.</dd></div>
                    <div><dt>Risultato</dt><dd>Un unico spazio per la presenza online e la gestione del materiale degli eventi.</dd></div>
                  </dl>
                  <ul className="tag-list" aria-label="Tecnologie MUZAK"><li>Next.js</li><li>React</li><li>Supabase</li><li>Cloudflare R2</li><li>Vercel</li></ul>
                </div>
              </article>

              <article className="project-card project-card-reverse" data-reveal>
                <a className="project-visual project-visual-preluded project-visual-link" href="https://preluded.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visita Preluded, si apre in una nuova scheda">
                  <ProjectArtwork variant="preluded" />
                  <span className="project-visit">Visita il sito <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="project-info">
                  <div className="project-meta"><span>02</span><span>PROGETTO PERSONALE · MUSICA</span></div>
                  <h3>Preluded</h3>
                  <p className="project-summary">Un laboratorio personale per esplorare le interfacce musicali e la riproduzione audio nel browser.</p>
                  <dl className="project-breakdown">
                    <div><dt>Idea</dt><dd>Portare l&apos;ascolto al centro di un&apos;interfaccia pensata per la musica.</dd></div>
                    <div><dt>Sperimentazione</dt><dd>Provare approcci diversi al web audio e al controllo della riproduzione.</dd></div>
                    <div><dt>Vincoli</dt><dd>Gestire i limiti dei browser e prevedere alternative quando una modalità non è disponibile.</dd></div>
                    <div><dt>Risultato</dt><dd>Un progetto in evoluzione, utile per imparare facendo e testare soluzioni audio sul web.</dd></div>
                  </dl>
                  <ul className="tag-list" aria-label="Aree esplorate in Preluded"><li>Web audio</li><li>Audio playback</li><li>Fallback browser</li></ul>
                </div>
              </article>

              <article className="project-card" data-reveal>
                <a className="project-visual project-visual-offly project-visual-link" href="https://offly-mattei.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Visita il sito di Offly, si apre in una nuova scheda">
                  <ProjectArtwork variant="offly" />
                  <span className="project-visit">Visita il sito <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="project-info">
                  <div className="project-meta"><span>03</span><span>PROGETTO FORMATIVO · APP &amp; WEB</span></div>
                  <h3>Offly <span>No Phone Zone</span></h3>
                  <p className="project-summary">Un progetto per incoraggiare esperienze offline e attività dal vivo, mettendo in contatto le persone con eventi e iniziative locali.</p>
                  <dl className="project-breakdown">
                    <div><dt>Idea</dt><dd>Ridurre il tempo passato sul telefono e dare più spazio agli incontri nel mondo reale.</dd></div>
                    <div><dt>Esperienza</dt><dd>Una presenza web per presentare il progetto e scoprire le attività proposte.</dd></div>
                    <div><dt>Sviluppo</dt><dd>Il percorso ha incluso sviluppo iOS, integrazione web e Firebase.</dd></div>
                    <div><dt>Obiettivo</dt><dd>Trasformare il tempo offline in occasioni concrete per partecipare e incontrarsi.</dd></div>
                  </dl>
                  <ul className="tag-list" aria-label="Tecnologie Offly"><li>iOS</li><li>Web</li><li>Firebase</li></ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="skills section-shell" id="competenze" aria-labelledby="skills-title">
          <div className="page-wrap">
            <SectionHeading number="03" eyebrow="Strumenti di lavoro" title={<>Competenze,<br />senza classifiche.</>} intro="Ambiti e strumenti con cui ho esperienza pratica. Nessuna percentuale inventata: conta saperli usare nel contesto giusto." titleId="skills-title" />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <div className="skill-group" data-reveal key={group.title}>
                  <div className="skill-group-head"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                  <ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-shell" id="esperienze" aria-labelledby="experience-title">
          <div className="page-wrap">
            <SectionHeading number="04" eyebrow="Sul campo e in formazione" title="Imparare facendo." intro="Esperienze pratiche e percorsi formativi che mi hanno dato contesto, metodo e ore di lavoro concreto." titleId="experience-title" />
            <div className="experience-list">
              {experiences.map((item, index) => (
                <article className="experience-row" data-reveal key={item.title}>
                  <span className="experience-number">0{index + 1}</span>
                  <span className="experience-period">{item.period}</span>
                  <div className="experience-detail"><h3>{item.title}</h3><p>{item.detail}</p></div>
                  <span className="experience-type">{item.type}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-shell" id="formazione" aria-labelledby="education-title">
          <div className="page-wrap">
            <SectionHeading number="05" eyebrow="Formazione" title="Le basi, e quello che viene dopo." titleId="education-title" />
            <div className="education-grid">
              <article className="education-card" data-reveal><span className="education-date">2026 — IN CORSO</span><h3>Laurea Triennale in Informatica</h3><p>Università degli Studi del Molise</p><span className="education-mark" aria-hidden="true">01</span></article>
              <article className="education-card" data-reveal><span className="education-date">COMPLETATO · 2026</span><h3>Diploma di Informatica</h3><p>IIS E. Mattei · Vasto</p><span className="education-mark" aria-hidden="true">02</span></article>
            </div>
            <p className="education-note">Ho seguito anche corsi Cisco di introduzione alla cybersecurity e all&apos;IoT.</p>
          </div>
        </section>

        <section className="contact section-shell" id="contatti" aria-labelledby="contact-title">
          <div className="page-wrap contact-inner">
            <SectionHeading number="06" eyebrow="Contatti" title={<>Hai un progetto<br />o una domanda?</>} intro="Scrivimi direttamente. Se c&apos;è un problema da risolvere o qualcosa da costruire, mi fa piacere parlarne." titleId="contact-title" />
            <a className="contact-email" href="mailto:bana.emi2007@gmail.com">bana.emi2007@gmail.com <ArrowUpRight size={23} aria-hidden="true" /></a>
            <div className="contact-links">
              <a href="https://github.com/mrbana69" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/emiliano-bana-46557728a/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="mailto:bana.emi2007@gmail.com"><Mail size={16} aria-hidden="true" /> Email <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-wrap footer-inner"><a className="footer-brand" href="#top">EB<span>.</span></a><p>IT &amp; Web Developer · Informatica, UniMol</p><span>© {new Date().getFullYear()} Emiliano Bana</span><a className="back-top" href="#top">Torna su <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
      </Reveal>
    </SmoothScroll>
  );
}
