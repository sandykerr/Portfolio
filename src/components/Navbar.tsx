export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            className="p-2 rounded hover:bg-gray-100 transition-colors"
          >
            {/* Simple hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}


/*
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6 justify-center">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

*/
