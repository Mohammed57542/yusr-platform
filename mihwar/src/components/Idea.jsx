import { Card } from './ui/card.jsx';

export default function Idea() {
  return (
    <section id="idea" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-right">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-12">فكرتنا</h2>
          <div className="space-y-8">
            <Card className="p-8 border-r-4 border-l-0 border-accent rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 text-right">المشكلة التي نحلها</h3>
              <p className="text-lg text-foreground/80 leading-relaxed text-right">
                يواجه قطاع الطاقة النظيفة تحدياً في توفير مواد عالية الكفاءة وموثوقة لتقنيات خلايا الوقود، حيث إن الخيارات المتاحة غالباً ما تكون مرتفعة التكلفة أو محدودة الأداء. نعالج هذا التحدي من خلال تطوير وإنتاج الجسيمات النانوية بجودة عالية وتكلفة تنافسية، بما يعزز كفاءة التشغيل ويدعم التوسع في حلول الطاقة المستدامة.
              </p>
            </Card>
            <Card className="p-8 border-r-4 border-l-0 border-accent rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 text-right">الحل المبتكر</h3>
              <p className="text-lg text-foreground/80 leading-relaxed text-right">
                نستخدم تقنية "الاحتراق الذاتي" (Auto-combustion Synthesis) لتصنيع جسيمات نانوية بحجم موحد وقابل للتحكم (أقل من 100 نانومتر). هذه الجسيمات تتمتع بخصائص فريدة تجعلها مثالية لتطبيقات خلايا الوقود الأكسيدية الصلبة (SOFC) والإلكترونيات المتقدمة.
              </p>
            </Card>
            <Card className="p-8 border-r-4 border-l-0 border-accent rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 text-right">المميزات الرئيسية</h3>
              <ul className="space-y-3 text-lg text-foreground/80 text-right">
                <li className="flex items-start gap-3 flex-row-reverse">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>جسيمات نانوية بحجم موحد وقابل للتحكم</span>
                </li>
                <li className="flex items-start gap-3 flex-row-reverse">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>موصلية أيونية عالية تحسن كفاءة الخلايا</span>
                </li>
                <li className="flex items-start gap-3 flex-row-reverse">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>استقرار حراري ممتاز حتى درجات حرارة عالية</span>
                </li>
                <li className="flex items-start gap-3 flex-row-reverse">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>تطبيقات واعدة في الطاقة النظيفة والإلكترونيات</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
