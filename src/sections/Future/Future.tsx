'use client';

import Footer from '../../components/Footer/Footer';

export default function Future() {
  const stats = [
    { value: "227+", label: "Experience Hours" },
    { value: "100", label: "Erasmus Hours" },
    { value: "30", label: "Days Abroad" }
  ];

  const skills = ["Problem Solving", "Debugging", "Cybersecurity", "Teamwork", "English", "Software Dev"];

  return (
    <section className="bg-white text-black py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-4 mb-40">
          {skills.map((skill) => (
            <span key={skill} className="text-4xl md:text-6xl font-black hover:text-accent transition-colors cursor-default">
              {skill}.
            </span>
          ))}
        </div>

        {/* Stats Count-up Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-t border-black/10 pt-20">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-7xl md:text-8xl font-black block mb-2">{stat.value}</span>
              <p className="text-xl uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10">NOT JUST HOURS. <br/> GROWTH.</h2>
          <Footer />
        </div>
      </div>
    </section>
  );
}