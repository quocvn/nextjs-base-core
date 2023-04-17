// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { pokemonList } from 'constants/pokemon.constant'
import { Pokemon } from 'types/pokemon.type'

export default function handler(req: NextApiRequest, res: NextApiResponse<Pokemon[]>) {
  res.status(200).json(pokemonList)
}
