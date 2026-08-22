import { Card } from './ui/card.jsx';

export default function Vision() {
  return (
    <section id="vision" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-right">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-12">رؤيتنا ورسالتنا</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card border-accent border-r-4 border-l-0 rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-6 text-right">رؤيتنا</h3>
              <p className="text-lg text-foreground/80 leading-relaxed text-right">
                أن نصبح الشركة الرائدة عالمياً في تطوير وإنتاج المواد النانوية المتقدمة، وأن نساهم في تحقيق انتقال عالمي نحو الطاقة النظيفة والمستدامة.
              </p>
            </Card>
            <Card className="p-8 bg-card border-accent border-r-4 border-l-0 rounded-2xl hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-6 text-right">رسالتنا</h3>
              <p className="text-lg text-foreground/80 leading-relaxed text-right">
                توفير جسيمات نانوية عالية الجودة وموثوقة بأسعار معقولة، لتمكين الباحثين والشركات الصناعية من تطوير تقنيات طاقة نظيفة وفعالة.
              </p>
            </Card>
          </div>
          <div className="mt-12 p-8 bg-card border-accent border-r-4 border-l-0 rounded-lg text-right">
            <h3 className="text-2xl font-bold mb-6 text-accent text-right">قيمنا الأساسية</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-right">
                <h4 className="font-bold mb-2 text-accent">الابتكار</h4>
                <p className="text-foreground/80">نسعى باستمرار لتطوير تقنيات جديدة وتحسين منتجاتنا.</p>
              </div>
              <div className="text-right">
                <h4 className="font-bold mb-2 text-accent">الجودة</h4>
                <p className="text-foreground/80">نلتزم بأعلى معايير الجودة في كل خطوة من خطوات الإنتاج.</p>
              </div>
              <div className="text-right">
                <h4 className="font-bold mb-2 text-accent">الاستدامة</h4>
                <p className="text-foreground/80">نعمل على حماية البيئة والمساهمة في مستقبل مستدام.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
