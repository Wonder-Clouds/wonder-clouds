import React from 'react';
import { Bot, Clock, Zap, Target, ArrowRight, Mail, Database, FileText, Bell, TrendingUp, CheckCircle, Settings, Workflow, BarChart3, Users, DollarSign } from 'lucide-react';

const AutomationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-default via-primary to-secondary">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-16 left-8 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-12 w-16 h-16 bg-yellow-400/20 rounded-lg rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-bounce delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Automatización de Procesos</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Libera el Poder de la
                <span className="block bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                  Automatización Inteligente
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Optimizamos tu tiempo automatizando procesos repetitivos y liberando a tu equipo
                para que se enfoque en tareas de mayor valor estratégico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Automatizar Ahora
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Análisis Gratuito
                </button>
              </div>
            </div>

            {/* Automation Visualization */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                {/* Workflow diagram */}
                <div className="space-y-6">
                  {/* Input */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-white/30 relative">
                      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-green-400 animate-pulse" style={{ width: '70%' }}></div>
                    </div>
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Process */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Settings className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <div className="flex-1 h-0.5 bg-white/30 relative">
                      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-300" style={{ width: '80%' }}></div>
                    </div>
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  </div>

                  {/* Output */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                    <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">85%</div>
                    <div className="text-white/80 text-sm">Tiempo Ahorrado</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-white/80 text-sm">Funcionamiento</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Herramientas de Automatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Utilizamos las mejores tecnologías para crear flujos automáticos robustos y escalables
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-light to-white p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Workflow className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-4">n8n</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Plataforma de automatización visual que nos permite crear workflows complejos
                      de manera intuitiva y eficiente.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Interface visual drag & drop</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>200+ integraciones disponibles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Workflows condicionales avanzados</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-light to-white p-8 rounded-2xl border border-secondary/20 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Bot className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-default mb-4">Python</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Lenguaje potente para automatizaciones complejas, procesamiento de datos
                      y integración con sistemas legacy.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Scripts personalizados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Procesamiento de datos masivos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Machine Learning integrado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Ecosistema de Integraciones</h3>

                {/* Central hub */}
                <div className="relative">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-white/30">
                    <Settings className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '4s' }} />
                  </div>

                  {/* Connected services */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Mail, label: "Email" },
                      { icon: Database, label: "CRM" },
                      { icon: FileText, label: "Docs" },
                      { icon: Bell, label: "Slack" },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: Users, label: "HR" }
                    ].map((service, index) => (
                      <div key={index} className="bg-white/15 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/25 transition-colors duration-300">
                        <service.icon className="w-6 h-6 mx-auto mb-2" />
                        <div className="text-xs font-medium">{service.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Examples */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Procesos que Podemos Automatizar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde tareas simples hasta flujos complejos, automatizamos lo que tu negocio necesita
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Gestión de Correos",
                description: "Envío automático de emails, respuestas programadas y notificaciones inteligentes.",
                color: "from-blue-500 to-cyan-500",
                examples: ["Bienvenidas", "Recordatorios", "Newsletters"]
              },
              {
                icon: Database,
                title: "Integración CRM",
                description: "Sincronización de formularios web con bases de datos y sistemas CRM automáticamente.",
                color: "from-green-500 to-emerald-500",
                examples: ["Lead capture", "Actualización de datos", "Segmentación"]
              },
              {
                icon: FileText,
                title: "Procesamiento de Documentos",
                description: "Generación automática de facturas, reportes y documentos basados en datos.",
                color: "from-purple-500 to-pink-500",
                examples: ["Facturación", "Reportes", "Contratos"]
              },
              {
                icon: Bell,
                title: "Sistema de Recordatorios",
                description: "Envío programado de recordatorios a clientes, empleados o stakeholders.",
                color: "from-orange-500 to-red-500",
                examples: ["Citas médicas", "Pagos", "Renovaciones"]
              }
            ].map((process, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${process.color} text-white shadow-lg`}>
                      <process.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-default mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{process.description}</p>

                    {/* Examples */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ejemplos:</div>
                      <div className="flex flex-wrap gap-2">
                        {process.examples.map((example, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-default mb-4">
              Beneficios de la Automatización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforma tu organización con los beneficios tangibles de la automatización
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Clock,
                  title: "Ahorro de Tiempo",
                  description: "Reducción drástica en tiempo dedicado a tareas repetitivas, liberando recursos para actividades estratégicas.",
                  stat: "Hasta 85% menos tiempo en procesos manuales"
                },
                {
                  icon: Target,
                  title: "Eliminación de Errores",
                  description: "Los procesos automatizados eliminan el error humano, garantizando consistencia y precisión.",
                  stat: "99.9% de precisión en procesos críticos"
                },
                {
                  icon: TrendingUp,
                  title: "Mayor Productividad",
                  description: "Incremento significativo en la eficiencia organizacional y capacidad de procesamiento.",
                  stat: "300% de aumento en productividad promedio"
                },
                {
                  icon: Zap,
                  title: "Escalabilidad",
                  description: "Procesos que se adaptan automáticamente al crecimiento de tu empresa sin intervención manual.",
                  stat: "Escalamiento automático sin costos adicionales"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-r from-light to-white p-6 rounded-2xl border border-secondary/20 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-default mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{benefit.description}</p>
                      <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {benefit.stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI Calculator Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Calculadora de ROI</h3>

                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-sm text-green-100 mb-2">Tiempo ahorrado por semana</div>
                    <div className="text-3xl font-bold">40 horas</div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-sm text-green-100 mb-2">Costo por hora</div>
                    <div className="text-3xl font-bold">$25</div>
                  </div>

                  <div className="border-t border-white/30 pt-4">
                    <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl text-center">
                      <div className="text-sm text-green-100 mb-2">Ahorro mensual</div>
                      <div className="text-4xl font-bold mb-2">$4,000</div>
                      <div className="text-sm text-green-200">ROI: 800% en 6 meses</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Automatizar tus Procesos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Identifiquemos juntos qué procesos pueden automatizarse en tu organización
            y calculemos el impacto real en tu productividad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              Análisis de Procesos Gratis
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Procesos Automatizados", icon: Workflow },
              { number: "85%", label: "Tiempo Ahorrado Promedio", icon: Clock },
              { number: "99.9%", label: "Confiabilidad", icon: CheckCircle },
              { number: "$2M+", label: "Ahorros Generados", icon: DollarSign }
            ].map((stat, index) => (
              <div key={index} className="p-6 group">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
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

export default AutomationPage;