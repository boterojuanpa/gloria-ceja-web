
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient overlay */}
      <div className="absolute inset-0 church-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl animate-pulse floating-animation"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/20 rounded-full filter blur-2xl animate-pulse floating-animation" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-church-gold/20 rounded-full filter blur-2xl animate-pulse floating-animation" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl floating-animation pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-lg floating-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-church-gold/30 rounded-full blur-lg floating-animation" style={{animationDelay: '3s'}}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            <span className="block animate-fade-in">El Rio de la</span>
            <span className="block text-gradient text-accent animate-fade-in" style={{animationDelay: '0.3s'}}>Gloria</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
            Una iglesia cristiana en La Ceja, Antioquia, donde encontrarás 
            <span className="text-accent font-semibold block mt-2"> fe, esperanza y amor</span>
          </p>

          <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="gold-gradient hover:shadow-2xl hover:scale-110 transition-all duration-300 text-black font-bold px-10 py-6 text-xl rounded-full hover-glow"
            >
              Visítanos
            </Button>
            
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="border-2 border-white/70 text-white hover:bg-white hover:text-church-blue hover:scale-110 transition-all duration-300 px-10 py-6 text-xl rounded-full glass-effect hover-glow"
            >
              Conoce más
            </Button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced verse overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-white/90 italic text-lg lg:text-xl leading-relaxed">
            "Ahora estarán abiertos mis ojos y atentos mis oídos a la oración en este lugar; 
            porque ahora he elegido y santificado esta casa, para que esté en ella mi nombre para siempre"
          </blockquote>
          <cite className="text-accent font-bold block mt-3 text-lg">- 2 Crónicas 7:15-16</cite>
        </div>
      </div>
    </section>
  );
};

export default Hero;
