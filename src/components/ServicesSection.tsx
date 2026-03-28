import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Mediacje rodzinne',
    desc: 'Pomagam parom i rodzinom w trudnych momentach życiowych. Prowadzę mediacje przy rozwodach, podziałach majątku i sporach o opiekę.',
    icon: '🏠',
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Mediacje cywilne',
    desc: 'Rozwiązuję konflikty między przedsiębiorcami, sąsiadami i innymi stronami w sposób pozasądowy, szybki i skuteczny.',
    icon: '⚖️',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Psychoterapia indywidualna',
    desc: 'Prowadzę terapię dla osób przeżywających kryzysy, lęki, depresję lub trudności w relacjach. Tworzę bezpieczną przestrzeń do pracy.',
    icon: '💚',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    title: ' Konsultacje psychologiczne',
    desc: 'Profesjonalna diagnoza i wsparcie psychologiczne. Pomagam zrozumieć swoje emocje i znaleźć drogę do zmiany.',
    icon: '🧠',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: ' mediacje w miejscu pracy',
    desc: 'Rozwiązuję konflikty w firmach i organizacjach. Pomagam poprawić komunikację w zespołach i między działami.',
    icon: '🤝',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Psychoedukacja',
    desc: 'Prowadzę warsztaty i szkolenia z zakresu komunikacji, zarządzania konfliktem i radzenia sobie ze stresem.',
    icon: '📚',
    color: 'from-teal-400 to-green-600',
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      },
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll('.fade-in');
    items?.forEach(i => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="uslugi" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Moje usługi</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Profesjonalne wsparcie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Łączę wiedzę prawniczą z empatią psychologa. Każda droga do porozumienia jest inna — znajduję ją razem z Tobą.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="fade-in card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-6 shadow-md`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
