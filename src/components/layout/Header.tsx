import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "ראשי", path: "/" },
  { name: "אודות", path: "/about" },
  { name: "טיפולים", path: "/treatments" },
  { name: "מוצרים", path: "/products" },
  { name: "יצירת קשר", path: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 md:h-16 md:w-16 transition-transform group-hover:scale-105 duration-300">
               <img 
                 src="/src/assets/logo.png" 
                 alt="Shilat Dahan Logo" 
                 className={`w-full h-full object-contain ${scrolled ? "" : "opacity-90"}`} 
               />
            </div>
            <div className="flex flex-col items-start translate-y-[1px]">
              <span className={`text-xl md:text-2xl font-serif font-bold tracking-tighter leading-tight ${scrolled ? "text-foreground" : "text-foreground/90"}`}>
                SHILAT DAHAN
              </span>
              <span className={`text-[9px] md:text-[11px] tracking-[0.2em] font-serif font-medium uppercase ${scrolled ? "text-secondary" : "text-secondary/80"}`}>
                Advanced Cosmetics • P.M.E
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  scrolled ? "text-foreground" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full px-6 gradient-brand shimmer shadow-sm">
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                לקביעת תור
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              scrolled 
                ? "text-primary bg-primary/10 border border-primary/20 shadow-sm" 
                : "text-foreground/80 bg-black/5 backdrop-blur-md border border-black/10"
            } hover:scale-110 active:scale-95`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-lg font-medium py-3 text-foreground active:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full gradient-brand shimmer shadow-md py-6 text-lg">
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                <Phone size={20} className="ml-2" />
                לקביעת תור
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
