import React from 'react';
import { Globe, Zap, Eye, Smartphone, ArrowRight, Monitor, Search, Palette, Code, CheckCircle, TrendingUp, Users, Star, Clock, Shield, Layers, Target, BarChart3 } from 'lucide-react';

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-default">
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Animated background elements */}
        <div className="absolute top-16 left-12 w-24 h-24 bg-white/10 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-yellow-400/20 rounded-2xl rotate-45 animate-bounce delay-500"></div>
        <div className="absolute bottom-24 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-ping delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Desarrollo Web</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Tu Presencia Digital
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Que Convierte
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Diseñamos páginas web y landing pages que generan impacto visual y transmiten
                tu propuesta de valor con claridad para convertir visitantes en clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Ver Portfolio
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Cotización Gratuita
                </button>
              </div>
            </div>

            {/* Website Mockup */}
            <div className="relative">
              {/* Desktop mockup */}
              <div className="bg-gray-800 rounded-t-2xl p-4 shadow-2xl">
                {/* Browser bar */}
                <div className="bg-gray-700 rounded-lg p-2 mb-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-gray-300 text-sm">
                    wonderclouds.com
                  </div>
                </div>

                {/* Website content */}
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg p-6 h-64 relative overflow-hidden">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-6 bg-white/30 rounded w-32"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-white/20 rounded w-16"></div>
                      <div className="h-6 bg-white/20 rounded w-20"></div>
                      <div className="h-6 bg-white rounded w-24"></div>
                    </div>
                  </div>

                  {/* Hero content */}
                  <div className="space-y-3">
                    <div className="h-8 bg-white/40 rounded w-3/4"></div>
                    <div className="h-6 bg-white/30 rounded w-1/2"></div>
                    <div className="h-4 bg-white/20 rounded w-2/3"></div>
                    <div className="h-10 bg-white/30 rounded w-32 mt-4"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-pulse delay-700"></div>
                </div>
              </div>

              {/* Mobile mockup overlay */}
              <div className="absolute -bottom-8 -right-8 bg-gray-800 rounded-3xl p-3 shadow-xl w-24">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl h-40 p-3">
                  <div className="space-y-2">
                    <div className="h-2 bg-white/40 rounded w-full"></div>
                    <div className="h-2 bg-white/30 rounded w-3/4"></div>
                    <div className="h-1 bg-white/20 rounded w-1/2"></div>
                    <div className="h-6 bg-white/20 rounded w-full mt-3"></div>
                    <div className="space-y-1 mt-2">
                      <div className="h-1 bg-white/15 rounded w-full"></div>
                      <div className="h-1 bg-white/15 rounded w-5/6"></div>
                      <div className="h-1 bg-white/15 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speed indicator */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white px-3 py-2 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center gap-1 text-sm font-bold">
                  <Zap className="w-4 h-4" />
                  Fast!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Tecnologías de Vanguardia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabajamos exclusivamente con React y Next.js para crear sitios web modernos y escalables
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-light to-white p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Code className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-4">React</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      La biblioteca más popular para crear interfaces de usuario interactivas
                      y componentes reutilizables que mejoran la experiencia del usuario.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Componentes interactivos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Actualizaciones en tiempo real</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Ecosistema robusto</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-light to-white p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Zap className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-4">Next.js</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Framework de React que proporciona renderizado del lado del servidor,
                      optimización automática y la mejor experiencia de desarrollo.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>SEO optimizado automáticamente</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Carga ultra rápida</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Escalabilidad empresarial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-default p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Rendimiento Garantizado</h3>

                {/* Performance metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">99</div>
                    <div className="text-sm">Google PageSpeed</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">&lt;1s</div>
                    <div className="text-sm">Tiempo de Carga</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm">Mobile Responsive</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold mb-2">A+</div>
                    <div className="text-sm">SEO Score</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    "Optimización automática de imágenes",
                    "Caching inteligente",
                    "Compresión avanzada",
                    "Code splitting automático"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Nuestro Proceso de Desarrollo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Reunión de Descubrimiento",
                description: "Analizamos tus objetivos de comunicación, audiencia objetivo y propuesta de valor única.",
                color: "from-blue-500 to-cyan-500",
                features: ["Análisis de competencia", "Definición de objetivos", "Estrategia digital"]
              },
              {
                icon: Palette,
                title: "Diseño y UX",
                description: "Creamos un diseño responsive que combina perfectamente estética y funcionalidad.",
                color: "from-purple-500 to-pink-500",
                features: ["Wireframes detallados", "Prototipado interactivo", "Diseño responsive"]
              },
              {
                icon: Code,
                title: "Desarrollo y Optimización",
                description: "Implementamos con buenas prácticas, optimización SEO y pruebas de rendimiento exhaustivas.",
                color: "from-green-500 to-emerald-500",
                features: ["Código limpio", "SEO técnico", "Testing completo"]
              }
            ].map((step, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-3 
                  border border-gray-100 relative overflow-hidden 
                  h-full flex flex-col">                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-default mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span>{feature}</span>
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

      {/* Website Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Tipos de Sitios Web que Desarrollamos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones web adaptadas a las necesidades específicas de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Sitios Corporativos",
                description: "Páginas web informativas que transmiten profesionalismo y fortalecen tu marca.",
                examples: ["Sobre nosotros", "Servicios", "Contacto", "Blog corporativo"]
              },
              {
                icon: Target,
                title: "Landing Pages",
                description: "Páginas optimizadas para conversión diseñadas para campañas específicas.",
                examples: ["Captura de leads", "Promociones", "Lanzamientos", "Eventos"]
              },
              {
                icon: Monitor,
                title: "Portfolios",
                description: "Showcases visuales que destacan tu trabajo y atraen nuevos clientes.",
                examples: ["Galerías", "Casos de estudio", "Testimonios", "Certificaciones"]
              },
              {
                icon: Layers,
                title: "Microsites",
                description: "Sitios web específicos para productos, campañas o eventos particulares.",
                examples: ["Producto específico", "Campaña temporal", "Evento especial", "Promoción"]
              },
              {
                icon: Search,
                title: "SEO Optimizados",
                description: "Sitios web construidos para maximizar tu visibilidad en motores de búsqueda.",
                examples: ["Contenido optimizado", "Meta tags", "Schema markup", "Sitemap"]
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                description: "Diseños que priorizan la experiencia móvil sin comprometer la versión desktop.",
                examples: ["Responsive design", "Touch friendly", "Carga rápida", "UI optimizada"]
              }
            ].map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-default mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>

                {/* Examples */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Incluye:</div>
                  <div className="flex flex-wrap gap-1">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
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
              Beneficios de Nuestro Servicio Web
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que una página web, es tu herramienta de crecimiento digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Primera Impresión",
                description: "Páginas que transmiten profesionalismo y confianza desde el primer vistazo.",
                stat: "85% más confianza generada"
              },
              {
                icon: Zap,
                title: "Velocidad y SEO",
                description: "Optimización que aumenta tu visibilidad en buscadores y mejora la experiencia.",
                stat: "300% más tráfico orgánico"
              },
              {
                icon: Palette,
                title: "Diseño Personalizado",
                description: "Diseños únicos que se ajustan perfectamente a tu identidad visual.",
                stat: "100% adaptado a tu marca"
              },
              {
                icon: TrendingUp,
                title: "Escalabilidad",
                description: "Soporte continuo y capacidad de crecimiento junto con tu negocio.",
                stat: "Crecimiento sin límites"
              }
            ].map((benefit, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                      transition-all duration-500 transform hover:-translate-y-3 
                      border border-gray-100 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 
                        rounded-2xl flex items-center justify-center mb-6 
                        group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-default mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{benefit.description}</p>
                  <div className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-primary to-default">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Impactar con tu Presencia Digital?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Creemos juntos una página web que no solo se vea increíble, sino que también
            convierta visitantes en clientes y haga crecer tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Comenzar Mi Sitio Web
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Ejemplos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Sitios Web Creados", icon: Globe },
              { number: "99", label: "Google PageSpeed Score", icon: Zap },
              { number: "100%", label: "Mobile Responsive", icon: Smartphone },
              { number: "24h", label: "Tiempo de Respuesta", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
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

export default WebDevelopmentPage;