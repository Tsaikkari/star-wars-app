import { Character } from './redux/types'

export const sorting: any = (characters: Character[], sortBy: string) => {
  const copy = [...characters]
  return copy.sort((a, b): any => {
    switch (sortBy) {
      case 'flag':
        return a.flag < b.flag ? 1 : -1
      case 'name':
        return a.name < b.name ? 1 : -1
      case 'languages':
        return a.languages[0] < b.languages[0] ? 1 : -1
      case 'population':
        return a.population < b.population ? 1 : -1
      case 'region':
        return a.region < b.region ? 1 : -1
      default:
        return null
    }
  })
}

export const filterCharacters = (characters: Character[], input: string) => {
  return characters.filter((c) =>
    c.name.toLowerCase().includes(input.toLowerCase())
  )
}