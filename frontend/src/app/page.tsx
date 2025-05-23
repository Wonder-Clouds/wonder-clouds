import HeroSection from "@/app/components/HeroSection";
import MovingCirclesBackground from "@/components/ui/MovingCirclesBackground";
import Services from "@/app/components/Services";
import ProjectsCarousel from "@/app/components/ProjectsCarousel";
import WonderClouds from "@/app/components/WonderClouds";
import ContactUsForm from "@/app/components/ContactUsForm";
import OurProcess from "./components/OurProcess";

const Inicio = () => {
  return (
    <div>
      <div className=" flex flex-row w-full lg:w-full items-center relative px-auto mx-auto">
        <MovingCirclesBackground />
        <HeroSection />
      </div>

      <WonderClouds />

      <div className="container flex flex-col w-full lg:max-w-7xl relative space-y-10 mx-auto mt-24 ">
        <Services />
      </div>

      <div className="container flex flex-col w-full lg:max-w-7xl relative space-y-10 mx-auto mt-24 ">
        <OurProcess />
      </div>

      <div className="container flex flex-col w-full lg:w-3/4 items-center relative space-y-20 mx-auto mt-40">
        <ProjectsCarousel />
      </div>

      <div className="flex flex-row w-full lg:w-full items-center space-y-10 relative mx-auto mt-24 px-auto bg-light">
        <MovingCirclesBackground />
        <ContactUsForm />
      </div>
    </div>
  );
}

export default Inicio;