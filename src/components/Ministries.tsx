
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Ministries = () => {
  const ministries = [
    {
      name: "Más Fuertes",
      subtitle: "Jóvenes y adolescentes",
      description: "Levantar una generación de jóvenes con propósito, cuyos principios sean fundamentados en la palabra de Dios, que en ellos se forme el carácter de cristo. Creemos por una generación esforzada y valiente que creen en el poder trasformador de Jesús.",
      verse: "Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas - Isaías 40:31",
      image: "Imagen de jóvenes",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Onésimo",
      subtitle: "Ministerio carcelario",
      description: "La visión del proyecto onésimo es compartir la palabra de Dios y salvar la vida de los hombres de la carcel a través de un encuentro personal con Jesucristo y que sus familias e hijos sean personas aptas para la sociedad a través del amor de Dios.",
      image: "Imagen ministerio carcel",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Esdras",
      subtitle: "Células",
      description: "Nuestro ministerio busca ganar almas para el reino de Dios a través de la evangelización en los hogares de La Ceja; capacitando y formando equipos para ser enviados a nuevos lugares, convirtiéndolos así en multiplicadores que cumplan la Gran Comisión (Mateo 28:20).",
      image: "Imagen células",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "RG Kids",
      subtitle: "Niños",
      description: "Queremos ver a los niños enamorados de Dios, creciendo con fundamentos firmes en la palabra de Dios la cual transmitimos de una manera divertida para que aún cuando fueren grandes no se aparten de ella.",
      image: "Imagen niños",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Judá",
      subtitle: "Comunicaciones",
      description: "Nuestra visión es convertirnos en la mejor área de servicio para nuestra iglesia llevando la palabra de Dios a través de medios de comunicación que nos ayuden a llegar a aquellos donde la palabra de Dios no llega fácilmente.",
      image: "Imagen comunicaciones",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Unidos",
      subtitle: "Parejas",
      description: "Ministerio dedicado a fortalecer los matrimonios y parejas a través de la palabra de Dios, brindando herramientas para construir relaciones sólidas basadas en principios bíblicos.",
      image: "Imagen parejas",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-church-navy mb-6">
            Nuestros Ministerios
          </h2>
          <div className="w-24 h-1 bg-church-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cada ministerio tiene un propósito específico en el Reino de Dios, 
            sirviendo a diferentes edades y necesidades de nuestra comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-scale hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className={`lg:w-1/2 bg-gradient-to-br ${ministry.color} p-8 flex items-center justify-center text-white`}>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-sm font-medium">{ministry.image}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{ministry.name}</h3>
                    <p className="text-white/90 font-medium">{ministry.subtitle}</p>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                  {ministry.verse && (
                    <blockquote className="text-church-blue italic text-sm border-l-4 border-church-gold pl-4">
                      {ministry.verse}
                    </blockquote>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
