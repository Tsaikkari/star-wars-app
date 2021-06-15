import { StarWarsState, StarWarsActions, GET_CHARACTERS, GET_STARSHIPS_SUCCESS } from '../types'

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
      case GET_STARSHIPS_SUCCESS:
        const { ships } = action.payload.starships
        return {
        ...state,
        starshipsList: [...ships]
        }

    default:
      return state
  }
}

