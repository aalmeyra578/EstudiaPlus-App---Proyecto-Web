import { Link } from "react-router-dom"
import { Lock, Mail } from "lucide-react"

import { BrandWordmark } from "@/components/app/BrandWordmark"
import { BRAND_LOGO_PATH } from "@/lib/utils"

function AuthInput({
  id,
  type,
  placeholder,
  icon,
}: {
  id: string
  type: string
  placeholder: string
  icon: React.ReactNode
}) {
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

export function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[742px]">
        {/* Hero logo / brand illustration */}
        <div className="mb-6 flex justify-center">
          <img
            src={BRAND_LOGO_PATH}
            alt="Logo de EstudiaPlus: libro abierto, calendario con check verde y birrete amarillo de graduación"
            className="aspect-[3/2] w-full max-w-[524px] rounded-2xl object-contain shadow-md"
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Brand title */}
        <div className="mb-8 flex justify-center">
          <BrandWordmark size="hero" />
        </div>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <AuthInput
            id="email"
            type="email"
            placeholder="Correo electronico"
            icon={<Mail className="size-6 text-foreground/70" />}
          />

          {/* Password */}
          <AuthInput
            id="password"
            type="password"
            placeholder="Contraseña"
            icon={<Lock className="size-5 text-foreground/70" />}
          />

          {/* Forgot password */}
          <Link
            to="/recuperar-contrasena"
            className="font-sans text-base"
            style={{ color: "var(--ep-link)" }}
          >
            ¿Olvidaste tu contraseña?
          </Link>

          {/* CTA */}
          <button
            type="button"
            className="mt-2 h-[57px] w-full rounded-pill font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-cta)" }}
          >
            Iniciar sesión
          </button>

          {/* Register link */}
          <p className="text-center font-mono text-xl font-bold">
            ¿No tenes cuenta?{" "}
            <Link to="/registro" className="underline underline-offset-2">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
