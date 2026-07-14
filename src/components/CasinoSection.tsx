import roulette from "@/assets/casino-roulette.jpg";
import andarbahar from "@/assets/casino-andarbahar.jpg";
import teenpatti from "@/assets/casino-teenpatti.jpg";
import blackjack from "@/assets/casino-blackjack.jpg";
import slots from "@/assets/casino-slots.jpg";
import dragontiger from "@/assets/casino-dragontiger.jpg";
import { WHATSAPP_LINK } from "@/lib/wa";

const games = [
  { img: teenpatti, name: "Teen Patti", alt: "Live Teen Patti table with cards and chips", tag: "Indian classic", min: "₹100", href: "/games/teen-patti" },
  { img: andarbahar, name: "Andar Bahar", alt: "Andar Bahar card game with Indian dealer", tag: "Live dealer", min: "₹50", href: "/games/andar-bahar" },
  { img: roulette, name: "Roulette", alt: "European roulette wheel spinning on green table", tag: "European · Auto", min: "₹100", href: "/blog/online-roulette-india-strategy" },
  { img: dragontiger, name: "Dragon Tiger", alt: "Dragon Tiger cards dealt on a casino table", tag: "Quick cards", min: "₹50", href: "/blog/dragon-tiger-live-casino-india" },
  { img: blackjack, name: "Blackjack", alt: "Blackjack hand showing ace and king on felt table", tag: "21 live tables", min: "₹200", href: "/blog/live-casino-india-evolution-ezugi-yolo365" },
  { img: slots, name: "Lucky 777 Slots", alt: "Colourful slot machine reels with cherry and bar symbols", tag: "1,000+ slots", min: "₹10", href: "/blog/live-casino-india-evolution-ezugi-yolo365" },
];

const CasinoSection = () => (
  <section className="border-y hairline bg-card/30">
    <div className="container py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="eyebrow mb-2">Live casino</div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Authentic Indian casino experience</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">Real dealers and real cash on Teen Patti, Andar Bahar, Roulette and more.</p>
        </div>
        <a href="/blog/live-casino-india-evolution-ezugi-yolo365" className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">Live casino guide →</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {games.map((g) => (
          <a key={g.name} href={g.href} className="card-premium rounded-lg overflow-hidden text-left group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={g.img} alt={g.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={300} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-semibold text-base text-foreground">{g.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{g.tag}</div>
                </div>
                <div className="text-[10px] px-2 py-0.5 rounded border border-gold/40 text-gold font-medium bg-background/60 backdrop-blur">Min {g.min}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex px-6 h-11 items-center rounded-md border hairline text-foreground hover:border-gold/50 hover:text-gold font-medium text-sm transition-colors">
          Get your ID to play
        </a>
      </div>
    </div>
  </section>
);

export default CasinoSection;
