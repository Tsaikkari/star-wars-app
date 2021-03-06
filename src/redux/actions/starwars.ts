import { Dispatch } from 'redux'

import {
  GetCharactersAction,
  GET_CHARACTERS,
  GET_CHAR_AND_STARSHIP,
  Starship,
} from '../types'

export function getCharacters(characters: any): GetCharactersAction {
  return {
    type: GET_CHARACTERS,
    payload: {
      characters,
    },
  }
}

export function GetCharAndStarship(starships: any) {
  return {
    type: GET_CHAR_AND_STARSHIP,
    payload: {
      starships,
    },
  }
}

export function fetchCharacters() {
  const starships: Starship[] = []
  return async (dispatch: Dispatch) => {
    return fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((characters) => {
        dispatch(getCharacters(characters.results))
          characters.results.forEach((char: any) => {
            char.starships.map(async (starship: any) => {
              fetch(starship)
                .then((res) => res.json())
                .then((starship) => {
                  starships.push({
                    char: char.name,
                    starship: starship.name,
                  })
                  dispatch(GetCharAndStarship(starships))
                })
            })
          })
      })
      .catch((error) => console.log('error happend', error))
  }
}
