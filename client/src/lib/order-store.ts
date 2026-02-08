import { create } from 'zustand';
import { Product } from './catalog';

interface OrderItem {
  product: Product;
  quantity: number;
}

interface OrderStore {
  items: OrderItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearOrder: () => void;
  generateWhatsAppMessage: () => string;
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existing = state.items.find((i) => i.product.id === product.id);
    if (existing) {
      return {
        items: state.items.map((i) => 
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { items: [...state.items, { product, quantity: 1 }] };
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter((i) => i.product.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: quantity <= 0 
      ? state.items.filter((i) => i.product.id !== productId)
      : state.items.map((i) => i.product.id === productId ? { ...i, quantity } : i)
  })),
  clearOrder: () => set({ items: [] }),
  generateWhatsAppMessage: () => {
    const { items } = get();
    if (items.length === 0) return "Hello Kendrapara Mart, I want to place an order.";
    
    let message = "Hello Kendrapara Mart,\nI want to order:\n\n";
    items.forEach((item) => {
      message += `- ${item.product.name} – ${item.quantity} ${item.product.unit}\n`;
    });
    message += "\nDelivery location:\n(I will share Google Maps location)";
    return message;
  },
}));
