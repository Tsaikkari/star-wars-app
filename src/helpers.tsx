import { Character } from './redux/types'

export const filterCharacters = (characters: Character[], input: string) => {
  return characters.filter((c) =>
    c.name.toLowerCase().includes(input.toLowerCase())
  )
}