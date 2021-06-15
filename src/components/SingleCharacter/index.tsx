import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { AppState } from '../../redux/types'
import './SingleCharacter.scss'

interface RouteParams {
  id: string
}

const SingleCharacter = () => {
  const history = useHistory()
  const { id } = useParams<RouteParams>()
  const character = useSelector((state: AppState) =>
    state.starwars.list.find((c) => c.name === id)
  )
  const { name } = character

  const handleClick = () => {
    history.push('/')
  }

  if (!character) {
    return null
  }

  

  return (
    <Card className="singlecharacter">
      <Card.Title className="singlecharacter__title">
        {name}
      </Card.Title>
      <Card.Body>
      {/* <h5 className="singlecharacter__text">{name === char && `${char} has ${starship}
      starship`}</h5> */}
      <div>
        <button onClick={handleClick} className="singlecharacter__middle--back">
          BACK
        </button>
      </div>
      </Card.Body>
    </Card>
  )
}

export default SingleCharacter
