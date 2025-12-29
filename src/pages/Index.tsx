import { LanguageProvider } from '@/contexts/LanguageContext';
import { businessData, servicesData } from '@/lib/data';
import { Language } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Use preferred language from business data, fallback to 'ru'
  const defaultLanguage = (businessData.preferredLanguage as Language) || 'ru';
  const activeServices = servicesData.filter(s => s.isActive);

  return (
    <LanguageProvider defaultLanguage={defaultLanguage}>
      <div className="min-h-screen bg-background">
        <Header business={businessData} />
        <main>
          <HeroSection business={businessData} />
          <ServicesSection services={activeServices} />
          <ContactSection business={businessData} />
        </main>
        <Footer business={businessData} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
