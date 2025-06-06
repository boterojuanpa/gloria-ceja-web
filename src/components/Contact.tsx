
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Dirección",
      details: "Calle 18 # 22 - 21, La Ceja, Antioquia",
      color: "bg-blue-500"
    },
    {
      icon: "📧",
      title: "Email",
      details: "rglaceja@gmail.com",
      color: "bg-green-500"
    },
    {
      icon: "📞",
      title: "Teléfono",
      details: ["(4) 568 2182", "305 342 6205"],
      color: "bg-purple-500"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/rg_laceja/",
      icon: "📷",
      color: "bg-pink-500"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Rg-La-Ceja/100001443147960",
      icon: "📘",
      color: "bg-blue-600"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/user/rglaceja",
      icon: "🎥",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 church-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos aquí para ti. No dudes en contactarnos o visitarnos. 
            ¡Serás bienvenido en nuestra familia!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="hover-scale transition-all duration-300 border-0 shadow-xl bg-white/95 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-church-navy mb-4">
                  {info.title}
                </h3>
                {Array.isArray(info.details) ? (
                  info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 font-medium">{info.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Maps */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="bg-gray-200 h-64 lg:h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 font-semibold mb-2">Mapa de Google</p>
                  <p className="text-gray-500 text-sm">El Rio de la Gloria - La Ceja</p>
                  <p className="text-gray-500 text-sm">Calle 18 # 22 - 21, La Ceja, Antioquia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* YouTube Channel */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-center text-church-navy mb-6">
                Nuestro Canal de YouTube
              </h3>
              <div className="bg-gray-200 h-64 lg:h-80 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎥</span>
                  </div>
                  <p className="text-gray-600 font-semibold">Canal de YouTube</p>
                  <p className="text-gray-500 text-sm">RG La Ceja</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-8">
            Síguenos en Redes Sociales
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className={`${social.color} hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full text-2xl shadow-lg`}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
