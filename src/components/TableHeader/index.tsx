import './TableHeader.scss'

const TableHeader = () => {
  return (
    <thead>
      <tr className="titles">
        <th className="titles__title--name">
          NAME
        </th>
        <th
          className="titles__title--starships"
        >
          STARSHIPS
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader