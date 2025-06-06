
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-church-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-church-navy mb-6">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-church-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos una iglesia cristiana comprometida con la palabra de Dios y 
            dedicada a servir a nuestra comunidad en La Ceja, Antioquia.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-church-navy mb-12">
            Somos una iglesia que cree en:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <Card 
                key={index} 
                className="h-full hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 h-full flex items-center">
                  <div className="relative">
                    <div className="absolute -left-2 top-0 w-1 h-full bg-church-gold rounded-full"></div>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {belief}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pastor's Image Section */}
        <div className="text-center">
          <div className="inline-block p-2 bg-church-gold/20 rounded-2xl">
            <div className="w-80 h-60 bg-gradient-to-br from-church-blue/20 to-church-navy/20 rounded-xl flex items-center justify-center">
              <p className="text-church-navy font-semibold">Imagen de Pastores</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 italic">Nuestros pastores y líderes espirituales</p>
        </div>
      </div>
    </section>
  );
};

export default About;
