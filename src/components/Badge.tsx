import Image, { StaticImageData } from "next/image";

interface IBadgeProps {
  icon?: StaticImageData;
  title: string;
  textSize?: string
}

export function Badge({ icon, title, textSize = 'text-sm' }: IBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-md border w-full px-2 py-1" title={title}>
      {icon && (
        <Image 
          src={icon} 
          alt="Skill" 
          width={16}
          height={16}
          className="grayscale"
        />
      )}
      <small className={`text-white text-opacity-75 whitespace-nowrap ${textSize}`}>{title}</small>
    </div>
  )
}