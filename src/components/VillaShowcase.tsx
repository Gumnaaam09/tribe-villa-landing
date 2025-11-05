import coworkingImage from "@/assets/coworking-lounge.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import villaExterior from "@/assets/villa-exterior.jpg";
import livingRoom from "@/assets/living-room.jpg";
import fitnessArea from "@/assets/fitness-area.jpg";
import wifiImage from "@/assets/wifi.jpg";
import securityImage from "@/assets/security.jpg";
import communityEvent from "@/assets/community-event.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const VillaShowcase = () => {
  const galleryImages = [
    { src: villaExterior, alt: "Modern villa exterior with contemporary architecture", title: "Villa Exterior" },
    { src: livingRoom, alt: "Spacious living room for community gatherings", title: "Living Room" },
    { src: coworkingImage, alt: "Modern co-working lounge with comfortable seating", title: "Co-working Lounge" },
    { src: kitchenImage, alt: "Bright shared kitchen with modern amenities", title: "Shared Kitchen" },
    { src: bedroomImage, alt: "Stylish furnished bedroom", title: "Private Room" },
  ];

  const amenities = [
    { name: "Fully Furnished Rooms", image: bedroomImage, alt: "Comfortable furnished rooms" },
    { name: "High-Speed Wi-Fi", image: wifiImage, alt: "Fast reliable internet connectivity" },
    { name: "Co-working Lounge", image: coworkingImage, alt: "Professional co-working space" },
    { name: "Shared Kitchen", image: kitchenImage, alt: "Modern shared kitchen facilities" },
    { name: "Fitness Area", image: fitnessArea, alt: "Well-equipped fitness center" },
    { name: "24×7 Security", image: securityImage, alt: "Round-the-clock security system" },
    { name: "Community Events", image: communityEvent, alt: "Regular networking events" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Villa Details
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            SideHustle Villa – [Villa Name]
          </p>
          <p className="text-lg text-muted-foreground">
            Location: [Insert Location]
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
              <div 
                key={index} 
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaShowcase;
