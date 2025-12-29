import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Service, getServicesByCategory } from '@/lib/data';
import { ServiceCard } from './ServiceCard';
import { Scissors, Hand, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  services: Service[];
}

const categoryIcons: Record<string, typeof Scissors> = {
  'Стрижки': Scissors,
  'Ногтевой сервис': Hand,
  'Массаж': Sparkles,
};

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  const { t } = useLanguage();
  const servicesByCategory = getServicesByCategory(services);

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {t.services.title}
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            {t.services.subtitle}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Categories */}
        {Object.entries(servicesByCategory).map(([category, categoryServices], categoryIndex) => {
          const IconComponent = categoryIcons[category] || Sparkles;
          return (
            <div key={category} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {category}
                </h3>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
