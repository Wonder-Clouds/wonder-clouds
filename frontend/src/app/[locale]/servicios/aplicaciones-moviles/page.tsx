import React from 'react';
import { Smartphone, Users, Zap, Target, ArrowRight, Play, Download, Star, Globe, CreditCard, MessageSquare, Layers, CheckCircle } from 'lucide-react';

const MobileDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-default">
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-xl rotate-45 animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Desarrollo Mobile</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Apps Móviles que
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Conectan y Convierten
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Desarrollamos aplicaciones móviles para Android e iOS que ofrecen experiencias
                fluidas y modernas, conectando directamente con tus usuarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Solicitar Cotización
                </button>
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-primary to-secondary rounded-[2rem] p-6 overflow-hidden relative">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-sm mb-6">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white/70 rounded-sm"></div>
                        <div className="w-6 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="text-white space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="w-8 h-8 bg-white/30 rounded-lg mb-2"></div>
                        <div className="h-3 bg-white/40 rounded mb-1"></div>
                        <div className="h-2 bg-white/30 rounded w-3/4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 h-20"></div>
                        <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 h-20"></div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 h-32"></div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400/30 rounded-full blur-lg animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-2 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
                  </div>
                </div>

                {/* Floating icons around phone */}
                <div className="absolute -top-8 -left-8 bg-white/20 backdrop-blur-sm p-3 rounded-xl animate-bounce">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white/20 backdrop-blur-sm p-3 rounded-xl animate-bounce delay-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              De la Idea a las Tiendas de Apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un proceso completo que abarca desde la conceptualización hasta la publicación y más allá
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Análisis y Estrategia",
                  description: "Analizamos tus objetivos de negocio y el perfil de tus usuarios para definir la estrategia perfecta.",
                  color: "bg-blue-500"
                },
                {
                  icon: Layers,
                  title: "Diseño y Prototipado",
                  description: "Creamos prototipos y flujos de navegación enfocados en la usabilidad y experiencia del usuario.",
                  color: "bg-purple-500"
                },
                {
                  icon: Smartphone,
                  title: "Desarrollo Multiplataforma",
                  description: "Desarrollamos para crear apps multiplataforma con un solo código base, optimizando tiempo y costos.",
                  color: "bg-green-500"
                },
                {
                  icon: Play,
                  title: "Pruebas y Publicación",
                  description: "Realizamos pruebas exhaustivas y gestionamos la publicación en App Store y Google Play.",
                  color: "bg-orange-500"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`${step.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Flutter showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">¿Por qué React Native?</h3>
                  <p className="text-blue-100 text-lg">Una sola base de código para múltiples plataformas</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">50%</div>
                    <div className="text-sm">Menos tiempo de desarrollo</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm">Rendimiento nativo</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {["Android", "iOS", "Web", "Desktop"].map((platform, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="font-medium">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Beneficios de Nuestras Apps Móviles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Potencia tu negocio con aplicaciones que realmente marcan la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Mayor Alcance",
                description: "Disponibilidad en App Store y Google Play para llegar a millones de usuarios potenciales.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "Diseño Nativo",
                description: "Interfaces responsivas y fluidas que se sienten naturales en cada plataforma.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "Ahorro de Costos",
                description: "Desarrollo multiplataforma que reduce tiempos y costos sin sacrificar calidad.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: CreditCard,
                title: "Integraciones Potentes",
                description: "Conexiones con APIs, sistemas de pago, chatbots y servicios externos.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${benefit.gradient} text-white shadow-lg`}>
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-default mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Integraciones que Potencian tu App
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conectamos tu aplicación con los servicios que tu negocio necesita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: "Pasarelas de Pago", desc: "Stripe, PayPal, mercados locales" },
              { icon: MessageSquare, title: "Chatbots", desc: "Atención automática 24/7" },
              { icon: Globe, title: "APIs Externas", desc: "Servicios de terceros y sistemas legacy" },
              { icon: Users, title: "Redes Sociales", desc: "Login social y compartir contenido" },
              { icon: Star, title: "Analytics", desc: "Google Analytics, Firebase" },
              { icon: Layers, title: "Cloud Services", desc: "AWS, Google Cloud, Azure" }
            ].map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <integration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-default">{integration.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Llevar tu Negocio al Móvil?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Convierte tu idea en una aplicación móvil exitosa que tus usuarios amarán usar todos los días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Apps Publicadas" },
              { number: "1M+", label: "Descargas Generadas" },
              { number: "4.8★", label: "Rating Promedio" },
              { number: "99%", label: "Uptime Garantizado" }
            ].map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopmentPage;