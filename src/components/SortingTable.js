import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table';
import Mock_Data from './MOCK_DATA.json';
import {  COLUMNS } from './columns';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaChevronCircleUp } from "react-icons/fa";

import './table.css'

function SortingTable() {

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
        }, useSortBy)

  return (
        <table {...getTableProps()} >
 <thead>
   {headerGroups.map((headerGroup) => (
         <tr {...headerGroup.getHeaderGroupProps()} >
    {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
               {column.render('Header')}
               <span>
                {column.isSorted ? (column.isSortedDesc ? <IoMdArrowDropdownCircle /> : <FaChevronCircleUp />) : ''}
               </span>
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

export default SortingTable