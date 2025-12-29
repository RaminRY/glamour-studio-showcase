export type Language = 'ru' | 'az' | 'en';

export const translations = {
  ru: {
    nav: {
      services: 'Услуги',
      contact: 'Контакты',
      book: 'Записаться',
    },
    hero: {
      subtitle: 'Добро пожаловать в',
      cta: 'Записаться сейчас',
      viewServices: 'Наши услуги',
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Профессиональный уход для вашей красоты',
      duration: 'мин',
      book: 'Записаться',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      hours: 'Часы работы',
      hoursValue: 'Пн-Вс',
    },
    footer: {
      rights: 'Все права защищены',
      followUs: 'Мы в социальных сетях',
    },
  },
  az: {
    nav: {
      services: 'Xidmətlər',
      contact: 'Əlaqə',
      book: 'Qeydiyyat',
    },
    hero: {
      subtitle: 'Xoş gəlmisiniz',
      cta: 'İndi qeydiyyatdan keç',
      viewServices: 'Xidmətlərimiz',
    },
    services: {
      title: 'Xidmətlərimiz',
      subtitle: 'Gözəlliyiniz üçün peşəkar qayğı',
      duration: 'dəq',
      book: 'Qeydiyyat',
    },
    contact: {
      title: 'Əlaqə',
      subtitle: 'Bizimlə əlaqə saxlayın',
      address: 'Ünvan',
      phone: 'Telefon',
      email: 'Email',
      hours: 'İş saatları',
      hoursValue: 'B.e-B',
    },
    footer: {
      rights: 'Bütün hüquqlar qorunur',
      followUs: 'Bizi izləyin',
    },
  },
  en: {
    nav: {
      services: 'Services',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      subtitle: 'Welcome to',
      cta: 'Book Appointment',
      viewServices: 'Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional care for your beauty',
      duration: 'min',
      book: 'Book',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      hoursValue: 'Mon-Sun',
    },
    footer: {
      rights: 'All rights reserved',
      followUs: 'Follow us',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
