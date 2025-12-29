import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Service } from '@/lib/data';
import { Button } from './ui/button';
import { Clock, Tag } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { t } = useLanguage();
  const hasDiscount = service.discount !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <Tag className="h-3 w-3" />
            -{Math.round(((service.price - service.discount!) / service.price) * 100)}%
          </span>
        </div>
      )}

      {/* Service Info */}
      <div className="mb-4">
        <h3 className="mb-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Duration */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>{service.duration} {t.services.duration}</span>
      </div>

      {/* Price */}
      <div className="mb-4 flex items-baseline gap-2">
        {hasDiscount ? (
          <>
            <span className="font-display text-2xl font-bold text-primary">
              ${service.discount}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              ${service.price}
            </span>
          </>
        ) : (
          <span className="font-display text-2xl font-bold text-foreground">
            ${service.price}
          </span>
        )}
      </div>

      {/* Book Button */}
      <Button variant="default" size="sm" className="w-full">
        {t.services.book}
      </Button>

      {/* Decorative Element */}
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
    </motion.div>
  );
};
