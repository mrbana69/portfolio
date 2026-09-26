# Emiliano Bana — Portfolio

Sito personale di Emiliano Bana, IT & Web Developer e studente di Informatica all'Università degli Studi del Molise. Presenta il suo percorso tra sistemi, reti, sviluppo web e progetti personali.

## Stack

- Next.js 15 e React
- TypeScript
- Tailwind CSS
- GSAP e ScrollTrigger
- Lenis
- Lucide React

## Requisiti

- Node.js 20 o superiore
- npm

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Verifica produzione

```bash
npm run lint
npm run build
npm start
```

## Pubblicazione

Il progetto può essere distribuito su Vercel collegando il repository e usando `npm run build` come comando di build. Non sono richieste variabili d'ambiente per la pagina portfolio.

## Contenuti

Le sezioni e i dati principali sono in `src/app/page.tsx`; il menu mobile è in `src/components/SiteNav.tsx`. Le anteprime MUZAK e Preluded usano gli screenshot in `public/images/pagine-siti/` e rimandano ai rispettivi siti live.
