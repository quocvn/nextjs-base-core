import { Card, Layout, Select } from 'antd'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useGetPokemonByNameQuery } from 'services/pokemon.service'

import { pokemonNameList } from '../../constants'
import { selectName, setPokemonName } from '../../redux/slices/pokemon.slice'

const { Meta } = Card

const About = () => {
  const pokemonName = useAppSelector(selectName)
  const dispatch = useAppDispatch()
  // Using a query hook automatically fetches data and returns query values
  const { isLoading, data, error } = useGetPokemonByNameQuery(pokemonName)
  // Individual hooks are also accessible under the generated endpoints:
  // const { isLoading, data, error } = pokemonApi.endpoints.getPokemonByName.useQuery(pokemonName)

  // isLoading chỉ = true cho lần fetch api đầu tiên
  // isFetching là cho mỗi lần gọi API => show spinner, skeleton
  // eslint-disable-next-line no-console
  console.log({ isLoading, data, error })

  const handleChange = (value: string) => {
    dispatch(setPokemonName(value))
  }

  return (
    <Layout className='p-20'>
      <Select
        defaultValue='venusaur'
        style={{ width: 120 }}
        onChange={handleChange}
        options={pokemonNameList}
      />

      <Card
        hoverable
        style={{ width: 240, marginTop: 10 }}
        cover={<img src={data?.sprites.front_shiny} alt={data?.name} />}
      >
        <Meta
          title={`Name: ${data?.name}`}
          description={`Type: ${data?.types.map((item: any) => item.type.name).join(', ')}`}
        />
      </Card>
    </Layout>
  )
}

export default About
