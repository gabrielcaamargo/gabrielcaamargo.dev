import { Badge } from "@/components/Badge"

import typescript from '../../assets/icons/typescript.png'
import react from '../../assets/icons/react.png'
import nest from '../../assets/icons/nest.png'

export function IntroductionText() {
  return (
    <div className="max-w-[520px]">
      <div className="flex flex-col text-lg">
        <strong className="text-4xl">Gabriel Camargo</strong>
        <span className="opacity-75">Fullstack & mobile developer</span>
      </div>
      
      <p className="mt-2 text-xl">Passionate about technology. Full stack developer with 3 years of professional experience. Always looking to deliver the best results and generate the best experiences.</p>

      <div className="mt-4 flex items-center gap-2 max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2">
        <Badge title="Typescript" icon={typescript} />
        <Badge title="React" icon={react} />
        <Badge title="React Native" icon={react} />
        <Badge title="NestJS" icon={nest} />
      </div>
    </div>
  )
}