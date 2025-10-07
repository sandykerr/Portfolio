export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-jetdark shadow-lg z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-sea tracking-tight">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="
                text-platinum hover:text-sea
                transition-colors duration-200
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="p-2 rounded hover:bg-[#312E30] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-platinum"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
