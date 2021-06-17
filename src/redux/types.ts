export const GET_CHARACTERS = 'GET_CHARACTERS'
export const GET_CHAR_AND_STARSHIP = 'GET_CHAR_AND_STARSHIP'

export type StarWarsActions = 
| GetCharactersAction
| GetCharAndStarshipAction

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
    char: any
    starship: any
    starships: any[]
  }
}

export type AppState = {
  starwars: StarWarsState
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
  characters: any[]
  starships: any[]
}

export type HeaderProps = {
  cart: boolean
}

export type Starship = {
  char: any
  starship: any[]
}

export type TableRowProps = {
  name: string
  starships: any[]
}

export type TableCellProps = {
  title: string
}

export type SingleCharacterProps = {
  flag: string
  name: string
}

export type Character = TableRowProps & {
  [key: string]: any
}
