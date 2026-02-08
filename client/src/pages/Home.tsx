import { motion } from "framer-motion";
import { MapPin, ShoppingCart, Truck, Phone, AlertCircle, Clock, Droplets } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductItem } from "@/components/ProductItem";
import { CATALOG, CATEGORIES } from "@/lib/catalog";
import { useOrderStore } from "@/lib/order-store";

const HOW_IT_WORKS = [
  { icon: ShoppingCart, title: "1. Browse Items", description: "Look through our list of available groceries and daily needs." },
  { icon: Phone, title: "2. Order on WhatsApp", description: "Select items and send your order list directly." },
  { icon: MapPin, title: "3. Share Location", description: "Send your current location pin so our rider finds you easily." },
  { icon: Truck, title: "4. Doorstep Delivery", description: "Sit back and relax while we bring your order to your door." },
];

export default function Home() {
  const { items } = useOrderStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background font-body pb-24 md:pb-0">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold font-display text-xl">
              K
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary">
              Kendrapara Mart
            </span>
          </div>
          <WhatsAppButton size="sm" className="hidden md:inline-flex" />
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
                The easiest way to shop for groceries in Kendrapara. Pick what you need and we'll deliver it within minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('catalog')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg"
                >
                  View Full Catalog
                </button>
                <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
                  Direct order via WhatsApp
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* How it Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, index) => (
              <FeatureCard key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">What We Deliver</h2>
              <p className="text-muted-foreground">Click a category to see items and prices.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <ProductCard 
                key={idx} 
                title={cat.title} 
                imageUrl={cat.image} 
                delay={idx * 0.1}
                onClick={() => scrollToSection(cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Product Catalog</h2>
          
          {CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CATALOG.filter(p => p.category === cat.title).map((product, idx) => (
                  <ProductItem key={product.id} product={product} delay={idx * 0.05} />
                ))}
              </div>
            </div>
          ))}
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
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-primary shadow-sm font-bold">18+</div>
                  <div>
                    <h3 className="font-bold mb-1">Age Restricted Items</h3>
                    <p className="text-sm text-muted-foreground">Cigarettes and tobacco products are only delivered to customers above 18 years of age.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-destructive shadow-sm font-bold">NO</div>
                  <div>
                    <h3 className="font-bold mb-1">No Alcohol</h3>
                    <p className="text-sm text-muted-foreground">We strictly do not deliver alcohol or any prohibited substances.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-primary shadow-sm"><Clock className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold mb-1">Night Delivery</h3>
                    <p className="text-sm text-muted-foreground">Limited items available at night. Extra charges may apply for late-night orders.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-blue-500 shadow-sm"><Droplets className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold mb-1">Rain Surge</h3>
                    <p className="text-sm text-muted-foreground">A small extra delivery fee may apply during heavy rains.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-primary shadow-sm font-bold">₹</div>
                  <div>
                    <h3 className="font-bold mb-1">Delivery Terms</h3>
                    <p className="text-sm text-muted-foreground">Minimum order value ₹100. Delivery charges start from ₹20 based on distance and time slot.</p>
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kendrapara Mart. Serving our local community.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/95 to-transparent md:hidden z-50">
          <WhatsAppButton fullWidth size="lg" className="shadow-2xl" />
        </div>
      )}
    </div>
  );
}
