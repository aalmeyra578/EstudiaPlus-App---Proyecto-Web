import { Link } from "react-router-dom"
import { Lock, Mail } from "lucide-react"

import { AppButton } from "@/components/app/AppButton"
import { BrandWordmark } from "@/components/app/BrandWordmark"
import { AuthInput } from "@/components/auth/AuthInput"
import { AuthFormLayout } from "@/components/auth/AuthFormLayout"
import { BRAND_LOGO_PATH } from "@/lib/utils"

export function LoginPage() {
  return (
    <AuthFormLayout
      imageSrc={BRAND_LOGO_PATH}
      imageAlt="Logo de EstudiaPlus: libro abierto, calendario con check verde y birrete amarillo de graduación"
      imageClassName="aspect-[3/2] w-full max-w-[524px] rounded-2xl object-contain shadow-md"
      imageWidth={1536}
      imageHeight={1024}
      imageLoading="eager"
      header={
        <div className="mb-8 flex justify-center">
          <BrandWordmark size="hero" />
        </div>
      }
    >
      <AuthInput
        id="email"
        type="email"
        placeholder="Correo electronico"
        icon={<Mail className="size-6 text-foreground/70" />}
      />

      <AuthInput
        id="password"
        type="password"
        placeholder="Contraseña"
        icon={<Lock className="size-5 text-foreground/70" />}
      />

      <Link
        to="/recuperar-contrasena"
        className="font-sans text-base"
        style={{ color: "var(--ep-link)" }}
      >
        ¿Olvidaste tu contraseña?
      </Link>

      <AppButton variant="cta" label="Iniciar sesión" />

      <p className="text-center font-mono text-xl font-bold">
        ¿No tenes cuenta?{" "}
        <Link to="/registro" className="underline underline-offset-2">
          Registrarse
        </Link>
      </p>
    </AuthFormLayout>
  )
}
