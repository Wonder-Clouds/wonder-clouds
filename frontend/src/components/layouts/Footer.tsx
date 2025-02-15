"use client"

import Link from "next/link";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/wonderclouds",
      label: "Facebook"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/wonderclouds",
      label: "Instagram"
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@wonderclouds",
      label: "TikTok"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/wonder-clouds",
      label: "LinkedIn"
    }
  ];

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      text: "+ 51 940 576 340",
    },
    {
      icon: FaEnvelope,
      text: "wonderclouds.cusco@gmail.com",
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            {...fadeInUp}
          >
            <p className="text-gray-300 text-sm max-w-md text-center md:text-left">
              Descubre el poder de la innovación digital con Wonder Clouds.
              Impulsamos tu presencia en línea con soluciones creativas y estratégicas
              que elevan tu marca por encima de las nubes.
            </p>
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            {...fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            className="flex flex-col items-center md:items-start space-y-4"
            {...fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            {contactInfo.map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div
          className="border-t border-blue-800 my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-400"
          {...fadeInUp}
        >
          <p>Copyright © {new Date().getFullYear()} Wonder Clouds. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}