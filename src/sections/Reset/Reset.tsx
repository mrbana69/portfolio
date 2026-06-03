'use client';

export default function Reset() {
  const pillars = [
    { title: "Hardware", desc: "Diagnostica e riparazione componenti fisici." },
    { title: "Software", desc: "Configurazione sistemi e troubleshooting." },
    { title: "Support", desc: "Assistenza diretta e risoluzione problemi." },
    { title: "Clients", desc: "Gestione delle relazioni e feedback utente." }
  ];

  return (
    <section className="min-h-screen bg-black py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-4">RESET</h2>
          <p className="text-xl text-text-muted max-w-2xl">
            L'impatto reale della tecnologia. Hardware, Software e il contatto diretto con chi la tecnologia la usa ogni giorno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-border border border-border">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-black p-10 group hover:bg-surface transition-colors">
              <span className="text-accent font-mono block mb-8">0{i + 1}_</span>
              <h3 className="text-2xl mb-4 group-hover:translate-x-2 transition-transform">{pillar.title}</h3>
              <p className="text-text-muted">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}