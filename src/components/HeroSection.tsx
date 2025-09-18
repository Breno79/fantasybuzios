import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const translations = {
  pt: {
    welcome: 'Bem-vindos ao',
    subtitle: 'Uma experiência única em Armação dos Búzios',
    description: 'Desfrute do paraíso tropical em nossa pousada guesthouse, onde o luxo encontra a natureza em perfeita harmonia.',
    discover: 'Descobrir Mais',
    book: 'Reservar Agora'
  },
  en: {
    welcome: 'Welcome to',
    subtitle: 'A unique experience in Armação dos Búzios',
    description: 'Enjoy tropical paradise at our guesthouse, where luxury meets nature in perfect harmony.',
    discover: 'Discover More',
    book: 'Book Now'
  },
  es: {
    welcome: 'Bienvenidos a',
    subtitle: 'Una experiencia única en Armação dos Búzios',
    description: 'Disfruta del paraíso tropical en nuestra posada guesthouse, donde el lujo se encuentra con la naturaleza en perfecta armonía.',
    discover: 'Descubrir Más',
    book: 'Reservar Ahora'
  }
};
interface HeroSectionProps {
  currentLang: string;
}
export const HeroSection = ({
  currentLang
}: HeroSectionProps) => {
  const t = translations[currentLang as keyof typeof translations];
  const scrollToNext = () => {
    const element = document.getElementById('pousada');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen md:min-h-screen h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/5f399316-9d9d-4888-a0a2-f9743c0e8212.png" alt="Vista aérea da Fantasy Búzios Guesthouse com piscina privativa e jardim tropical em Armação dos Búzios" className="w-full h-full object-cover md:object-cover object-center" loading="eager" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
          {t.welcome}<br />
          <span className="text-secondary">Fantasy Búzios</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-primary-foreground/90 drop-shadow-lg">
          {t.subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 drop-shadow-lg max-w-2xl mx-auto">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3">
            {t.discover}
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
            {t.book}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={scrollToNext} className="text-primary-foreground/70 hover:text-secondary transition-elegant animate-bounce" aria-label="Rolar para próxima seção">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>;
};