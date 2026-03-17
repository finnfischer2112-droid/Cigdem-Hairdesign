import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-display font-bold uppercase tracking-widest text-white mb-10 border-b border-white/10 pb-6">
          Impressum
        </h1>

        <section className="space-y-6 text-gray-400 font-light leading-relaxed">
          <div>
            <h2 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Cidem UG<br />
              Inhaberin: Cidem Atlan<br />
              Kleiststraße 8<br />
              65232 Taunusstein
            </p>
          </div>

          <div>
            <h2 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Kontakt</h2>
            <p>
              Tel.: 06128 / 489 848
            </p>
          </div>

          <div>
            <h2 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Umsatzsteuer-ID</h2>
            <p>
              USt.-Id: 040 230 342 91
            </p>
          </div>

          <div>
            <h2 className="text-white font-medium uppercase tracking-wider text-sm mb-2">Verantwortlich für den Inhalt</h2>
            <p>
              Cidem Atlan<br />
              Kleiststraße 8<br />
              65232 Taunusstein
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="text-accent hover:text-white transition-colors text-sm uppercase tracking-widest">
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
