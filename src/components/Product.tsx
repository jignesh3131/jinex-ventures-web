import {
  Droplets,
  Wind,
  ShieldCheck,
  Box,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import productSpitCup from "@/assets/Brand_3.png";
import productCigarette from "@/assets/product-cigarette.png";
import productVomit from "@/assets/product-vomit.png";
import productTB from "@/assets/product-tb.png";

const products = [
  {
    id: "spit-cup",
    name: "Kleenoza Spit Cup",
    tagline: "Discreet & Odourless",
    desc: "The original discreet, spill-proof, and odourless cup for spitting on the move. Engineered for extended single-session use without the mess.",
    image: productSpitCup,
    icon: Droplets,
    features: [
      "50 Spit Capacity",
      "Single-Use & Eco-Friendly",
      "Spill-Proof inner lining",
      "Odourless neutralizing tech",
      "Disappears after use",
    ],
    target: "Ideal for travelers, offices, and daily commuters.",
  },
  {
    id: "vomit-bag",
    name: "Kleenoza Vomit Bag",
    tagline: "Safe & Hygienic",
    desc: "Stay prepared and hygienic wherever you go with the Kleenoza Vomit Bag. Designed for comfort and convenience, this leak-proof disposable bag is ideal for travel, medical use, or emergency situations.",
    image: productVomit,
    icon: ShieldCheck,
    features: [
      "Leak-proof and secure sealing",
      "Easy to use, even in urgent situations",
      "Odor-control design for better hygiene",
      "Compact and travel-friendly",
      "Safe, hygienic, and disposable",
    ],
    target: "Perfect for motion sickness, hospitals, and personal use.",
  },
  {
    id: "cigarette-cup",
    name: "Kleenoza Cigarette Disposal Cup",
    tagline: "Clean & Responsible",
    desc: "Dispose of cigarette waste responsibly with the Kleenoza Cigarette Disposal Cup. Built for cleanliness and safety, this cup helps maintain a smoke-free, litter-free environment.",
    image: productCigarette,
    icon: Wind,
    features: [
      "Fire-retardant inner material",
      "Odor-control technology",
      "Safe and easy cigarette disposal",
      "Portable and lightweight",
      "Eco-friendly and disposable",
    ],
    target: "Ideal for homes, offices, public areas, and vehicles.",
  },
  {
    id: "tb-cup",
    name: "Kleenoza TB Patient Sputum Cup",
    tagline: "Medical Grade",
    desc: "Ensure safe and hygienic sputum collection with the Kleenoza TB Patient Sputum Cup. Specially designed for medical use, it helps prevent contamination and supports better infection control.",
    image: productTB,
    icon: Box,
    features: [
      "Leak-proof and secure lid",
      "Hygienic, single-use design",
      "Easy to handle and dispose",
      "Clear usage instructions",
      "Supports safe TB management",
    ],
    target: "Designed for hospitals, clinics, and patient care environments.",
  },
];

const Product = () => {
  return (
    <section id="product" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Product Line
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-4">
            Hygiene solutions for
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              every situation.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Explore the Kleenoza family of premium hygiene products. Built around a quiet promise: discretion, safety, and cleanliness without compromise.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {products.map((p, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div key={p.id} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Column */}
                <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="absolute -inset-4 bg-gradient-primary opacity-10 rounded-[2.5rem] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-border/50 shadow-elegant group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                    <p.icon size={16} />
                    <span>{p.tagline}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="py-4">
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                      {p.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground/90 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary border border-border">
                    <p className="text-sm font-semibold text-secondary-foreground">
                      {p.target}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 flex items-start gap-3 p-5 rounded-2xl border border-destructive/30 bg-destructive/5 max-w-2xl mx-auto shadow-sm">
          <AlertTriangle
            className="text-destructive shrink-0 mt-0.5"
            size={24}
          />
          <div>
            <p className="font-semibold text-foreground text-base mb-1">
              Safety & Disposal Warning
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Do not use for children. Keep out of reach of minors. All Kleenoza products are designed for single-use. Please dispose of responsibly in accordance with local health and safety regulations after use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;