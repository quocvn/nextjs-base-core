import { useGetPokemonListQuery } from 'services/pokemon.service'
import { Pokemon } from 'types/pokemon.type'

const About = () => {
  // Using a query hook automatically fetches data and returns query values
  const { isLoading, data, error } = useGetPokemonListQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { isLoading, data, error } = pokemonApi.endpoints.getPokemonByName.useQuery(pokemonName)

  // isLoading chỉ = true cho lần fetch api đầu tiên
  // isFetching là cho mỗi lần gọi API => show spinner, skeleton
  // eslint-disable-next-line no-console
  console.log({ isLoading, data, error })

  return (
    <div className='container mx-auto p-20'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
        {data?.map((item: Pokemon) => (
          <div className='w-full max-w-sm rounded-lg border border-gray-200 bg-gray-50 shadow'>
            <div className='flex flex-col items-center pb-10'>
              <img
                className='mb-3 h-24 w-24 rounded-full shadow-lg'
                src={item.image}
                alt={item.name}
              />
              <h5 className='mb-1 text-xl font-medium text-gray-900'>{`Name: ${item.name}`}</h5>
              <span className='text-sm text-gray-500'>{`Type: ${item.types}`} </span>
              <div className='mt-4 flex space-x-3 md:mt-6'>
                <button
                  type='button'
                  className='inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300'
                >
                  Edit
                </button>
                <button
                  type='button'
                  className='inline-flex items-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
