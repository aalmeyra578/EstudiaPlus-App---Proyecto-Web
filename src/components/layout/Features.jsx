function Features() {
    const features = [
        {
            title: "Gestión de tareas",
            description: "Crea, edita y organiza tus actividades pendientes.",
        },
        {
            title: "Calendario",
            description: "Visualiza entregas y eventos importantes fácilmente.",
        },
        {
            title: "Apuntes",
            description: "Guarda y organiza notas académicas rápidamente.",
        },
    ]
    return (
        <section id="funciones" className="py-24 px-10 bg-white">
            <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
                Funcionalidades
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-blue-50 p-8 rounded-2xl shadow hover:scale-105 transition"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-blue-700">
                            {feature.title}
                        </h3>

                        <p className="text-gray-600">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features