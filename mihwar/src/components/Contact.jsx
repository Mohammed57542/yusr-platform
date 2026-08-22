import Reveal from './Reveal.jsx';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'اتصل بنا',
    value: '+968 76773384',
    href: 'tel:+96876773384',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'موقعنا',
    value: 'سلطنة عُمان',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
    label: 'إنستغرام',
    value: '@mihwer_gco',
    href: 'https://www.instagram.com/mihwer_gco?igsh=ZXlhdTh1ajFuNnB0',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-950 py-24 text-white md:py-32">
      <div className="hero-grid-overlay absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-10 bg-gold-500" />
              تواصل معنا
              <span className="h-px w-10 bg-gold-500" />
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-snug md:text-6xl">
              لنبنِ معاً
              <span className="gold-gradient-text"> مستقبل الطاقة </span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-100/90">
              سواء كنت باحثاً أو شركة صناعية تبحث عن مواد نانوية متقدمة،
              فريق محور جاهز للتعاون معك. تواصل معنا اليوم.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href || '#'}
                {...(c.href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-9 text-center backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/50 hover:bg-white/[0.08]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-brand-950">
                  {c.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-200">{c.label}</p>
                  <p className="mt-1 text-xl font-extrabold text-white" dir="ltr">
                    {c.value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
