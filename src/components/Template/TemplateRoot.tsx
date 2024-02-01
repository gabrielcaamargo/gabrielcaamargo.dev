interface ITemplateRootProps {
  hasBorder?: boolean
  children: React.ReactNode,
  className?: string
}

export function TemplateRoot({ hasBorder = false, children, className }: ITemplateRootProps) {
  return (
    <section className={`py-9 max-md:py-4 ${hasBorder && 'border-b'} ${className}`}>
      {children}
    </section>
  )
}