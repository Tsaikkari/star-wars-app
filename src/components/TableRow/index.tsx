import React from 'react'
import { Link } from 'react-router-dom'

import { TableRowProps } from '../../redux/types'
import './TableRow.scss'

const TableRow = ({ name, starships }: TableRowProps) => {
  return (
    <tr className='table__row' aria-label='table-row'>
      <td>
        <Link className='table__row--cname' to={`/character/${name}`}>
          {name}
        </Link>
      </td>
      <td>
        {starships.map((ship: any, index) => {
          return (
            ship.char === name && 
            <div className="table__row--languages" key={index}>
              {ship.starship}
            </div>
          )
        })}
      </td>
    </tr>
  )
}

export default React.memo(TableRow)
