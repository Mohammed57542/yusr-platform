import Reveal from './Reveal.jsx';

const stats = [
  { value: '50–100', unit: 'نانومتر', label: 'حجم الجسيمات', note: 'موحد وقابل للتحكم' },
  { value: '+99', unit: '%', label: 'نقاء المواد', note: 'معايير دولية' },
  { value: '6.2', unit: 'جم/سم³', label: 'الكثافة', note: 'أداء متفوق' },
  { value: '+1500', unit: '°م', label: 'درجة الانصهار', note: 'استقرار حراري ممتاز' },
];

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-20 max-w-7xl px-5 lg:px-8">
      <div className="card-premium grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-[#16211c]/5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="bg-white p-8 text-center transition-colors hover:bg-brand-50/60">
            <p className="font-display text-4xl font-bold text-brand-700 md:text-5xl">
              {s.value}
              <span className="ml-1 text-lg text-gold-600">{s.unit}</span>
            </p>
            <p className="mt-2 text-base font-extrabold text-ink">{s.label}</p>
            <p className="mt-1 text-xs font-medium text-ink/50">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
