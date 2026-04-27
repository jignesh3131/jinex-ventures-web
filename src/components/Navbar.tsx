import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import JinexLogo from "./JinexLogo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#product", label: "Product" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex flex-col items-center group mt-1">
          <JinexLogo
            size={52}
            hideSlogan={true}
            className="group-hover:opacity-80 transition-opacity"
          />
          <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.15em] text-foreground/80 mt-0.5 uppercase text-center">
            Empowering Ideas. Elevating Futures.
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex h-10 items-center px-5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
        >
          Get a Quote
        </a>
        <button
          className="md:hidden p-2 rounded-lg text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <ul className="container py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center px-5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-soft mt-2"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;