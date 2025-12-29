import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Business } from '@/lib/data';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  business: Business;
}

export const Header = ({ business }: HeaderProps) => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/80 px-6 py-3 shadow-lg backdrop-blur-md">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              {business.name}
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex"
            >
              {t.nav.book}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
