import { Table } from 'react-bootstrap'

import TableHeader from '../TableHeader'
import TableRow from '../TableRow'

import { MainTableProps } from '../../redux/types'
import './MainTable.scss'

const MainTable = ({ characters, starships }: MainTableProps) => {
  
  return (
    <Table striped bordered hover responsive className="table">
      <TableHeader />
      <tbody className="reliabletable__body">
        {characters.map((character) => {
          return (
            <TableRow
              key={character.name}
              name={character.name}
              starships={starships}
            />
          )
        })}
      </tbody>
    </Table>
  )
}

export default MainTable