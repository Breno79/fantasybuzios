import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Wifi, AirVent, Tv, Camera } from 'lucide-react';
import { RoomGalleryModal } from './RoomGalleryModal';
const superiorImages = [
  {
    src: "/lovable-uploads/4dafe1a5-ef09-45b4-819e-41d408125de4.png",
    alt: "Superior room with elegant furniture and natural lighting"
  },
  {
    src: "/lovable-uploads/d2ebd7e8-940c-4cea-88f4-c15b1493bde4.png",
    alt: "Superior room with queen bed and private bathroom"
  },
  {
    src: "/lovable-uploads/da799b33-506c-444b-8dc0-8c461bd2b298.png",
    alt: "Superior room spacious layout with seating area"
  },
  {
    src: "/lovable-uploads/c73f7890-4b38-43b7-9131-e329bca72b7c.png",
    alt: "Superior room with panoramic windows and ocean view"
  },
  {
    src: "/lovable-uploads/a1b16f84-9e5c-4328-85c8-eb0affe4dc98.png",
    alt: "Superior room with decorative wall art and comfortable bedding"
  },
  {
    src: "/lovable-uploads/b7f33a07-c6a7-4974-bf19-10ead420489e.png",
    alt: "Superior room aerial view of pool and surroundings"
  },
  {
    src: "/lovable-uploads/85f459f5-fa24-4f4e-a8e1-1d8e80114488.png",
    alt: "Superior room details with blue marine-themed pillows"
  },
  {
    src: "/lovable-uploads/1f867102-86fd-4aef-a10d-06835dc43107.png",
    alt: "Superior room with ocean view and blue accents"
  },
  {
    src: "/lovable-uploads/79b8afea-a3b8-4211-a2fc-369b23db6116.png",
    alt: "Superior room walk-in closet with custom storage"
  }
];

const standardImages = [
  {
    src: "/lovable-uploads/51c0d0b1-ac2b-4677-8889-854ca166e91d.png",
    alt: "Standard room with twin beds and comfortable seating area"
  },
  {
    src: "/lovable-uploads/155b6ee7-a000-4ec7-aa9e-44ea7590617a.png",
    alt: "Standard room with queen bed and modern amenities"
  },
  {
    src: "/lovable-uploads/c5e358bb-739c-4872-a36b-39c0dceed158.png",
    alt: "Standard room with comfortable seating and natural lighting"
  },
  {
    src: "/lovable-uploads/fe32fb0a-bd8d-4ba4-ab2f-b30dc5321228.png",
    alt: "Standard room walk-in closet with custom storage"
  },
  {
    src: "/lovable-uploads/6face71b-46a6-4790-806c-2cc241db25bb.png",
    alt: "Standard room private bathroom with glass shower"
  },
  {
    src: "/lovable-uploads/56d47b3a-c7f0-48ab-8560-34b5b4693720.png",
    alt: "Standard room with elegant decor and comfortable bedding"
  },
  {
    src: "/lovable-uploads/3ede7746-854e-4e31-9759-b7031a961505.png",
    alt: "Standard room spacious layout with modern furnishings"
  },
  {
    src: "/lovable-uploads/07ef8961-8a40-4b4a-ba72-9c67e54c36d4.png",
    alt: "Standard room bathroom with modern fixtures and amenities"
  }
];

const translations = {
  pt: {
    title: 'Nossos Quartos',
    subtitle: 'Acomodações confortáveis e elegantes',
    viewDetails: 'Ver Detalhes',
    bookNow: 'Reservar',
    clickToSeePhotos: 'Clique para ver fotos',
    rooms: {
      superior: {
        name: 'SUPERIOR',
        description: 'Quarto espaçoso no andar superior com conforto extra',
        guests: '2-3 Hóspedes',
        amenities: ['2-3 Hóspedes', 'Cama Queen Size', 'Banheiro Privativo', 'Ar Condicionado', 'TV Smart', 'Wi-Fi', 'Andar Superior', 'Conforto Extra']
      },
      standard: {
        name: 'STANDARD',
        description: 'Quarto aconchegante no andar inferior com conforto padrão',
        guests: '2-3 Hóspedes',
        amenities: ['2-3 Hóspedes', 'Cama Queen Size', 'Banheiro Privativo', 'Ar Condicionado', 'TV Smart', 'Wi-Fi', 'Andar Inferior', 'Conforto Padrão']
      }
    }
  },
  en: {
    title: 'Our Rooms',
    subtitle: 'Comfortable and elegant accommodations',
    viewDetails: 'View Details',
    bookNow: 'Book Now',
    clickToSeePhotos: 'Click to see photos',
    rooms: {
      superior: {
        name: 'SUPERIOR',
        description: 'Spacious room on upper floor with extra comfort',
        guests: '2-3 Guests',
        amenities: ['2-3 Guests', 'Queen Size Bed', 'Private Bathroom', 'Air Conditioning', 'Smart TV', 'Wi-Fi', 'Upper Floor', 'Extra Comfort']
      },
      standard: {
        name: 'STANDARD',
        description: 'Cozy room on lower floor with standard comfort',
        guests: '2-3 Guests',
        amenities: ['2-3 Guests', 'Queen Size Bed', 'Private Bathroom', 'Air Conditioning', 'Smart TV', 'Wi-Fi', 'Lower Floor', 'Standard Comfort']
      }
    }
  },
  es: {
    title: 'Nuestras Habitaciones',
    subtitle: 'Alojamientos cómodos y elegantes',
    viewDetails: 'Ver Detalles',
    bookNow: 'Reservar',
    clickToSeePhotos: 'Haz clic para ver fotos',
    rooms: {
      superior: {
        name: 'SUPERIOR',
        description: 'Habitación espaciosa en planta superior con comodidad extra',
        guests: '2-3 Huéspedes',
        amenities: ['2-3 Huéspedes', 'Cama Queen Size', 'Baño Privado', 'Aire Acondicionado', 'TV Smart', 'Wi-Fi', 'Planta Superior', 'Comodidad Extra']
      },
      standard: {
        name: 'STANDARD',
        description: 'Habitación acogedora en planta inferior con comodidad estándar',
        guests: '2-3 Huéspedes',
        amenities: ['2-3 Huéspedes', 'Cama Queen Size', 'Baño Privado', 'Aire Acondicionado', 'TV Smart', 'Wi-Fi', 'Planta Inferior', 'Comodidad Estándar']
      }
    }
  }
};
interface QuartosSectionProps {
  currentLang: string;
}
export const QuartosSection = ({
  currentLang
}: QuartosSectionProps) => {
  const t = translations[currentLang as keyof typeof translations];
  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('hóspedes') || amenity.toLowerCase().includes('guests') || amenity.toLowerCase().includes('huéspedes')) return Users;
    if (amenity.toLowerCase().includes('bed') || amenity.toLowerCase().includes('cama')) return Bed;
    if (amenity.toLowerCase().includes('bath') || amenity.toLowerCase().includes('banheiro') || amenity.toLowerCase().includes('baño')) return Bath;
    if (amenity.toLowerCase().includes('wi-fi')) return Wifi;
    if (amenity.toLowerCase().includes('ar') || amenity.toLowerCase().includes('air') || amenity.toLowerCase().includes('aire')) return AirVent;
    if (amenity.toLowerCase().includes('tv')) return Tv;
    return Wifi;
  };

  const getRoomImages = (roomType: string) => {
    return roomType === 'superior' ? superiorImages : standardImages;
  };
  return <section id="quartos" className="py-20 bg-[#3e5650]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white md:text-5xl">
              {t.title}
            </h2>
            <p className="text-xl mb-8 text-white">
              {t.subtitle}
            </p>
            <div className="w-24 h-1 mx-auto rounded-full bg-[#fdb92e]"></div>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {Object.entries(t.rooms).map(([key, room]) => {
              const roomImages = getRoomImages(key);
              return (
                <Card key={key} className="shadow-villa hover:shadow-golden transition-elegant border-0 overflow-hidden group">
                  <CardHeader className="bg-white p-6">
                    <div className="mb-2">
                      <CardTitle className="text-2xl font-bold text-black">{room.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {room.description}
                    </p>
                  </CardHeader>
                  
                  {/* Featured Image with Gallery Modal */}
                  <div className="relative h-48 overflow-hidden group cursor-pointer">
                    <RoomGalleryModal
                      images={roomImages}
                      trigger={
                        <div className="w-full h-full relative">
                          <img
                            src={roomImages[0]?.src}
                            alt={roomImages[0]?.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 text-gray-800">
                              <Camera className="w-4 h-4" />
                              <span className="text-sm font-medium">{t.clickToSeePhotos}</span>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  
                   <CardContent className="p-8">
                     <div className="mb-8">
                       <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                         {room.amenities.map((amenity, index) => {
                           const IconComponent = getAmenityIcon(amenity);
                           return (
                             <div key={index} className="flex items-center text-sm text-muted-foreground">
                               <IconComponent className="w-4 h-4 mr-2 text-primary" />
                               {amenity}
                             </div>
                           );
                         })}
                       </div>
                     </div>
                    
                     <div className="space-y-3">
                       <RoomGalleryModal
                         images={roomImages}
                         trigger={
                           <Button 
                             variant="outline" 
                             className="w-full group-hover:border-secondary group-hover:text-secondary transition-elegant"
                           >
                             {t.viewDetails}
                           </Button>
                         }
                       />
                       <Button 
                         className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-golden" 
                         onClick={() => document.getElementById('contato')?.scrollIntoView({
                           behavior: 'smooth'
                         })}
                       >
                         {t.bookNow}
                       </Button>
                     </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
};