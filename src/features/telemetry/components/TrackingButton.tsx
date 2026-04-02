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
      className={`${variantClass[variant]} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type="button"
    >
      {icon && <span className="w-5 h-5 flex items-center shrink-0">{icon}</span>}
      <span className="font-sora font-bold text-sm tracking-wide uppercase leading-none">
        {children}
      </span>
    </button>
  );
}
