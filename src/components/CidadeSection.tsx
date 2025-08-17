import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Car, Camera } from 'lucide-react';
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
        distance: '5 min de caminhada'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Praia selvagem para surfistas',
        distance: '10 min de carro'
      },
      praiaFerradura: {
        name: 'Praia da Ferradura',
        description: 'Águas calmas e cristalinas',
        distance: '8 min de carro'
      },
      centroHistorico: {
        name: 'Centro Histórico',
        description: 'Arquitetura colonial preservada',
        distance: '3 min de caminhada'
      }
    },
    exploreMore: 'Explorar Região'
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
        distance: '5 min walk'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Wild beach for surfers',
        distance: '10 min drive'
      },
      praiaFerradura: {
        name: 'Praia da Ferradura',
        description: 'Calm and crystal clear waters',
        distance: '8 min drive'
      },
      centroHistorico: {
        name: 'Historic Center',
        description: 'Preserved colonial architecture',
        distance: '3 min walk'
      }
    },
    exploreMore: 'Explore Region'
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
        distance: '5 min caminando'
      },
      praiaBrava: {
        name: 'Praia Brava',
        description: 'Playa salvaje para surfistas',
        distance: '10 min en coche'
      },
      praiaFerradura: {
        name: 'Praia da Ferradura',
        description: 'Aguas tranquilas y cristalinas',
        distance: '8 min en coche'
      },
      centroHistorico: {
        name: 'Centro Histórico',
        description: 'Arquitectura colonial preservada',
        distance: '3 min caminando'
      }
    },
    exploreMore: 'Explorar Región'
  }
};
interface CidadeSectionProps {
  currentLang: string;
}
export const CidadeSection = ({
  currentLang
}: CidadeSectionProps) => {
  const t = translations[currentLang as keyof typeof translations];
  const placeIcons = {
    ruasPedras: Camera,
    praiaBrava: MapPin,
    praiaFerradura: MapPin,
    centroHistorico: Clock
  };
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
                      <div className="flex items-center justify-center text-xs text-primary font-medium">
                        <Car className="w-3 h-3 mr-1" />
                        {place.distance}
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-villa" onClick={() => document.getElementById('contato')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              {t.exploreMore}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};