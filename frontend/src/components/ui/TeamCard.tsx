import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl?: string;
  githubUrl?: string;
  instagramUrl?: string;
  description?: string;
}

const TeamCard = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  description = "Miembro del equipo con experiencia en desarrollo y liderazgo de proyectos innovadores.",
}: TeamCardProps) => {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden group cursor-pointer">
      <Image
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        src={imageSrc}
        width={400}
        height={400}
        alt={name}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

      <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-2xl text-white font-semibold font-quicksand">{name}</h3>
        <p className="text-gray-200 font-quicksand">{role}</p>
      </div>

      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
        <h3 className="text-2xl font-semibold font-quicksand mb-2">{name}</h3>
        <p className="text-blue-100 font-quicksand mb-4">{role}</p>
        <p className="text-sm text-center text-blue-50 mb-6 font-quicksand">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;