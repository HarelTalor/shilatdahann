import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.png";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={portrait} 
                alt="Shilat Dahan - Advanced Cosmetics Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block border-2 border-accent/20 animate-in fade-in zoom-in duration-700">
              <p className="text-4xl font-bold mb-1 tracking-tighter">P.M.E</p>
              <p className="text-sm uppercase tracking-wider font-bold opacity-90">מומחית לקוסמטיקה פרא-רפואית</p>
            </div>
            {/* Quote decoration */}
            <div className="absolute -top-10 -right-10 text-[160px] leading-none text-accent/20 font-serif select-none">
              &ldquo;
            </div>
          </div>

          <div className="max-w-xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">קצת עליי</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-heading leading-tight mb-8">
              שילת דהן <br /> 
              <span className="text-accent font-serif text-lg md:text-xl block mt-2 opacity-80">קליניקה לקוסמטיקה פרא-רפואית</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                היי, אני שילת דהן. הדרך המקצועית שלי בעולם הקוסמטיקה נובעת מתשוקה עמוקה לבריאות העור ומהרצון להעניק לכל אישה את הביטחון העצמי שמגיע עם עור פנים קורן ובריא.
              </p>
              <p>
                כקוסמטיקאית פרא-רפואית (P.M.E), אני מאמינה בשילוב של מדע מתקדם, חומרים פעילים איכותיים ויחס אישי וחם. הקליניקה שלי היא המקום בו היופי והבריאות נפגשים.
              </p>
              <p>
                אני מתמחה בפתרונות לבעיות עור מורכבות כמו אקנה, פיגמנטציה וחידוש העור. יחד נבנה את תוכנית הטיפול המדויקת ביותר עבורך, כזו שתביא לתוצאות נראות לעין כבר מהטיפול הראשון.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Button size="lg" className="rounded-full px-8">
                <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                  אשמח להכיר בוואטסאפ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
