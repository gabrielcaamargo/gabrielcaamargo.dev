import { Badge } from "@/components/Badge"
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"

import typescript from '../assets/icons/typescript.png'
import react from '../assets/icons/react.png'
import nest from '../assets/icons/nest.png'

export default function Home() {
  return (
    <main>
      <section className="bg-black px-8 py-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            <Header />
            <Menu />
          </div>
          <div className="mt-24 grid grid-cols-2 gap-10 animate-[show_1.5s_linear_1] antialiased">
            <div className="max-w-[500px]">
              <div className="flex flex-col text-lg">
                <strong className="text-4xl">Gabriel Camargo</strong>
                <span className="opacity-75">Fullstack & mobile developer</span>
              </div>
              <p className="mt-2 text-xl">Passionate about technology. Full stack developer with 3 years of professional experience. Seeking to deliver the best results and generate the best experiences.</p>

              <div className="mt-4 flex items-center gap-2">
                <Badge title="Typescript" icon={typescript} />
                <Badge title="React" icon={react} />
                <Badge title="React Native" icon={react} />
                <Badge title="NestJS" icon={nest} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>gabrielcaamargo.dev</h1>
    </main>
  )
}