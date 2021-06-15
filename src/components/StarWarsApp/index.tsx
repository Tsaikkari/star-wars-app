import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import Header from '../Header'
import Search from '../Search'
import MainTable from '../MainTable'
import './StarWarsApp.scss'

import { fetchCharacters, getStarshipsRequest } from '../../redux/actions/starwars'
import { AppState } from '../../redux/types'
import useCharacters from '../../hooks/useCharacters'

const StarWarsApp = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)
  const starships = useSelector((state: AppState) => state.starwars.starshipsList)

  const filteredCharacters = useCharacters(input)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    setLoading(loading)
  }, [dispatch, loading])

  useEffect(() => {
    dispatch(getStarshipsRequest())
    setLoading(loading)
  }, [dispatch, loading])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }, [])

  return (
    <div className="star-wars-app">
      {/* {error && <p>{error}</p>} */}
      <Header />
      <Search input={input} handleChange={handleChange} />
      {loading ? (
        <MainTable starships={starships} characters={filteredCharacters} />
      ) : (
        <Spinner 
        animation="border" 
        role="status" 
        style={{ 
          width: "100px", 
          height: "100px", 
          margin: "auto", 
          display: "block"}}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
      )}
    </div>
  )
}

export default StarWarsApp