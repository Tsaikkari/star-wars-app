import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { initState } from '../redux/store'

import { filterCharacters } from '../helpers'

export default function useCharacters(input: string) {
  const [characters, setCharacters] = useState<any[]>([])
  const allCharacters: Array<any> = useSelector<typeof initState, Array<any>>(
    (state) => state.starwars.list
  )

  useEffect(() => {
    setCharacters(filterCharacters(allCharacters, input))
  }, [input, allCharacters])

  return characters
}