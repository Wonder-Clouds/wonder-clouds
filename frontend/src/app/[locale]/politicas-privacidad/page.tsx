import React from 'react';
import { Shield, Lock, Eye, Users, FileText, Mail, AlertCircle, CheckCircle, Database, Server, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-12 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-20 h-20 border-2 border-white/15 rounded-lg animate-spin" style={{ animationDuration: '10s' }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Política de Privacidad</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Tu Privacidad es Nuestra Prioridad
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            En Wonder Clouds nos tomamos muy en serio la privacidad y la protección de los datos
            de nuestros usuarios y clientes.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-light to-white p-8 rounded-2xl border border-secondary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-default mb-4">Sobre esta Política</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información
                  cuando accedes a nuestros servicios, sitio web y aplicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-white to-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section 1: Information Collection */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">1. Información que recopilamos</h2>
                  <p className="text-blue-100 text-sm">Datos que podemos recopilar de nuestros usuarios</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Podemos recopilar la siguiente información:
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "Datos de identificación",
                    description: "Nombre, correo electrónico y teléfono"
                  },
                  {
                    icon: Mail,
                    title: "Información de contacto",
                    description: "Proporcionada al solicitar nuestros servicios"
                  },
                  {
                    icon: Server,
                    title: "Información técnica",
                    description: "Dirección IP, navegador y sistema operativo"
                  },
                  {
                    icon: Eye,
                    title: "Datos de uso",
                    description: "Relacionados con la navegación en nuestro sitio web o aplicaciones"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-light rounded-xl hover:shadow-md transition-shadow duration-300">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-default mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Use of Information */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-secondary to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">2. Uso de la información</h2>
                  <p className="text-blue-100 text-sm">Cómo utilizamos tus datos</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Utilizamos la información recopilada para:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Prestar y mejorar nuestros servicios",
                  "Gestionar solicitudes, consultas o soporte técnico",
                  "Enviar comunicaciones relacionadas con proyectos o actualizaciones",
                  "Garantizar la seguridad y correcto funcionamiento de nuestras plataformas"
                ].map((use, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-light rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Data Sharing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">3. Compartición de datos</h2>
                  <p className="text-blue-100 text-sm">Cuándo compartimos tu información</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-yellow-900 mb-2">Compromiso de privacidad</p>
                    <p className="text-yellow-800">
                      En Wonder Clouds <strong>no vendemos ni alquilamos</strong> tu información personal.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Solo podremos compartir datos en los siguientes casos:
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-light rounded-xl border border-secondary/20">
                  <div className="flex items-start gap-3">
                    <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-default mb-2">Proveedores de servicios tecnológicos</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Necesarios para operar nuestra plataforma (hosting, servidores, sistemas de mensajería, etc.).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-light rounded-xl border border-secondary/20">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-default mb-2">Requerimientos legales</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Cuando sea requerido por ley o por una autoridad competente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Data Security */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-secondary to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">4. Seguridad de los datos</h2>
                  <p className="text-blue-100 text-sm">Cómo protegemos tu información</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Implementamos medidas técnicas y organizativas para proteger tu información contra
                accesos no autorizados, pérdida o alteración.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-blue-900 mb-2">Importante</p>
                    <p className="text-blue-800 leading-relaxed">
                      Sin embargo, debes tener en cuenta que <strong>ninguna transmisión de datos por Internet
                        es 100% segura</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: User Rights */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">5. Derechos de los usuarios</h2>
                  <p className="text-blue-100 text-sm">Tus derechos sobre tus datos</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Tienes derecho a:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Acceder, rectificar o eliminar tus datos personales",
                  "Solicitar la limitación u oposición al tratamiento de tus datos",
                  "Retirar tu consentimiento en cualquier momento"
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-light rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed">{right}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
                <p className="font-bold mb-3 text-lg">Para ejercer estos derechos, puedes contactarnos en:</p>
                <a
                  href="mailto:wonderclouds.cusco@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  wonderclouds.cusco@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Section 6: Policy Changes */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-secondary to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">6. Cambios en la política</h2>
                  <p className="text-blue-100 text-sm">Actualizaciones de esta política</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
                Los cambios se publicarán en esta página con fecha de actualización.
              </p>

              <div className="bg-light p-5 rounded-xl border border-secondary/20">
                <p className="text-gray-600 font-semibold">
                  <span className="text-primary">Última actualización:</span> Septiembre 29, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white text-center shadow-2xl">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">¿Tienes alguna pregunta sobre tu privacidad?</h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Estamos comprometidos con la protección de tus datos. Si tienes dudas o inquietudes
              sobre esta política, no dudes en contactarnos.
            </p>
            <Link
              href={"/contactanos"}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              <strong>Wonder Clouds</strong> - Protegiendo tu privacidad desde el primer día
            </p>
            <p>
              Esta política es efectiva y se aplica a todos los servicios ofrecidos por Wonder Clouds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;