import React from 'react';
import { FileText, Scale, Copyright, AlertTriangle, CreditCard, Shield, RefreshCw, Mail, CheckCircle, XCircle, Award, Server } from 'lucide-react';
import Link from 'next/link';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-default via-primary to-secondary">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-16 right-20 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-16 h-16 border-2 border-white/15 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Scale className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Términos de Servicio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Términos de Servicio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Estos Términos de Servicio regulan el uso de los productos, servicios y plataformas
            digitales de Wonder Clouds.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-light to-white p-8 rounded-2xl border border-secondary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-default/10 p-3 rounded-xl">
                <FileText className="w-6 h-6 text-default" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-default mb-4">Aceptación de Términos</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Al acceder a nuestro sitio web o contratar nuestros servicios, aceptas cumplir con
                  las siguientes condiciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-white to-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section 1: Use of Services */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-default to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">1. Uso de nuestros servicios</h2>
                  <p className="text-blue-100 text-sm">Condiciones de uso aceptable</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-5">
              <div className="flex items-start gap-4 p-5 bg-light rounded-xl border border-secondary/20">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  El usuario se compromete a utilizar nuestros servicios de manera legal y conforme
                  a la finalidad contratada.
                </p>
              </div>

              <div className="flex items-start gap-4 p-5 bg-red-50 rounded-xl border border-red-200">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Está prohibido el uso de nuestros productos o desarrollos para fines ilícitos,
                  fraudulentos o que atenten contra terceros.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Copyright className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">2. Propiedad intelectual</h2>
                  <p className="text-blue-100 text-sm">Derechos de autor y licencias</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-5">
              <div className="p-5 bg-light rounded-xl border border-secondary/20">
                <div className="flex items-start gap-3 mb-4">
                  <Copyright className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-default mb-2 text-lg">Propiedad de Wonder Clouds</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Todo el contenido del sitio web, así como el código, diseños y documentación
                      generados por <strong>Wonder Clouds</strong>, son de nuestra propiedad o cuentan
                      con licencias correspondientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-900 mb-2 text-lg">Propiedad del Cliente</h3>
                    <p className="text-gray-700 leading-relaxed">
                      El cliente será propietario de los desarrollos contratados, siempre y cuando se
                      haya cumplido con el pago total acordado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-secondary to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">3. Responsabilidades</h2>
                  <p className="text-blue-100 text-sm">Alcance de responsabilidades</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-5">
              <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-900 mb-2 text-lg">Limitaciones de Responsabilidad</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Wonder Clouds</strong> no se hace responsable por fallas derivadas de un
                      mal uso de las aplicaciones o por problemas en servicios externos ajenos a nuestro
                      control (como servidores de terceros, APIs externas, etc.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-light rounded-xl border border-secondary/20">
                <div className="flex items-start gap-3">
                  <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-default mb-2 text-lg">Nuestro Compromiso</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nos comprometemos a ofrecer soporte técnico y correcciones en los plazos
                      acordados con cada cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Payments and Billing */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">4. Pagos y facturación</h2>
                  <p className="text-blue-100 text-sm">Condiciones de pago</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-5">
              <div className="p-5 bg-light rounded-xl border border-secondary/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Los servicios contratados estarán sujetos a las condiciones de pago acordadas
                    previamente con el cliente.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2 text-lg">Importante</h3>
                    <p className="text-gray-700 leading-relaxed">
                      La falta de pago podrá dar lugar a la suspensión temporal o definitiva del servicio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-default to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">5. Limitación de responsabilidad</h2>
                  <p className="text-blue-100 text-sm">Alcance de garantías</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-5">
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  No garantizamos que nuestros servicios estén libres de errores o interrupciones en
                  todo momento, aunque trabajamos para asegurar su estabilidad.
                </p>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    En ningún caso <strong>Wonder Clouds</strong> será responsable de pérdidas indirectas
                    derivadas del uso de nuestras soluciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Modifications */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-secondary to-primary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">6. Modificaciones de los términos</h2>
                  <p className="text-blue-100 text-sm">Actualizaciones de términos</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Podemos modificar estos Términos de Servicio en cualquier momento. Las actualizaciones
                se publicarán en esta página con fecha de revisión.
              </p>

              <div className="p-5 bg-light rounded-xl border border-secondary/20">
                <p className="text-gray-700 text-lg leading-relaxed">
                  El uso continuado de los servicios tras una modificación implicará la aceptación de
                  los nuevos términos.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Contact */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">7. Contacto</h2>
                  <p className="text-blue-100 text-sm">¿Tienes dudas?</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Si tienes dudas sobre estos Términos o sobre la Política de Privacidad, puedes escribirnos a:
              </p>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
                <a
                  href="mailto:wonderclouds.cusco@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 px-6 py-3 rounded-lg font-semibold text-lg"
                >
                  <Mail className="w-5 h-5" />
                  wonderclouds.cusco@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-default to-primary p-8 rounded-3xl text-white text-center shadow-2xl">
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Aclaración sobre los Términos?</h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Estamos disponibles para resolver cualquier duda que tengas sobre nuestros
              Términos de Servicio o Política de Privacidad.
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
              <strong>Wonder Clouds</strong> - Términos claros para un servicio transparente
            </p>
            <p>
              Estos términos son efectivos desde su publicación y se aplican a todos nuestros servicios
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;