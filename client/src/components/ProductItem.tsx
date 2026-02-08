import { motion } from "framer-motion";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useOrderStore } from "@/lib/order-store";
import { Product } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

interface ProductItemProps {
  product: Product;
  delay?: number;
}

export function ProductItem({ product, delay = 0 }: ProductItemProps) {
  const { items, addItem, updateQuantity } = useOrderStore();
  const orderItem = items.find((i) => i.product.id === product.id);
  const quantity = orderItem?.quantity || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-muted">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-foreground truncate">{product.name}</h4>
        <p className="text-sm text-muted-foreground">{product.unit} • ₹{product.price}</p>
      </div>

      <div className="flex items-center gap-2">
        {quantity > 0 ? (
          <div className="flex items-center bg-secondary/50 rounded-full p-1">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-full" 
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-bold">{quantity}</span>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 rounded-full" 
              onClick={() => addItem(product)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full px-4 font-bold border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => addItem(product)}
          >
            Add
          </Button>
        )}
      </div>
    </motion.div>
  );
}
