import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-mnie" ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="mgr Alicja Przybyszewska"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-extrabold">15+</div>
                <div className="text-sm text-teal-100">lat doświadczenia</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">O mnie</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-8">
              Jestem tu, by Ci pomóc
            </h2>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Nazywam się <strong>Alicja Przybyszewska</strong>. Jestem mediatorem wpisanym na listę mediatorów Sądu Okręgowego w Bydgoszczy oraz absolwentką psychologii na Uniwersytecie Kazimierza Wielkiego.
              </p>
              <p>
                Moja praca łączy dwa światy — prawny i psychologiczny. Dzięki temu potrafię spojrzeć na konflikt z różnych perspektyw i znaleźć rozwiązanie, które jest nie tylko formalnie poprawne, ale też ludzkie i trwałe.
              </p>
              <p>
                Każda sprawa jest inna. Wierzę, że warto szukać porozumienia, zanim sprawa trafi do sądu. Moja rola to pomóc Ci usłyszeć drugą stronę i znaleźć wspólną drogę.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-teal-200">
              {[
                { num: '500+', label: 'Przeprowadzonych mediacji' },
                { num: '98%', label: 'Satysfakcjonujących ugód' },
                { num: '5★', label: 'Ocena Google' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-teal-700">{stat.num}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
