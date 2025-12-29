import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Business } from '@/lib/data';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

interface ContactSectionProps {
  business: Business;
}

export const ContactSection = ({ business }: ContactSectionProps) => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: `${business.address}, ${business.city}`,
      href: business.mapUrl,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: business.phone,
      href: `tel:${business.phone}`,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: business.email,
      href: `mailto:${business.email}`,
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: `${t.contact.hoursValue}: ${business.openingTime} - ${business.closingTime}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-secondary/30 py-24">
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
            {t.contact.title}
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
            {t.contact.subtitle}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="default" size="lg" asChild>
                <a href={`https://wa.me/${business.whatsapp?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={business.telegram} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-5 w-5" />
                  Telegram
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-border bg-muted"
          >
            <div className="aspect-square w-full lg:aspect-video">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-primary/50" />
                  <p className="text-muted-foreground">
                    {business.city}, {business.country}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {business.address}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
