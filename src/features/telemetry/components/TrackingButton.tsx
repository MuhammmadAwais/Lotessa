import React, { useRef } from "react";
import { useAnalytics } from "@/features/telemetry/hooks/useAnalytics";
import gsap from "gsap";

type Variant = "teal" | "coral" | "black";

interface TrackingButtonProps {
  id: string;
  variant?: Variant;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const variantClass: Record<Variant, string> = {
  teal:  "btn-teal",
  coral: "btn-coral",
  black: "btn-black",
};

export const AppleIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-19-86.4-18.3-46.1.9-88.1 27.1-111.8 68.9-47.3 83.5-12.1 207 33.6 272.7 22.4 32.1 48.8 68.2 82.4 67.1 32.5-1.1 44.8-20.9 84.1-20.9s50.5 20.8 84.7 19.8c34.7-1 59.5-32.3 81.8-64.7 25.8-37.3 36.3-73.4 36.6-75.3-79.4-31-89.1-125.7-8.1-163.6zm-52.1-155.1c38.1-46.2 32.6-86.5 29.8-97.1-32.5 3.3-71.3 23.6-94.8 51.1-20.2 23.3-37.3 64.9-31.5 94.6 36.3 2.9 73.1-20.1 96.5-48.6z"/>
  </svg>
);

export const GooglePlayIcon = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

export function TrackingButton({
  id,
  variant = "teal",
  className = "",
  onClick,
  children,
  icon,
}: TrackingButtonProps) {
  const { trackInteraction } = useAnalytics();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    trackInteraction("hover", id);
    // GSAP weighty scale-up on hover
    gsap.to(btnRef.current, {
      scale: 1.02,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleClick = () => {
    trackInteraction("click", id);
    // Quick press-down feel
    gsap.timeline()
      .to(btnRef.current, { scale: 0.95, duration: 0.1, ease: "power2.in" })
      .to(btnRef.current, { scale: 1,    duration: 0.2, ease: "power2.out" });
    onClick();
  };

  return (
    <button
      ref={btnRef}
      className={`${variantClass[variant]} ${className} flex items-center justify-center gap-3 px-8`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
      style={{ minWidth: '200px', height: '56px' }}
    >
      {icon && <span className="flex items-center justify-center shrink-0">{icon}</span>}
      <span className="font-sora font-bold text-sm tracking-wide uppercase leading-none">
        {children}
      </span>
    </button>
  );
}
