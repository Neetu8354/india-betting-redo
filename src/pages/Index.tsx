import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

// Above-the-fold loads eagerly; below-the-fold sections are lazy-split for faster LCP.
const PromoSlider = lazy(() => import("@/components/PromoSlider"));
const SportsSection = lazy(() => import("@/components/SportsSection"));
const CasinoSection = lazy(() => import("@/components/CasinoSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Features = lazy(() => import("@/components/Features"));
const PaymentMethods = lazy(() => import("@/components/PaymentMethods"));
const Providers = lazy(() => import("@/components/Providers"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppChatbot = lazy(() => import("@/components/WhatsAppChatbot"));

const SITE = "https://www.yolo365info.live";

const Index = () => {
  const homeLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: SITE,
    name: "YOLO365 — Cricket & Gaming Information Platform",
    isPartOf: { "@id": `${SITE}/#website` },
    inLanguage: "en-IN",
    about: { "@id": `${SITE}/#organization` },
    description:
      "Cricket betting information, live casino guides, and gaming resources for Indian users.",
  };

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-primary-foreground focus:rounded-md focus:font-semibold focus:text-sm">Skip to main content</a>
      <SEO
        title="YOLO365 - Cricket and Gaming Information | IPL & Live Casino Guides 2026"
        description="YOLO365 provides cricket betting information, IPL 2026 insights, live casino guides, and gaming resources for Indian users."
        canonical="/"
        jsonLd={homeLd}
      />
      <TickerBar />
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <PromoSlider />
          <SportsSection />
          <CasinoSection />
          <HowItWorks />
          <Features />
          <PaymentMethods />
          <Providers />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppChatbot />
      </Suspense>
    </div>
  );
};

export default Index;
