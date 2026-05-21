function Hero() {
    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-blue-100 to-white"
        >
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
                Organiza tu vida académica
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Gestiona tareas, apuntes y calendario desde una sola plataforma moderna y fácil de usar.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl text-lg shadow-lg">
                Comenzar ahora
            </button>
        </section>
    )
}

export default Hero