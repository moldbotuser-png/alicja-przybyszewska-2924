import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Marek K.',
    text: 'Pani Alicja pomogła nam z trudną sprawą rozwodową. Dzięki mediacji udało nam się dojść do porozumienia bez traumatycznej rozprawy sądowej. Profesjonalizm i empatia na najwyższym poziomie.',
    rating: 5,
    service: 'Mediacje rodzinne',
  },
  {
    name: 'Anna W.',
    text: 'Terapia u Pani Alicji zmieniła moje życie. Po roku pracy udało mi się przezwyciężyć lęki i wrócić do normalnego funkcjonowania. Serdecznie polecam każdemu, kto potrzebuje wsparcia.',
    rating: 5,
    service: 'Psychoterapia indywidualna',
  },
  {
    name: 'Krzysztof B.',
    text: 'Bardzo profesjonalne podejście do mediacji w sprawie spadkowej. Pani mediator potrafiła stworzyć atmosferę zaufania, co pozwoliło nam szybko dojść do ugody. Dziękuję!',
    rating: 5,
    service: 'Mediacje cywilne',
  },
  {
    name: 'Joanna M.',
    text: 'Jestem bardzo wdzięczna za pomoc w mediacji z byłym mężem w sprawie opieki nad dziećmi. Pani Alicja jest cierpliwa, konkretna i bardzo ludzka. Godna polecenia!',
    rating: 5,
    service: 'Mediacje rodzinne',
  },
];

export default function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="opinie" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Opinie klientów</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
            Co mówią moi klienci
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-2xl">{'★'.repeat(5)}</div>
            <span className="text-gray-600 font-medium">5.0 na Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="fade-in bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100 shadow-lg card-hover">
              <div className="flex text-yellow-400 text-lg mb-4">{'★'.repeat(r.rating)}</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">„{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">{r.name}</div>
                  <div className="text-sm text-teal-600 font-medium">{r.service}</div>
                </div>
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {r.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.google.com/maps/search/?api=1&query=Mediator+psycholog+mgr+Alicja+Przybyszewska+Wojciecha+Rze%C5%BAniackiego+2c+Bydgoszcz"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors">
            Zobacz wszystkie opinie w Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
