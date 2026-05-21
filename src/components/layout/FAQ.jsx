function FAQ() {
    return (
        <section id="faq" className="py-24 px-10 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12">
                Preguntas frecuentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl mb-2">
                        ¿Puedo editar tareas?
                    </h3>

                    <p className="text-gray-600">
                        Sí, puedes modificar tareas y actualizar su estado.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-bold text-xl mb-2">
                        ¿La aplicación incluye calendario?
                    </h3>

                    <p className="text-gray-600">
                        Sí, cuenta con una vista de calendario para organizar fechas importantes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQ