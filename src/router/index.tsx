import { createBrowserRouter, Navigate } from "react-router-dom"

import { AppLayout } from "@/layouts/AppLayout"
import { ApuntesPage } from "@/pages/app/ApuntesPage"
import { CalendarioPage } from "@/pages/app/CalendarioPage"
import { EditarTareaPage } from "@/pages/app/EditarTareaPage"
import { InicioPage } from "@/pages/app/InicioPage"
import { EditarApuntePage } from "@/pages/app/EditarApuntePage"
import { NuevaTareaPage } from "@/pages/app/NuevaTareaPage"
import { NuevoApuntePage } from "@/pages/app/NuevoApuntePage"
import { TareasPage } from "@/pages/app/TareasPage"
import { LoginPage } from "@/pages/auth/LoginPage"
import { RecuperarContrasenaPage } from "@/pages/auth/RecuperarContrasenaPage"
import { RegistroPage } from "@/pages/auth/RegistroPage"
import { LandingPage } from "@/pages/LandingPage"
import { NotFoundPage } from "@/pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registro",
    element: <RegistroPage />,
  },
  {
    path: "/recuperar-contrasena",
    element: <RecuperarContrasenaPage />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="inicio" replace />,
      },
      {
        path: "inicio",
        element: <InicioPage />,
      },
      {
        path: "tareas",
        element: <TareasPage />,
      },
      {
        path: "tareas/nueva",
        element: <NuevaTareaPage />,
      },
      {
        path: "tareas/:id/editar",
        element: <EditarTareaPage />,
      },
      {
        path: "calendario",
        element: <CalendarioPage />,
      },
      {
        path: "apuntes",
        element: <ApuntesPage />,
      },
      {
        path: "apuntes/nuevo",
        element: <NuevoApuntePage />,
      },
      {
        path: "apuntes/:id",
        element: <EditarApuntePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
