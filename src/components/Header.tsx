import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Menu, X, User, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const nav = ["Sports", "Cricket", "Live Casino", "Slots", "Promotions", "Support"];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b hairline">
      <div className="container flex items-center justify-between h-14">
        <button onClick={openWhatsApp} className="flex items-center gap-2" aria-label="Yolo365 home">
          <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center font-bold text-base text-primary-foreground">
            Y
          </div>
          <div className="leading-none">
            <div className="text-base font-semibold text-foreground tracking-tight">YOLO<span className="text-gold">365</span></div>
            <div className="text-[8px] text-muted-foreground tracking-[0.22em] mt-0.5">BOOK</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <button
              key={n}
              onClick={openWhatsApp}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-gold transition-colors"
            >
              {n}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={openWhatsApp} className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-md text-foreground/60 hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button onClick={openWhatsApp} className="hidden md:inline-flex items-center gap-2 px-4 h-9 rounded-md border hairline text-foreground/85 hover:text-gold hover:border-gold/40 text-sm font-medium transition-colors">
            <User className="w-4 h-4" /> Login
          </button>
          <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-4 h-9 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> Get ID
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground/80">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t hairline bg-background">
          <div className="container py-3 flex flex-col">
            {nav.map((n) => (
              <button key={n} onClick={openWhatsApp} className="text-left py-2.5 text-sm font-medium text-foreground/80 hover:text-gold">
                {n}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
