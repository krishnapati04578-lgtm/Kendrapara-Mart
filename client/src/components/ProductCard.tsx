import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  imageUrl: string;
  delay?: number;
}

export function ProductCard({ title, imageUrl, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted shadow-sm hover:shadow-md transition-all cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
      
      {/* HTML Comment for Image: Dynamic or Static based on props */}
      {/* Image displayed: {title} */}
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-white font-bold text-lg md:text-xl font-display">{title}</h3>
      </div>
    </motion.div>
  );
}
