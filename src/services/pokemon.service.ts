// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Pokemon } from 'types/pokemon.type'

import { pokemonApiUrl } from '../constants'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: pokemonApiUrl }),
  endpoints: (builder) => ({
    /*
     * Pokemon: Generic type response tra ve tu api
     * string: Type tham so truyen vao => trong truong hop nay truyen vao type string la name cua pokemon
     */
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
