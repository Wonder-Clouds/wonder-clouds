'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { 
    id: 1, 
    title: 'Idea', 
    description: 'Analizamos su idea a fondo, brindamos asesoría gratuita y definimos un plan estratégico con presupuesto y plazos estimados.', 
    image: '/static/images/proceso_01.svg' 
  },
  { 
    id: 2, 
    title: 'UI/UX', 
    description: 'Diseñamos interfaces atractivas y funcionales, priorizando la usabilidad y optimizando la experiencia del usuario en cada interacción.', 
    image: '/static/images/proceso_02.svg' 
  },
  { 
    id: 3, 
    title: 'Desarrollo', 
    description: 'Codificamos su proyecto con tecnologías modernas, garantizando escalabilidad, eficiencia y compatibilidad multiplataforma.', 
    image: '/static/images/proceso_03.svg' 
  },
  { 
    id: 4, 
    title: 'Pruebas', 
    description: 'Realizamos pruebas automatizadas y manuales para detectar errores, optimizar el rendimiento y garantizar una experiencia fluida.', 
    image: '/static/images/proceso_04.svg' 
  },
  { 
    id: 5, 
    title: 'Despliegue', 
    description: 'Lanzamos su proyecto en el entorno adecuado, configuramos servidores y ofrecemos monitoreo para asegurar su estabilidad y crecimiento.', 
    image: '/static/images/proceso_05.svg' 
  }
];


const OurProcess = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Detector de tamaño de pantalla
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check initial size
    updateWidth();

    // Add event listener
    window.addEventListener('resize', updateWidth);

    // Cleanup
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isSmallScreen = windowWidth < 1024;

  const CompactDottedArrowConnector = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex items-center justify-center mx-1 relative right-2"
      style={{ width: windowWidth >= 1200 ? '24px' : '16px', height: '16px' }}
    >
      <svg width={windowWidth >= 1200 ? '64' : '40'} height="20" viewBox={windowWidth >= 1200 ? '0 0 64 20' : '0 0 40 20'} className="overflow-visible">
        {/* Segmento de flecha punteada - ajustado según el tamaño de pantalla */}
        {[...Array(windowWidth >= 1200 ? 9 : 5)].map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={3 + i * 6}
            cy={10}
            r={i % 3 === 0 ? 1.8 : 1.2}
            fill={"#3B82F6"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.03 * i,
              ease: "easeOut"
            }}
            className="transition-colors duration-300"
          />
        ))}

        {/* Punta de flecha animada */}
        <motion.g
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <motion.path
            d={windowWidth >= 1200 ? 'M57,7 L63,10 L57,13' : 'M34,7 L39,10 L34,13'}
            fill="none"
            stroke={"#3B82F6"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-300"
          />
        </motion.g>
      </svg>
    </motion.div>
  );

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl text-default font-semibold">
          Nuestro <span className="text-primary"> Proceso</span>
          </h2>
          <div className="w-24 h-1 bg-primary my-5"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transformamos ideas en soluciones digitales siguiendo un proceso claro y efectivo.
          </p>
        </motion.div>

        <div className="mb-16">
          {isSmallScreen ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:hidden">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300"
                >
                  <div className="p-2">
                    <div className="w-full h-24 relative mb-2">
                      <Image
                        src={step.image}
                        alt={step.title}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full font-bold text-xs mr-1 transition-colors duration-300">
                        {step.id}
                      </span>
                      <h3 className="font-bold text-sm transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs min-h-[40px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="hidden lg:flex justify-center items-center overflow-visible mx-auto">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden transition-all duration-300"
                    style={{
                      width: windowWidth >= 1200 ? '190px' : '150px',  // Más pequeño en lg, un poco más grande en pantallas xl
                    }}
                  >
                    <div className="p-2">
                      <div className="w-full relative mb-3" style={{ height: windowWidth >= 1200 ? '120px' : '100px' }}>
                        <Image
                          src={step.image}
                          alt={step.title}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-bold text-center text-sm transition-colors duration-300 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center dark:text-gray-300 text-xs min-h-[40px]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && <CompactDottedArrowConnector />}
                </React.Fragment>
              ))}
            </div>
          )}

          {!isSmallScreen && windowWidth < 1024 && (
            <div className="hidden md:block lg:hidden">
              <div className="flex flex-wrap justify-center gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer w-48 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300"
                  >
                    <div className="p-2">
                      <div className="w-full h-32 relative mb-3">
                        <Image
                          src={step.image}
                          alt={step.title}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-sm transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-xs min-h-[40px]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;