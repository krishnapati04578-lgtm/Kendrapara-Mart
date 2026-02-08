export interface Product {
  id: string;
  name: string;
  unit: string;
  price: number;
  category: string;
  imageUrl?: string;
}

export const CATALOG: Product[] = [
  // Vegetables
  { id: "v1", name: "Tomato", unit: "1 kg", price: 40, category: "Vegetables", imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f02bad67b?w=400&auto=format&fit=crop&q=60" },
  { id: "v2", name: "Potato", unit: "1 kg", price: 30, category: "Vegetables", imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f02bad67b?w=400&auto=format&fit=crop&q=60" },
  { id: "v3", name: "Onion", unit: "1 kg", price: 50, category: "Vegetables", imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&auto=format&fit=crop&q=60" },
  { id: "v4", name: "Green Chili", unit: "250g", price: 20, category: "Vegetables", imageUrl: "https://images.unsplash.com/photo-1588253584673-c6d9449331f9?w=400&auto=format&fit=crop&q=60" },
  
  // Fruits
  { id: "f1", name: "Banana", unit: "1 dozen", price: 60, category: "Fruits", imageUrl: "https://images.unsplash.com/photo-1571771894821-ad9958a35c47?w=400&auto=format&fit=crop&q=60" },
  { id: "f2", name: "Apple", unit: "1 kg", price: 180, category: "Fruits", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bccb?w=400&auto=format&fit=crop&q=60" },
  { id: "f3", name: "Orange", unit: "1 kg", price: 120, category: "Fruits", imageUrl: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&auto=format&fit=crop&q=60" },
  
  // Groceries
  { id: "g1", name: "Rice (Basmati)", unit: "1 kg", price: 90, category: "Groceries", imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=60" },
  { id: "g2", name: "Dal (Arhar)", unit: "1 kg", price: 160, category: "Groceries", imageUrl: "https://images.unsplash.com/photo-1585992827601-9299ac7d0bb6?w=400&auto=format&fit=crop&q=60" },
  { id: "g3", name: "Cooking Oil", unit: "1 L", price: 140, category: "Groceries", imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&auto=format&fit=crop&q=60" },
  
  // Snacks & Cold Drinks
  { id: "s1", name: "Potato Chips", unit: "1 packet", price: 20, category: "Snacks & Cold Drinks", imageUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=60" },
  { id: "s2", name: "Coca Cola", unit: "750ml", price: 45, category: "Snacks & Cold Drinks", imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=60" },
  { id: "s3", name: "Biscuits", unit: "1 packet", price: 10, category: "Snacks & Cold Drinks", imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=60" },
];

export const CATEGORIES = [
  { id: "vegetables", title: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&auto=format&fit=crop&q=60" },
  { id: "fruits", title: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=60" },
  { id: "groceries", title: "Groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60" },
  { id: "snacks", title: "Snacks & Cold Drinks", image: "https://images.unsplash.com/photo-1621939514649-28b12e81658b?w=800&auto=format&fit=crop&q=60" },
];
