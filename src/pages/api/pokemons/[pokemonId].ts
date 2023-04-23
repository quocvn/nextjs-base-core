import { NextApiRequest, NextApiResponse } from 'next'

import { pokemonList } from 'constants/pokemon.constant'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pokemonId } = req.query
  if (pokemonId) {
    switch (req.method) {
      case 'GET':
        // eslint-disable-next-line no-case-declarations
        const pokemon = pokemonList.find((item) => item.id === +pokemonId)
        res.status(200).json(pokemon ?? null)
        break
      case 'POST':
        res.status(200).json({})
        break
      case 'PUT':
        res.status(200).json({})
        break

      default:
        break
    }
  } else {
    res.status(500).json({ error: 'failed to load data' })
  }
}
