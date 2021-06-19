import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { AppState } from '../../redux/types'
import './SingleCharacter.scss'
import galaxy from '../../images/galaxy.jpg'

interface RouteParams {
  id: string
}

const SingleCharacter = () => {
  const history = useHistory()
  const { id } = useParams<RouteParams>()
  const character = useSelector((state: AppState) =>
    state.starwars.list.find((c) => c.name === id)
  )
  const { name, birth_year, gender, eye_color, height, mass } = character

  const handleClick = () => {
    history.push('/')
  }

  if (!character) {
    return null
  }

  return (
    <Card
      className='singlecharacter'
      style={{
        backgroundImage: `url(${galaxy})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Card.Title className='singlecharacter__title'>{name}</Card.Title>
      <Card.Body>
        <p className='singlecharacter__intro'>{`${name} was born in ${birth_year}.`} </p>
        {gender === 'female' ? (
          <p className='singlecharacter__intro'>{`Her eyes are ${eye_color}, she is ${height} cm tall and weights ${mass} kg.`}</p>
        ) : (
          <p className='singlecharacter__intro'>{`His eyes are ${eye_color}, he is ${height} cm tall and weights ${mass} kg.`}</p>
        )}
        <div>
          <button
            onClick={handleClick}
            className='singlecharacter__back-button'
          >
            BACK
          </button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SingleCharacter
