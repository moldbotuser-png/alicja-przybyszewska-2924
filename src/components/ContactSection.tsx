import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">
            Umów się na spotkanie
          </h2>
          <p className="text-teal-200/80 text-lg max-w-xl mx-auto">
            Masz pytania? Chcesz umówić konsultację? Napisz lub zadzwoń — odpowiem najszybciej jak to możliwe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="fade-in">
            <div className="space-y-8">
              {[
                {
                  icon: '📍',
                  title: 'Adres',
                  content: 'Wojciecha Rzeźniackiego 2c, 85-791 Bydgoszcz, Polska',
                },
                {
                  icon: '📞',
                  title: 'Telefon',
                  content: '+48 500 093 694',
                  href: 'tel:+48500093694',
                },
                {
                  icon: '⏰',
                  title: 'Godziny otwarcia',
                  content: 'Poniedziałek – Piątek: 8:00 – 18:00',
                },
                {
                  icon: '⭐',
                  title: 'Ocena Google',
                  content: '5 gwiazdek (1 recenzja)',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="text-teal-400 font-semibold text-sm mb-1">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg text-white hover:text-teal-300 transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-lg text-white/90">{item.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl border border-teal-800/50">
              <iframe
                title="Mapa Google"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.0!2d17.993!3d53.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA3JzI0LjAiTiAxN8KwNTknMzYuMCJF!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Wyślij wiadomość</h3>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-xl font-bold mb-2">Dziękuję za wiadomość!</h4>
                  <p className="text-teal-200">Odpowiem najszybciej jak to możliwe — zwykle w ciągu 24 godzin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'name', label: 'Imię i nazwisko', type: 'text', required: true },
                    { id: 'email', label: 'Adres e-mail', type: 'email', required: true },
                    { id: 'phone', label: 'Telefon', type: 'tel' },
                  ].map(f => (
                    <div key={f.id}>
                      <label className="block text-sm font-medium text-teal-200 mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required={f.required}
                        value={form[f.id as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-teal-300/50 focus:outline-none focus:border-teal-400 transition-colors"
                        placeholder={'Twoje ' + f.label.toLowerCase()}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-teal-200 mb-2">Wiadomość</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-teal-300/50 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                      placeholder="Opisz krótko, w czym mogę Ci pomóc..."
                    />
                  </div>
                  <button type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg hover:shadow-xl">
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
