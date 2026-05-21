function Card() {
    return (
        <div
            className="
        bg-white
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        p-6
        rounded-2xl
        w-72
      "
        >
            <h3 className="text-2xl font-bold mb-3 text-center">
                Componentes
            </h3>

            <p className="text-gray-600 text-center">
                Ejemplo de componente reutilizable.
            </p>
        </div>
    )
}

export default Card