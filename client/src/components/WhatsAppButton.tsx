import { MessageCircle, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useOrderStore } from "@/lib/order-store";

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
  text,
  ...props 
}: WhatsAppButtonProps) {
  const { items, generateWhatsAppMessage } = useOrderStore();
  const phoneNumber = "919876543210"; 
  const message = encodeURIComponent(generateWhatsAppMessage());
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

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const buttonText = text || (totalItems > 0 ? `Order ${totalItems} items on WhatsApp` : "Order on WhatsApp");

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
      {showIcon && (
        totalItems > 0 
          ? <ShoppingBag className="mr-2.5 h-[1.2em] w-[1.2em]" />
          : <MessageCircle className="mr-2.5 h-[1.2em] w-[1.2em] fill-current" />
      )}
      {buttonText}
    </motion.button>
  );
}
