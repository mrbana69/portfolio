"use client";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-20 border-t border-white/10 pt-8 pb-12 bg-surface text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contattami</h3>

        <div className="flex flex-col gap-3 items-center sm:flex-row sm:justify-center sm:gap-8">          <a
            href="mailto:bana.emi2007@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white text-base sm:text-lg hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Invia email"
          >
            bana.emi2007@gmail.com
          </a>

          <div className="w-full sm:w-auto flex gap-3 justify-center">
            <a
              href="https://github.com/mrbana69"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-black/10 text-sm hover:bg-black/5"
              aria-label="GitHub"
            >
              mrbana69
            </a>
            <a
              href="https://www.linkedin.com/in/emiliano-bana-46557728a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-black/10 text-sm hover:bg-black/5"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-black/60 mt-6">© {new Date().getFullYear()} Emiliano Bana</p>
      </div>
    </footer>
  );
}
