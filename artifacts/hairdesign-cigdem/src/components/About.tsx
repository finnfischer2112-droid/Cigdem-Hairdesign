import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

const teamMembers = [
  {
    name: "Cigdem",
    role: "Inhaberin & Stylistin",
    description: "Mit jahrelanger Erfahrung und einem Gespür für zeitlose Eleganz kreiert Cigdem individuelle Looks, die Ihre Persönlichkeit perfekt unterstreichen.",
    image: `${BASE}images/team-1.jpeg`,
  },
  {
    name: "Cigdem",
    role: "Coloristin & Stylistin",
    description: "Cigdem ist unsere Spezialistin für Farbe und Balayage. Mit kreativem Talent und Präzision zaubert sie natürlich strahlende Ergebnisse.",
    image: `${BASE}images/team-2.jpeg`,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

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
                alt="Hairdesign Cigdem Salon"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
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
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-semibold">Unser Team</span>
            <div className="h-[1px] w-12 bg-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
            Lernen Sie uns kennen
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {/* Team Member 1 — Cigdem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0 }}
            className="group relative"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-5">
              <div className="absolute inset-0 border border-white/10 group-hover:border-accent/60 transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={teamMembers[0].image}
                alt="Cigdem"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-1">Cigdem</h4>
            <p className="text-accent text-sm uppercase tracking-wider font-medium mb-3">{teamMembers[0].role}</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{teamMembers[0].description}</p>
          </motion.div>

          {/* Team Member 2 — Daryna */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-5">
              <div className="absolute inset-0 border border-white/10 group-hover:border-accent/60 transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={teamMembers[1].image}
                alt="Daryna"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-1">Daryna</h4>
            <p className="text-accent text-sm uppercase tracking-wider font-medium mb-3">{teamMembers[1].role}</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">Daryna ist unsere Spezialistin für Farbe und Balayage. Mit kreativem Talent und Präzision zaubert sie natürlich strahlende Ergebnisse.</p>
          </motion.div>

          {/* Team Member 3 — Onur */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-5">
              <div className="absolute inset-0 border border-white/10 group-hover:border-accent/60 transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={`${BASE}images/team-onur.png`}
                alt="Onur"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-1">Onur</h4>
            <p className="text-accent text-sm uppercase tracking-wider font-medium mb-3">Meister & Herrenspezialist</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">Onur, Sohn von Cigdem, ist ausgebildeter Meister mit jahrelanger Erfahrung im Bereich Herrenschnitte. Mit Präzision und Leidenschaft bringt er jeden Herrenlook auf ein neues Level.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
