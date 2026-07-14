import { useEffect, useState } from "react";
import promoCasino from "@/assets/promo-casino.jpg";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoIpl from "@/assets/promo-ipl.jpg";
import { WHATSAPP_LINK } from "@/lib/wa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: promoIpl, alt: "IPL 2026 match-day promotional banner with cricket stadium", eyebrow: "IPL 2026", title: "Match-day mega bonus", sub: "Bet ₹1,000 and receive an additional ₹2,000 in bonus credits.", cta: "Claim offer" },
  { img: promoWelcome, alt: "Welcome bonus promotional graphic with golden coins", eyebrow: "New players", title: "200% welcome bonus", sub: "Up to ₹15,000 matched on your first deposit. T&Cs apply.", cta: "Get bonus" },
  { img: promoCasino, alt: "VIP live casino table with cards and roulette wheel", eyebrow: "Live casino", title: "VIP table access", sub: "Teen Patti, Andar Bahar and Roulette with dedicated dealers.", cta: "Play live" },
];

const PromoSlider = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section className="container py-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="eyebrow mb-1">Featured</div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Current promotions</h2>
        </div>
        <a href="/promotions" className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">View all →</a>
      </div>
      <div className="relative rounded-lg overflow-hidden border hairline" role="region" aria-roledescription="carousel" aria-label="Current promotions">
        <div className="relative aspect-[21/9] md:aspect-[24/8]">
          {slides.map((s, idx) => (
            <div key={idx} aria-hidden={i !== idx} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
              <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" width={1920} height={720} />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-xl">
                <div className="eyebrow mb-2">{s.eyebrow}</div>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-md">{s.sub}</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="self-start inline-flex items-center px-5 h-10 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <button aria-label="Previous promotion" onClick={() => { setI((i - 1 + slides.length) % slides.length); setPaused(true); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"} onClick={() => setPaused(!paused)} className="absolute left-1/2 -translate-x-1/2 top-3 w-8 h-8 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors text-xs font-bold">
          {paused ? "▶" : "❚❚"}
        </button>
        <button aria-label="Next promotion" onClick={() => { setI((i + 1) % slides.length); setPaused(true); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-foreground/30"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
