interface AuthInputProps {
  id: string
  type: string
  placeholder: string
  icon: React.ReactNode
}

export function AuthInput({ id, type, placeholder, icon }: AuthInputProps) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-4 flex size-[51px] shrink-0 items-center justify-center">
        {icon}
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-[95px] w-full rounded-field bg-ep-field pl-[72px] pr-5 font-sans text-base text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-ep-cta"
      />
    </div>
  )
}
