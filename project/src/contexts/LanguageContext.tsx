import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.headline': 'Transform Your HR Operations with AI-Powered Automation',
    'hero.subheadline': 'Streamline attendance tracking, leave management, and recruitment with intelligent automation designed for modern businesses',
    'hero.startTrial': 'Start Free Trial',
    'hero.scheduleDemo': 'Schedule Demo',
    
    // Features
    'features.title': 'Comprehensive AI HR Solutions',
    'features.attendance.title': 'AI Telegram Attendance Bot',
    'features.attendance.desc': 'Location-based attendance tracking, leave management, automated reporting, and salary calculations - all controlled through an intelligent Telegram bot',
    'features.attendance.benefit': 'Up to 90% reduction in HR administrative work',
    'features.recruitment.title': 'AI Recruitment Assistant',
    'features.recruitment.desc': 'Automated CV screening, candidate scoring, interview scheduling, and live assessment planning powered by advanced AI',
    'features.recruitment.benefit': '3x faster hiring process with better candidate matching',
    'features.automation.title': 'Custom HR Automations',
    'features.automation.desc': 'Tailored AI-powered solutions for your specific HR needs - from employee training to contract automation',
    'features.automation.benefit': 'Fully customizable to your business requirements',
    
    // Why Choose Us
    'why.trusted': 'Trusted by 500+ Companies Worldwide',
    'why.support': '24/7 AI-Powered Support',
    'why.security': 'Enterprise-Grade Security',
    'why.integration': 'Easy Integration & Setup',
    'why.multilingual': 'Multilingual Support',
    
    // Pricing
    'pricing.title': 'Choose Your Plan',
    'pricing.monthly': 'Monthly',
    'pricing.yearly': 'Yearly',
    'pricing.starter.title': 'Starter Plan',
    'pricing.starter.cta': 'Start Starter Plan',
    'pricing.professional.title': 'Professional Plan',
    'pricing.professional.cta': 'Choose Professional',
    'pricing.professional.popular': 'Most Popular',
    'pricing.enterprise.title': 'Enterprise Plan',
    'pricing.enterprise.cta': 'Get Enterprise',
    'pricing.custom.title': 'Custom Solutions',
    'pricing.custom.cta': 'Contact Sales',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // Contact
    'contact.title': 'Get Started Today',
    'contact.subtitle': 'Ready to transform your HR operations? Contact us for a personalized demo',
    'contact.name': 'Full Name',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.whatsapp': 'WhatsApp Support',
    'contact.email.label': 'Email Us',
    'contact.address': 'Istanbul, Turkey',
    
    // Footer
    'footer.description': 'Transform your HR operations with AI-powered automation designed for modern businesses.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 UpOne. All rights reserved.',
  },
  tr: {
    // Header
    'nav.home': 'Ana Sayfa',
    'nav.features': 'Özellikler',
    'nav.pricing': 'Fiyatlandırma',
    'nav.contact': 'İletişim',
    'nav.getStarted': 'Başlayın',
    
    // Hero
    'hero.headline': 'İK Operasyonlarınızı Yapay Zeka Otomasyonuyla Dönüştürün',
    'hero.subheadline': 'Modern işletmeler için tasarlanmış akıllı otomasyon ile devamsızlık takibi, izin yönetimi ve işe alım süreçlerini kolaylaştırın',
    'hero.startTrial': 'Ücretsiz Deneme',
    'hero.scheduleDemo': 'Demo Planlayın',
    
    // Features
    'features.title': 'Kapsamlı AI İK Çözümleri',
    'features.attendance.title': 'AI Telegram Devam Botu',
    'features.attendance.desc': 'Konum tabanlı devamsızlık takibi, izin yönetimi, otomatik raporlama ve maaş hesaplamaları - hepsi akıllı Telegram botu ile kontrol edilir',
    'features.attendance.benefit': 'İK idari işlerinde %90\'a kadar azalma',
    'features.recruitment.title': 'AI İşe Alım Asistanı',
    'features.recruitment.desc': 'Gelişmiş AI ile desteklenen otomatik CV tarama, aday puanlama, mülakat planlama ve canlı değerlendirme planlaması',
    'features.recruitment.benefit': 'Daha iyi aday eşleştirmesi ile 3 kat daha hızlı işe alım süreci',
    'features.automation.title': 'Özel İK Otomasyonları',
    'features.automation.desc': 'Çalışan eğitiminden sözleşme otomasyonuna kadar özel İK ihtiyaçlarınız için yapay zeka destekli özel çözümler',
    'features.automation.benefit': 'İş gereksinimlerinize tamamen özelleştirilebilir',
    
    // Why Choose Us
    'why.trusted': 'Dünya Çapında 500+ Şirket Tarafından Güvenilir',
    'why.support': '7/24 AI Destekli Destek',
    'why.security': 'Kurumsal Düzey Güvenlik',
    'why.integration': 'Kolay Entegrasyon ve Kurulum',
    'why.multilingual': 'Çok Dilli Destek',
    
    // Pricing
    'pricing.title': 'Planınızı Seçin',
    'pricing.monthly': 'Aylık',
    'pricing.yearly': 'Yıllık',
    'pricing.starter.title': 'Başlangıç Planı',
    'pricing.starter.cta': 'Başlangıç Planını Seç',
    'pricing.professional.title': 'Profesyonel Plan',
    'pricing.professional.cta': 'Profesyonel\'i Seç',
    'pricing.professional.popular': 'En Popüler',
    'pricing.enterprise.title': 'Kurumsal Plan',
    'pricing.enterprise.cta': 'Kurumsal\'ı Al',
    'pricing.custom.title': 'Özel Çözümler',
    'pricing.custom.cta': 'Satış Ekibiyle İletişim',
    
    // Testimonials
    'testimonials.title': 'Müşterilerimizin Görüşleri',
    
    // Contact
    'contact.title': 'Bugün Başlayın',
    'contact.subtitle': 'İK operasyonlarınızı dönüştürmeye hazır mısınız? Kişiselleştirilmiş demo için bizimle iletişime geçin',
    'contact.name': 'Ad Soyad',
    'contact.company': 'Şirket',
    'contact.email': 'E-posta',
    'contact.phone': 'Telefon',
    'contact.message': 'Mesaj',
    'contact.send': 'Mesaj Gönder',
    'contact.whatsapp': 'WhatsApp Desteği',
    'contact.email.label': 'E-posta Gönderin',
    'contact.address': 'İstanbul, Türkiye',
    
    // Footer
    'footer.description': 'Modern işletmeler için tasarlanmış yapay zeka destekli otomasyon ile İK operasyonlarınızı dönüştürün.',
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.contact': 'İletişim Bilgileri',
    'footer.followUs': 'Bizi Takip Edin',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
    'footer.copyright': '© 2025 UpOne. Tüm hakları saklıdır.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};