import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/features/telemetry/hooks/useAnalytics";

interface TrackingButtonProps {
  id: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function TrackingButton({ id, variant = "default", className, onClick, children }: TrackingButtonProps) {
  const { trackInteraction } = useAnalytics();
  return (
    <Button
      variant={variant}
      className={`transition-all duration-200 hover:brightness-110 active:scale-95 ${className || ""}`}
      onClick={() => {
        trackInteraction("click", id);
        onClick();
      }}
      onMouseEnter={() => trackInteraction("hover", id)}
    >
      {children}
    </Button>
  );
}
