import Image, { StaticImageData } from "next/image";

interface IBadgeProps {
  icon?: StaticImageData;
  title: string
}

export function Badge({ icon, title }: IBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-md border w-full border-white border-opacity-25 px-2 py-1" title={title}>
      {icon && (
        <Image 
          src={icon} 
          alt="Skill" 
          width={16}
          height={16}
          className="grayscale"
        />
      )}
      <small className="text-white text-opacity-75 whitespace-nowrap">{title}</small>
    </div>
  )
}