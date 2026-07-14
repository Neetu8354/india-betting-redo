import { useState } from "react";
import { Plus } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/wa";

const faqs = [
  { q: "How do I get a Yolo365 betting ID?", a: "Click any 'Get ID' button on this page. It opens WhatsApp where our team will share your ID and password within 60 seconds." },
  { q: "Is Yolo365 safe?", a: "Yolo365 uses encryption to protect user data and transactions. Online betting regulations vary by state in India — please check your local laws before participating." },
  { q: "What is the minimum deposit?", a: "You can start with as little as ₹100. We accept UPI, PhonePe, GPay, Paytm, IMPS and net banking." },
  { q: "How long do withdrawals take?", a: "Most withdrawals are processed within 5 minutes directly to your Indian bank account, with no hidden fees." },
  { q: "Can I bet on IPL and cricket matches?", a: "Yes. Yolo365 covers every IPL match, international cricket (T20, ODI, Test), domestic leagues and women's cricket — with sharp odds." },
  { q: "Do you have live casino games?", a: "Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack, Baccarat and 1,000+ slot games with live dealers." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a,
    },
  })),
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="eyebrow mb-2">FAQ</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
      </div>
      <div className="max-w-3xl mx-auto divide-y hairline border-y hairline">
        {faqs.map((f, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-5 flex items-center justify-between text-left gap-4"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-medium text-sm md:text-base text-foreground">{f.q}</span>
              <Plus className={`w-4 h-4 text-gold flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`} />
            </button>
            <div id={`faq-answer-${i}`} hidden={open !== i} className="pb-5 text-sm text-muted-foreground leading-relaxed -mt-1">
              {f.a}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 hover:text-gold transition-colors">
          Still have questions? Talk to us on WhatsApp →
        </a>
      </div>
    </section>
  );
};

export default FAQ;
