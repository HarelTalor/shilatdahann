import { Cpu, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    title: "מומחית פרא-רפואית",
    desc: "מוסמכת P.M.E בטכנולוגיות מתקדמות.",
  },
  {
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    title: "טכנולוגיה קלינית",
    desc: "מכשור רפואי מהשורה הראשונה.",
  },
  {
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
    title: "חוויית יוקרה",
    desc: "טיפולים בהתאמה אישית באווירה אקסקלוסיבית.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-primary/5">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div className="p-2 md:p-3 rounded-full bg-primary/5">
                {feature.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold">{feature.title}</h3>
              <p className="hidden md:block text-muted-foreground text-base max-w-[250px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
