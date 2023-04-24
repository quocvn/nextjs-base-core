import { Button, Form, Input, Modal, Spin, Typography, notification } from 'antd'
import { useState } from 'react'

import {
  useDeletePokemonMutation,
  useGetPokemonListQuery,
  useUpdatePokemonMutation,
} from 'services/pokemon.service'
import { Pokemon } from 'types/pokemon.type'

const { Title } = Typography

const PokemonPage = () => {
  const [form] = Form.useForm()
  const [isShowModal, setShowModal] = useState<boolean>(false)
  const [pokemonSelected, setPokemonSelected] = useState<Pokemon>()

  const [deletePokemon] = useDeletePokemonMutation()
  const [updatePokemon, updatePokemonResult] = useUpdatePokemonMutation()
  // Using a query hook automatically fetches data and returns query values
  const { isLoading, isFetching, data, error } = useGetPokemonListQuery()
  // Individual hooks are also accessible under the generated endpoints:
  // const { isLoading, data, error } = pokemonApi.endpoints.getPokemonByName.useQuery(pokemonName)

  // isLoading chỉ = true cho lần fetch api đầu tiên
  // isFetching là cho mỗi lần gọi API => show spinner, skeleton, ...
  // eslint-disable-next-line no-console
  console.log({ isLoading, data, error })

  const showNotification = (message: string) => {
    notification.open({
      message: 'Error',
      description: message,
      type: 'error',
    })
  }

  const handleEdit = (item: Pokemon) => {
    form.setFieldValue('name', item.name)
    setPokemonSelected(item)
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    deletePokemon(id)
  }

  const onSubmit = (values: any) => {
    if (pokemonSelected) {
      updatePokemon({
        id: pokemonSelected.id,
        name: values.name,
        types: pokemonSelected.types,
        image: pokemonSelected.image,
      }).then((response: any) => {
        if (response.data) {
          setShowModal(false)
        } else {
          showNotification(response.error?.data?.error?.name)
        }
      })
    }
  }

  return (
    <>
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
                    onClick={() => handleEdit(item)}
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

      <Modal
        centered
        title='Edit'
        open={isShowModal}
        onCancel={() => setShowModal(false)}
        footer={[
          <Button key='back' onClick={() => setShowModal(false)}>
            Cancel
          </Button>,
          <Button
            form='myForm'
            key='submit'
            htmlType='submit'
            type='primary'
            loading={updatePokemonResult.isLoading}
          >
            Update
          </Button>,
        ]}
      >
        <Form id='myForm' form={form} onFinish={onSubmit} autoComplete='off' className='py-3'>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input name of pokemon!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default PokemonPage
