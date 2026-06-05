import { Link } from "react-router-dom"
import { Lock, Mail, User } from "lucide-react"

import { HERO_IMAGE_PATH } from "@/lib/utils"

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

export function RegistroPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[742px]">
        {/* Hero logo / brand illustration */}
        <div className="mb-6 flex justify-center">
          <img
            src={HERO_IMAGE_PATH}
            alt="Logo de EstudiaPlus: libro abierto, calendario con check verde y birrete amarillo de graduación"
            className="h-[192px] w-[304px] max-w-full rounded-2xl object-cover shadow-sm"
            width={304}
            height={192}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Title */}
        <h1 className="mb-6 text-center font-mono text-[32px] tracking-tight">
          Crea tu cuenta
        </h1>

        <div className="flex flex-col gap-4">
          {/* Full name */}
          <AuthInput
            id="nombre"
            type="text"
            placeholder="Nombre completo"
            icon={<User className="size-6 text-foreground/70" />}
          />

          {/* Email */}
          <AuthInput
            id="email"
            type="email"
            placeholder="Correo electronico"
            icon={<Mail className="size-6 text-foreground/70" />}
          />

          {/* Password */}
          <div className="flex flex-col gap-1">
            <AuthInput
              id="password"
              type="password"
              placeholder="Contraseña"
              icon={<Lock className="size-5 text-foreground/70" />}
            />
            <p className="pl-2 font-sans text-base leading-snug text-red-600">
              * Al menos 8 caracteres
              <br />* 1 número, 1 mayúscula
            </p>
          </div>

          {/* Confirm password */}
          <AuthInput
            id="confirm-password"
            type="password"
            placeholder="Confirmar contraseña"
            icon={<Lock className="size-5 text-foreground/70" />}
          />

          {/* CTA */}
          <button
            type="button"
            className="mt-2 h-[57px] w-full rounded-pill font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-cta)" }}
          >
            Crear cuenta
          </button>

          {/* Login link */}
          <p className="text-center font-mono text-xl font-bold">
            Ya tenés cuenta?{" "}
            <Link to="/login" className="underline underline-offset-2">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
