function Button({ text }) {
    return (
        <button
            className="
        bg-blue-600
        hover:bg-blue-700
        active:scale-95
        transition-all
        duration-300
        text-white
        px-5
        py-3
        rounded-xl
        shadow-md
      "
        >
            {text}
        </button>
    )
}

export default Button