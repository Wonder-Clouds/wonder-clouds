import React from 'react';
import { CheckCircle, Code, Users, Shield, Zap, ArrowRight, Layers, Database, Cloud } from 'lucide-react';

const SoftwareDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Code className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Desarrollo de Software</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Software a Medida para
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Tu Negocio Único
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transformamos tus ideas en soluciones tecnológicas robustas y escalables que se adaptan
              perfectamente a la forma en que tu organización trabaja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Comenzar Proyecto
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Ver Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Nuestro Enfoque de Desarrollo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un proceso estructurado que garantiza que cada línea de código agregue valor real a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-default mb-2">Análisis Profundo</h3>
                    <p className="text-gray-600">
                      Comenzamos con un análisis exhaustivo de tus procesos y objetivos para
                      entender exactamente qué necesitas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl">
                    <Layers className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-default mb-2">Arquitectura Sólida</h3>
                    <p className="text-gray-600">
                      Diseñamos historias de usuario, levantamos requerimientos y creamos
                      diagramas de arquitectura robustos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-default mb-2">Desarrollo Ágil</h3>
                    <p className="text-gray-600">
                      Mantenemos comunicación constante y entregas iterativas para
                      asegurar que el producto evolucione según tus expectativas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Tecnologías que Dominamos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <Database className="w-8 h-8 mb-2" />
                    <div className="font-semibold">NestJS</div>
                    <div className="text-sm opacity-90">Arquitecturas modernas</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <Shield className="w-8 h-8 mb-2" />
                    <div className="font-semibold">Django</div>
                    <div className="text-sm opacity-90">Soluciones seguras</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <Cloud className="w-8 h-8 mb-2" />
                    <div className="font-semibold">Linux</div>
                    <div className="text-sm opacity-90">Entornos estables</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <Zap className="w-8 h-8 mb-2" />
                    <div className="font-semibold">Podman</div>
                    <div className="text-sm opacity-90">Despliegue eficiente</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los beneficios que obtienes al trabajar con Wonder Clouds van más allá del código
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Soluciones a Medida",
                description: "Software hecho específicamente para tu negocio, sin limitaciones de herramientas genéricas.",
                color: "text-green-600"
              },
              {
                icon: Zap,
                title: "Escalabilidad",
                description: "Desarrollo que crece junto a tu empresa, adaptándose a nuevas necesidades.",
                color: "text-yellow-600"
              },
              {
                icon: Shield,
                title: "Tecnologías Probadas",
                description: "Utilizamos herramientas confiables y seguras que han demostrado su efectividad.",
                color: "text-blue-600"
              },
              {
                icon: Users,
                title: "Acompañamiento Total",
                description: "Te acompañamos desde la idea inicial hasta el soporte post-implementación.",
                color: "text-purple-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex p-4 rounded-xl mb-6 ${benefit.color.replace('text-', 'bg-').replace('600', '100')}`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-default mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-default via-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Conversemos sobre tu proyecto y descubre cómo podemos crear la solución
            perfecta para tus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Proyectos Entregados" },
              { number: "98%", label: "Satisfacción del Cliente" },
              { number: "24/7", label: "Soporte Técnico" },
              { number: "5★", label: "Calificación Promedio" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;