import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
const translations = {
  pt: {
    description: 'Sua experiência única em Armação dos Búzios começa aqui. Conforto, elegância e hospitalidade brasileira em perfeita harmonia.',
    quickLinks: 'Links Rápidos',
    contact: 'Contato',
    social: 'Redes Sociais',
    address: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
    phone: '+55 22 999393691',
    email: 'contato@fantasybuzios.com.br',
    copyright: '© 2024 Fantasy Búzios Guesthouse. Todos os direitos reservados.',
    links: {
      home: 'Home',
      pousada: 'Pousada',
      quartos: 'Quartos',
      cidade: 'Cidade',
      contato: 'Contato'
    }
  },
  en: {
    description: 'Your unique experience in Armação dos Búzios starts here. Comfort, elegance and Brazilian hospitality in perfect harmony.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    social: 'Social Media',
    address: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
    phone: '+55 22 999393691',
    email: 'contact@fantasybuzios.com',
    copyright: '© 2024 Fantasy Búzios Guesthouse. All rights reserved.',
    links: {
      home: 'Home',
      pousada: 'Inn',
      quartos: 'Rooms',
      cidade: 'City',
      contato: 'Contact'
    }
  },
  es: {
    description: 'Tu experiencia única en Armação dos Búzios comienza aquí. Comodidad, elegancia y hospitalidad brasileña en perfecta armonía.',
    quickLinks: 'Enlaces Rápidos',
    contact: 'Contacto',
    social: 'Redes Sociales',
    address: 'Rua Quinze, 22 - Brava, Armação dos Búzios - RJ, 28950-000',
    phone: '+55 22 999393691',
    email: 'contacto@fantasybuzios.com',
    copyright: '© 2024 Fantasy Búzios Guesthouse. Todos los derechos reservados.',
    links: {
      home: 'Inicio',
      pousada: 'Posada',
      quartos: 'Habitaciones',
      cidade: 'Ciudad',
      contato: 'Contacto'
    }
  }
};
interface FooterProps {
  currentLang: string;
}
export const Footer = ({
  currentLang
}: FooterProps) => {
  const t = translations[currentLang as keyof typeof translations];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-[#3e5650] text-primary-foreground">
      <div className="container mx-auto px-4 py-12 bg-[#3e5650]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/3d0de395-82ac-4f80-a743-c071bbd6370e.png" alt="Fantasy Búzios Guesthouse" className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">{t.quickLinks}</h3>
            <div className="space-y-2">
              {Object.entries(t.links).map(([key, label]) => <button key={key} onClick={() => scrollToSection(key)} className="block text-primary-foreground/80 hover:text-secondary transition-elegant">
                  {label}
                </button>)}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">{t.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">{t.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <button onClick={() => window.open('https://wa.me/5522999393691', '_blank')} className="w-10 h-10 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-elegant shadow-golden">
                <MessageCircle className="w-5 h-5 text-secondary-foreground" />
              </button>
              <button onClick={() => window.open('https://instagram.com/fantasybuzios', '_blank')} className="w-10 h-10 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-elegant shadow-golden">
                <Instagram className="w-5 h-5 text-secondary-foreground" />
              </button>
            </div>
            
            <p className="text-primary-foreground/60 text-sm text-center">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};