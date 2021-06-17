import { Navbar } from 'react-bootstrap'

import './Header.scss'

const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <h2 className="header__header">Star Wars</h2>

      </Navbar>
    </div>
  )
}

export default Header