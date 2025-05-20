"use client"

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneAlt, 
  FaTiktok,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";
import { IconType } from "react-icons";

type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
  color: string;
};

type ContactInfo = {
  icon: IconType;
  text: string;
};

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/wonderclouds",
      label: "Facebook",
      color: "#1877F2"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/wonderclouds",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@wonderclouds",
      label: "TikTok",
      color: "#000000"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/wonder-clouds",
      label: "LinkedIn",
      color: "#0A66C2"
    }
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: FaMapMarkerAlt,
      text: "Calle Mateo Pumacahua 315, Cusco, Perú",
    },
    {
      icon: FaPhoneAlt,
      text: "+51 946 899 196",
    },
    {
      icon: FaEnvelope,
      text: "wonderclouds.cusco@gmail.com",
    }
  ];

  const services = [
    "Desarrollo Web",
    "Marketing Digital",
    "Desarrollo de Software",
    "Aplicaciones Móviles",
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Contactanos", href: "/contactanos" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 left-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Sección de la marca */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <img src="/static/logos/clouds.webp" alt="Logo" className="w-12 h-12 rounded-full" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Wonder Clouds
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
            Impulsamos tu presencia digital con soluciones creativas y estratégicas
            que elevan tu marca por encima de las nubes.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.div
                  key={label}
                  onHoverStart={() => setHoveredSocial(label)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.2 }}
                  className="relative"
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <Icon 
                      size={20}
                      color={hoveredSocial === label ? color : 'white'}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tours Populares */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Nuestros servicios</h3>
            <ul className="space-y-2">
              {services.map((tour, index) => (
                <motion.li
                  key={tour}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span 
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {tour}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contáctanos</h3>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <Icon size={16} className="text-secondary" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Suscríbete a Nosotros</h4>
            <p className="text-gray-400 mb-6">Recibe las últimas noticias y ofertas especiales directamente en tu correo.</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-800 text-white"
              />
              <button className="bg-secondary text-white px-6 py-2 rounded-r-md hover:bg-primary transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Wonder Clouds. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}