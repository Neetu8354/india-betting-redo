import cricket from "@/assets/sport-cricket.jpg";
import tennis from "@/assets/sport-tennis.jpg";
import kabaddi from "@/assets/sport-kabaddi.jpg";
import horse from "@/assets/sport-horse.jpg";
import esports from "@/assets/sport-esports.jpg";
import basketball from "@/assets/sport-basketball.jpg";

const sports = [
  { img: cricket, name: "Cricket", alt: "Cricket players on field during an IPL T20 match", tag: "IPL 2026 · International", href: "/games/cricket-betting" },
  { img: kabaddi, name: "Kabaddi", alt: "Kabaddi raiders tackling in a Pro Kabaddi League match", tag: "Pro Kabaddi League", href: "/blog/kabaddi-betting-yolo365-pro-kabaddi-league" },
  { img: tennis, name: "Tennis", alt: "Tennis player serving on a hard court during ATP tournament", tag: "ATP · WTA · Grand Slam", href: "/about" },
  { img: horse, name: "Horse Racing", alt: "Horses galloping at the Indian Derby race track", tag: "Indian Derby", href: "/about" },
  { img: esports, name: "Esports", alt: "Gamers competing in a BGMI esports tournament", tag: "BGMI · Valorant · CS2", href: "/about" },
  { img: basketball, name: "Basketball", alt: "Basketball players during an NBA game jump ball", tag: "NBA · Indian League", href: "/about" },
];

const SportsSection = () => (
  <section className="container py-16">
    <div className="flex items-end justify-between mb-8">
      <div>
        <div className="eyebrow mb-2">Sports betting</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Markets across every major sport</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl">Industry-leading odds in INR on cricket, kabaddi, tennis, esports and more.</p>
      </div>
      <a href="/games/cricket-betting" className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">View cricket markets →</a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {sports.map((s) => (
        <a key={s.name} href={s.href} className="card-premium rounded-lg overflow-hidden text-left group">
          <div className="aspect-square overflow-hidden relative">
            <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={400} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="p-3">
            <div className="font-medium text-sm text-foreground">{s.name}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{s.tag}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default SportsSection;
