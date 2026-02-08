import { motion } from "framer-motion";
import { MapPin, ShoppingCart, Truck, Phone, AlertCircle, Clock, Droplets } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCard } from "@/components/ProductCard";

// Static data since backend is minimal for this Phase-1
const HOW_IT_WORKS = [
  { icon: ShoppingCart, title: "1. Browse Items", description: "Look through our list of available groceries and daily needs." },
  { icon: Phone, title: "2. Order on WhatsApp", description: "Send us your list directly. Simple, fast, and personal." },
  { icon: MapPin, title: "3. Share Location", description: "Send your current location pin so our rider finds you easily." },
  { icon: Truck, title: "4. Doorstep Delivery", description: "Sit back and relax while we bring your order to your door." },
];

const CATEGORIES = [
  { 
    title: "Fresh Vegetables", 
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&auto=format&fit=crop&q=60" // vegetable market
  },
  { 
    title: "Daily Groceries", 
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60" // grocery shelf
  },
  { 
    title: "Fruits", 
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=60" // fresh fruits
  },
  { 
    title: "Snacks & Drinks", 
    image: "https://images.unsplash.com/photo-1621939514649-28b12e81658b?w=800&auto=format&fit=crop&q=60" // chips and drinks
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body pb-24 md:pb-0">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold font-display text-xl">
              K
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary">
              Kendrapara Mart
            </span>
          </div>
          <WhatsAppButton size="sm" className="hidden md:inline-flex" text="Order Now" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
                <Truck className="w-4 h-4" />
                <span>Fast Local Delivery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-6 leading-tight">
                Your Daily Needs,<br />
                <span className="text-primary">Delivered to Your Doorstep</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                The easiest way to shop for groceries in Kendrapara. No apps to download, no complicated signups. Just WhatsApp us!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton size="xl" className="w-full sm:w-auto shadow-2xl shadow-accent/20" />
                <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
                  Direct order • No hidden fees
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* How it Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've kept it simple. You don't need to learn a new app. If you know how to use WhatsApp, you know how to order from us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, index) => (
              <FeatureCard key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">What We Deliver</h2>
              <p className="text-muted-foreground">Fresh and quality items picked just for you.</p>
            </div>
            <WhatsAppButton size="sm" text="View Full Catalog" className="bg-primary hover:bg-primary/90 shadow-primary/20 text-white" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <ProductCard key={idx} title={cat.title} imageUrl={cat.image} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Rules & Info */}
      <section className="py-16 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
              <AlertCircle className="text-primary" />
              Important Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-primary shadow-sm">
                    <span className="font-bold text-lg">18+</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Age Restricted Items</h3>
                    <p className="text-sm text-muted-foreground">Cigarettes and tobacco products are only delivered to customers above 18 years of age.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-destructive shadow-sm">
                    <span className="font-bold text-lg">NO</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">No Alcohol</h3>
                    <p className="text-sm text-muted-foreground">We strictly do not deliver alcohol or any prohibited substances.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-primary shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Night Delivery</h3>
                    <p className="text-sm text-muted-foreground">Limited items available at night. Extra charges may apply for late-night orders.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-blue-500 shadow-sm">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Rain Surge</h3>
                    <p className="text-sm text-muted-foreground">A small extra delivery fee may apply during heavy rains to support our riders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4 opacity-50">
            <div className="w-6 h-6 rounded bg-foreground text-background flex items-center justify-center font-bold text-xs">K</div>
            <span className="font-display font-bold">Kendrapara Mart</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kendrapara Mart. Serving our local community with love.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent md:hidden z-50">
        <WhatsAppButton fullWidth size="lg" className="shadow-2xl" />
      </div>
    </div>
  );
}
