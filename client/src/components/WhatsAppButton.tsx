import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WhatsAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg" | "xl";
  showIcon?: boolean;
  fullWidth?: boolean;
  text?: string;
}

export function WhatsAppButton({ 
  className, 
  size = "default", 
  showIcon = true,
  fullWidth = false,
  text = "Order on WhatsApp",
  ...props 
}: WhatsAppButtonProps) {
  // Replace with actual number
  const phoneNumber = "919876543210"; 
  const message = encodeURIComponent("Hello Kendrapara Mart, I want to place an order.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl font-bold",
  };

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 shadow-lg",
        "bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent/25 hover:shadow-accent/40",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {showIcon && <MessageCircle className="mr-2.5 h-[1.2em] w-[1.2em] fill-current" />}
      {text}
    </motion.button>
  );
}
