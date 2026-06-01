import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    console.log('Searching for:', searchTerm)
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Pokédoke</h1>
          <div className="flex space-x-4">
            <a href="/" className="text-blue-600 font-medium">Home</a>
            <a href="/pokedex" className="text-gray-600 hover:text-blue-600">Pokédex</a>
            <a href="/guess" className="text-gray-600 hover:text-blue-600">Who's That Pokémon?</a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Pokédoke
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Search for Pokémon or explore our features
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Search Pokémon..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pokédex</h3>
            <p className="text-gray-600 mb-4">
              Browse and explore all your Pokémon with their stats and information.
            </p>
            <a
              href="/pokedex"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Pokédex →
            </a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Who's That Pokémon?</h3>
            <p className="text-gray-600 mb-4">
              Test your knowledge by guessing Pokémon from silhouettes.
            </p>
            <a
              href="/guess"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Start Game →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
