import Button from "../ui/Button"
import Input from "../ui/Input"
import Card from "../ui/Card"
import Alert from "../ui/alerta"

function Showcase() {
    return (
        <section className="py-24 px-10 bg-white">
            <h2 className="text-4xl font-bold text-center mb-14">
                Catálogo de Componentes
            </h2>

            <div className="flex flex-col gap-8 items-center">
                <Button text="Botón principal" />

                <div className="w-72">
                    <Input placeholder="Escribe aquí" />
                </div>

                <Card />

                <div className="w-96">
                    <Alert />
                </div>
            </div>
        </section>
    )
}

export default Showcase