import heroCup from "@/assets/Brand_3.png";
import brand4 from "@/assets/Brand_4.png";
import { Sparkles, ChevronDown } from "lucide-react";
import KleenozaLogo from "./KleenozaLogo";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero min-h-screen flex items-center"
    >
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          <div className="flex items-center gap-4 mb-2">
            <KleenozaLogo size="sm" variant="color" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/80 backdrop-blur-sm text-primary-deep text-xs font-semibold uppercase tracking-wider border border-primary/10">
              <Sparkles size={14} className="text-primary" /> New · Hygiene
              reimagined
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
            Hygienic,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portable,
            </span>{" "}
            and Easy to Use.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Kleenoza disposable spit cups are designed for life on the move —
            spill-proof, odourless, and discreet enough for anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#product"
              className="inline-flex h-12 items-center px-8 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all group"
            >
              Explore the Product
              <ChevronDown
                size={16}
                className="ml-2 group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center px-8 rounded-full border border-border bg-background/60 backdrop-blur text-foreground font-semibold hover:bg-background hover:border-primary/30 transition-all"
            >
              Why Kleenoza
            </a>
          </div>
          <div className="flex gap-8 pt-4 text-sm">
            <Stat value="50" label="Spit capacity" />
            <Stat value="100%" label="Eco-friendly" />
            <Stat value="0" label="Odour leak" />
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px] flex items-center justify-center">
          {/* Glow ring behind product */}
          <div className="absolute inset-0 bg-gradient-primary opacity-15 blur-3xl rounded-full animate-pulse-slow" />
          <div className="absolute inset-8 border-2 border-primary/10 rounded-full animate-spin-very-slow" />
          <div className="absolute inset-16 border border-primary-glow/10 rounded-full animate-spin-very-slow [animation-direction:reverse]" />

          {/* Main hero image */}
          <img
            src={heroCup}
            alt="Kleenoza Premium Spitting Cup — front and back view showing spill-proof design and usage instructions"
            width={1280}
            height={1280}
            className="relative z-10 w-full max-w-md object-contain animate-float drop-shadow-[0_40px_60px_rgba(30,80,200,0.25)]"
          />

          {/* Floating secondary image */}
          <img
            src={brand4}
            alt="Kleenoza cup close-up showing premium packaging"
            width={320}
            height={320}
            className="absolute -bottom-4 -left-4 md:bottom-4 md:left-0 z-20 w-28 md:w-36 rounded-2xl shadow-elegant object-cover border-2 border-white/80 animate-float [animation-delay:1.5s]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} className="text-primary/40" />
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="group cursor-default">
    <div className="font-display text-2xl font-bold text-primary-deep group-hover:text-primary transition-colors">
      {value}
    </div>
    <div className="text-xs text-muted-foreground uppercase tracking-wider">
      {label}
    </div>
  </div>
);

export default Hero;