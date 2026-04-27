import spitCup from "@/assets/Brand_1.png";
import spitCupPackage from "@/assets/Brand_2.png";
import vomitBag from "@/assets/product-vomit.png";
import tbCup from "@/assets/product-tb.png";
import cigaretteCup from "@/assets/product-cigarette.png";

const galleryItems = [
  {
    src: tbCup,
    label: "Kleenoza TB Patient Sputum Cup",
    caption: "Medical Grade Sputum Collection",
    span: "md:col-span-2 md:row-span-2",
    height: "h-[460px] md:h-full",
  },
  {
    src: vomitBag,
    label: "Kleenoza Vomit Bag",
    caption: "Leak-proof & Odor-controlling",
    span: "md:col-span-1",
    height: "h-[280px]",
  },
  {
    src: cigaretteCup,
    label: "Kleenoza Cigarette Disposal Cup",
    caption: "Fire-retardant & Portable",
    span: "md:col-span-1",
    height: "h-[280px]",
  },
  {
    src: spitCupPackage,
    label: "Kleenoza Spit Cup",
    caption: "Available in 10, 25 & 50 Packs",
    span: "md:col-span-1",
    height: "h-[320px]",
  },
  {
    src: spitCup,
    label: "Kleenoza Spit Cup",
    caption: "Original Discreet Hygiene Solution",
    span: "md:col-span-1",
    height: "h-[320px]",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Made for everywhere life takes you.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            From medical facilities to everyday travel — see the Kleenoza hygiene product line in action across every setting.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-4 gap-x-6 gap-y-10 mt-12">
          {galleryItems.map((it) => (
            <figure
              key={it.label + it.caption}
              className={`group flex flex-col ${it.span}`}
            >
              <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 shadow-soft group-hover:shadow-elegant transition-all duration-500 w-full ${it.height}`}>
                <img
                  src={it.src}
                  alt={`${it.label} — ${it.caption}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 block"
                />
              </div>
              <figcaption className="mt-4 px-2">
                <div className="text-xs uppercase tracking-widest text-primary/80 font-bold mb-1.5">
                  {it.caption}
                </div>
                <div className="font-display text-lg md:text-xl font-semibold text-foreground leading-tight">
                  {it.label}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;