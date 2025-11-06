import { useState } from "react";
import coworkingImage from "@/assets/common-area.avif";
import kitchenImage from "@/assets/kitchen.avif";
import bedroomImage from "@/assets/bedroom.avif";
import livingRoom from "@/assets/living-room.avif";
import swimmingPool from "@/assets/swimming-pool.avif";
import rooftopImage from "@/assets/rooftop.avif";
import bathroomImage from "@/assets/bathroom.avif";
import villa1 from "@/assets/villa-1.avif";
import villa2 from "@/assets/villa-2.avif";
import villa3 from "@/assets/villa-3.avif";
import villa4 from "@/assets/villa-4.avif";
import villa5 from "@/assets/villa-5.avif";
import wifiImage from "@/assets/wifi.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const VillaShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);
  
  const galleryImages = [
    { src: bedroomImage, alt: "Stylish furnished bedroom", title: "Bedroom" },
    { src: kitchenImage, alt: "Bright shared kitchen with modern amenities", title: "Kitchen" },
    { src: livingRoom, alt: "Spacious living room for community gatherings", title: "Living Room" },
    { src: coworkingImage, alt: "Modern common area with comfortable seating", title: "Common Area" },
    { src: swimmingPool, alt: "Refreshing swimming pool", title: "Swimming Pool" },
    { src: rooftopImage, alt: "Beautiful rooftop space", title: "Rooftop" },
    { src: villa1, alt: "Villa interior view", title: "Villa View" },
    { src: villa2, alt: "Villa space", title: "Villa Space" },
    { src: villa3, alt: "Villa area", title: "Villa Area" },
    { src: villa4, alt: "Villa room", title: "Villa Room" },
    { src: villa5, alt: "Villa facility", title: "Villa Facility" },
  ];

  const amenities = [
    { name: "High-Speed Wi-Fi", image: wifiImage, alt: "Fast reliable internet connectivity" },
    { name: "Common Area", image: coworkingImage, alt: "Spacious common area for relaxation" },
    { name: "Shared Kitchen", image: kitchenImage, alt: "Modern shared kitchen facilities" },
    { name: "Swimming Pool", image: swimmingPool, alt: "Refreshing swimming pool" },
    { name: "Rooftop Access", image: rooftopImage, alt: "Beautiful rooftop space" },
    { name: "Washing Machine / Laundry Services", image: bathroomImage, alt: "Laundry facilities available" },
    { name: "Lift Access", image: bedroomImage, alt: "Convenient lift access" },
    { name: "Air Conditioning", image: livingRoom, alt: "Air conditioned spaces" },
    { name: "Dedicated Workspace", image: coworkingImage, alt: "Workspace for productivity" },
    { name: "Free Driveway Parking on Premises", image: rooftopImage, alt: "Free parking available" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Villa Details
          </h2>
          <p className="text-lg text-muted-foreground">
            Location: Koramangala, Bangalore
          </p>
        </div>

        {/* Villa Photo Carousel */}
        <div className="mb-16 px-4 sm:px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-background font-semibold text-lg p-4">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Amenities with Images */}
        <div className="bg-muted rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">
            Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={amenity.image} 
                        alt={amenity.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{amenity.name}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="relative">
                    <img 
                      src={amenity.image} 
                      alt={amenity.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-center text-lg font-semibold mt-4 text-foreground">
                      {amenity.name}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaShowcase;
