import type { ReactNode } from "react"

interface AuthFormLayoutProps {
  imageSrc: string
  imageAlt: string
  imageClassName: string
  imageWidth: number
  imageHeight: number
  imageLoading: "lazy" | "eager"
  header: ReactNode
  children: ReactNode
}

export function AuthFormLayout({
  imageSrc,
  imageAlt,
  imageClassName,
  imageWidth,
  imageHeight,
  imageLoading,
  header,
  children,
}: AuthFormLayoutProps) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[742px]">
        <div className="mb-6 flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={imageClassName}
            width={imageWidth}
            height={imageHeight}
            loading={imageLoading}
            decoding="async"
          />
        </div>

        {header}

        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}
