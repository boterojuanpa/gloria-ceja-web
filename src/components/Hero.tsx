
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 church-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            El Rio de la
            <span className="block text-accent">Gloria</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Una iglesia cristiana en La Ceja, Antioquia, donde encontrarás 
            <span className="text-accent font-semibold"> fe, esperanza y amor</span>
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="gold-gradient hover:shadow-lg transition-all duration-300 text-black font-semibold px-8 py-4 text-lg"
            >
              Visítanos
            </Button>
            
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-church-blue transition-all duration-300 px-8 py-4 text-lg"
            >
              Conoce más
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Verse overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-white/80 italic text-lg">
            "Ahora estarán abiertos mis ojos y atentos mis oídos a la oración en este lugar; 
            porque ahora he elegido y santificado esta casa, para que esté en ella mi nombre para siempre"
          </blockquote>
          <cite className="text-accent font-semibold block mt-2">- 2 Crónicas 7:15-16</cite>
        </div>
      </div>
    </section>
  );
};

export default Hero;
