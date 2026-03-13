import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/about-img.png`} 
                alt="Hairdesign Cigdem Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Elegant framing */}
            <div className="absolute -inset-4 border border-white/10 z-0 pointer-events-none hidden md:block" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 blur-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent uppercase tracking-widest text-sm font-semibold">Unsere Philosophie</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Ihre Schönheit in <br />
              <span className="italic font-light text-gray-400">besten Händen.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Willkommen bei <strong className="text-white font-medium">Hairdesign Cigdem</strong> – Ihrem Friseur für anspruchsvolle Kunden. Wir verbinden Leidenschaft, Kreativität und höchste Qualität, um Ihnen den perfekten Look zu verleihen.
              </p>
              <p>
                Unser erfahrenes Team steht für zeitlose Eleganz und modernen Style. Egal ob klassischer Herrenschnitt, aufwendige Balayage oder stilvolle Hochsteckfrisur – wir nehmen uns die Zeit für eine individuelle Beratung, die Ihre Persönlichkeit unterstreicht.
              </p>
              <p>
                Lehnen Sie sich zurück, genießen Sie unser erstklassiges Ambiente und lassen Sie sich von uns verwöhnen.
              </p>
            </div>

            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_placeholder.svg/1200px-Signature_placeholder.svg.png" 
                alt="Signature" 
                className="h-12 opacity-40 invert filter"
              />
              <p className="mt-2 text-sm text-gray-500 tracking-wider uppercase">Inhaberin</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
