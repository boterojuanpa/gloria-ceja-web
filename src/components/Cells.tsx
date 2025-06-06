
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Cells = () => {
  const cellSchedules = [
    {
      time: "Martes 3:00PM",
      locations: ["Carrera 22 # 4C - 20 Riachuelos 2"]
    },
    {
      time: "Martes 7:00PM",
      locations: [
        "Calle 6D # 17 - 46 La Aldea",
        "Carrera 17 # 08 - 21 Villa Laura",
        "Calle 4BB - 21B -32 Riachuelos",
        "Calle 18 # 22 - 21 Centro - Iglesia RG La Ceja",
        "Calle 26A # 22 - 142 Montesol",
        "Carrera 16B - 15A - 30 El Hipódromo"
      ]
    },
    {
      time: "Viernes 4:00PM",
      locations: ["Casa # 48 Parcelación El Yarumo"]
    }
  ];

  return (
    <section id="cells" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold text-church-navy mb-6">
            Células
          </h2>
          <div className="w-24 h-1 bg-church-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Nuestras células se reúnen en diferentes hogares de La Ceja 
            para compartir la palabra de Dios en un ambiente familiar.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="church-gradient text-white text-center p-8">
            <CardTitle className="text-2xl font-serif">
              Horarios y Ubicaciones de Células
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {cellSchedules.map((schedule, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-church-gold rounded-full"></div>
                      <span className="text-lg font-semibold text-church-navy">
                        {schedule.time}
                      </span>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 py-4">
                    <div className="space-y-3">
                      {schedule.locations.map((location, locationIndex) => (
                        <div 
                          key={locationIndex}
                          className="flex items-start space-x-3 p-3 bg-church-light-blue/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-church-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{location}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-gradient-to-r from-church-blue/10 to-church-gold/10 rounded-lg">
              <p className="text-center text-gray-700 italic">
                "Nuestro ministerio busca ganar almas para el reino de Dios a través de la 
                evangelización en los hogares de La Ceja; capacitando y formando equipos 
                para ser enviados a nuevos lugares."
              </p>
              <p className="text-center text-church-blue font-semibold mt-2">
                - Ministerio Esdras
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Cells;
