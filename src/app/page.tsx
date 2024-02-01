import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";

import { skills } from "@/utils/skills";
import { Template } from "@/components/Template";

export const metadata: Metadata = {
  title: "Gabriel Camargo | Home",
};


export default function Home() {
  return (
    <main>
      <section className="bg-black px-8 py-6 max-md:px-6">
        <Template.Root>
          <Header />
          <div className="mt-24 grid grid-cols-2 gap-10 animate-[show_1.5s_linear_1] antialiased justify-between max-md:grid-cols-1">
            <Introduction.Text />
            <Introduction.Image />
          </div>
        </Template.Root>
      </section>

      <Template.Root>
        <strong className="text-3xl">Skills</strong>

        <div className="grid grid-cols-4 gap-4 mt-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {skills.map(skill => (
            <Card.Content 
              key={skill.id}
              technology={skill.technology}
              environment={skill.environment}
              experienceTime={skill.experienceTime}
            />
          ))}
        </div>
      </Template.Root>
    </main>
  )
}