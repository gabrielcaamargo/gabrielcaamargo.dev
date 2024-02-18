import { ComponentProps } from "react";
import { Badge } from "../Badge";

interface ITimelineContentProps extends ComponentProps<'div'> {
  company: string
  workingTime: string
  role: string
  description: string
  technologies: Array<string>
}

export function TimelineContent({ company, workingTime, role, description, technologies, className }: ITimelineContentProps) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 h-3 w-3 rounded bg-white opacity-65 ml-[-22px] mt-1"></span>
      <span className="absolute top-1 left-1 h-3 w-3 rounded bg-white opacity-85 ml-[-22px] mt-1"></span>
      <strong className="block text-lg">{company}</strong>
      <span className="block font-medium opacity-95">{workingTime}</span>
      <span className="block opacity-75">{role}</span>
      <div>
        <p>{description}</p>
        <div className="flex mt-2">
          <span className="font-medium">Technologies:</span>
          <div className="ml-2 grid grid-cols-4 gap-1 max-md:grid-cols-2">
            {technologies.map((technology, index) => <Badge title={technology} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  )
}