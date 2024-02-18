import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { Introduction } from "@/components/Introduction";
import { Card } from "@/components/Card";

import { skills } from "@/utils/skills";
import { Template } from "@/components/Template";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Gabriel Camargo | Home",
};

export default function Home() {
  return (
    <main>
      <Template.Root className="bg-black pb-24">
        <Template.Content>
          <Header />
          <div className="mt-24 max-md:mt-4 grid grid-cols-2 gap-10 animate-[show_1.5s_linear_1] antialiased justify-between max-md:grid-cols-1">
            <Introduction.Text />
            <Introduction.Image />
          </div>
        </Template.Content>
      </Template.Root>

      <Template.Root hasBorder>
        <Template.Content>
          <Template.Title>Skills</Template.Title>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {skills.map(skill => (
              <Card.Content
                key={skill.id}
                technology={skill.technology}
                environment={skill.environment}
                experienceTime={skill.experienceTime}
              />
            ))}
          </div>
        </Template.Content>
      </Template.Root>

      <Template.Root hasBorder>
        <Template.Content>
          <Template.Title>Professional experience</Template.Title>

          <Timeline.Root>
            <div className="flex flex-col">
              <Timeline.Content
                company="Agência Mi Digital"
                workingTime="Jul/21 - May/22"
                role="Web developer"
                description="As a web developer, I created landing pages following UI/UX standards and maintained web systems, developing new features to better serve the user."
                technologies={['Wordpress', 'Elementor', 'HTML']}
              />

              <Timeline.Content
                company="fcinco. Comunicação Digital"
                workingTime="May/22 - Feb/23"
                role="Frontend developer"
                description="Frontend developer in relevant projects, participated in strategic decisions. I focused on creating new features and improving usability, fixing bugs and implementing code improvements, always ensuring a clean, organized and easy-to-maintain structure."
                className="mt-4"
                technologies={['React', 'Angular', 'Typescript', 'Laravel']}
              />

              <Timeline.Content
                company="Don Saúde"
                workingTime="Dec/23 - Present"
                role="Fullstack developer"
                description="As a Jr. fullstack developer, I actively participate in implementation decisions to optimize the system. I contribute to defining data structures and application flow, while also developing new features, applying improvements and facing technical challenges."
                className="mt-4"
                technologies={['NextJS', 'NestJS', 'Typescript']}
              />
            </div>
          </Timeline.Root>
        </Template.Content>
      </Template.Root>

      <Template.Root hasBorder>
        <Template.Content>
          <Template.Title>About me</Template.Title>

          <div className="flex flex-col gap-2">
            <p>Hello world! My name is Gabriel, I am 18 years old and in the last 3 years I&apos;ve been working as a fullstack developer. It all started during the pandemics when I did not have classes, so I used to spent all my day playing online games. I&apos;ve always been curious about all technology works and how it is changing the world every single second. I decided to take some action about this curiosity, and started learning web development, and... I found myself in there. Since this moment, I&apos;ve been specializing myself in the best and most modern technologies like: ReactJS, Typescript, React Native, AWS, NestJS, and more.</p>

            <p>I am always looking to improve myself and deliver the best results as possible, seeking to satisfy more than what was required of me in each task, in each project. Today I bring ideas and dreams to life. I bring life to new and already structured companies and present them to the world.</p>

            <div className="w-full flex flex-col items-center">
              <p className="text-lg text-center">Nice to meet you, I&apos;m Gabriel. Let&apos;s build something unimaginable <span className="font-bold">together?</span></p>
              <span className="text-center">
                <a href="mailto:gcamargo.dev@gmail.com" target="_blank" className="font-bold">Send a letter&nbsp;</a>
                <span className="opacity-75 text-xs">(also known as <i>email</i> in these modern days)</span>
              </span>
            </div>
          </div>
        </Template.Content>
      </Template.Root>
    </main>
  )
}