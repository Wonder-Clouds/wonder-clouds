"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Monitor, Smartphone, Cloud, Lightbulb, Code, Globe, MessageSquare, Paintbrush, Cog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from '@/languages/translations';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLocale = pathname.split('/')[1] || 'es';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const changeLanguage = (langCode: string) => {
    const segments = pathname.split('/');
    segments[1] = langCode;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  return (
    <div className="relative">
      {/* Botón del selector */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
      >
        <Globe className="h-4 w-4 text-gray-600 group-hover:text-primary transition-colors" />
        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
          {currentLanguage.flag} {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown className={`h-3 w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors
                  ${currentLocale === language.code
                    ? 'bg-primary/5 text-primary font-medium'
                    : 'text-gray-700 hover:text-primary'}`}
              >
                <span className="text-base">{language.flag}</span>
                <span>{language.name}</span>
                {currentLocale === language.code && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar el dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const locale = useLocale() as "es" | "en";
  const t = useTranslations(locale);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/nosotros', label: t.nav.about },
    {
      label: t.nav.services,
      hasDropdown: true,
      dropdownItems: [
        {
          href: '/servicios/desarrollo-software',
          label: 'Desarrollo de Software',
          icon: 'Code',
          description: 'Soluciones personalizadas y sistemas a medida para empresas'
        },
        {
          href: '/servicios/aplicaciones-moviles',
          label: 'Aplicaciones Móviles',
          icon: 'Smartphone',
          description: 'Apps nativas y multiplataforma con experiencias optimizadas'
        },
        {
          href: '/servicios/paginas-web',
          label: 'Desarrollo de Páginas Web',
          icon: 'Globe',
          description: 'Sitios web responsivos, modernos y optimizados para SEO'
        },
        {
          href: '/servicios/chatbots',
          label: 'Integración de Chatbots',
          icon: 'MessageSquare',
          description: 'Asistentes virtuales inteligentes para atención 24/7'
        },
        {
          href: '/servicios/ux-ui',
          label: 'Diseño UX/UI',
          icon: 'Paintbrush',
          description: 'Interfaces intuitivas y experiencias de usuario atractivas'
        },
        {
          href: '/servicios/automatizaciones',
          label: 'Automatización de Procesos',
          icon: 'Cog',
          description: 'Optimización de flujos de trabajo y reducción de tareas manuales'
        }
      ]
    },
    { href: '/proyectos', label: t.nav.projects },
  ];

  // Manejo del scroll para efectos de header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Animaciones
  const headerVariants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0)' },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(8px)'
    }
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-2'
        : 'bg-transparent py-4'
        }`}    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 lg:px-0">
        {/* Logo con mejores animaciones */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex-shrink-0"
        >
          <Link href="/">
            <Image
              src="/static/logos/wonderclouds.webp"
              alt="Logo Wonder Clouds Cusco"
              width={200}
              height={200}
              className="w-4/6 xl:w-5/6 h-auto transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </motion.div>

        {/* Navegación Desktop */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center space-x-8"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                href={link.href ?? '#'}
                className={`text-lg font-medium relative group transition-all duration-300
                    ${pathname === link.href || (pathname.startsWith(link.href + '/') && link.href !== '/')
                    ? 'text-secondary font-semibold'
                    : 'text-default hover:text-secondary'}`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </span>
                {(pathname === link.href || (pathname.startsWith(link.href + '/') && link.href !== '/')) && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
                    layoutId="underline"
                  />
                )}
              </Link>

              {/* Dropdown para servicios */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full -right-72 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden z-20"
                    >
                      <div className="p-4 grid grid-cols-3 gap-4">
                        {link.dropdownItems.map((item, idx) => {
                          let IconComponent;
                          switch (item.icon) {
                            case 'Code':
                              IconComponent = Code;
                              break;
                            case 'Smartphone':
                              IconComponent = Smartphone;
                              break;
                            case 'Globe':
                              IconComponent = Globe;
                              break;
                            case 'MessageSquare':
                              IconComponent = MessageSquare;
                              break;
                            case 'Paintbrush':
                              IconComponent = Paintbrush;
                              break;
                            case 'Cog':
                              IconComponent = Cog;
                              break;
                            default:
                              IconComponent = Code;
                          }

                          return (
                            <motion.div
                              key={item.label}
                              variants={dropdownItemVariants}
                            >
                              <Link
                                href={item.href}
                                className={`flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group
                                  ${pathname === item.href
                                    ? 'bg-gray-50/80 ring-1 ring-gray-100'
                                    : ''}`}
                              >
                                <div className="flex-shrink-0 mr-4">
                                  <div className={`p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all`}>
                                    <IconComponent className="h-6 w-6" />
                                  </div>
                                </div>
                                <div>
                                  <p className={`text-base font-medium mb-1 group-hover:text-secondary transition-colors
                                    ${pathname === item.href ? 'text-secondary' : 'text-gray-900'}`}>
                                    {item.label}
                                  </p>
                                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
          <LanguageSelector />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contactanos"
              className="relative inline-flex items-center justify-center h-12 px-6 text-lg font-medium text-white transition-all duration-300 rounded-xl bg-primary overflow-hidden group hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Contáctanos
                <motion.svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Botón menú móvil */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-default" />
          )}
        </motion.button>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-lg shadow-lg mt-2 rounded-xl mx-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-colors
                        ${pathname.startsWith(link.href ?? '/')
                            ? 'text-secondary bg-gray-50'
                            : 'text-default hover:text-secondary hover:bg-gray-50'}`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        href={link.href ?? '#'}
                        className={`flex items-center gap-3 px-4 py-3 text-base font-medium transition-colors
                          ${pathname === link.href
                            ? 'text-secondary bg-gray-50'
                            : 'text-default hover:text-secondary hover:bg-gray-50'}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>

                  {/* Dropdown móvil para servicios */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-gray-50 overflow-hidden"
                        >
                          {link.dropdownItems.map((item, idx) => {
                            // Determinar el icono correcto
                            let IconComponent;
                            switch (item.icon) {
                              case 'Monitor':
                                IconComponent = Monitor;
                                break;
                              case 'Smartphone':
                                IconComponent = Smartphone;
                                break;
                              case 'Cloud':
                                IconComponent = Cloud;
                                break;
                              case 'Lightbulb':
                                IconComponent = Lightbulb;
                                break;
                              default:
                                IconComponent = Monitor;
                            }

                            return (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className={`flex items-center px-8 py-3 text-sm transition-colors hover:bg-gray-100
                                    ${pathname === item.href
                                      ? 'text-secondary font-medium'
                                      : 'text-default hover:text-secondary'}`}
                                >
                                  <div className="flex-shrink-0 mr-3">
                                    <div className="p-1 rounded-full bg-primary/10 text-primary">
                                      <IconComponent className="h-4 w-4" />
                                    </div>
                                  </div>
                                  <div>
                                    <p className="font-medium">{item.label}</p>
                                    <p className="text-xs text-gray-500">{item.description}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </React.Fragment>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4"
              >
                <Link
                  href="/contactanos"
                  className="block text-center text-base font-medium text-white bg-primary hover:bg-secondary transition-colors rounded-xl py-3 px-4"
                >
                  Contáctanos
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;