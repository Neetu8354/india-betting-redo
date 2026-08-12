import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/wa";

const BonusPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay to ensure page is loaded
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
      />

      {/* Centered Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-card to-card/80 border border-gold/30 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-foreground/60 hover:text-foreground" />
          </button>

          {/* Content */}
          <div className="p-8 text-center space-y-6">
            {/* Bonus Badge */}
            <div className="space-y-2">
              <div className="text-5xl font-black bg-gradient-to-r from-gold to-gold-glow bg-clip-text text-transparent">
                🎁
              </div>
              <h2 className="text-4xl font-black tracking-tight text-foreground">
                100% BONUS
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              Claim your 100% bonus now!
            </p>

            {/* WhatsApp CTA Button */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-glow text-primary-foreground font-bold text-base hover:shadow-lg hover:shadow-gold/50 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              CLICK HERE — WHATSAPP
            </a>

            {/* Subtle Footer */}
            <p className="text-xs text-foreground/50">
              Limited time offer. Terms apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusPopup;
