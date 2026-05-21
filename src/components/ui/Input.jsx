function Input({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="
        border
        border-gray-300
        rounded-xl
        px-4
        py-3
        w-full
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        transition-all
        duration-300
      "
        />
    )
}

export default Input