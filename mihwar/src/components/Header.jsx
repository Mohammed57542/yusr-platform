import { useEffect, useState } from 'react';

const links = [
  { label: 'من نحن', href: '#about' },
  { label: 'فكرتنا', href: '#idea' },
  { label: 'رؤيتنا ورسالتنا', href: '#vision' },
  { label: 'منتجنا', href: '#products' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 140;
      let current = '';
      for (const id of ids) {
        const el = document.querySelector(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.15)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl flex-row-reverse items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="محور" className="h-11 w-11 rounded-full object-cover shadow-lg ring-1 ring-black/5" />
          <span className="font-heading text-3xl font-bold leading-none text-accent">محور</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-5 py-2.5 text-[15px] font-bold transition-all after:absolute after:bottom-1 after:right-5 after:left-5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform hover:after:scale-x-100 ${
                active === l.href ? 'bg-accent/10 text-accent after:scale-x-100' : 'text-foreground/75 hover:text-accent'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.instagram.com/mihwer.om?igsh=ZXlhdTh1ajFuNnB0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 text-lg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            title="إنستغرام"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=96876773384"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-3 text-[15px] font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            تواصل معنا
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 lg:hidden"
          aria-label="القائمة"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-accent transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-accent transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-accent transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="bg-white border-t border-foreground/5 px-5 pb-6 pt-2 shadow-lg lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-bold text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=96876773384"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-xl bg-accent px-4 py-3 text-center font-bold text-white"
          >
            تواصل معنا
          </a>
        </nav>
      )}
    </header>
  );
}
