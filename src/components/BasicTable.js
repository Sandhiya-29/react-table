import React, { useMemo } from 'react'
import { useTable } from 'react-table';
import Mock_Data from './MOCK_DATA.json';
import {  COLUMNS } from './columns';
import './table.css'

function BasicTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Mock_Data, [])
  
   const {
    getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
   } = useTable({
            columns,
            data
        }
    )

  return (
        <table {...getTableProps()} >
 <thead>
   {headerGroups.map((headerGroup) => (
         <tr {...headerGroup.getHeaderGroupProps()} >
    {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
               {column.render('Header')}
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
            <tfoot>
                {footerGroups.map(footerGroup => ( 
            <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                    <td {...column.getFooterGroupProps}>
                        {column.render('Footer')}
                    </td>
                ))}
                    </tr>
                ))}
            </tfoot>
        </table>
  )
}

export default BasicTable