import React from 'react'

export const  ColumnFilter = ({Column}) => {
    const {filterValue, setFilter} = Column
  return (
   <span>
     Search:{' '}
     <input value={filterValue || ''}
     onChange={e => setFilter(e.target.value)} />
   </span>
  )
}

