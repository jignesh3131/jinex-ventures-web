import jinexLogoSrc from "@/assets/jinex-logo.png";

interface JinexLogoProps {
  className?: string;
  size?: number;
  hideSlogan?: boolean;
}

/**
 * Jinex Ventures — parent company logo.
 * Uses the exact transparent image provided.
 */
const JinexLogo = ({
  className = "",
  size = 56,
  hideSlogan = false,
}: JinexLogoProps) => {
  // Use a wrapper to crop the bottom ~16% of the image where the slogan lives
  const containerStyle = hideSlogan ? { height: `${size * 0.84}px`, overflow: "hidden" } : {};

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div style={containerStyle} className="flex justify-center">
        <img 
          src={jinexLogoSrc} 
          alt="Jinex Ventures" 
          style={{ height: `${size}px`, width: "auto", objectFit: "contain" }}
          className="block mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default JinexLogo;
