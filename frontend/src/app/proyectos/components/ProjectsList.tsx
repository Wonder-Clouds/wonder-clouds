import CardProject from "@/components/ui/ProjectCard"

const ProjectsList = () => {
  return (
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mx-auto mt-12 p-5">
      <CardProject
        title="Plataforma web para el CORLAD-Cusco"
        imageSrc="/static/images/proyecto_01.webp"
        imageAlt="Proyecto numero 1"
        type={["Plataforma web", "Dashboard", "CMS"]}
      />
      <CardProject
        title="Plataforma web para la gestión de ventas - El Comercio"
        imageSrc="/static/images/proyecto_02.webp"
        imageAlt="Proyecto paltos"
        type={["Plataforma web", "Dashboard", "CRM"]}
      />
      <CardProject
        title="Campaña de Marketing Digital para el Congreso Internacional de Administración"
        imageSrc="/static/images/prueba5.png"
        imageAlt="Proyecto numero 1"
        type={["Marketing Digital", "Organización de eventos"]}
      />
      <CardProject
        title="Desarrollo web para AER Athletic Club"
        imageSrc="/static/images/prueba3.png"
        imageAlt="AER. Athelitic Club"
        type={["Sitio web"]}
      />
      <CardProject
        title="Desarrollo web para Peruvian Cusco Travel Tour"
        imageSrc="/static/images/prueba4.png"
        imageAlt="Peruvian Cusco Travel Tour"
        type={["Sitio web"]}
      />
    </div>
  )
}

export default ProjectsList;