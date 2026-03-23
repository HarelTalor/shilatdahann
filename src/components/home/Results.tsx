import BeforeAfterSlider from "../shared/BeforeAfterSlider";
import { ScrollReveal } from "../shared/ScrollReveal";
import { motion } from "framer-motion";

import acneBefore from "@/assets/acne_before.png";
import acneAfter from "@/assets/acne_after.png";
import antiAgingBefore from "@/assets/anti_aging_before.png";
import antiAgingAfter from "@/assets/anti_aging_after.png";
import tighteningBefore from "@/assets/tightening_before.png";
import tighteningAfter from "@/assets/tightening_after.png";
import pigmentBefore from "@/assets/pigment_before.png";
import pigmentAfter from "@/assets/pigment_after.png";
import glowBefore from "@/assets/glow_before.png";
import glowAfter from "@/assets/glow_after.png";

export default function Results() {
  const results = [
    {
      before: acneBefore,
      after: acneAfter,
      title: "טיפול באקנה",
      desc: "ריפוי והרגעת העור."
    },
    {
      before: antiAgingBefore,
      after: antiAgingAfter,
      title: "אנטי-אייג'ינג",
      desc: "מיצוק וחידוש המרקם."
    },
    {
      before: tighteningBefore,
      after: tighteningAfter,
      title: "מיצוק סב-דרמלי",
      desc: "אפקט הרמה טבעי."
    },
    {
      before: pigmentBefore,
      after: pigmentAfter,
      title: "הבהרת פיגמנטציה",
      desc: "גוון עור אחיד וזוהר."
    },
    {
      before: glowBefore,
      after: glowAfter,
      title: "טיפול Glow",
      desc: "לחות וברק מיידי."
    }
  ];

  return (
    <section className="py-24 bg-interesting-luxury overflow-hidden border-t border-border/10">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-heading">תוצאות מדברות בעד עצמן</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              הזיזי את הסמן כדי לראות את השינוי המדהים שעברו הלקוחות שלי.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-Column Grid representing a more compact, modern look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {results.map((result, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full space-y-4"
            >
              <div className="shadow-xl rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                <BeforeAfterSlider before={result.before} after={result.after} />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg md:text-xl font-bold text-secondary">{result.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">{result.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
