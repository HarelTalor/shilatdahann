import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.png";

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-primary/20 bg-muted flex items-center justify-center">
              <img 
                src={portrait} 
                alt="Shilat Dahan - Professional Paramedical Aesthetician" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Professional Stats */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl border border-primary/10 hidden md:block">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl">✨</div>
                  <div>
                    <h4 className="font-bold text-xl">P.M.E</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">Certification</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-xl">Advanced Tech</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">RF • LED • Micro-needling</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">הסיפור המקצועי שלי</span>
              <h1 className="text-4xl md:text-7xl font-serif font-bold text-heading leading-tight">
                שילת דהן
              </h1>
              <p className="text-xl md:text-2xl text-accent font-serif tracking-wide underline decoration-primary/30 decoration-4 underline-offset-8">
                קוסמטיקאית פרא-רפואית מוסמכת
              </p>
            </div>

            <div className="space-y-8 text-muted-foreground text-lg md:text-xl leading-relaxed">
              <p>
                נעים מאוד, אני שילת דהן. הקליניקה שלי הוקמה מתוך חזון להעניק לכל אישה את הפתרונות המתקדמים ביותר לבריאות ויופי העור.
              </p>
              
              <div className="bg-surface p-8 rounded-2xl border-r-4 border-primary italic">
                "אני מאמינה שעור הפנים שלנו הוא כרטיס הביקור שלנו, והוא ראוי לטיפול המקצועי, המדעי והאישי ביותר."
              </div>

              <p>
                הוסמכתי כקוסמטיקאית פרא-רפואית (P.M.E). ההכשרה המקצועית שלי מאפשרת לי להשתמש בטכנולוגיות פורצות דרך ובחומרים פעילים החודרים לעומק העור ומביאים לשינוי אמיתי.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h3 className="text-heading font-bold text-xl">האני מאמין שלי</h3>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       מקצועיות קלינית ללא פשרות
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       שימוש בחומרים הפעילים ביותר בשוק
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       התאמה אישית מלאה לכל סוג עור
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-heading font-bold text-xl">התמחויות מרכזיות</h3>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       טיפול באקנה ושיקום פוסט-אקנה
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       הבהרת פיגמנטציה ואיחוד גוון
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                       אנטי-אייג'ינג וחידוש העור
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <Button size="lg" className="rounded-full px-12 h-16 text-xl font-bold gradient-brand shimmer shadow-2xl" asChild>
                <a href="https://wa.me/972500000000">קבעי איתי שיחת ייעוץ</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
