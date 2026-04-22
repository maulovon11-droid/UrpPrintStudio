import { Palette, Download, Printer, Zap } from 'lucide-react';
import { Card } from './ui/card';

const benefits = [
  {
    icon: Palette,
    title: 'Personalización total',
    description:
      'Diseña productos únicos con tu nombre, carrera, foto y elementos personalizados.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Download,
    title: 'Descarga digital',
    description:
      'Obtén tu diseño en alta calidad para usarlo como fondo de pantalla, stickers digitales y más.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Printer,
    title: 'Impresión bajo demanda',
    description:
      'Ordena la impresión de tu diseño en productos físicos con envío a domicilio.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Fácil y rápido',
    description:
      'Crea diseños profesionales en minutos sin necesidad de conocimientos de diseño.',
    color: 'from-orange-500 to-orange-600',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir URP PrintStudio?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La manera más fácil de crear souvenirs universitarios personalizados
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Únete a la comunidad URP PrintStudio
          </h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Miles de estudiantes ya han creado sus souvenirs personalizados. 
            Crea recuerdos únicos de tu vida universitaria.
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold text-[#95d5b2] mb-4">
              Empieza gratis y transforma tus ideas en souvenirs memorables
            </p>
            <p className="text-gray-200">
              Sin límites de creatividad. Sin experiencia en diseño requerida. 
              Solo tú y tu imaginación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}