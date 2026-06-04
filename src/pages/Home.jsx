import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

export default function Home() {

  return (
    <div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Pokédoke
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Search for Pokémon or explore our features
          </p>

          <SearchBar />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Pokédex</h3>
            <p className="text-gray-600 mb-4">
              Browse and explore all your Pokémon with their stats and information.
            </p>
            <Link
              to="/pokedex"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View Pokédex →
            </Link>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Who's That Pokémon?</h3>
            <p className="text-gray-600 mb-4">
              Test your knowledge by guessing Pokémon from silhouettes.
            </p>
            <Link
              to="/pokeguesser"
              className="text-red-600 hover:text-red-700  font-medium"
            >
              Start Game →
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}