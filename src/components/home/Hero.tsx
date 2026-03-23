import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import heroBg from "@/assets/clinic_interior_v2.png";
import logo from "@/assets/logo.png";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Blend */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Shilat Dahan Advanced Cosmetics" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft Blur Overlay for Depth - Now Black/10 per user request */}
        <div className="absolute inset-0 z-[1] backdrop-blur-[2px] bg-white/20" />
        {/* Bottom Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-[2]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center text-foreground">
        <div className="flex flex-col items-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
          {/* Circular Logo in Hero */}
          <div className="relative animate-in fade-in zoom-in duration-1000 w-full flex flex-col items-center mt-[-40px] md:mt-0">
             <img 
                src={logo} 
                alt="SD Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain mb-2 drop-shadow-[0_0_15px_rgba(0,0,0,0.05)]" 
             />
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h1 className="text-3xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-foreground drop-shadow-sm">
              Advanced Cosmetics <br /> 
              <span className="text-secondary text-2xl md:text-4xl block mt-2 font-medium drop-shadow-sm">By Shilat Dahan</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-normal max-w-2xl mx-auto leading-relaxed tracking-wide text-foreground/75">
              מקצועיות קלינית, אסתטיקה גבוהה ותוצאות נראות לעין. הקליניקה שלך לטיפולי פנים פרא-רפואיים מתקדמים.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button 
               asChild 
               size="lg" 
               variant="outline"
               className="w-[85%] max-w-[200px] sm:w-[180px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-medium border-secondary/50 text-foreground transition-all active:scale-95 hover:bg-secondary/5"
            >
              <Link to="/treatments">הטיפולים שלנו</Link>
            </Button>
            
            <Button 
               asChild 
               size="lg" 
               className="w-[85%] max-w-[220px] sm:w-[200px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-bold gradient-brand shimmer text-white shadow-[0_0_20px_rgba(230,184,184,0.4)] transition-all hover:scale-105 active:scale-95 border-none"
            >
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                קבעי תור לקליניקה
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Redesign: Layered Glass Cards */}
      <div className="absolute top-24 right-8 z-20 hidden lg:block space-y-4 animate-in fade-in slide-in-from-right-12 duration-1000 delay-700">
        <div className="glass-card p-6 rounded-3xl w-64 border-secondary/20 rotate-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-secondary">Advanced Tech</span>
          </div>
          <p className="text-sm font-bold opacity-80 leading-relaxed">RF • Microneedling • LED Phototherapy</p>
        </div>
        <div className="glass-card p-6 rounded-3xl w-64 border-secondary/20 -rotate-2 translate-x-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-serif uppercase tracking-[0.2em] font-bold text-secondary">Expert Care</span>
          </div>
          <p className="text-sm font-bold opacity-80 leading-relaxed">Certified Paramedical P.M.E Aesthetics</p>
        </div>
      </div>

      {/* Simple Fixed Scroll Indicator at the very bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center cursor-pointer group animate-bounce"
           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-secondary/80 text-[10px] font-serif tracking-[0.3em] uppercase mb-1 drop-shadow-md group-hover:text-secondary transition-colors">
          גללי למטה
        </span>
        <ChevronDown className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform stroke-[2px] drop-shadow-lg" />
      </div>
    </section>
  );
}
