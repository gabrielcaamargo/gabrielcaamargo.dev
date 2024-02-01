interface ICardContentProps {
  technology: string;
  environment: string;
  experienceTime: string;
}

export function CardContent({ technology, environment, experienceTime }: ICardContentProps) {
  return (
    <div className="flex flex-col p-4 rounded-lg border">
      <strong className="text-xl">{technology}</strong>
      <span className="opacity-75">{environment}</span>
      <p className="font-bold text-md mt-2">
        Experience: 
        <span className="font-normal">
          &nbsp;{experienceTime}
        </span>
      </p>
    </div>
  )
}