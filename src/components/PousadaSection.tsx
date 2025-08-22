import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Car, Coffee, Waves, TreePine, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cropTopBlackArea } from '@/utils/imageProcessing';
import { PropertyCarousel } from '@/components/PropertyCarousel';
const translations = {
  pt: {
    title: 'Nossa Pousada',
    subtitle: 'Conforto e elegância em Búzios',
    description: 'A Fantasy Búzios Guesthouse oferece uma experiência única de hospitalidade, combinando o charme rústico brasileiro com amenidades modernas. Nossa Pousada se encontra em localização privilegiada, proporcionando privacidade e acesso fácil às praias mais belas de Búzios.',
    features: 'Nossas Comodidades',
    amenities: {
      wifi: 'Wi-Fi Gratuito',
      parking: 'Rua Tranquila',
      breakfast: 'Café da Manhã',
      pool: 'Piscina & Deck',
      garden: 'Jardim Tropical',
      sun: 'Vista para o Mar'
    }
  },
  en: {
    title: 'Our Inn',
    subtitle: 'Comfort and elegance in Búzios',
    description: 'Fantasy Búzios Guesthouse offers a unique hospitality experience, combining Brazilian rustic charm with modern amenities. Our guesthouse property is strategically located to provide privacy and easy access to the most beautiful beaches in Búzios.',
    features: 'Our Amenities',
    amenities: {
      wifi: 'Free Wi-Fi',
      parking: 'Parking',
      breakfast: 'Breakfast',
      pool: 'Private Pool',
      garden: 'Tropical Garden',
      sun: 'Sun Terrace'
    }
  },
  es: {
    title: 'Nuestra Posada',
    subtitle: 'Comodidad y elegancia en Búzios',
    description: 'Fantasy Búzios Guesthouse ofrece una experiencia única de hospitalidad, combinando el encanto rústico brasileño con comodidades modernas. Nuestra propiedad guesthouse está estratégicamente ubicada para brindar privacidad y fácil acceso a las playas más hermosas de Búzios.',
    features: 'Nuestras Comodidades',
    amenities: {
      wifi: 'Wi-Fi Gratuito',
      parking: 'Estacionamiento',
      breakfast: 'Desayuno',
      pool: 'Piscina Privada',
      garden: 'Jardín Tropical',
      sun: 'Terraza Solarium'
    }
  }
};
interface PousadaSectionProps {
  currentLang: string;
}
export const PousadaSection = ({
  currentLang
}: PousadaSectionProps) => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string>('/lovable-uploads/514419b4-c378-43ed-abd7-3b6da2331e97.png');

  useEffect(() => {
    const processImage = async () => {
      try {
        const croppedImage = await cropTopBlackArea('/lovable-uploads/514419b4-c378-43ed-abd7-3b6da2331e97.png');
        setProcessedImageSrc(croppedImage);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Keep original image if processing fails
      }
    };

    processImage();
  }, []);
  const t = translations[currentLang as keyof typeof translations];
  const amenityIcons = {
    wifi: Wifi,
    parking: Car,
    breakfast: Coffee,
    pool: Waves,
    garden: TreePine,
    sun: Sun
  };
  return <section id="pousada" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-bold text-black md:text-5xl">
              {t.title}
            </h2>
            <p className="text-xl mb-8 text-inherit">
              {t.subtitle}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                {t.description}
              </p>
              
              <h3 className="text-2xl font-semibold mb-6 text-black">
                {t.features}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(t.amenities).map(([key, value]) => {
                const IconComponent = amenityIcons[key as keyof typeof amenityIcons];
                return <div key={key} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>;
              })}
              </div>
            </div>

            <div className="relative">
              <img 
                src={processedImageSrc} 
                alt="Fantasy Búzios Guesthouse - Pool area with ocean view and lounge chairs"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Property Image Carousel */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-black">
              {currentLang === 'pt' ? 'Galeria de Fotos' : currentLang === 'en' ? 'Photo Gallery' : 'Galería de Fotos'}
            </h3>
            <PropertyCarousel />
          </div>
        </div>
      </div>
    </section>;
};