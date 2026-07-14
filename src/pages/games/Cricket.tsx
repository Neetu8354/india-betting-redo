import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { WHATSAPP_LINK } from "@/lib/wa";
import { CheckCircle2, MessageCircle } from "lucide-react";
import heroImg from "@/assets/sport-cricket.jpg";

const SITE = "https://www.yolo365info.live";
const DATE_MODIFIED = "2026-07-14";

const highlights = [
  { title: "Best IPL 2026 odds", desc: "Match-winner, top batsman, top bowler, over/under, and 50+ in-play markets every over." },
  { title: "Live in-play betting", desc: "Bet ball-by-ball with real-time odds across every major T20, ODI, and Test match." },
  { title: "₹100 minimum bet", desc: "Start small with INR-native UPI deposits and scale to high-roller stakes." },
];

const howToPlay = [
  "Message us on WhatsApp to get your YOLO365 cricket betting ID in 60 seconds.",
  "Deposit instantly using UPI (PhonePe, GPay, Paytm) — minimum ₹100.",
  "Open the Cricket section, pick your match (IPL, BBL, international, etc.).",
  "Choose a market — match winner, top batsman, session runs, or in-play.",
  "Place your bet at the displayed odds and watch live.",
  "Withdraw winnings to your bank account in under 5 minutes.",
];

const faqs = [
  { q: "Is online cricket betting legal in India?", a: "Online betting regulation varies by state in India. Some states permit skill-based wagering while others restrict it. Players should check their local state laws. YOLO365 operates as an offshore platform and accepts Indian players." },
  { q: "How fast is withdrawal on YOLO365?", a: "UPI and IMPS withdrawals are processed in under 5 minutes during business hours. Bank transfers above ₹50,000 may take up to 30 minutes." },
  { q: "What's the minimum deposit for cricket betting?", a: "₹100 via UPI. We accept PhonePe, GPay, Paytm, BHIM, and direct bank transfer." },
  { q: "Can I bet live during the match?", a: "Yes. YOLO365 offers in-play markets that update every ball — match-winner, next-over runs, top batsman, and 50+ session markets." },
  { q: "What cricket markets are available on YOLO365?", a: "Match winner, top batsman, top bowler, total runs, over/under, toss winner, partnership runs, method of dismissal, session runs, and 50+ live in-play markets per match." },
  { q: "Does YOLO365 support IPL matches?", a: "Yes. Every IPL 2026 match is covered with pre-match and live in-play markets across all 10 teams and 74 league-stage matches plus playoffs." },
  { q: "How do live cricket odds work?", a: "Live odds update ball-by-ball based on match state — score, wickets, run rate, and conditions. You can bet at any point during the match and cash out before it ends." },
  { q: "Can beginners use cricket betting markets?", a: "Absolutely. Start with simple markets like match-winner or top-batsman. Read our cricket betting guides and bankroll management tips before placing real bets." },
];

const Cricket = () => {
  const url = `${SITE}/games/cricket-betting`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Online Cricket Betting in India 2026 — IPL, T20 & Live Cricket Markets",
      description: "Explore YOLO365 cricket markets including IPL, T20 and international matches with live cricket insights and platform features.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
      dateModified: DATE_MODIFIED,
      datePublished: "2025-01-15",
      author: { "@type": "Organization", name: "YOLO365" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Cricket Betting", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Start Cricket Betting on YOLO365",
      totalTime: "PT5M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "100" },
      step: howToPlay.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: `Step ${i + 1}`,
        text: s,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "SportsEvent",
      name: "Indian Premier League 2026",
      description: "The 19th season of the Indian Premier League featuring 10 franchise cricket teams competing in Twenty20 format across India.",
      sport: "Cricket",
      startDate: "2026-03-21",
      endDate: "2026-05-25",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      image: `${SITE}/assets/sport-cricket.jpg`,
      location: {
        "@type": "Place",
        name: "Various Venues across India",
        address: { "@type": "PostalAddress", addressCountry: "IN" },
      },
      organizer: {
        "@type": "Organization",
        name: "Board of Control for Cricket in India",
        url: "https://www.bcci.tv",
      },
      performer: [
        { "@type": "SportsTeam", name: "Mumbai Indians" },
        { "@type": "SportsTeam", name: "Chennai Super Kings" },
        { "@type": "SportsTeam", name: "Royal Challengers Bengaluru" },
        { "@type": "SportsTeam", name: "Kolkata Knight Riders" },
        { "@type": "SportsTeam", name: "Delhi Capitals" },
      ],
      competitor: [
        { "@type": "SportsTeam", name: "Mumbai Indians" },
        { "@type": "SportsTeam", name: "Chennai Super Kings" },
        { "@type": "SportsTeam", name: "Royal Challengers Bengaluru" },
        { "@type": "SportsTeam", name: "Kolkata Knight Riders" },
        { "@type": "SportsTeam", name: "Delhi Capitals" },
      ],
      offers: {
        "@type": "Offer",
        url: `${SITE}/games/cricket-betting`,
        availability: "https://schema.org/InStock",
        price: "100",
        priceCurrency: "INR",
        validFrom: "2026-03-01",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365"
        description="Explore YOLO365 cricket markets including IPL, T20 and international matches with live in-play odds, 50+ markets per match and instant UPI deposits."
        canonical="/games/cricket-betting"
        keywords="online cricket betting India, IPL 2026 betting, live cricket betting site, cricket betting ID WhatsApp, T20 World Cup odds, cricket exchange India"
        jsonLd={ld}
        image={`${SITE}/og-image.svg`}
      />
      <Header />
      <main className="container py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span>
          <span className="text-foreground/80">Cricket Betting</span>
        </nav>

        {/* Author / freshness signal */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6">
          <span>Written by <strong className="text-foreground/80">YOLO365 Editorial Team</strong></span>
          <span>·</span>
          <span>Updated July 2026</span>
        </div>

        {/* Hero */}
        <header className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Online Cricket Betting in India — IPL, T20 & Live Cricket Markets
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            YOLO365 is India's #1 online cricket betting exchange. Bet live on IPL 2026, T20 World Cup, BBL, PSL, and every international series — with the sharpest odds, in-play markets every ball, and a verified cricket betting ID delivered on WhatsApp in 60 seconds.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
              <MessageCircle className="w-4 h-4" /> Get ID on WhatsApp
            </a>
            <Link to="/blog" className="inline-flex items-center px-6 h-12 rounded-md border hairline hover:border-gold/40 font-medium">Read tips</Link>
          </div>
          <img
            src={heroImg}
            alt="Live IPL cricket betting markets and match analysis dashboard"
            width={1200}
            height={630}
            loading="eager"
            decoding="async"
            className="mt-8 w-full rounded-xl border hairline"
          />
        </header>

        {/* Why Choose */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Why Choose YOLO365 Cricket Betting Platform</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="p-6 rounded-xl border hairline bg-card/40">
                <CheckCircle2 className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cricket Betting Markets Explained */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Cricket Betting Markets Explained</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p>Understanding the variety of cricket betting markets is the first step to making informed bets. YOLO365 offers <strong>50+ markets per match</strong> across every format — T20, ODI, and Test cricket.</p>
            <h3 className="text-lg font-semibold mt-6 mb-2">Pre-match markets</h3>
            <p><strong>Match winner</strong> is the simplest market — pick which team will win. <strong>Top batsman</strong> and <strong>top bowler</strong> require deeper knowledge of player form and conditions. <strong>Toss winner</strong> is essentially a coin flip but matters at dew-heavy venues. <strong>Total runs (over/under)</strong> lets you bet on whether the combined total will exceed a set line.</p>
            <h3 className="text-lg font-semibold mt-6 mb-2">Live in-play markets</h3>
            <p>In-play betting is where YOLO365 excels. Odds update ball-by-ball. Popular live markets include <strong>next-over runs</strong>, <strong>session runs</strong> (runs in the next 5 or 10 overs), <strong>method of next dismissal</strong> (caught, bowled, LBW, run out), and <strong>partnership runs</strong>. These markets offer value when you understand the match situation better than the odds suggest.</p>
            <p>Read our detailed <a href="/blog/ipl-2026-betting-tips-yolo365" className="text-gold underline">IPL 2026 betting tips</a> for market-specific insights.</p>
          </div>
        </section>

        {/* IPL Betting Guide */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">IPL 2026 Betting Guide</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p>The <strong>Indian Premier League</strong> is the most popular cricket betting event in India. With 10 teams, 74 league-stage matches, and playoffs, IPL 2026 offers months of betting opportunities across teams like Mumbai Indians, Chennai Super Kings, Royal Challengers Bengaluru, and Kolkata Knight Riders.</p>
            <p>Key factors to consider when betting on IPL: <strong>venue conditions</strong> (dew factor at Wankhede, spin at Chepauk), <strong>squad composition</strong> (impact player rule changes), <strong>head-to-head records</strong>, and <strong>toss impact</strong> — teams chasing at night in Mumbai win 60%+ of the time due to dew.</p>
            <p>For match-specific tips, check our <a href="/blog/ipl-2026-betting-tips-yolo365" className="text-gold underline">IPL 2026 betting strategy article</a>.</p>
          </div>
        </section>

        {/* T20 vs Test Betting */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">T20 vs Test Cricket Betting</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p><strong>T20 betting</strong> is fast-paced — matches last 3 hours, odds shift rapidly, and top-batsman and next-over markets offer the best value. Bet sizes should be smaller because variance is high. T20 World Cup matches add another layer with conditions players aren't used to.</p>
            <p><strong>Test cricket betting</strong> rewards patience. Session markets (runs in next 10 overs) are the sharpest edge play. Draw markets on flat pitches offer value when odds overestimate a result. In-play betting during sessions 2 and 3 of a day often presents mispriced odds as the pitch behaviour changes.</p>
            <p>For ODI cricket, total runs and top-batsman markets combine well. Study our <a href="/blog/cricket-betting-bankroll-management-india" className="text-gold underline">bankroll management guide</a> to size your bets correctly across formats.</p>
          </div>
        </section>

        {/* How Live Odds Work */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">How Live Cricket Odds Work</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p>Live odds on YOLO365 update in real-time based on the match state — current score, wickets fallen, required run rate, pitch behaviour, and weather conditions. Unlike pre-match odds which reflect expectations, in-play odds reflect the actual match situation.</p>
            <p>For example, if a team loses two early wickets in a T20 chase, their win probability drops sharply and odds lengthen. This is where informed bettors find value — if you know the batting lineup is deep, the odds may overreact to early wickets. Learning to read these moments is what separates casual bettors from profitable ones.</p>
          </div>
        </section>

        {/* Bankroll Management */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Bankroll Management for Cricket Bettors</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p>The <strong>2% rule</strong> is the most practical approach for Indian cricket bettors — never risk more than 2% of your total bankroll on a single bet. If your bankroll is ₹10,000, your maximum stake is ₹200 per bet.</p>
            <p>Set a <strong>stop-loss limit</strong> per day (e.g. lose 5 bets in a row = stop for the day). Track every bet in a spreadsheet. Avoid chasing losses on the next match. The most consistent winners on YOLO365 are disciplined, not lucky.</p>
            <p>Read the complete <a href="/blog/cricket-betting-bankroll-management-india" className="text-gold underline">bankroll management guide</a> and learn how to manage your <a href="/blog/upi-deposit-betting-india-guide" className="text-gold underline">UPI deposits effectively</a>.</p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Common Cricket Betting Mistakes to Avoid</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p><strong>Betting on your favourite team</strong> — bias clouds judgement. Bet with data, not emotion. <strong>Ignoring conditions</strong> — pitch, weather, dew, and toss impact vary dramatically by venue. <strong>Over-betting on accumulators</strong> — single bets and doubles outperform accas long-term. <strong>Not using in-play markets</strong> — pre-match odds are efficient; the real edge is in live markets where speed and cricket knowledge matter.</p>
            <p><strong>Chasing losses</strong> is the biggest bankroll killer. Stick to your staking plan. If you're losing, it's better to reassess than to double down.</p>
          </div>
        </section>

        {/* How to Start */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">How to Start Cricket Betting on YOLO365</h2>
          <ol className="space-y-3 max-w-3xl">
            {howToPlay.map((s, i) => (
              <li key={i} className="flex gap-3 p-4 rounded-md border hairline bg-card/30">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-primary-foreground font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground/85 text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Strategy */}
        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Cricket Betting Strategy That Actually Works</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">
            <p>The most consistent winners on <strong>YOLO365 cricket betting</strong> follow three rules: bet only on leagues you watch, never stake more than 2% of your bankroll on a single match, and shop the line — our exchange odds are typically 5–8% sharper than book prices.</p>
            <p>For <strong>IPL 2026 betting</strong>, focus on toss + first-innings totals on dew-affected venues like Chennai and Mumbai. For Test cricket, session markets (runs in next 10 overs) offer better edge than full match-winner. In T20 World Cup matches, top-batsman markets on openers consistently beat random selection.</p>
            <p>Use our <a href="/blog/cricket-betting-bankroll-management-india" className="text-gold underline">bankroll management guide</a> and the <a href="/blog/ipl-2026-betting-tips-yolo365" className="text-gold underline">IPL 2026 tips</a> blog to sharpen your edge before every match.</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((f) => (
              <details key={f.q} className="p-5 rounded-md border hairline bg-card/30 group">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related games */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Explore More Games</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { slug: "teen-patti", label: "Teen Patti Live" },
              { slug: "andar-bahar", label: "Andar Bahar" },
              { slug: "aviator", label: "Aviator Crash" },
            ].map((r) => (
              <Link key={r.slug} to={`/games/${r.slug}`} className="p-5 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors">
                <span className="text-sm font-medium">{r.label} →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border hairline bg-card/40 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Start Cricket Betting?</h2>
          <p className="text-muted-foreground mb-5">Get your YOLO365 ID on WhatsApp in 60 seconds — instant UPI deposit, 5-min withdrawal.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
            Get ID on WhatsApp
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cricket;
