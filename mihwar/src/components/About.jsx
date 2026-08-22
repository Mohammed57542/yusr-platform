import { Card } from './ui/card.jsx';
import { Microscope, Shield, Zap, Leaf } from 'lucide-react';

const features = [
  { icon: Microscope, title: 'بحث وتطوير متقدم', desc: 'أجهزة متطورة لضمان أعلى مستويات الجودة.' },
  { icon: Shield, title: 'جودة عالية', desc: 'معايير دولية صارمة' },
  { icon: Zap, title: 'كفاءة عالية', desc: 'أداء متفوق' },
  { icon: Leaf, title: 'مستدام', desc: 'صديق للبيئة' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/about-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-right">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-8 animate-fade-in-up">
            من نحن
          </h2>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground mb-6 leading-relaxed text-right">
                محور شركة ناشئة متخصصة في تطوير المواد النانوية المتقدمة، ويأتي منتجنا الرئيسي أساس كمادة مبتكرة موجهة للتطبيقات العلمية والصناعية المستقبلية.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed text-right">
                نجمع بين المعرفة الأكاديمية والطموح العملي لنقدم حلولاً تقنية ذات قيمة عالية، مستندين إلى فريق من المختصين في تكنولوجيا النانو والمواد المتقدمة.
              </p>
              <p className="text-lg text-foreground leading-relaxed text-right">
                نلتزم بمعايير جودة دقيقة ونهج إنتاج مستدام يراعي الأثر البيئي.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="font-heading text-2xl font-bold text-accent mb-8">فريق محور</h3>
            <div className="mb-8">
              <img
                src="/assets/team.png"
                alt="فريق محور"
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-xl ring-1 ring-black/5 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <Card
                  key={f.title}
                  className="p-6 text-center rounded-2xl border-brand-100/70 bg-white/70 hover:shadow-xl transition-all hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <span className="icon-chip mb-4">
                    <f.icon className="w-7 h-7" />
                  </span>
                  <h3 className="font-bold text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-foreground/70">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
