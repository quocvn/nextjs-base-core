import { Spin, Typography } from 'antd'
import { useRouter } from 'next/router'

import { useDeletePokemonMutation, useGetPokemonListQuery } from 'services/pokemon.service'
import { Pokemon } from 'types/pokemon.type'

const { Title } = Typography

const PokemonPage = () => {
  const router = useRouter()

  const [deletePokemon] = useDeletePokemonMutation()
  // Using a query hook automatically fetches data and returns query values
  const { isLoading, isFetching, data, error } = useGetPokemonListQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { isLoading, data, error } = pokemonApi.endpoints.getPokemonByName.useQuery(pokemonName)

  // isLoading chỉ = true cho lần fetch api đầu tiên
  // isFetching là cho mỗi lần gọi API => show spinner, skeleton, ...
  // eslint-disable-next-line no-console
  console.log({ isLoading, data, error })

  const handleEdit = (id: string) => {
    router.push(`/pokemon/edit/${id}`)
  }

  const handleDelete = (id: string) => {
    deletePokemon(id)
  }

  return (
    <div className='container mx-auto p-20'>
      <Title>Pokemon List</Title>
      <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {isFetching && (
          <div className='absolute left-1/2 top-1/2'>
            <Spin size='large' />
          </div>
        )}
        {data?.map((item: Pokemon) => (
          <div
            key={item.id}
            className='w-full max-w-sm rounded-lg border border-gray-200 bg-gray-50 shadow'
          >
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
                  onClick={() => handleEdit(item.id.toString())}
                  className='inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300'
                >
                  Edit
                </button>
                <button
                  type='button'
                  onClick={() => handleDelete(item.id.toString())}
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

export default PokemonPage
