import { Star } from "lucide-react";

const reviews = [
  { n: "Rahul S.", c: "Mumbai", t: "Got my ID in a minute on WhatsApp. Withdrew ₹50,000 the same day. Genuinely the best site for IPL betting." },
  { n: "Priya K.", c: "Delhi", t: "Teen Patti live tables are fantastic. Real dealers and instant UPI deposits — completely trusted." },
  { n: "Arjun M.", c: "Bangalore", t: "Been using Yolo365 for two years. The 24/7 support is genuine and responsive." },
  { n: "Vikram T.", c: "Hyderabad", t: "The cricket odds are competitive and the kabaddi market goes deep through the entire PKL season." },
];

const Testimonials = () => (
  <section className="container py-16">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <div className="eyebrow mb-2">Player reviews</div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What our users say</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {reviews.map((r) => (
        <div key={r.n} className="card-premium rounded-lg p-6 text-left">
          <div className="flex gap-0.5 mb-3 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
          </div>
          <p className="text-sm text-foreground/85 mb-4 leading-relaxed">"{r.t}"</p>
          <div className="text-sm font-medium">{r.n}</div>
          <div className="text-xs text-muted-foreground">{r.c}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
