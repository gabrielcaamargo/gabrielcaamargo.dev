interface ITemplateTitleProps {
  children: React.ReactNode
}

export function TemplateTitle({ children }: ITemplateTitleProps) {
  return <strong className="text-3xl mb-2 block">{children}</strong>
}