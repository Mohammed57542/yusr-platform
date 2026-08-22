import { Card } from './ui/card.jsx';

const specs = [
  '• حجم الجسيمات: 50-100 نانومتر',
  '• النقاء: أكثر من 99%',
  '• الكثافة: 6.2 جم/سم³',
  '• درجة الانصهار: أعلى من 1500°م',
];

const apps = [
  '• خلايا الوقود الأكسيدية الصلبة (SOFC)',
  '• الإلكترونيات المتقدمة',
  '• الحفازات الكيميائية',
  '• المواد المغناطيسية',
];

export default function Product() {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-right">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-12 text-right">منتجنا</h2>
          <Card className="p-8 mb-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-accent mb-6 text-right">أساس</h3>
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-full max-w-lg mb-6 aspect-square flex items-center justify-center">
                  <img
                    src="/assets/product-main.png"
                    alt="منتج أساس"
                    className="w-full h-full object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed text-right">
                جسيمات نانوية عالية النقاء من أكسيد الكروميت المشبع بالجادولينيوم، مصنعة باستخدام تقنية الاحتراق الذاتي المتقدمة.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-right">
                  <h4 className="font-bold text-accent mb-4 text-lg text-right">المواصفات التقنية:</h4>
                  <ul className="space-y-3 text-foreground/80 text-right">
                    {specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 flex-row-reverse">{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-accent mb-4 text-lg text-right">التطبيقات:</h4>
                  <ul className="space-y-3 text-foreground/80 text-right">
                    {apps.map((a) => (
                      <li key={a} className="flex items-center gap-2 flex-row-reverse">{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
