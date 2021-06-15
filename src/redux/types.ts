export const GET_CHARACTERS = 'GET_CHARACTERS'

export type StarWarsActions = 
| GetCharactersAction

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
  name: string
}

export type Character = TableRowProps & {
  [key: string]: any
}


