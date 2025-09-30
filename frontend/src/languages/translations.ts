import { usePathname } from "next/navigation";

export function useLocale() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  return locale.includes(locale) ? locale : "es";
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      projects: "Proyectos",
      contactUs: "Contáctanos",
      language: "Idioma",
    },
    services: {
      webDevelopment: "Desarrollo Web",
      webDescription: "Creamos sitios web modernos y funcionales",
      mobileDevelopment: "Desarrollo Móvil",
      mobileDescription: "Aplicaciones nativas y multiplataforma",
      cloudServices: "Servicios en la Nube",
      cloudDescription: "Soluciones escalables en la nube",
      consulting: "Consultoría",
      consultingDescription: "Asesoramiento tecnológico especializado",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      projects: "Projects",
      contactUs: "Contact Us",
      language: "Language",
    },
    services: {
      webDevelopment: "Web Development",
      webDescription: "We create modern and functional websites",
      mobileDevelopment: "Mobile Development",
      mobileDescription: "Native and cross-platform applications",
      cloudServices: "Cloud Services",
      cloudDescription: "Scalable cloud solutions",
      consulting: "Consulting",
      consultingDescription: "Specialized technology consulting",
    },
  },
};

export const useTranslations = (locale: keyof typeof translations) => {
  return translations[locale] || translations.es;
};
