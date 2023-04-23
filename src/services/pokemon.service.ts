// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { pokemonApiUrlLocal } from 'constants/pokemon.constant'
import { Pokemon } from 'types/pokemon.type'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  tagTypes: ['Pokemons'], // Những kiểu tag cho phép dùng trong pokemonApi
  keepUnusedDataFor: 30, // Giữ data trong cache sau 30s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({ baseUrl: pokemonApiUrlLocal }),
  endpoints: (builder) => ({
    /*
     * Pokemon: Generic type response tra ve tu api
     * string: Type tham so truyen vao => trong truong hop nay truyen vao type string la id cua pokemon
     */
    getPokemonById: builder.query<Pokemon, string>({
      query: (id) => `pokemons/${id}`,
    }),
    getPokemonList: builder.query<Pokemon[], void>({
      query: () => 'pokemons',
      /**
       * providesTags có thể là array hoặc callback return array
       * Nếu có bất kỳ một invalidatesTag nào match với providesTags này
       * thì sẽ làm cho method getPokemonList chạy lại
       * và cập nhật lại danh sách các pokemon cũng như các tags phía dưới
       */
      providesTags: (result) => {
        /**
         * Callback này sẽ chạy mỗi khi getPokemonList chạy
         * Mong muốn là sẽ return về một mảng kiểu
         * interface Tags: {
         *    type: "Pokemons";
         *    id: string;
         *  }[]
         *
         * vì thế phải thêm as const vào để báo hiệu type là Read only, không thể mutate
         */
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Pokemons' as const, id })),
            { type: 'Pokemons' as const, id: 'LIST' },
          ]
          return final
        }
        return [{ type: 'Pokemons', id: 'LIST' }]
      },
    }),
    addPokemon: builder.mutation<Pokemon, Omit<Pokemon, 'id'>>({
      query: (body) => ({
        url: 'pokemons',
        method: 'POST',
        body,
      }),
      /**
       * invalidatesTags cung cấp các tag để báo hiệu cho những method nào có providesTags
       * match với nó sẽ bị gọi lại
       * Trong trường hợp này getPokemonList sẽ chạy lại
       */
      invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'Pokemons', id: 'LIST' }]),
    }),
    updatePokemon: builder.mutation<Pokemon, Partial<Pokemon>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `pokemons/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Trong trường hợp này thì getPokemonList sẽ chạy lại
      invalidatesTags: (_result, error, data) => (error ? [] : [{ type: 'Pokemons', id: data.id }]),
    }),
    // eslint-disable-next-line @typescript-eslint/ban-types
    deletePokemon: builder.mutation<{}, string>({
      query(id) {
        return {
          url: `pokemons/${id}`,
          method: 'DELETE',
        }
      },
      // Trong trường hợp này thì getPokemonList sẽ chạy lại
      invalidatesTags: (_result, _error, id) => [{ type: 'Pokemons', id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByIdQuery,
  useGetPokemonListQuery,
  useAddPokemonMutation,
  useUpdatePokemonMutation,
  useDeletePokemonMutation,
} = pokemonApi
