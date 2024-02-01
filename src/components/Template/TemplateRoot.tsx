'use client'
import { ComponentProps } from "react";

interface ITemplateRootProps extends ComponentProps<'div'>{
  children: React.ReactNode,
}

export function TemplateRoot({ children }: ITemplateRootProps) {
  return (
    <section className='max-w-[1200px] mx-auto mt-8 max-lg:px-6'>
      {children}
    </section>
  )
}