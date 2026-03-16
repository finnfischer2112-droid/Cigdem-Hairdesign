import { motion } from "framer-motion";

const images = [
  { src: `${import.meta.env.BASE_URL}images/gallery-1.jpeg`, position: "center 37%", scale: 1 },
  { src: `${import.meta.env.BASE_URL}images/gallery-2.jpeg`, position: "center 35%", scale: 1.3 },
  { src: `${import.meta.env.BASE_URL}images/gallery-3.jpeg`, position: "center", scale: 1 },
  { src: `${import.meta.env.BASE_URL}images/gallery-4.jpeg`, position: "center 40%", scale: 1.5 },
  { src: `${import.meta.env.BASE_URL}images/gallery-5.jpeg`, position: "center 43%", scale: 1 },
  { src: `${import.meta.env.BASE_URL}images/gallery-6.jpeg`, position: "center 40%", scale: 1 },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Inspiration</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-wider">
              Galerie
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-md md:text-right">
            Einblicke in unsere tägliche Arbeit. Jeder Schnitt, jede Farbe ein Meisterwerk für sich.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden group cursor-pointer"
              style={{ paddingBottom: "100%" }}
            >
              <img 
                src={img.src} 
                alt={`Portfolio Style ${idx + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ objectPosition: img.position, transform: `scale(${img.scale})` }}
                onMouseEnter={e => (e.currentTarget.style.transform = `scale(${img.scale * 1.08})`)}
                onMouseLeave={e => (e.currentTarget.style.transform = `scale(${img.scale})`)}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border-[0px] group-hover:border-[8px] border-accent/40 transition-all duration-300 z-10" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <span className="text-white font-display uppercase tracking-widest text-sm font-semibold">Style {idx + 1}</span>
                <div className="h-[2px] w-8 bg-accent mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
