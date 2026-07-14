const items = [
  { text: "IPL 2026 Cricket", href: "/games/cricket-betting" },
  { text: "Teen Patti Live", href: "/games/teen-patti" },
  { text: "Aviator Crash Game", href: "/games/aviator" },
  { text: "Andar Bahar", href: "/games/andar-bahar" },
  { text: "Pro Kabaddi League", href: "/blog/kabaddi-betting-yolo365-pro-kabaddi-league" },
  { text: "Cricket Betting Tips", href: "/blog/ipl-2026-betting-tips-yolo365" },
  { text: "UPI Deposits Supported", href: "/blog/upi-deposit-betting-india-guide" },
];

const TickerBar = () => (
  <div className="bg-card text-foreground/80 py-2 overflow-hidden border-b hairline" aria-label="Quick links" role="marquee">
    <div className="flex gap-10 marquee whitespace-nowrap text-xs font-medium motion-reduce:animate-none">
      {[...items, ...items].map((t, i) => (
        <a key={i} href={t.href} className="hover:text-gold transition-colors flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-gold/70" aria-hidden="true" /> {t.text}
        </a>
      ))}
    </div>
  </div>
);

export default TickerBar;
