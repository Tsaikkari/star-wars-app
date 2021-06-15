import { StarWarsState, StarWarsActions, GET_CHARACTERS } from '../types'

export default function starwars(
  state: any = {
    list: [],
    starshipsList: []
  },
  action: StarWarsActions
): StarWarsState {
  switch (action.type) {
    case GET_CHARACTERS:
      const { characters } = action.payload
      return {
        ...state,
        list: [...characters],
      }

    default:
      return state
  }
}

