import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/wa";
import { MessageCircle, Gift, Percent, Trophy } from "lucide-react";

const SITE = "https://www.yolo365info.live";

const promos = [
  { icon: Gift, title: "200% Welcome Bonus", desc: "Get up to ₹15,000 matched on your first deposit. New players only. T&Cs apply.", cta: "Claim now" },
  { icon: Trophy, title: "IPL 2026 Match-Day Bonus", desc: "Bet ₹1,000 on any IPL match and receive ₹2,000 in bonus credits instantly.", cta: "Bet on IPL" },
  { icon: Percent, title: "Weekly Cashback 10%", desc: "Get 10% cashback on net losses every Monday — no wagering requirements.", cta: "Get cashback" },
  { icon: Gift, title: "Refer & Earn ₹500", desc: "Invite a friend to YOLO365. When they deposit, you both get ₹500 bonus.", cta: "Invite friend" },
  { icon: Trophy, title: "VIP Live Casino Tables", desc: "Exclusive access to high-limit Teen Patti, Andar Bahar & Roulette tables with dedicated dealers.", cta: "Play VIP" },
  { icon: Percent, title: "Deposit Bonus Every Weekend", desc: "50% bonus on every deposit made on Saturday & Sunday. Max bonus ₹5,000.", cta: "Deposit now" },
];

const Promotions = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE}/promotions#webpage`,
      url: `${SITE}/promotions`,
      name: "YOLO365 Promotions — Bonuses, Cashback & IPL Offers",
      isPartOf: { "@id": `${SITE}/#website` },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Promotions", item: `${SITE}/promotions` },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 Promotions — Welcome Bonus, IPL Offers & Cashback 2026"
        description="Grab YOLO365 bonuses — 200% welcome bonus up to ₹15,000, IPL 2026 match-day offers, 10% weekly cashback, refer & earn. Claim now on WhatsApp."
        canonical="/promotions"
        keywords="YOLO365 promotions, cricket betting bonus India, IPL 2026 bonus, welcome bonus, cashback offers"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-foreground/80">Promotions</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Promotions & <span className="text-gold">Bonuses</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Boost your bankroll with YOLO365 bonuses. From welcome offers to weekly cashback — there's always an edge waiting for you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {promos.map((p) => (
            <div key={p.title} className="rounded-xl border hairline bg-card/40 p-6 flex flex-col">
              <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h2 className="font-semibold text-lg mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" /> {p.cta}
              </a>
            </div>
          ))}
        </div>

        <section className="mt-16 rounded-2xl border hairline bg-card/40 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Want a custom bonus?</h2>
          <p className="text-muted-foreground mb-5">Message our team on WhatsApp for VIP & high-roller offers tailored to you.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;
