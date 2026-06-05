import { Link } from "react-router-dom"
import { Mail } from "lucide-react"

import { HERO_IMAGE_PATH } from "@/lib/utils"

export function RecuperarContrasenaPage() {
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
        <h1 className="mb-4 text-center font-mono text-[32px] tracking-tight">
          Recuperá tu contraseña
        </h1>

        {/* Instruction text */}
        <p className="mb-6 font-mono text-xl font-bold leading-snug">
          Ingresá el correo electrónico asociado a tu cuenta
          <br />
          para enviarte las instrucciones:
        </p>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="relative flex items-center">
            <div className="absolute left-4 flex size-[51px] shrink-0 items-center justify-center">
              <Mail className="size-6 text-foreground/70" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Correo electronico"
              className="h-[95px] w-full rounded-field bg-ep-field pl-[72px] pr-5 font-sans text-base text-foreground placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-ep-cta"
            />
          </div>

          {/* CTA */}
          <button
            type="button"
            className="mt-2 h-[57px] w-full rounded-pill font-mono text-2xl tracking-tight transition-opacity hover:opacity-90"
            style={{ background: "var(--ep-cta)" }}
          >
            Enviar enlace
          </button>

          <p className="text-center">
            <Link to="/login" className="font-sans text-base underline underline-offset-2">
              Volver al inicio de sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
