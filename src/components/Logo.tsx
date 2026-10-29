import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'salvia';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  centered?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  centered = false,
}) => {
  // Size mapping
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[7px]',
    md: 'text-[8px] sm:text-[9px]',
    lg: 'text-[10px] sm:text-[11px]',
    xl: 'text-xs',
  };

  let textColor = 'text-[#24211D]';
  let subtitleColor = 'text-[#D4AF37]';

  if (variant === 'light') {
    textColor = 'text-[#FBF9F3]';
    subtitleColor = 'text-[#D4AF37]';
  } else if (variant === 'salvia') {
    textColor = 'text-[#F5F2EA]';
    subtitleColor = 'text-[#D4AF37]';
  }

  return (
    <div
      className={`select-none group inline-flex ${
        centered ? 'flex-col items-center text-center gap-2' : 'flex-row items-center gap-3.5'
      }`}
    >
      {/* Official Golden Coast Sunset & Horizon Emblem (Matching logo3.png) */}
      <div className={`${iconSizes[size]} relative shrink-0`}>
        <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Sunset Sun Gradient: Sunset Red to Golden Amber */}
            <linearGradient id="gcSunsetSunGrad" x1="150" y1="70" x2="150" y2="162" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E76F51" />
              <stop offset="25%" stopColor="#EA5D3C" />
              <stop offset="60%" stopColor="#F29E4C" />
              <stop offset="100%" stopColor="#F6C34E" />
            </linearGradient>

            {/* Gold Champagne Ring & Water Reflection Metallic Gradient */}
            <linearGradient id="gcGoldMetallic" x1="40" y1="40" x2="260" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5DE88" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F9EBB6" />
              <stop offset="75%" stopColor="#B88E28" />
              <stop offset="100%" stopColor="#E5C763" />
            </linearGradient>

            <linearGradient id="gcGoldFacetLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2BD" />
              <stop offset="100%" stopColor="#B88E28" />
            </linearGradient>

            {/* Sun Slices Clip Mask to ensure pure circular contour */}
            <clipPath id="sunDiscClip">
              <circle cx="150" cy="150" r="68" />
            </clipPath>
          </defs>

          {/* Golden Outer Ring with Bottom Reflection Gap */}
          <path
            d="M 100 242 C 60 216, 38 172, 38 122 C 38 60, 88 12, 150 12 C 212 12, 262 60, 262 122 C 262 172, 240 216, 200 242"
            stroke="url(#gcGoldMetallic)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Upper Half: Setting Sun in 4 Horizontal Segments */}
          <g clipPath="url(#sunDiscClip)" fill="url(#gcSunsetSunGrad)">
            {/* Segment 1: Top Dome */}
            <rect x="70" y="70" width="160" height="28" />
            {/* Segment 2: Mid Upper Strip */}
            <rect x="70" y="102" width="160" height="18" />
            {/* Segment 3: Mid Lower Strip */}
            <rect x="70" y="124" width="160" height="18" />
            {/* Segment 4: Horizon Strip */}
            <rect x="70" y="146" width="160" height="18" />
          </g>

          {/* Lower Half: Golden Water Reflection Strips with 3D Center Diamond Ridge */}
          <g fill="url(#gcGoldFacetLight)">
            {/* Horizon Reflection Bar 1 (Widest) */}
            <polygon points="52,168 150,165 248,168 150,172" />
            {/* Reflection Bar 2 */}
            <polygon points="68,179 150,176 232,179 150,183" />
            {/* Reflection Bar 3 */}
            <polygon points="82,190 150,187 218,190 150,194" />
            {/* Reflection Bar 4 */}
            <polygon points="96,201 150,198 204,201 150,205" />
            {/* Reflection Bar 5 */}
            <polygon points="110,212 150,209 190,212 150,216" />
            {/* Reflection Bar 6 */}
            <polygon points="122,222 150,219 178,222 150,226" />
            {/* Reflection Bar 7 */}
            <polygon points="132,232 150,229 168,232 150,236" />
            {/* Reflection Bar 8 */}
            <polygon points="140,242 150,239 160,242 150,246" />
            {/* Reflection Diamond Tip 9 (Protruding slightly into the bottom ring opening) */}
            <polygon points="145,251 150,248 155,251 150,255" />
          </g>
        </svg>
      </div>

      {/* Brand Typography: Centered / Refined */}
      <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} leading-tight`}>
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif font-normal tracking-[0.16em] ${titleSizes[size]} ${textColor} uppercase leading-none`}
          >
            GOLDEN COAST
          </span>
        </div>
        
        {showSubtitle && (
          <span
            className={`font-sans font-semibold tracking-[0.26em] ${subSizes[size]} ${subtitleColor} uppercase mt-1 leading-none`}
          >
            PROPERTY ADVISORY
          </span>
        )}
      </div>
    </div>
  );
};
