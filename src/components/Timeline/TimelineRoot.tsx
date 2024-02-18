interface ITimelineRootProps {
  children: React.ReactNode
}

export function TimelineRoot({ children }: ITimelineRootProps) {
  return (
    <div className="flex flex-col max-w-[512px] max-md:w-full max-md:max-w-full  mx-auto">
      <div className="flex h-full gap-4">
        <span className="w-[1px] bg-white opacity-75 h-[full]"></span>
        {children}
      </div>
    </div>
  )
}