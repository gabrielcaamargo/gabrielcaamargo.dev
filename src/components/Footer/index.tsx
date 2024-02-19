import { InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className="py-4 flex flex-col items-center gap-4">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-center gap-2">
        <a href="https://linkedin.com/in/gabrielcaamargo" target='_blank'>
          <LinkedinLogo size={24} color='#FFF' className="duration-75 ease-in hover:opacity-75" />
        </a>
        <a href="https://instagram.com/gabcamargo" target='_blank'>
          <InstagramLogo size={24} color='#FFF' className="duration-75 ease-in hover:opacity-75" />
        </a>
      </div>
      <span className="text-center text-xs">Developed by Gabriel Camargo with so much ☕</span>
    </footer>
  )
}