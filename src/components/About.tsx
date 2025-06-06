
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const beliefs = [
    "Que La Biblia es la palabra de Dios, inspirada, infalible, inerrante y autoritativa",
    "En un solo Dios, existente en tres personas, Padre, Hijo y Espíritu Santo",
    "En el ministerio actual del Espíritu Santo, que al morar en el cristiano lo capacita para vivir una vida en victoria",
    "En la unidad espiritual de los creyentes en el señor Jesucristo, y que todos los verdaderos creyentes son miembros del cuerpo de Cristo: La Iglesia",
    "Creemos que el ministerio de evangelismo y discipulado es una responsabilidad de todos los seguidores de Jesucristo",
    "En la deidad del señor Jesucristo, en su nacimiento virginal, en su vida sin pecado, en sus milagros",
    "En la muerte del señor Jesucristo expiatoria mediante el derramamiento de sangre en la cruz, en su resurrección, en su ascensión a la diestra del padre, y en su segunda venida en Poder y Gloria"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-gradient-to-br from-white via-church-light-blue/30 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-church-blue/10 rounded-full filter blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-church-gold/10 rounded-full filter blur-2xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-church-navy mb-8">
            ¿Quiénes Somos?
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-church-blue to-church-gold mx-auto mb-10 rounded-full"></div>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Somos una iglesia cristiana comprometida con la palabra de Dios y 
            dedicada a servir a nuestra comunidad en La Ceja, Antioquia.
          </p>
        </div>

        <div className="mb-20">
          <h3 className={`text-4xl lg:text-5xl font-serif font-bold text-center text-church-navy mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
            Somos una iglesia que cree en:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <Card 
                key={index} 
                className={`h-full hover-scale hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden group ${isVisible ? 'stagger-animation' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-church-blue/5 to-church-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 h-full flex items-center relative z-10">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-church-blue to-church-gold rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <p className="text-gray-700 leading-relaxed pl-6 group-hover:text-church-navy transition-colors duration-300">
                      {belief}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Pastor's Image Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-4 bg-gradient-to-br from-church-gold/20 to-church-blue/20 rounded-3xl hover-scale">
            <div className="w-96 h-72 bg-gradient-to-br from-church-blue/30 via-white/50 to-church-navy/30 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-church-blue/20 to-church-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-church-navy font-bold text-xl relative z-10">Imagen de Pastores</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600 italic text-lg">Nuestros pastores y líderes espirituales</p>
        </div>
      </div>
    </section>
  );
};

export default About;
