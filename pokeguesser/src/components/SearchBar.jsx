import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex">
        <input
          type="text"
          placeholder="Search pokémon by name or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-500"
        />
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700"
        >
          Search
        </button>
      </div>
    </div>
  )
}