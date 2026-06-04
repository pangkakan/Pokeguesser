import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="border-b">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Pokédoke</h1>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={isActive('/') ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600"}
            >
              Home
            </Link>
            <Link
              to="/search"
              className={isActive('/search') ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600"}
            >
              Search
            </Link>
            <Link
              to="/pokedex"
              className={isActive('/pokedex') ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600"}
            >
              Pokédex
            </Link>
            <Link
              to="/pokeguesser"
              className={isActive('/pokeguesser') ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600"}
            >
              Game
            </Link>
          </div>

          
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Hamburger menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded ${isActive('/') ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
            >
              Home
            </Link>
            <Link
              to="/search"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded ${isActive('/search') ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
            >
              Search
            </Link>
            <Link
              to="/pokedex"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded ${isActive('/pokedex') ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
            >
              Pokédex
            </Link>
            <Link
              to="/pokeguesser"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded ${isActive('/pokeguesser') ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
            >
              Game
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}