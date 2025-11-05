import coworkingImage from "@/assets/coworking-lounge.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import bedroomImage from "@/assets/bedroom.jpg";

const VillaShowcase = () => {
  const galleryImages = [
    { src: coworkingImage, alt: "Modern co-working lounge with comfortable seating", title: "Co-working Lounge" },
    { src: kitchenImage, alt: "Bright shared kitchen with modern amenities", title: "Shared Kitchen" },
    { src: bedroomImage, alt: "Stylish furnished bedroom", title: "Private Room" },
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition-all duration-300"
            >
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
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-muted rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-foreground">
            Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Fully Furnished Rooms",
              "High-Speed Wi-Fi",
              "Co-working Lounge",
              "Shared Kitchen",
              "Fitness Area",
              "24×7 Power Backup",
              "24×7 Security",
              "Community Events"
            ].map((amenity, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaShowcase;
