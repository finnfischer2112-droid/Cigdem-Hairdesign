import { Link } from "wouter";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="Hairdesign Cigdem"
          className="h-12 w-auto object-contain"
        />
        
        <p className="text-gray-500 text-sm font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Hairdesign Cigdem. Alle Rechte vorbehalten.
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/cigdemhairdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/p/Hairdesign-Cigdem-100063478363451/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <Link href="/impressum" className="text-sm text-gray-500 hover:text-white transition-colors">Impressum</Link>
          <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
