import { StarWarsState, StarWarsActions, GET_CHARACTERS, GET_CHAR_AND_STARSHIP } from '../types'

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
    case GET_CHAR_AND_STARSHIP:
      console.log('getcharandstarship', action.payload)
      const { starships } = action.payload
      return {
        ...state,
        starshipsList: [...starships]
      }

    default:
      return state
  }
}