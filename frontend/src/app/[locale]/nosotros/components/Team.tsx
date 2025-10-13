//components/public/nosotros/Team.tsx

"use client"

import TeamCard from "@/components/ui/TeamCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
const Team = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const team = [
    {
      name: "Jayo Baez",
      role: "Project Manager",
      imageSrc: "/static/images/team/jayo.webp",
      description: "Experto en gestión ágil y coordinación de equipos multidisciplinarios. Lidera la estrategia de proyectos garantizando entregas exitosas y de alta calidad.",
      linkedinUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
    },
    {
      name: "Cristian Monzon",
      role: "Backend Lead Developer",
      imageSrc: "/static/images/team/cristian.webp",
      description: "Arquitecto de soluciones backend con experiencia en microservicios y bases de datos escalables. Especialista en optimización de rendimiento y seguridad.",
    },
    {
      name: "Sergio Salazar",
      role: "Frontend Lead Developer",
      imageSrc: "/static/images/team/sergio.webp",
      description: "Experto en React y tecnologías web modernas. Crea interfaces intuitivas y responsivas con enfoque en performance y experiencia de usuario excepcional.",
    },
    {
      name: "Robby Villano",
      role: "Desarrollador Full Stack",
      imageSrc: "/static/images/team/robby.webp",
      description: "Desarrollador versátil con dominio en frontend y backend. Apasionado por las soluciones innovadoras y el código limpio que impulsa productos de calidad.",
    },
    {
      name: "Andres Tejada",
      role: "Desarrollador Full Stack",
      imageSrc: "/static/images/team/andres.webp",
      description: "Ingeniero de software enfocado en crear aplicaciones robustas y escalables. Destaca en la resolución de problemas complejos y optimización de procesos.",
    },
    {
      name: "Kiara Oquendo",
      role: "UX/UI Designer",
      imageSrc: "/static/images/team/kiara.webp",
      description: "Diseñadora creativa especializada en experiencia de usuario y diseño de interfaces. Transforma ideas en diseños visuales atractivos y funcionales.",
    },
  ];

  return (
    <div className="w-full bg-light pb-20">
      <motion.div
        className="flex flex-col w-full max-w-7xl items-center relative space-y-20 mx-auto "
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.h2
          className="text-3xl lg:text-5xl text-default font-semibold font-monserrat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Nuestro <span className="text-primary">Equipo</span>
        </motion.h2>

        <motion.div
          className="flex flex-row max-w-6xl space-x-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.h3
            className="text-3xl lg:text-4xl text-default font-semibold font-monserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Los <span className="text-primary">Mejores</span>
          </motion.h3>

          <motion.p
            className="w-2/3 text-lg text-default font-medium font-quicksand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            En WonderClouds, nuestro equipo está compuesto por los mejores en soluciones digitales.
            Estamos comprometidos a impulsar tu marca hacia el éxito con creatividad, experiencia y dedicación incomparables.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full max-w-[1400px] mx-auto lg:px-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
          >
            {team.map((project, index) => (
              <SwiperSlide key={index} className="!w-[300px] sm:!w-[340px] md:!w-[400px] lg:!w-[260px] rounded-lg">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <TeamCard
                    name={project.name}
                    role={project.role}
                    imageSrc={project.imageSrc}
                    description={project.description}
                  />
                </motion.div>
              </SwiperSlide>
            ))}

            <div className="relative mt-8 sm:mt-12">
              <div className="swiper-pagination !relative !bottom-0 !w-full flex justify-center gap-2"></div>
            </div>
          </Swiper>
        </motion.div>
        <style jsx global>{`
        .swiper-slide {
          transition: all 0.3s ease;
          height: auto !important;
        }

        .swiper-slide-active {
          transform: scale(1.05);
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #CBD5E1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #104D7E;
          width: 24px;
          border-radius: 5px;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .swiper-pagination-bullet-active {
            width: 20px;
          }
        }

        @media (min-width: 1024px) {
          .swiper-slide-active {
            transform: scale(1.08);
          }
        }
      `}</style>
      </motion.div>
    </div>
  )
}

export default Team;