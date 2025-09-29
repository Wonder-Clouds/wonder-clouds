import React from 'react';
import { Palette, Users, Zap, ArrowRight, MousePointer, Eye, Heart, TrendingUp, CheckCircle, Layers, Smartphone, Monitor, Figma, Target, Star, BarChart3, Sparkles, Layout, Navigation } from 'lucide-react';

const UXUIDesignPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated design elements */}
        <div className="absolute top-20 left-16 w-20 h-20 border-4 border-white/20 rounded-2xl rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 right-24 w-16 h-16 bg-yellow-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border-4 border-white/15 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl rotate-45 animate-pulse delay-700"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Palette className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Diseño UX/UI</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Diseños que
                <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  Enamoran y Convierten
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Creamos productos digitales con diseños intuitivos que no solo se ven increíbles,
                sino que ofrecen experiencias memorables que tus usuarios amarán.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Ver Diseños
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Consulta de Diseño
                </button>
              </div>
            </div>

            {/* Design Frames Mockup */}
            <div className="relative">
              {/* Main frame */}
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-2">
                  {/* Figma-like interface */}
                  <div className="space-y-4">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                        ))}
                      </div>
                      <div className="flex-1"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Design content */}
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 h-64">
                      <div className="space-y-4">
                        <div className="h-8 bg-white/60 rounded-lg w-3/4"></div>
                        <div className="h-4 bg-white/40 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-20 bg-white/50 rounded-xl"></div>
                          <div className="h-20 bg-white/50 rounded-xl"></div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg w-1/3"></div>
                      </div>
                    </div>

                    {/* Layers panel */}
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 bg-gray-100 rounded"></div>
                      <div className="flex-1 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary frame */}
              <div className="absolute top-8 -left-8 w-48 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6">
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mt-3"></div>
                </div>
              </div>

              {/* Mobile frame */}
              <div className="absolute -bottom-4 -right-4 w-32 bg-white rounded-3xl shadow-xl p-3 transform rotate-6">
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl h-48 p-3">
                  <div className="space-y-2">
                    <div className="h-2 bg-white/60 rounded w-full"></div>
                    <div className="h-2 bg-white/40 rounded w-3/4"></div>
                    <div className="space-y-1 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-8 bg-white/40 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-6 right-12 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg animate-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-12 -left-6 bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-xl shadow-lg animate-pulse">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Los Tres Pilares del Diseño Excepcional
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada diseño debe cumplir con estos criterios fundamentales para garantizar el éxito
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Estética",
                description: "Diseños visuales impactantes que capturan la atención y reflejan la personalidad de tu marca.",
                color: "from-pink-500 to-rose-500",
                features: [
                  "Paletas de color armoniosas",
                  "Tipografía moderna",
                  "Elementos visuales únicos",
                  "Animaciones sutiles"
                ]
              },
              {
                icon: MousePointer,
                title: "Usabilidad",
                description: "Interfaces intuitivas donde cada elemento tiene un propósito claro y la navegación es fluida.",
                color: "from-purple-500 to-indigo-500",
                features: [
                  "Navegación clara",
                  "Jerarquía visual",
                  "Interacciones intuitivas",
                  "Accesibilidad garantizada"
                ]
              },
              {
                icon: Target,
                title: "Conversión",
                description: "Diseños estratégicos que guían al usuario hacia las acciones que generan resultados para tu negocio.",
                color: "from-blue-500 to-cyan-500",
                features: [
                  "CTAs efectivos",
                  "Flujos optimizados",
                  "Puntos de fricción eliminados",
                  "A/B testing ready"
                ]
              }
            ].map((pillar, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${pillar.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-default mb-4">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.color}`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Nuestro Proceso de Diseño
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De la investigación al prototipo interactivo, cada paso está diseñado para el éxito
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Users,
                  title: "Investigación de Usuario",
                  description: "Analizamos a tu audiencia, sus necesidades, comportamientos y puntos de dolor para crear diseños centrados en el usuario.",
                  color: "bg-pink-500",
                  number: "01"
                },
                {
                  icon: Target,
                  title: "Definición de Objetivos",
                  description: "Establecemos metas claras de negocio y KPIs de diseño que alinean la estética con resultados medibles.",
                  color: "bg-purple-500",
                  number: "02"
                },
                {
                  icon: Layout,
                  title: "Wireframes y Arquitectura",
                  description: "Creamos estructuras de información y wireframes que definen la jerarquía y flujo del producto.",
                  color: "bg-indigo-500",
                  number: "03"
                },
                {
                  icon: Palette,
                  title: "Diseño Visual e Interactivo",
                  description: "Desarrollamos prototipos navegables en Figma que permiten probar la experiencia antes del desarrollo.",
                  color: "bg-blue-500",
                  number: "04"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="relative">
                    <div className={`${step.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Figma Showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Figma className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Diseñado en Figma</h3>
                    <p className="text-purple-200 text-sm">La herramienta líder en diseño colaborativo</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {[
                    { label: "Prototipos Interactivos", icon: MousePointer },
                    { label: "Colaboración en Tiempo Real", icon: Users },
                    { label: "Sistema de Diseño", icon: Layers },
                    { label: "Comentarios Integrados", icon: Navigation }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl group hover:bg-white/20 transition-colors duration-300">
                      <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{feature.label}</span>
                      <CheckCircle className="w-5 h-5 text-green-300 ml-auto" />
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-xs text-purple-200">Clickeable</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-1">24h</div>
                    <div className="text-xs text-purple-200">Iteraciones</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Qué Recibirás
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entregables completos y listos para desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Layout,
                title: "Wireframes",
                description: "Esquemas de baja fidelidad que definen la estructura y flujo del producto.",
                color: "from-gray-500 to-gray-700"
              },
              {
                icon: Palette,
                title: "Diseño Visual",
                description: "Mockups de alta fidelidad con colores, tipografía y elementos finales.",
                color: "from-pink-500 to-purple-600"
              },
              {
                icon: MousePointer,
                title: "Prototipos Interactivos",
                description: "Prototipos navegables que simulan la experiencia real del producto.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Layers,
                title: "Design System",
                description: "Guía de estilos y componentes reutilizables para consistencia.",
                color: "from-indigo-500 to-purple-600"
              }
            ].map((deliverable, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${deliverable.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <deliverable.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-default mb-4">{deliverable.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{deliverable.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Beneficios de un Buen Diseño UX/UI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Invierte en diseño y cosecha resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Mayor Satisfacción",
                description: "Usuarios felices que recomiendan tu producto y vuelven por más.",
                stat: "95% satisfacción"
              },
              {
                icon: Navigation,
                title: "Navegación Intuitiva",
                description: "Experiencias sin fricciones que reducen la frustración del usuario.",
                stat: "70% menos abandono"
              },
              {
                icon: Sparkles,
                title: "Interfaces Modernas",
                description: "Diseños contemporáneos que transmiten innovación y profesionalismo.",
                stat: "85% más engagement"
              },
              {
                icon: TrendingUp,
                title: "Orientado a Conversión",
                description: "Diseños estratégicos que convierten visitantes en clientes activos.",
                stat: "200% más conversiones"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-default mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full inline-block">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Diseñamos para Todas las Plataformas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiencias consistentes en web, móvil y más allá
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: "Web Design", desc: "Sitios web responsivos y aplicaciones web", color: "text-blue-600" },
              { icon: Smartphone, title: "Mobile Apps", desc: "Interfaces nativas para iOS y Android", color: "text-purple-600" },
              { icon: Layers, title: "Dashboard & SaaS", desc: "Interfaces complejas para productos enterprise", color: "text-pink-600" }
            ].map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-light to-white p-8 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300 text-center group">
                <div className={`inline-flex p-5 rounded-2xl mb-6 bg-white group-hover:bg-gray-50 transition-colors duration-300 shadow-md`}>
                  <platform.icon className={`w-10 h-10 ${platform.color}`} />
                </div>
                <h3 className="text-xl font-bold text-default mb-3">{platform.title}</h3>
                <p className="text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Crear Experiencias Memorables?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Diseñemos juntos productos digitales que tus usuarios amarán usar y que
            generarán resultados reales para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Palette className="w-5 h-5" />
              Comenzar Proyecto de Diseño
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Casos de Estudio
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "300+", label: "Diseños Creados", icon: Palette },
              { number: "98%", label: "Satisfacción de Usuario", icon: Heart },
              { number: "50+", label: "Prototipos Interactivos", icon: MousePointer },
              { number: "4.9★", label: "Rating de Diseño", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
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

export default UXUIDesignPage;