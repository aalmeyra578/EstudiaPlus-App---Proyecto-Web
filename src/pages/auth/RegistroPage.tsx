import { Link } from "react-router-dom"
import { Lock, Mail, User } from "lucide-react"

import { AppButton } from "@/components/app/AppButton"
import { AuthInput } from "@/components/auth/AuthInput"
import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { HERO_IMAGE_PATH } from "@/lib/utils"

export function RegistroPage() {
  return (
    <AuthFormLayout
      imageSrc={HERO_IMAGE_PATH}
      imageAlt="Logo de EstudiaPlus: libro abierto, calendario con check verde y birrete amarillo de graduación"
      imageClassName="h-[192px] w-[304px] max-w-full rounded-2xl object-cover shadow-sm"
      imageWidth={304}
      imageHeight={192}
      imageLoading="lazy"
      header={
        <h1 className="mb-6 text-center font-mono text-[32px] tracking-tight">
          Crea tu cuenta
        </h1>
      }
    >
      <AuthInput
        id="nombre"
        type="text"
        placeholder="Nombre completo"
        icon={<User className="size-6 text-foreground/70" />}
      />

      <AuthInput
        id="email"
        type="email"
        placeholder="Correo electronico"
        icon={<Mail className="size-6 text-foreground/70" />}
      />

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

      <AuthInput
        id="confirm-password"
        type="password"
        placeholder="Confirmar contraseña"
        icon={<Lock className="size-5 text-foreground/70" />}
      />

      <AppButton variant="cta" label="Crear cuenta" />

      <p className="text-center font-mono text-xl font-bold">
        Ya tenés cuenta?{" "}
        <Link to="/login" className="underline underline-offset-2">
          Iniciar sesión
        </Link>
      </p>
    </AuthFormLayout>
  )
}
