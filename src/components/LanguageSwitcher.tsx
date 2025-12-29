import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import { motion } from 'framer-motion';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary/80 p-1 backdrop-blur-sm">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className="relative px-3 py-1.5 text-sm font-medium transition-colors"
        >
          {language === lang.code && (
            <motion.div
              layoutId="activeLang"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-10 ${
              language === lang.code ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );
};
