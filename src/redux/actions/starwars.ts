import { Dispatch } from 'redux'
import { Starship } from '../types'

import {
  GetCharactersAction,
  GET_CHARACTERS,
  GET_STARSHIPS_REQUEST,
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIPS_FAIL,
} from '../types'

export function getCharacters(characters: any): GetCharactersAction {
  return {
    type: GET_CHARACTERS,
    payload: {
      characters,
    },
  }
}

export const getStarshipsRequest = () => {
  return {
    type: GET_STARSHIPS_REQUEST,
  }
}

export const getStarshipsSuccess = (starships: any) => {
  return {
    type: GET_STARSHIPS_SUCCESS,
    payload: starships,
  }
}

export const getStarshipsFail = (error: any) => {
  return {
    type: GET_STARSHIPS_FAIL,
    payload: {
      error,
    },
  }
}

export function fetchCharacters() {
  const starships: Starship[] = []
  return async(dispatch: Dispatch) => {
    return fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((characters) => {
        dispatch(getCharacters(characters.results))
        characters.results.forEach((char: any) => {
          char.starships.map(async(starship: any) => {
            return fetch(starship.replace('http', 'https'))
            .then((res) => res.json())
            .then((starship) => {
              //console.log(`${char.name} has ${starship.name}`)
              starships.push({char: char.name, starship: starship.name})
            })
          })
        })
      })
      .catch((error) => console.log('error happend', error))
  }
}
