import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Business } from '@/lib/data';
import { Instagram, Facebook, Sparkles } from 'lucide-react';

interface FooterProps {
  business: Business;
}

export const Footer = ({ business }: FooterProps) => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: business.socialInstagram, label: 'Instagram' },
    { icon: Facebook, href: business.socialFacebook, label: 'Facebook' },
  ];

  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              {business.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">{t.footer.followUs}</span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {business.name}. {t.footer.rights}.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
