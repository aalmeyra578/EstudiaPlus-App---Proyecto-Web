function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-600">
                EstudiaPlus
            </h1>

            <nav className="flex gap-6">
                <a href="#" className="hover:text-blue-600 transition">
                    Inicio
                </a>

                <a href="#" className="hover:text-blue-600 transition">
                    Funciones
                </a>

                <a href="#" className="hover:text-blue-600 transition">
                    FAQ
                </a>
            </nav>
        </header>
    )
}

export default Header