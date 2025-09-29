import React from 'react';
import { MessageSquare, Bot, Clock, Users, ArrowRight, Smartphone, Globe, MessageCircle, Instagram, Zap, CheckCircle, Star, TrendingUp, Heart, ShoppingBag, Calendar, Headphones, Brain, Target } from 'lucide-react';
import Link from 'next/link';

const ChatbotIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated chat bubbles */}
        <div className="absolute top-20 left-16 w-8 h-8 bg-white/20 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-400/30 rounded-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-24 left-24 w-6 h-6 bg-yellow-400/40 rounded-full animate-bounce delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Integración de Chatbots</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Atiende a tus Clientes
                <span className="block bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                  24/7 con IA
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Automatiza tu atención al cliente con chatbots inteligentes que se integran
                en tu web, WhatsApp, Instagram y Messenger para respuestas instantáneas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Bot className="w-5 h-5" />
                  Ver Demo en Vivo
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Prueba Gratuita
                </button>
              </div>
            </div>

            {/* Chat Interface Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
                {/* Chat Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Asistente IA</h3>
                    <div className="flex items-center gap-1 text-green-500 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      En línea
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 py-6 min-h-[300px]">
                  {/* Bot message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs animate-fadeIn">
                      <p className="text-gray-800">¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</p>
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl rounded-tr-sm p-4 max-w-xs text-white animate-fadeIn delay-1000">
                      <p>¿Cuáles son sus horarios de atención?</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>

                  {/* Bot response */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-xs animate-fadeIn delay-2000">
                      <p className="text-gray-800">Estamos disponibles 24/7 para ayudarte! 🕐 También puedo conectarte con un agente humano si necesitas ayuda especializada.</p>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex gap-3 animate-fadeIn delay-3000">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button className="bg-purple-50 text-purple-600 p-2 rounded-lg hover:bg-purple-100 transition-colors">
                      💼 Servicios
                    </button>
                    <button className="bg-blue-50 text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition-colors">
                      📞 Contacto
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating platform icons */}
              <div className="absolute -top-4 -left-4 bg-green-500 p-3 rounded-xl shadow-lg animate-bounce">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl shadow-lg animate-bounce delay-500">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 p-3 rounded-xl shadow-lg animate-bounce delay-1000">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Integración Multiplataforma
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Llega a tus clientes donde prefieran comunicarse contigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Sitio Web",
                description: "Widget integrado en tu página web con diseño personalizado que se adapta a tu marca.",
                color: "from-blue-500 to-cyan-500",
                features: ["Chat en vivo", "Formularios inteligentes", "Escalación humana"]
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Business",
                description: "Conecta con la plataforma de mensajería más popular y automatiza respuestas.",
                color: "from-green-500 to-emerald-600",
                features: ["Mensajes automáticos", "Catálogo integrado", "Botones interactivos"]
              },
              {
                icon: Instagram,
                title: "Instagram",
                description: "Responde automáticamente en Instagram Direct y Stories para mayor engagement.",
                color: "from-pink-500 to-purple-600",
                features: ["Stories automatizadas", "DMs inteligentes", "Comentarios auto"]
              },
              {
                icon: MessageSquare,
                title: "Facebook Messenger",
                description: "Integración completa con Messenger para atención 24/7 en la red social.",
                color: "from-blue-600 to-indigo-600",
                features: ["Menús persistentes", "Quick replies", "Broadcast messages"]
              }
            ].map((platform, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${platform.color} text-white shadow-lg`}>
                      <platform.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-default mb-4">{platform.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{platform.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Cómo Creamos tu Chatbot Inteligente
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un proceso estructurado para crear un asistente virtual que realmente entienda tu negocio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Análisis de Necesidades",
                  description: "Identificamos las consultas más frecuentes de tus clientes y los puntos de dolor en la atención actual.",
                  color: "bg-blue-500"
                },
                {
                  icon: Brain,
                  title: "Diseño Conversacional",
                  description: "Creamos flujos de conversación naturales que reflejen la personalidad de tu marca y resuelvan problemas reales.",
                  color: "bg-purple-500"
                },
                {
                  icon: Bot,
                  title: "Entrenamiento con IA",
                  description: "Alimentamos al bot con información específica de tu negocio para que pueda dar respuestas precisas y útiles.",
                  color: "bg-green-500"
                },
                {
                  icon: Zap,
                  title: "Integración y Mejora",
                  description: "Implementamos el chatbot en tus plataformas y lo configuramos para aprender y mejorar continuamente.",
                  color: "bg-orange-500"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className={`${step.color} p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 relative`}>
                    <step.icon className="w-8 h-8" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Brain Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl">
                <div className="text-center mb-8">
                  <Brain className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-2">IA Conversacional Avanzada</h3>
                  <p className="text-purple-200">Procesamiento de lenguaje natural</p>
                </div>

                {/* Capabilities */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold mb-1">95%</div>
                    <div className="text-xs text-purple-200">Precisión en respuestas</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-xs text-purple-200">Disponibilidad</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold mb-1">3s</div>
                    <div className="text-xs text-purple-200">Tiempo de respuesta</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-xs text-purple-200">Idiomas soportados</div>
                  </div>
                </div>

                {/* Learning indicator */}
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">Aprendizaje Continuo</span>
                  </div>
                  <div className="text-sm text-purple-200">
                    El bot mejora automáticamente con cada interacción
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Casos de Uso Populares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde consultas básicas hasta procesos complejos de venta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Headphones, title: "Soporte Técnico", desc: "Resolución automática de problemas comunes", color: "text-blue-600" },
              { icon: ShoppingBag, title: "Ventas Online", desc: "Guía en procesos de compra y recomendaciones", color: "text-green-600" },
              { icon: Calendar, title: "Reservas y Citas", desc: "Agendamiento automático de servicios", color: "text-purple-600" },
              { icon: Heart, title: "Atención al Cliente", desc: "Respuestas inmediatas a consultas frecuentes", color: "text-pink-600" }
            ].map((usecase, index) => (
              <div key={index} className="bg-gradient-to-br from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300 group text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300`}>
                  <usecase.icon className={`w-8 h-8 ${usecase.color}`} />
                </div>
                <h3 className="font-bold text-default mb-2">{usecase.title}</h3>
                <p className="text-gray-600 text-sm">{usecase.desc}</p>
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
              Beneficios para tu Negocio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforma tu atención al cliente con resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Atención 24/7",
                description: "Tus clientes reciben ayuda inmediata sin importar la hora del día o la zona horaria.",
                stat: "Disponibilidad total"
              },
              {
                icon: Users,
                title: "Menos Carga Laboral",
                description: "Libera a tu equipo humano de tareas repetitivas para que se enfoquen en casos complejos.",
                stat: "70% menos consultas manuales"
              },
              {
                icon: Star,
                title: "Mayor Satisfacción",
                description: "Respuestas instantáneas y precisas mejoran la experiencia del cliente significativamente.",
                stat: "95% satisfacción promedio"
              },
              {
                icon: TrendingUp,
                title: "Integración con Ventas",
                description: "Conecta el chatbot con tu CRM y procesos de venta para convertir más leads.",
                stat: "40% más conversiones"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-default mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                    {benefit.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Revolucionar tu Atención al Cliente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Implementemos un chatbot inteligente que transforme la forma en que te comunicas
            con tus clientes y mejore su experiencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contactanos"} className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Crear Mi Chatbot
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Conversaciones Diarias", icon: MessageSquare },
              { number: "3s", label: "Tiempo de Respuesta", icon: Zap },
              { number: "95%", label: "Precisión en Respuestas", icon: Target },
              { number: "24/7", label: "Disponibilidad Total", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
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

export default ChatbotIntegrationPage;