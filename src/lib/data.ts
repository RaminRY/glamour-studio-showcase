export interface Service {
  id: string;
  userId: string;
  businessId: string;
  name: string;
  description: string;
  price: number;
  discount: number | null;
  type: string;
  sessionsCount: number;
  duration: number;
  isActive: boolean;
  imageUrl: string;
  serviceCategory: string;
}

export interface Business {
  id: string;
  ownerId: string;
  name: string;
  slug: string;
  type: string;
  description: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
  logoAltText: string;
  email: string;
  phone: string;
  websiteUrl: string;
  country: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
  showMap: boolean;
  openingTime: string;
  closingTime: string;
  coverImageUrl: string;
  socialFacebook: string;
  socialInstagram: string;
  socialTikTok: string;
  telegram: string;
  whatsapp: string;
  preferredLanguage: string;
  isActive: boolean;
}

export const businessData: Business = {
  id: "b1",
  ownerId: "u1",
  name: "Beauty Studio Glamour",
  slug: "beauty-studio-glamour",
  type: "salon",
  description: "Студия красоты с современным подходом к уходу за волосами и кожей.",
  tagline: "Красота начинается здесь",
  primaryColor: "#FF6F61",
  secondaryColor: "#FFD700",
  logoUrl: "https://example.com/logo.png",
  logoAltText: "Логотип Beauty Studio Glamour",
  email: "info@glamour.com",
  phone: "+994501234567",
  websiteUrl: "https://glamour.com",
  country: "Azerbaijan",
  city: "Baku",
  address: "ул. Низами 123",
  latitude: 40.3777,
  longitude: 49.8920,
  mapUrl: "https://maps.example.com/glamour",
  showMap: true,
  openingTime: "09:00",
  closingTime: "19:00",
  coverImageUrl: "https://example.com/studio.jpg",
  socialFacebook: "https://facebook.com/glamourstudio",
  socialInstagram: "https://instagram.com/glamourstudio",
  socialTikTok: "https://tiktok.com/@glamourstudio",
  telegram: "https://t.me/glamourstudio",
  whatsapp: "+994501234567",
  preferredLanguage: "ru",
  isActive: true,
};

export const servicesData: Service[] = [
  {
    id: "s1",
    userId: "u1",
    businessId: "b1",
    name: "Стрижка женская",
    description: "Современная женская стрижка с укладкой.",
    price: 40.00,
    discount: 35.00,
    type: "SINGLE",
    sessionsCount: 1,
    duration: 60,
    isActive: true,
    imageUrl: "https://example.com/service1.jpg",
    serviceCategory: "Стрижки",
  },
  {
    id: "s2",
    userId: "u1",
    businessId: "b1",
    name: "Маникюр",
    description: "Классический маникюр с покрытием гель-лаком.",
    price: 25.00,
    discount: null,
    type: "SINGLE",
    sessionsCount: 1,
    duration: 45,
    isActive: true,
    imageUrl: "https://example.com/service2.jpg",
    serviceCategory: "Ногтевой сервис",
  },
  {
    id: "s3",
    userId: "u1",
    businessId: "b1",
    name: "Массаж спины",
    description: "Расслабляющий массаж спины с маслами.",
    price: 50.00,
    discount: 45.00,
    type: "SINGLE",
    sessionsCount: 1,
    duration: 60,
    isActive: true,
    imageUrl: "https://example.com/service3.jpg",
    serviceCategory: "Массаж",
  },
  {
    id: "s4",
    userId: "u1",
    businessId: "b1",
    name: "Окрашивание волос",
    description: "Модное окрашивание с использованием профессиональных красок.",
    price: 70.00,
    discount: null,
    type: "SINGLE",
    sessionsCount: 1,
    duration: 120,
    isActive: true,
    imageUrl: "https://example.com/service4.jpg",
    serviceCategory: "Стрижки",
  },
];

// Group services by category
export const getServicesByCategory = (services: Service[]) => {
  return services.reduce((acc, service) => {
    const category = service.serviceCategory;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);
};
