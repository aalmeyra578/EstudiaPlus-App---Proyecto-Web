import { AlertCircle, FileText, Info, ListChecks, Mail, SquareCheck } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ComponentShowcase() {
  return (
    <section id="showcase" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            Biblioteca de componentes (demo estática)
          </h2>
          <p className="mt-4 text-muted-foreground">
            Base visual del design system: botón turquesa <code className="rounded bg-muted px-1 font-mono text-xs">#33B4C3</code>, campos grises{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">#BCBCBC</code> y tipografía Inter + JetBrains Mono.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          <div>
            <h3 className="font-mono text-lg font-semibold">Botones</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button className="bg-[var(--ep-cta)] font-mono text-black transition-transform duration-150 hover:scale-[1.02] hover:bg-[var(--ep-cta)] active:scale-[0.98]">
                Primario
              </Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructivo</Button>
              <Button variant="link">Link</Button>
              <Button disabled>Deshabilitado</Button>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold">Campos de texto</h3>
            <div className="mt-4 grid max-w-xl gap-6">
              <div className="grid gap-2">
                <Label htmlFor="demo-email" className="inline-flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden strokeWidth={2} />
                  Correo
                </Label>
                <Input
                  id="demo-email"
                  type="email"
                  placeholder="nombre@universidad.edu"
                  className="transition-shadow duration-150 focus-visible:ring-2"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="demo-error" className="inline-flex items-center gap-2">
                  <AlertCircle className="size-4 shrink-0 text-destructive" aria-hidden strokeWidth={2} />
                  Estado de error
                </Label>
                <Input
                  id="demo-error"
                  aria-invalid
                  className="border-destructive focus-visible:ring-destructive"
                  defaultValue="valor inválido"
                />
                <p className="text-sm text-destructive">Revisá el formato del campo.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold">Textarea, select y checkbox</h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Controles pensados para pantallas de formulario del producto (tareas, notas y cuenta).
            </p>
            <div className="mt-4 grid max-w-2xl gap-6 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="demo-textarea" className="inline-flex items-center gap-2">
                  <FileText className="size-4 shrink-0 text-muted-foreground" aria-hidden strokeWidth={2} />
                  Textarea
                </Label>
                <Textarea id="demo-textarea" placeholder="Notas o descripción larga…" rows={4} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="demo-select" className="inline-flex items-center gap-2">
                  <ListChecks className="size-4 shrink-0 text-muted-foreground" aria-hidden strokeWidth={2} />
                  Select
                </Label>
                <Select defaultValue="pendiente">
                  <SelectTrigger id="demo-select">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="completada">Completada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 md:col-span-2">
                <Checkbox id="demo-check" defaultChecked />
                <Label htmlFor="demo-check" className="inline-flex items-center gap-2">
                  <SquareCheck className="size-4 shrink-0 text-muted-foreground" aria-hidden strokeWidth={2} />
                  Checkbox de ejemplo
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold">Tarjetas</h3>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <Card className="border-2 transition-shadow duration-200 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-mono">Nueva tarea</CardTitle>
                  <CardDescription>Formulario de alta con datos principales.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ejemplo de contenido dentro de una card del design system.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="outline">
                    Cancelar
                  </Button>
                  <Button size="sm">Guardar</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-primary/20 bg-accent/20">
                <CardHeader>
                  <CardTitle className="font-mono">Calendario</CardTitle>
                  <CardDescription>Vista mensual con hitos por fecha.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Texto de apoyo para contenido secundario.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold">Modal (diálogo)</h3>
            <div className="mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Abrir modal</Button>
                </DialogTrigger>
                <DialogContent className="duration-200 data-[state=open]:animate-in">
                  <DialogHeader>
                    <DialogTitle>Ejemplo de modal</DialogTitle>
                    <DialogDescription>
                      Los diálogos reutilizan el componente Radix + estilos del sistema.
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm text-muted-foreground">
                    Sin lógica de negocio: solo demostración de capas y foco accesible.
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg font-semibold">Alertas</h3>
            <div className="mt-4 grid max-w-2xl gap-4">
              <Alert>
                <Info className="size-4" />
                <AlertTitle>Informativa</AlertTitle>
                <AlertDescription>
                  Mensaje neutro para estados generales del sistema.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Destructiva</AlertTitle>
                <AlertDescription>
                  Ejemplo de error o bloqueo que requiere atención del usuario.
                </AlertDescription>
              </Alert>
              <Alert className="border-emerald-500/40 bg-emerald-50 text-emerald-950">
                <Info className="size-4 text-emerald-600" />
                <AlertTitle>Éxito (variante con clases)</AlertTitle>
                <AlertDescription>
                  shadcn incluye variantes base, demás tonos se ajustan con utilidades cuando hace falta.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
