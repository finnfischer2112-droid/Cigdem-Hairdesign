import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Luxury Hair Salon Interior"
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4 block"
        >
          Premium Damen & Herrenfriseur
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="Hairdesign Cigdem"
            className="w-auto mx-auto"
            style={{ maxHeight: "220px" }}
          />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          Erleben Sie exklusive Haarkunst in einem Ambiente, das Entspannung und Stil perfekt vereint.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="tel:06128489848"
            className="group relative inline-flex items-center gap-3 bg-primary px-8 py-4 text-white font-medium uppercase tracking-widest overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <Phone size={20} className="relative z-10" />
            <span className="relative z-10">Jetzt Termin vereinbaren</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
