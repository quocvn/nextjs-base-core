import { pokemonApi } from 'services/pokemon.service'

import pokemonReducer from '../slices/pokemon.slice'

const rootReducer = {
  pokemon: pokemonReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer, // Add the generated reducer from api slice
}

export default rootReducer
