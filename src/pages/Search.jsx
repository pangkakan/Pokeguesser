import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard'
import { getPokemonByName, getPokemonByType, getPokemonByAmmount } from '../api/pokeApi'

export default function Search() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchType, setSearchType] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const searchTerm = searchParams.get('q') || ''

  useEffect(() => {
    fetchPokemons()
  }, [searchTerm])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setError(null)

      if (searchTerm.trim()) {
        try {
          const data = await getPokemonByName(searchTerm)
          const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map(type => type.type.name)
          }
          setPokemons([pokemon])
          setSearchType('name')
        } catch (nameSearchError) {
          try {
            const typeData = await getPokemonByType(searchTerm)

            const pokemonOfType = typeData.pokemon.slice(0, 100)

            const pokemonDetails = await Promise.all(
              pokemonOfType.map(async (pokemonEntry) => {
                const details = await getPokemonByName(pokemonEntry.pokemon.name)
                return {
                  id: details.id,
                  name: details.name,
                  image: details.sprites.front_default,
                  types: details.types.map(type => type.type.name)
                }
              })
            )

            setPokemons(pokemonDetails)
            setSearchType('type')
          } catch (typeSearchError) {
            setPokemons([])
            setError(`No Pokémon found with name or type "${searchTerm}"`)
          }
        }
      } else {
        const data = await getPokemonByAmmount(100)
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const details = await getPokemonByName(pokemon.name)
            return {
              id: details.id,
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map(type => type.type.name)
            }
          })
        )

        setPokemons(pokemonDetails)
        setSearchType('')
      }
    } catch (err) {
      setError('Failed to fetch Pokémon data from API')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <div className="text-xl text-gray-600">Searching for Pokémon...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-xl text-red-600 mb-4">{error}</div>
          <div className="space-x-2">
            <button
              onClick={() => navigate('/search')}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Go back to Search
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar initialValue={searchTerm} />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {searchTerm.trim() ?
            (searchType === 'name' ? `Pokémon: "${searchTerm}"` :
             searchType === 'type' ? `${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)} Type Pokémon` :
             `Search Results for "${searchTerm}"`) :
            'Top 100 Pokémon'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  )
}