
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Meetings = () => {
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

  const meetings = [
    {
      title: "Reunión Principal",
      schedule: "Domingos 9AM y 12PM",
      description: "Predicaciones fundamentadas en la palabra de Dios, oración, alabanza, adoración, que en unidad nos fortalecen como cuerpo de Cristo que somos, para enfrentar los retos cada día.",
      image: "Imagen domingo",
      color: "from-church-blue to-blue-600",
      icon: "⛪"
    },
    {
      title: "Noches de Adoración",
      schedule: "Miércoles 7PM - 9PM",
      description: "Son tiempos donde a través de la adoración disponemos nuestro corazón para reconocer la grandeza del Señor y recibir mediante la predicación de la palabra la instrucción para caminar como verdaderos discípulos.",
      image: "Imagen miércoles",
      color: "from-purple-500 to-purple-700",
      icon: "🙏"
    },
    {
      title: "Más Fuertes",
      schedule: "Viernes 7PM - 9PM",
      description: "Somos un grupo de amigos enamorados de Dios, con muchos desafíos por delante, que buscamos ser fortalecidos en Jesús.",
      image: "Imagen jóvenes",
      color: "from-blue-500 to-cyan-600",
      icon: "💪"
    },
    {
      title: "RG Kids Comedor",
      schedule: "Sábados 9AM",
      description: "Cada sábado compartimos sonrisas, abrazos, canciones, danza, alegría, alimento espiritual y físico con los niños que anhelan conocer a Jesús.",
      image: "Imagen comedor",
      color: "from-yellow-500 to-orange-500",
      icon: "👶"
    },
    {
      title: "Ayuno y Oración",
      schedule: "Miércoles 9AM",
      description: "Cada miércoles nos reunimos en oración, adoración y lectura de la palabra de Dios, buscando cada día ser fortalecidos en el Señor.",
      image: "Imagen ayuno",
      color: "from-green-500 to-emerald-600",
      icon: "🕊️"
    },
    {
      title: "Madres Orando",
      schedule: "Jueves 9AM - 11AM",
      description: "Te imaginas si todas juntas oramos por nuestros hijos, sus retos, desafíos, carácter y formación. Tenemos el privilegio de orar por ellos.",
      image: "Imagen madres",
      color: "from-pink-500 to-rose-600",
      icon: "👩‍👧‍👦"
    },
    {
      title: "Valientes",
      schedule: "Último viernes del mes 7PM",
      description: "Reunión para hombres mayores de 18 años que quieren ser fortalecidos por la Palabra de Dios.",
      image: "Imagen valientes",
      color: "from-gray-600 to-slate-700",
      icon: "🦁"
    },
    {
      title: "Unidos",
      schedule: "Primer sábado del mes 6PM",
      description: "Únete a otras parejas en un tiempo de gran bendición donde tendremos la oportunidad de recibir consejos prácticos basados en la palabra del Señor.",
      image: "Imagen matrimonios",
      color: "from-red-500 to-pink-600",
      icon: "💕"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="meetings" 
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-72 h-72 bg-church-gold/20 rounded-full filter blur-3xl floating-animation"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-church-blue/20 rounded-full filter blur-2xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-church-navy mb-8">
            Nuestras Reuniones
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-church-blue to-church-gold mx-auto mb-10 rounded-full"></div>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tenemos diferentes espacios de encuentro durante la semana 
            para crecer juntos en fe y comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {meetings.map((meeting, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover-scale hover:shadow-2xl transition-all duration-500 border-0 shadow-lg h-full group relative ${isVisible ? 'stagger-animation' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className={`bg-gradient-to-br ${meeting.color} text-white p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-3xl">
                    {meeting.icon}
                  </div>
                  <CardTitle className="text-xl font-serif font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                    {meeting.title}
                  </CardTitle>
                  <p className="text-white/95 font-semibold text-sm bg-black/20 rounded-full px-4 py-2 inline-block">
                    {meeting.schedule}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 flex-1 flex items-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-gray-700 text-sm leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors duration-300">
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
