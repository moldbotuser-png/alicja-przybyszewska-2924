import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Start' },
    { href: '#uslugi', label: 'Usługi' },
    { href: '#o-mnie', label: 'O mnie' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <span className={`font-bold text-lg md:text-xl ${scrolled ? 'text-teal-700' : 'text-white'}`}>
              mgr Alicja Przybyszewska
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                {l.label}
              </a>
            ))}
            <a href="#kontakt"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
              Umów spotkanie
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-teal-50 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setIsOpen(false)}
              className="block text-center bg-teal-600 text-white py-3 rounded-full font-semibold mt-2">
              Umów spotkanie
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
