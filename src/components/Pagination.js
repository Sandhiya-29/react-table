import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table';
import Mock_Data from './MOCK_DATA.json';
import {  COLUMNS } from './columns';
import './table.css'
import { GlobalFilter } from './GlobalFilter';

function PaginationTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
  
   const {
    getTableProps,
        getTableBodyProps,
        headerGroups,
      
        rows,
        prepareRow,
        state,
        setGlobalFilter,
   } = useTable({
            columns,
            data
        }, 
         useGlobalFilter
    )

    const {globalFilter} = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()} >
 <thead>
   {headerGroups.map((headerGroup) => (
         <tr {...headerGroup.getHeaderGroupProps()} >
    {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
               {column.render('Header')}
                {/* <div>{column.canFilter ? column.render('Filter') : null}</div>  */}
               </th>
                    ))}
                   </tr>
                   ))}
            </thead>
            <tbody {...getTableBodyProps()} >
                {rows.map(row => {
                    prepareRow(row)
              return (
             <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return(
            <td {...cell.getCellProps()}>
                   {cell.render('Cell')}
                        </td>
                )})}
                    </tr>
                       )})}
            </tbody>
            
        </table>
        </>
  )
}

export default PaginationTable