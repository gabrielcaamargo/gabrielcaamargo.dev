'use client'
import { ComponentProps } from "react";

interface ITemplateContentProps extends ComponentProps<'div'>{
  children: React.ReactNode,
}

export function TemplateContent({ children }: ITemplateContentProps) {
  return (
    <section className='max-w-[1200px] mx-auto max-lg:px-6'>
      {children}
    </section>
  )
}