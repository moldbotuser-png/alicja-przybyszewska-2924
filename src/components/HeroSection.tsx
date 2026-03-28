import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 to-teal-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="fade-in">
          <span className="inline-block bg-teal-500/20 text-teal-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-teal-400/30">
            Mediator Sądu Okręgowego · Psycholog
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Rozwiązuję konflikty,<br />
            <span className="text-teal-300">przywracam spokój</span>
          </h1>
          <p className="text-lg md:text-2xl text-teal-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Jestem mediatorem Sądu Okręgowego w Bydgoszczy oraz psychologiem. Pomagam w rozwiązywaniu konfliktów rodzinnych, cywilnych i prowadzę psychoterapię indywidualną.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt"
              className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl hover:shadow-2xl">
              Umów bezpłatną konsultację
            </a>
            <a href="#uslugi"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Poznaj moją ofertę
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
