import { useState, useEffect } from 'react'

export default function PokemonCard({ pokemon }) {
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon') || '[]')
    setIsSaved(savedPokemon.includes(pokemon.name))
  }, [pokemon.name])

  const handleSaveToPokedex = () => {
    const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon') || '[]')

    if (!savedPokemon.includes(pokemon.name)) {
      const updatedSaved = [...savedPokemon, pokemon.name]
      localStorage.setItem('savedPokemon', JSON.stringify(updatedSaved))
      setIsSaved(true)
    }
  }

  const handleRemoveFromPokedex = () => {
    const savedPokemon = JSON.parse(localStorage.getItem('savedPokemon') || '[]')
    const updatedSaved = savedPokemon.filter(name => name !== pokemon.name)
    localStorage.setItem('savedPokemon', JSON.stringify(updatedSaved))
    setIsSaved(false)
  }

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="text-center">
        {pokemon.image ? (
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-20 h-20 mx-auto mb-2"
          />
        ) : (
          <div className="w-20 h-20 mx-auto mb-2 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
        <h3 className="font-semibold text-gray-800 capitalize mb-2">
          {pokemon.name}
        </h3>
        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 mb-3">
          #{pokemon.id.toString().padStart(3, '0')}
        </div>

        {isSaved ? (
          <button
            onClick={handleRemoveFromPokedex}
            className="w-full bg-red-800 text-white px-3 py-2 text-sm rounded hover:bg-red-900 transition-colors"
          >
            Remove from Pokédex
          </button>
        ) : (
          <button
            onClick={handleSaveToPokedex}
            className="w-full bg-green-600 text-white px-3 py-2 text-sm rounded hover:bg-green-700 transition-colors"
          >
            Save to Pokédex
          </button>
        )}
      </div>
    </div>
  )
}