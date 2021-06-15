import { Navbar } from 'react-bootstrap'

import { SearchProps } from '../../redux/types'
import './Search.scss'

const Search = ({ input, handleChange }: SearchProps) => {

  return (
    <Navbar>
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
      />
    </Navbar>
  )
}

export default Search
