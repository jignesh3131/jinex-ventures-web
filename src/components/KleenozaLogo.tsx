interface KleenozaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "color" | "white" | "dark";
}

const sizeMap = {
  sm: { text: "text-lg", icon: 20 },
  md: { text: "text-xl", icon: 26 },
  lg: { text: "text-2xl", icon: 30 },
  xl: { text: "text-3xl md:text-4xl", icon: 36 },
};

/**
 * Kleenoza — product brand logo.
 * A bold typographic mark with a minimal cup-and-droplet icon.
 * Use in product-facing sections: navbar, hero, product, gallery.
 */
const KleenozaLogo = ({
  className = "",
  size = "md",
  variant = "color",
}: KleenozaLogoProps) => {
  const s = sizeMap[size];
  const isWhite = variant === "white";
  const strokeColor = isWhite ? "#ffffff" : "#c79c4a";
  const fillBg = isWhite ? "rgba(255,255,255,0.12)" : "rgba(199,156,74,0.08)";
  const dropletFill = isWhite ? "rgba(255,255,255,0.5)" : "#d4af37";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Minimal cup + droplet icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Cup body */}
        <path
          d="M8 9H24L22 27H10L8 9Z"
          fill={fillBg}
          stroke={strokeColor}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Lid */}
        <rect
          x="6" y="5" width="20" height="4" rx="2"
          fill={fillBg}
          stroke={strokeColor}
          strokeWidth="1.6"
        />
        {/* Water droplet on cup */}
        <path
          d="M16 14C16 14 13.5 18.5 13.5 20.2C13.5 21.58 14.62 22.7 16 22.7C17.38 22.7 18.5 21.58 18.5 20.2C18.5 18.5 16 14 16 14Z"
          fill={dropletFill}
        />
      </svg>

      {/* Wordmark */}
      <span className={`font-display font-bold ${s.text} tracking-tight leading-none`}>
        {isWhite ? (
          <span className="text-white">Kleenoza</span>
        ) : variant === "dark" ? (
          <span className="text-foreground">Kleenoza</span>
        ) : (
          <span className="bg-gradient-to-r from-[#050b14] to-[#c79c4a] bg-clip-text text-transparent">
            Kleenoza
          </span>
        )}
      </span>
    </div>
  );
};

export default KleenozaLogo;
