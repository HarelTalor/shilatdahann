import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap } from "lucide-react";
import productBag from "@/assets/product_bag.png";

const productCategories = [
  {
    name: "1. אנטי-אייג'ינג וחידוש העור",
    products: [
      { id: "P-1", name: "סדרת Prophecy (פרופסי)", desc: "קרם הלהיט המבוסס על חומצה היאלורונית מזערית שחודרת לעומק העור ללא הזרקה.", price: "₪580" },
      { id: "P-2", name: "תכשירי רטינול (ויטמין A)", desc: "לחידוש תאי העור, שיפור המרקם וטיפול בקמטוטים.", price: "₪420" },
      { id: "P-3", name: "קרמי פפטידים", desc: "לשיפור האלסטיות של העור ומיצוק מבני.", price: "₪450" }
    ]
  },
  {
    name: "2. טיפול באקנה ועור שומני",
    products: [
      { id: "A-1", name: "סבונים טיפוליים", desc: "המכילים חומצות (כמו חומצה סליצילית) לניקוי עמוק של הנקבוביות.", price: "₪180" },
      { id: "A-2", name: "תכשירי ייבוש נקודתיים", desc: "לטיפול מהיר בפצעונים פעילים והרגעת דלקות.", price: "₪190" },
      { id: "A-3", name: "קרמי לחות Oil-Free", desc: "שומרים על מאזן המים בעור מבלי לחסום נקבוביות.", price: "₪220" }
    ]
  },
  {
    name: "3. טיפול בפיגמנטציה והבהרה",
    products: [
      { id: "W-1", name: "סדרת White & Bright", desc: "תכשירים המדכאים את ייצור המלנין ומבהירים כתמים קיימים.", price: "₪540" },
      { id: "W-2", name: "סרומים ויטמין C", desc: "נוגדי חמצון המעניקים מראה אחיד וזוהר לעור.", price: "₪480" },
      { id: "W-3", name: "חומצות הבהרה", desc: "לשימוש ביתי מבוקר (קוג'ית/אזלאית) לכתמי שמש וגיל.", price: "₪390" }
    ]
  },
  {
    name: "4. מוצרי הגנה ושיקום",
    products: [
      { id: "S-1", name: "קרמי הגנה SPF 50", desc: "הגנה רחבת טווח (חובה בכל טיפול בחומרים פעילים).", price: "₪210" },
      { id: "S-2", name: "מסכות הרגעה ושיקום", desc: "לעור מגורה או לאחר טיפולי מכשור מתקדמים.", price: "₪320" }
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Products() {
  return (
    <div className="bg-background min-h-screen py-16 pt-32">
      <div className="container px-4 mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4 text-center mx-auto">
            <ShoppingBag size={16} />
            SHILAT DAHAN PRODUCTS
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-heading">קטלוג מוצרים</h1>
          <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 max-w-3xl mx-auto space-y-4">
            <p className="text-muted-foreground text-lg italic">
              "אני דוגלת בשיטה של <strong>אבחון לפני רכישה</strong>. המוצרים בקטלוג נבחרים בקפידה ונבנים כערכה מותאמת אישית רק לאחר בחינת צרכי העור שלך."
            </p>
            <p className="font-bold text-secondary tracking-wide uppercase text-sm">
              ייעוץ מקצועי להתאמה אישית זמין עבורך בווצאפ
            </p>
          </div>
        </motion.header>

        <div className="space-y-24">
          {productCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <motion.h2 variants={item} className="text-2xl md:text-3xl font-serif font-bold border-b border-secondary/20 pb-2">
                  {category.name}
                </motion.h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {category.products.map((product, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden">
                      <div className="aspect-[4/5] bg-white relative flex items-center justify-center overflow-hidden p-2">
                        <img 
                          src={productBag} 
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-6xl font-serif font-bold text-white/20 absolute -right-4 -bottom-4 group-hover:scale-125 transition-all">
                          {product.id}
                        </span>
                      </div>
                      <CardHeader className="pb-4 space-y-2">
                         <CardTitle className="text-xl font-bold text-heading leading-tight min-h-[3.5rem] flex items-center">
                           {product.name}
                         </CardTitle>
                         <div className="flex items-center gap-2">
                           <span className="text-heading font-bold text-lg">{product.price}</span>
                           <span className="h-px bg-heading/20 flex-1" />
                         </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.desc}</p>
                        <Button className="w-full rounded-full gradient-brand shimmer shadow-sm" asChild>
                          <a href={`https://wa.me/972500000000?text=היי שילת, אשמח לייעוץ ורכישה של המוצר: ${product.name}`}>
                            ייעוץ ורכישה בווצאפ
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/10 pt-16"
        >
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Star size={32} />
             </div>
             <h3 className="text-xl font-bold">איכות ללא פשרות</h3>
             <p className="text-muted-foreground">רכיבים פעילים בריכוז מקסימלי לתוצאות אמיתיות.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Zap size={32} />
             </div>
             <h3 className="text-xl font-bold">טכנולוגיה פרא-רפואית</h3>
             <p className="text-muted-foreground">מוצרים המפותחים בסטנדרטים של מעבדות מתקדמות.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <ShoppingBag size={32} />
             </div>
             <h3 className="text-xl font-bold">התאמה אישית</h3>
             <p className="text-muted-foreground">כל מוצר נבחר לאחר אבחון מקצועי של צרכי העור.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
