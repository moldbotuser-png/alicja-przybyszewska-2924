export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-white font-bold text-xl mb-3">mgr Alicja Przybyszewska</div>
            <p className="text-sm leading-relaxed">
              Mediator Sądu Okręgowego w Bydgoszczy.<br />
              Psycholog, terapeutka.<br />
              Pomagam rozwiązywać konflikty i odnajdywać spokój.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Szybkie linki</div>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Start' },
                { href: '#uslugi', label: 'Usługi' },
                { href: '#o-mnie', label: 'O mnie' },
                { href: '#opinie', label: 'Opinie' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map(l => (
                <a key={l.href} href={l.href} className="block text-sm hover:text-teal-400 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4">Kontakt</div>
            <div className="space-y-2 text-sm">
              <div>📍 Wojciecha Rzeźniackiego 2c</div>
              <div>85-791 Bydgoszcz, Polska</div>
              <div>📞 <a href="tel:+48500093694" className="hover:text-teal-400 transition-colors">+48 500 093 694</a></div>
              <div>✉️ <a href="mailto:alutka283@wp.pl" className="hover:text-teal-400 transition-colors">alutka283@wp.pl</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {year} mgr Alicja Przybyszewska. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-1 text-teal-400 text-sm">
            <span>5.0</span>
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-white/50 ml-1">na Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
