import { Link } from "react-router-dom"
import { Mail } from "lucide-react"

import { AppButton } from "@/components/app/AppButton"
import { AuthInput } from "@/components/auth/AuthInput"
import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { HERO_IMAGE_PATH } from "@/lib/utils"

export function RecuperarContrasenaPage() {
  return (
    <AuthFormLayout
      imageSrc={HERO_IMAGE_PATH}
      imageAlt="Logo de EstudiaPlus: libro abierto, calendario con check verde y birrete amarillo de graduación"
      imageClassName="h-[192px] w-[304px] max-w-full rounded-2xl object-cover shadow-sm"
      imageWidth={304}
      imageHeight={192}
      imageLoading="lazy"
      header={
        <>
          <h1 className="mb-4 text-center font-mono text-[32px] tracking-tight">
            Recuperá tu contraseña
          </h1>
          <p className="mb-6 font-mono text-xl font-bold leading-snug">
            Ingresá el correo electrónico asociado a tu cuenta
            <br />
            para enviarte las instrucciones:
          </p>
        </>
      }
    >
      <AuthInput
        id="email"
        type="email"
        placeholder="Correo electronico"
        icon={<Mail className="size-6 text-foreground/70" />}
      />

      <AppButton variant="cta" label="Enviar enlace" />

      <p className="text-center">
        <Link to="/login" className="font-sans text-base underline underline-offset-2">
          Volver al inicio de sesión
        </Link>
      </p>
    </AuthFormLayout>
  )
}
