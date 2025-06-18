import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "cyan" | "purple" | "green";
  size?: "default" | "lg";
  className?: string;
}

export default function NeonButton({ 
  children, 
  onClick, 
  variant = "cyan", 
  size = "default",
  className 
}: NeonButtonProps) {
  const variants = {
    cyan: "bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-dark hover:shadow-neon-cyan/50",
    purple: "bg-gradient-to-r from-neon-purple to-neon-cyan text-cyber-dark hover:shadow-neon-purple/50",
    green: "bg-gradient-to-r from-neon-green to-neon-cyan text-cyber-dark hover:shadow-neon-green/50"
  };

  const sizes = {
    default: "py-4 px-8",
    lg: "py-4 px-8 text-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "font-bold rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg neon-border",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Button>
  );
}
