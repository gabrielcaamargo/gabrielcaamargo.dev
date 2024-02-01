interface ITemplateRootProps {
  hasBorder?: boolean
  children: React.ReactNode,
  className?: string
}

export function TemplateRoot({ hasBorder = false, children, className }: ITemplateRootProps) {
  return (
    <section className={`py-9 ${hasBorder && 'border-b'} ${className}`}>
      {children}
    </section>
  )
}