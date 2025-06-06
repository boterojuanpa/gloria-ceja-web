
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Meetings = () => {
  const meetings = [
    {
      title: "Reunión Principal",
      schedule: "Domingos 9AM y 12PM",
      description: "Predicaciones fundamentadas en la palabra de Dios, oración, alabanza, adoración, que en unidad nos fortalecen como cuerpo de Cristo que somos, para enfrentar los retos cada día.",
      image: "Imagen domingo",
      color: "bg-church-blue"
    },
    {
      title: "Noches de Adoración",
      schedule: "Miércoles 7PM - 9PM",
      description: "Son tiempos donde a través de la adoración disponemos nuestro corazón para reconocer la grandeza del Señor y recibir mediante la predicación de la palabra la instrucción para caminar como verdaderos discípulos.",
      image: "Imagen miércoles",
      color: "bg-purple-600"
    },
    {
      title: "Más Fuertes",
      schedule: "Viernes 7PM - 9PM",
      description: "Somos un grupo de amigos enamorados de Dios, con muchos desafíos por delante, que buscamos ser fortalecidos en Jesús.",
      image: "Imagen jóvenes",
      color: "bg-blue-600"
    },
    {
      title: "RG Kids Comedor",
      schedule: "Sábados 9AM",
      description: "Cada sábado compartimos sonrisas, abrazos, canciones, danza, alegría, alimento espiritual y físico con los niños que anhelan conocer a Jesús.",
      image: "Imagen comedor",
      color: "bg-yellow-500"
    },
    {
      title: "Ayuno y Oración",
      schedule: "Miércoles 9AM",
      description: "Cada miércoles nos reunimos en oración, adoración y lectura de la palabra de Dios, buscando cada día ser fortalecidos en el Señor.",
      image: "Imagen ayuno",
      color: "bg-green-600"
    },
    {
      title: "Madres Orando",
      schedule: "Jueves 9AM - 11AM",
      description: "Te imaginas si todas juntas oramos por nuestros hijos, sus retos, desafíos, carácter y formación. Tenemos el privilegio de orar por ellos.",
      image: "Imagen madres",
      color: "bg-pink-600"
    },
    {
      title: "Valientes",
      schedule: "Último viernes del mes 7PM",
      description: "Reunión para hombres mayores de 18 años que quieren ser fortalecidos por la Palabra de Dios.",
      image: "Imagen valientes",
      color: "bg-gray-700"
    },
    {
      title: "Unidos",
      schedule: "Primer sábado del mes 6PM",
      description: "Únete a otras parejas en un tiempo de gran bendición donde tendremos la oportunidad de recibir consejos prácticos basados en la palabra del Señor.",
      image: "Imagen matrimonios",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="meetings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-church-navy mb-6">
            Nuestras Reuniones
          </h2>
          <div className="w-24 h-1 bg-church-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tenemos diferentes espacios de encuentro durante la semana 
            para crecer juntos en fe y comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {meetings.map((meeting, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className={`${meeting.color} text-white p-6`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xs font-medium">{meeting.image}</span>
                  </div>
                  <CardTitle className="text-lg font-serif font-bold mb-2">
                    {meeting.title}
                  </CardTitle>
                  <p className="text-white/90 font-semibold text-sm">
                    {meeting.schedule}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 flex-1 flex items-center">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {meeting.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meetings;
