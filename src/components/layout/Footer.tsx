import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-right">
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex flex-col items-center md:items-start gap-4 mb-4 group transition-transform hover:scale-105">
              <img 
                src={logo} 
                alt="Shilat Dahan Logo" 
                className="h-24 w-24 object-contain invert brightness-200" 
              />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-serif font-bold tracking-tighter text-white leading-tight">
                  SHILAT DAHAN
                </span>
                <span className="text-[11px] tracking-[0.25em] font-serif text-primary uppercase">
                   Advanced Cosmetics • P.M.E
                </span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md leading-relaxed">
              קליניקה לקוסמטיקה פרא-רפואית. מומחיות בשיקום העור, טיפולי אקנה, פיגמנטציה ואנטי-אייג'ינג בטכנולוגיות המתקדמות ביותר.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">ניווט מהיר</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-primary transition-colors">ראשי</Link></li>
              <li><Link to="/treatments" className="hover:text-primary transition-colors">טיפולים</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">מוצרים</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">יצירת קשר</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">צרי קשר</h4>
            <ul className="space-y-4 text-white/70">
              <li>יהלום 14, נתיבות</li>
              <li>050-000-0000</li>
              <li className="flex flex-col items-center md:items-start gap-2 pt-2">
                <a href="https://www.instagram.com/shilat.dahann/" className="flex items-center gap-2 hover:text-secondary transition-colors group">
                  <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Instagram size={16} />
                  </div>
                  @shilat.dahann
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} SHILAT DAHAN. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
