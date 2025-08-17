import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Camera, Utensils, Waves, Sun, Eye, PersonStanding } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
const translations = {
  pt: {
    title: 'Descubra Búzios',
    subtitle: 'O charme da Riviera Brasileira',
    description: 'Armação dos Búzios é um dos destinos mais encantadores do Brasil, conhecido por suas praias paradisíacas, vida noturna vibrante e charme cosmopolita. Localizada a apenas duas horas do Rio de Janeiro, nossa pousada oferece acesso privilegiado a tudo que esta joia da costa brasileira tem a oferecer.',
    attractions: 'Principais Atrações',
    places: {
      ruasPedras: {
        name: 'Rua das Pedras',
        description: 'Centro gastronômico e cultural',
        carDistance: '05 mins de carro',
        walkDistance: '14 mins a pé'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Praia selvagem para surfistas',
        carDistance: '02 mins de carro',
        walkDistance: '12 mins a pé'
      },
      praiaJoaoFernandes: {
        name: 'Praia João Fernandes',
        description: 'Águas cristalinas e tranquilas',
        carDistance: '04 mins de carro',
        walkDistance: '24 mins a pé'
      },
      orlaBrigitte: {
        name: 'Orla Brigitte Bardot',
        description: 'Calçadão com vista deslumbrante',
        carDistance: '05 mins de carro',
        walkDistance: '15 mins a pé'
      }
    },
    exploreMore: 'Conheça Búzios'
  },
  en: {
    title: 'Discover Búzios',
    subtitle: 'The charm of the Brazilian Riviera',
    description: 'Armação dos Búzios is one of Brazil\'s most enchanting destinations, known for its paradisiacal beaches, vibrant nightlife and cosmopolitan charm. Located just two hours from Rio de Janeiro, our guesthouse offers privileged access to everything this Brazilian coast jewel has to offer.',
    attractions: 'Main Attractions',
    places: {
      ruasPedras: {
        name: 'Rua das Pedras',
        description: 'Gastronomic and cultural center',
        carDistance: '05 mins by car',
        walkDistance: '14 mins walk'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Wild beach for surfers',
        carDistance: '02 mins by car',
        walkDistance: '12 mins walk'
      },
      praiaJoaoFernandes: {
        name: 'Praia João Fernandes',
        description: 'Crystal clear and calm waters',
        carDistance: '04 mins by car',
        walkDistance: '24 mins walk'
      },
      orlaBrigitte: {
        name: 'Orla Brigitte Bardot',
        description: 'Boardwalk with stunning views',
        carDistance: '05 mins by car',
        walkDistance: '15 mins walk'
      }
    },
    exploreMore: 'Discover Búzios'
  },
  es: {
    title: 'Descubre Búzios',
    subtitle: 'El encanto de la Riviera Brasileña',
    description: 'Armação dos Búzios es uno de los destinos más encantadores de Brasil, conocido por sus playas paradisíacas, vida nocturna vibrante y encanto cosmopolita. Ubicada a solo dos horas de Río de Janeiro, nuestra posada ofrece acceso privilegiado a todo lo que esta joya de la costa brasileña tiene para ofrecer.',
    attractions: 'Principales Atracciones',
    places: {
      ruasPedras: {
        name: 'Rua das Pedras',
        description: 'Centro gastronómico y cultural',
        carDistance: '05 mins en coche',
        walkDistance: '14 mins caminando'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Playa salvaje para surfistas',
        carDistance: '02 mins en coche',
        walkDistance: '12 mins caminando'
      },
      praiaJoaoFernandes: {
        name: 'Praia João Fernandes',
        description: 'Aguas cristalinas y tranquilas',
        carDistance: '04 mins en coche',
        walkDistance: '24 mins caminando'
      },
      orlaBrigitte: {
        name: 'Orla Brigitte Bardot',
        description: 'Paseo marítimo con vistas impresionantes',
        carDistance: '05 mins en coche',
        walkDistance: '15 mins caminando'
      }
    },
    exploreMore: 'Conoce Búzios'
  }
};
interface CidadeSectionProps {
  currentLang: string;
}
export const CidadeSection = ({
  currentLang
}: CidadeSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[currentLang as keyof typeof translations];
  
  const placeIcons = {
    ruasPedras: Utensils,
    praiaBrava: Waves,
    praiaJoaoFernandes: Sun,
    orlaBrigitte: Eye
  };

  const buziosImages = [
    '/lovable-uploads/25945a5f-0ff4-4938-9be0-59329adc706b.png',
    '/lovable-uploads/58c3eb13-7b6a-4dc2-b24c-48f0bfb3daad.png',
    '/lovable-uploads/9aabd046-ac4a-4040-8e4a-a497cda751f9.png',
    '/lovable-uploads/9f78dd96-b5bf-48a9-a540-2a6c4cf149ea.png',
    '/lovable-uploads/3e28c2f9-45b1-4f96-b28b-e9e2190fdd9a.png',
    '/lovable-uploads/55d43c9c-3cf1-47af-8fd1-c68d0c68d9e4.png',
    '/lovable-uploads/94a7fb58-e78d-4be8-b811-d30fdda9f0a8.png',
    '/lovable-uploads/3fab9d61-0a36-4915-93ae-fa867503e08e.png'
  ];
  return <section id="cidade" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-8">
              {t.subtitle}
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div className="text-center mb-16">
            <p className="text-lg text-accent-foreground leading-relaxed max-w-4xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Attractions */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">
              {t.attractions}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(t.places).map(([key, place]) => {
              const IconComponent = placeIcons[key as keyof typeof placeIcons];
              return <Card key={key} className="shadow-villa border-0 hover:shadow-golden transition-elegant group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-elegant">
                        <IconComponent className="w-8 h-8 text-secondary-foreground" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {place.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {place.description}
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center text-xs text-primary font-medium">
                          <Car className="w-3 h-3 mr-1" />
                          {place.carDistance}
                        </div>
                        <div className="flex items-center justify-center text-xs text-muted-foreground font-medium">
                          <PersonStanding className="w-3 h-3 mr-1" />
                          {place.walkDistance}
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-2xl font-semibold text-primary hover:text-primary/80 transition-elegant cursor-pointer border-none bg-transparent"
            >
              {t.exploreMore}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Búzios Images */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full p-0 bg-background/95 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
            {buziosImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Búzios - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};