import { motion } from "framer-motion";

const services = {
  damen: [
    { name: "Damen Schnitt", price: "ab €35" },
    { name: "Föhnen & Styling", price: "ab €25" },
    { name: "Coloration", price: "ab €60" },
    { name: "Highlights / Balayage", price: "ab €80" },
    { name: "Haarkur & Pflege", price: "ab €20" },
    { name: "Hochsteckfrisur", price: "ab €50" },
  ],
  herren: [
    { name: "Herren Schnitt", price: "ab €20" },
    { name: "Bart Trimmen", price: "ab €12" },
    { name: "Schnitt + Bart", price: "ab €28" },
    { name: "Hot Towel Rasur", price: "ab €25" },
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#050505] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Preise & Leistungen
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-wider"
          >
            Unser Angebot
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-primary mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Damen Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card p-8 md:p-12 border border-white/5 relative group hover:border-accent/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 py-2 border border-accent/50 text-accent font-display uppercase tracking-widest font-bold">
              Damen
            </div>
            
            <ul className="mt-6 space-y-6">
              {services.damen.map((service, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-end justify-between group/item">
                  <div className="flex-1 border-b border-white/10 border-dotted pb-2 mr-4 group-hover/item:border-accent/50 transition-colors">
                    <span className="text-gray-200 font-medium text-lg tracking-wide">{service.name}</span>
                  </div>
                  <span className="text-accent font-display font-semibold pb-1">{service.price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Herren Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card p-8 md:p-12 border border-white/5 relative group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-6 py-2 border border-primary/50 text-primary font-display uppercase tracking-widest font-bold">
              Herren
            </div>
            
            <ul className="mt-6 space-y-6">
              {services.herren.map((service, idx) => (
                <motion.li key={idx} variants={itemVariants} className="flex items-end justify-between group/item">
                  <div className="flex-1 border-b border-white/10 border-dotted pb-2 mr-4 group-hover/item:border-primary/50 transition-colors">
                    <span className="text-gray-200 font-medium text-lg tracking-wide">{service.name}</span>
                  </div>
                  <span className="text-primary font-display font-semibold pb-1">{service.price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-light">
            * Preise variieren je nach Haarlänge und Materialaufwand. Für eine genaue Preisauskunft beraten wir Sie gerne vor Ort.
          </p>
        </div>

      </div>
    </section>
  );
}
