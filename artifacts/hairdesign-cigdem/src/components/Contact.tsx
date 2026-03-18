import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] border-t border-white/5">
      {/* Background texture/gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">Termin vereinbaren</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 uppercase tracking-wider">
              Besuchen Sie uns
            </h2>
            <p className="text-gray-300 font-light mb-12 text-lg">Wir freuen uns darauf, Sie in unserem Salon begrüßen zu dürfen. Vereinbaren Sie telefonisch einen Termin, oder kommen Sie einfach vorbei.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Telefon</h4>
                  <a href="tel:06128489848" className="text-gray-400 hover:text-white text-lg transition-colors">06128 489848</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Adresse</h4>
                  <p className="text-gray-400 text-lg">Kleiststraße 8<br/>65232 Taunusstein</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Öffnungszeiten</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li className="flex justify-between w-48"><span>Montag:</span> <span>09:00 – 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Dienstag:</span> <span>09:00 – 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Mittwoch:</span> <span>09:00 – 18:00</span></li>
                    <li className="flex justify-between w-56"><span>Donnerstag:</span> <span>09:00 – 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Freitag:</span> <span>09:00 – 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Samstag:</span> <span>09:00 – 16:00</span></li>
                    <li className="flex justify-between w-48 text-primary"><span>Sonntag:</span> <span>Geschlossen</span></li>
                  </ul>
                </div>
              </div>
              
            </div>

          </motion.div>

          {/* Map/CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-card border border-white/10 p-8 md:p-12 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <h3 className="text-2xl font-display text-white mb-4 uppercase tracking-widest">Zeit für eine<br/>Veränderung?</h3>
              <p className="text-gray-400 font-light mb-8">
                Rufen Sie uns jetzt an und sichern Sie sich Ihren Wunschtermin. Wir beraten Sie gerne!
              </p>
              
              <a 
                href="tel:06128489848"
                className="inline-flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-white py-4 px-8 font-medium uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,16,46,0.4)]"
              >
                <Phone size={20} />
                <span>Jetzt anrufen</span>
              </a>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 italic">Terminabsagen bitte mindestens 24 Stunden im Voraus telefonisch mitteilen.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
