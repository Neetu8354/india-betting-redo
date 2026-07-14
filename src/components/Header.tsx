import { WHATSAPP_LINK } from "@/lib/wa";
import { MessageCircle, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const nav: { label: string; href?: string }[] = [
    { label: "Cricket", href: "/games/cricket-betting" },
    { label: "Teen Patti", href: "/games/teen-patti" },
    { label: "Aviator", href: "/games/aviator" },
    { label: "Andar Bahar", href: "/games/andar-bahar" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b hairline">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2" aria-label="YOLO365 home">
          <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center font-bold text-base text-primary-foreground">
            Y
          </div>
          <div className="text-lg font-extrabold text-foreground tracking-tight leading-none">YOLO<span className="text-gold">365</span></div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.href!}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-gold transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/login" className="hidden md:inline-flex items-center gap-2 px-4 h-9 rounded-md border hairline text-foreground/85 hover:text-gold hover:border-gold/40 text-sm font-medium transition-colors">
            <User className="w-4 h-4" /> Login
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 h-9 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> Get ID
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground/80"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-navigation" className="lg:hidden border-t hairline bg-background">
          <div className="container py-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.label} to={n.href!} onClick={() => setOpen(false)} className="text-left py-2.5 text-sm font-medium text-foreground/80 hover:text-gold">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
