import { WHATSAPP_LINK } from "@/lib/wa";

const items = [
  "IND vs AUS · Live",
  "IPL 2026 · Welcome Bonus 200%",
  "Teen Patti Live · 24/7 Tables",
  "Instant UPI Withdrawals",
  "Best Cricket Odds in India",
  "Pro Kabaddi League · Live",
  "₹15,000 First Deposit Bonus",
];

const TickerBar = () => (
  <div className="bg-card text-foreground/80 py-2 overflow-hidden border-b hairline">
    <div className="flex gap-10 marquee whitespace-nowrap text-xs font-medium">
      {[...items, ...items].map((t, i) => (
        <a key={i} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold/70" /> {t}
        </a>
      ))}
    </div>
  </div>
);

export default TickerBar;
