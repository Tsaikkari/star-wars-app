export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_CHAR_AND_STARSHIP = 'GET_CHAR_AND_STARSHIP'

export type StarWarsActions = 
| GetCharactersAction
| GetCharAndStarshipAction

export type AppState = {
  starwars: StarWarsState
}

export type StarWarsState = {
  list: any[]
  starshipsList: any[]
}

export type GetCharactersAction = {
  type: typeof GET_CHARACTERS
  payload: {
    characters: any
  }
}

export type GetCharAndStarshipAction = {
  type: typeof GET_CHAR_AND_STARSHIP
  payload: {
    char: Starship
    starship: Starship
    starships: Starship[]
  }
}

export type Starship = {
  char: any
  starship: any[]
}

export type Character = TableRowProps & {
  [key: string]: any
}

export type SearchProps = {
  input: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type SortingObject = {
  header: string
  action: string
}

export type MainTableProps = {
  characters: Character[]
  starships: Starship[]
}

export type TableRowProps = {
  name: string
  starships: Starship[]
}

export type TableCellProps = {
  title: string
}

export type SingleCharacterProps = {
  name: string
}


