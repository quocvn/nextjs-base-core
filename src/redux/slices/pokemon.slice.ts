import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

// Define a type for the slice state
export interface PokemonState {
  name: string
}
// Define the initial state using that type
const initialState: PokemonState = {
  name: 'venusaur',
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState, // `createSlice` will infer the state type from the `initialState` argument
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPokemonName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectName = (state: RootState) => state.pokemon.name

// Action creators are generated for each case reducer function
export const { setPokemonName } = pokemonSlice.actions

export default pokemonSlice.reducer
