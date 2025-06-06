
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-church-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-serif font-bold text-accent mb-2">
              El Rio de la Gloria
            </h3>
            <p className="text-white/80">
              Iglesia Cristiana - La Ceja, Antioquia
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} El Rio de la Gloria. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm mt-1">
              "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos" - Mateo 18:20
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
