import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 flex justify-end">
        <div className="max-w-3xl animate-fade-in-up text-right">
          <h1 className="font-heading text-6xl md:text-7xl font-bold text-black mb-6 leading-tight animate-fade-in-down">
            محور
          </h1>
          <p className="text-2xl text-black/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            شركة متخصصة في تطوير وإنتاج مواد نانوية متقدمة للبحث العلمي والتطبيقات المستقبلية
            تعتمد على إعادة تدوير مخلفات البناء والهدم وتحويلها إلى مواد مبتكرة ذات جودة عالية
            وقيمة مستدامة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up justify-end" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://api.whatsapp.com/send?phone=96876773384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3 text-lg font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              تواصل معنا
            </a>
            <a
              href="https://www.instagram.com/mihwer.om?igsh=ZXlhdTh1ajFuNnB0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3 text-lg font-bold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              تعرف علينا أكثر
              <ArrowRight className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
