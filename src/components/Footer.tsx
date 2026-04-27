import JinexLogo from "./JinexLogo";
import KleenozaLogo from "./KleenozaLogo";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  "Kleenoza Brand": [
    { label: "Product", href: "#product" },
    { label: "Gallery", href: "#gallery" },
    { label: "Features", href: "#product" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#contact" },
  ],
};

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Main footer area */}
    <div className="bg-gradient-primary py-16 md:py-20">
      <div className="container grid md:grid-cols-12 gap-10 text-primary-foreground">
        {/* Jinex company column */}
        <div className="md:col-span-5 space-y-5">
          <JinexLogo size={64} />
          <p className="text-sm opacity-80 leading-relaxed max-w-sm">
            Jinex Ventures creates innovative, everyday hygiene solutions.
            Kleenoza is our flagship brand — premium disposable spit cups
            designed for hygiene on the go.
          </p>

          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
            <KleenozaLogo size="sm" variant="white" />
            <span className="text-xs opacity-70 ml-1">by Jinex Ventures</span>
          </div>

          <div className="flex flex-col gap-2 text-sm opacity-80 pt-2">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              hello@jinexventures.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              +91 98983 80654
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              Worldwide Shipping
            </div>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="md:col-span-2">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter / CTA column */}
        <div className="md:col-span-3">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 opacity-90">
            Stay Updated
          </h4>
          <p className="text-sm opacity-70 mb-4 leading-relaxed">
            Get notified about new Kleenoza products and Jinex Ventures updates.
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              /* placeholder */
            }}
          >
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 h-10 px-4 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="h-10 px-5 rounded-full bg-white text-primary-deep text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-primary-deep text-primary-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs opacity-70">
        <div className="flex items-center gap-1.5">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-semibold">Jinex Ventures</span>
          <span>· All rights reserved ·</span>
          <span className="opacity-80">Kleenoza™ is a registered trademark</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-100 transition-opacity">
            Privacy Policy
          </a>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;