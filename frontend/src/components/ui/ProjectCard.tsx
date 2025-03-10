import Image from "next/image"
import { Divider } from "./Dividers"

interface CardProjectProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  type: string[];
}

const CardProject = ({
  title,
  imageSrc,
  imageAlt,
  type
}: CardProjectProps) => {
  return (
    <article className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl overflow-hidden">
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={imageAlt}
          fill
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="flex flex-col p-4 sm:p-5 space-y-4">
        {/* Project Type Badge */}
        <div className="flex flex-wrap gap-2">
          {type.map((t, index) => (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-200 text-gray-700 font-medium">
              <span key={index}>{t}</span>
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </article>
  )
}

export default CardProject