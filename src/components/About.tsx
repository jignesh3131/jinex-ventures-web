import brand3 from "@/assets/Brand_3.png";
import KleenozaLogo from "./KleenozaLogo";
import JinexLogo from "./JinexLogo";

const points = [
  {
    n: "01",
    t: "Discretion first",
    d: "Designed to be used anywhere without drawing attention.",
  },
  {
    n: "02",
    t: "Built for hygiene",
    d: "Single-use construction eliminates cross-contamination.",
  },
  {
    n: "03",
    t: "Lighter footprint",
    d: "Eco-conscious materials that break down responsibly.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container grid lg:grid-cols-2 gap-16 items-start relative z-10">
        <div className="lg:sticky lg:top-32 space-y-6">
          <div className="flex items-center gap-3">
            <KleenozaLogo size="sm" variant="color" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About the Brand
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            A small idea built around a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              big sense of dignity.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe everyday hygiene shouldn't be awkward. Kleenoza was
            created to bring quiet, professional-grade sanitation to the
            ordinary moments — buses, boardrooms, balconies — wherever you
            happen to be.
          </p>

          {/* Brand image card */}
          <div className="relative mt-8 rounded-2xl overflow-hidden shadow-elegant group">
            <div className="absolute -inset-1 bg-gradient-primary opacity-10 blur-lg" />
            <img
              src={brand3}
              alt="Kleenoza Premium Spitting Cup — detailed view showing front design and instruction panel"
              loading="lazy"
              className="relative w-full h-64 object-cover object-top rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <KleenozaLogo size="sm" variant="white" />
            </div>
          </div>

          {/* Parent company callout */}
          <div className="mt-6 p-5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <JinexLogo size={40} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Kleenoza is a brand by{" "}
              <strong className="text-foreground">Jinex Ventures</strong> — a
              company dedicated to creating innovative, everyday hygiene
              solutions that put dignity and discretion first.
            </p>
          </div>
        </div>

        <ol className="space-y-4">
          {points.map((p) => (
            <li
              key={p.n}
              className="group p-8 rounded-3xl border border-border bg-card hover:bg-gradient-soft hover:border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="font-display text-sm text-primary font-bold tracking-widest mb-2 group-hover:tracking-[0.3em] transition-all">
                {p.n}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">
                {p.t}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.d}</p>
            </li>
          ))}

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { value: "10K+", label: "Cups Sold" },
              { value: "4.9★", label: "User Rating" },
              { value: "100%", label: "Biodegradable" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl bg-gradient-soft border border-border/50"
              >
                <div className="font-display text-xl font-bold text-primary-deep">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
};

export default About;