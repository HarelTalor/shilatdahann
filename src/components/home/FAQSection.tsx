import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "איך אני יודעת איזה טיפול מתאים לי?",
    answer: "בתחילת כל תהליך אנחנו מבצעות אבחון פנים מתקדם. זהו השלב הקריטי בו אני מנתחת את מצב העור לעומק, מבינה את ההיסטוריה שלו ומתאימה לך פרוטוקול טיפולי אישי ומדויק לתוצאות מקסימליות."
  },
  {
    question: "האם הטיפולים כואבים?",
    answer: "רוב הטיפולים הם נעימים ומרגיעים. בטיפולים מסוימים (כמו ניקוי עמוק) ייתכן חוסר נוחות קל וזמני, אך אני תמיד קשובה אלייך ודואגת שהחוויה תהיה נינוחה ככל האפשר."
  },
  {
    question: "באיזה תדירות כדאי להגיע לטיפול פנים?",
    answer: "עבור רוב סוגי העור, תדירות של פעם ב-4 עד 6 שבועות היא אידיאלית לשמירה על תוצאות וחידוש העור. במידה ואנחנו בתוכנית טיפולית ספציפית (כמו אקנה), ייתכן שנחליט על תדירות גבוהה יותר בתחילה."
  },
  {
    question: "האם מותר להשתמש באיפור אחרי הטיפול?",
    answer: "מומלץ להימנע מאיפור כבד ב-24 השעות הראשונות לאחר הטיפול כדי לאפשר לעור לנשום ולספוג את החומרים הפעילים. במידה ויש צורך, נמקו בתכשירים מינרליים עדינים."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#FCF9F7]">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">מרכז מידע</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-heading mb-6">שאלות נפוצות</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">כל מה שחשוב לך לדעת כדי להרגיש בטוחה ונינוחה לפני הטיפול הראשון שלך</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 rounded-2xl bg-white px-6 shadow-sm">
              <AccordionTrigger className="text-right hover:no-underline py-4 font-semibold text-lg hover:text-secondary transition-colors text-slate-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right pb-6 text-slate-600 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
