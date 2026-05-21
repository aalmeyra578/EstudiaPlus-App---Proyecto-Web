function Modal() {
    return (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold mb-4">
                    Modal de ejemplo
                </h2>

                <p className="text-gray-600 mb-6">
                    Este es un componente modal estático.
                </p>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default Modal