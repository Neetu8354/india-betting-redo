
const providers = ["EVOLUTION", "PRAGMATIC", "EZUGI", "SUPERSPADE", "BETGAMES", "PLAYTECH", "MICROGAMING", "NETENT", "RED TIGER", "HOTROAD"];

const Providers = () => (
  <section className="py-10 border-y hairline bg-card/40 overflow-hidden">
    <div className="container mb-5 text-center">
      <div className="eyebrow">Trusted game providers</div>
    </div>
    <div className="relative">
      <div className="flex gap-14 marquee whitespace-nowrap">
        {[...providers, ...providers].map((p, i) => (
          <span key={i} className="text-sm md:text-base font-semibold text-muted-foreground/60 tracking-[0.2em]">
            {p}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Providers;
