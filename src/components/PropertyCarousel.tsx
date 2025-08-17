import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const propertyImages = [
  {
    src: "/lovable-uploads/728d680c-5d4f-4422-a6aa-8a2462021244.png",
    alt: "Pool area with ocean view and lounge chairs at Fantasy Búzios Guesthouse"
  },
  {
    src: "/lovable-uploads/f4d2a909-4c58-4208-b093-4e88940e5459.png", 
    alt: "Beautiful orchid flowers by the pool area"
  },
  {
    src: "/lovable-uploads/4725a85d-d51a-4d85-837a-306c3bc37e1e.png",
    alt: "Pool with integrated spa and jacuzzi area"
  },
  {
    src: "/lovable-uploads/480b4ad0-176d-4c86-9f0f-b583ffaa1c1f.png",
    alt: "Pool deck with waterfall feature and ocean view"
  },
  {
    src: "/lovable-uploads/40ed6819-56de-48b8-9445-9d3aab1da82d.png",
    alt: "Front exterior view of Fantasy Búzios Guesthouse"
  },
  {
    src: "/lovable-uploads/968e5736-ce7f-411e-aa60-dcf6f2a588a0.png",
    alt: "Delicious breakfast spread with fresh fruits and local delicacies"
  },
  {
    src: "/lovable-uploads/bbb66676-1b77-47c1-b08d-0f976339ff41.png",
    alt: "Breakfast table setup with coffee and tropical fruits"
  },
  {
    src: "/lovable-uploads/fed1f891-a05c-421b-abff-539a280b6643.png",
    alt: "Interior dining room with elegant furnishing"
  },
  {
    src: "/lovable-uploads/45066b25-f52e-47a8-aa3d-f9b3f7e5d2d5.png",
    alt: "Private garden seating area with tropical plants"
  },
  {
    src: "/lovable-uploads/1aa8b5b6-be3b-4b87-9e7a-890bba3957ef.png",
    alt: "Complete view of pool area and guesthouse architecture"
  }
];

export const PropertyCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollLeft = () => {
    const container = document.getElementById('thumbnail-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('thumbnail-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === propertyImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? propertyImages.length - 1 : prev - 1
    );
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full relative">
      {/* Navigation arrows for thumbnail scrolling */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
        onClick={scrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Thumbnail container */}
      <div 
        id="thumbnail-container"
        className="flex gap-3 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {propertyImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-primary/50 transition-all duration-200">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for large image view */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm">
          <div className="relative">
            {/* Modal navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Large image */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
              <img
                src={propertyImages[currentImageIndex].src}
                alt={propertyImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
              {currentImageIndex + 1} / {propertyImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};