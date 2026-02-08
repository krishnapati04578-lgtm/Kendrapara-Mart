import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-card p-6 rounded-2xl shadow-md border border-border/50 flex flex-col items-center text-center h-full hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
    >
      <div className="p-4 rounded-full bg-secondary text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
