import { format } from "date-fns"
import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header : 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
    },
    {
        Header: 'First Name',
        Footer:'First Name',
        accessor:'first_name',
        Filter: ColumnFilter,
    },
    {
       Header: 'Last Name',
       Footer: 'Last Name',
       accessor: 'last_name',
       Filter: ColumnFilter,
    },
    {
        Header: 'Date of Birth',
        Footer:'Date of Birth',
        accessor:'date_of_birth',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyy')},
        Filter: ColumnFilter,
    },
    {
        Header: 'Age',
        Footer:'Age',
        accessor:'age',
        Filter: ColumnFilter,
    },
    {
        Header:'Email',
        Footer:'Email',
        accessor:'email',
        Filter: ColumnFilter,
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header:'Name',
        Footer:'Name',
        columns : [
            {
                Header: 'First Name',
                Footer:'First Name',
                accessor:'first_name'
            },
            {
               Header: 'Last Name',
               Footer: 'Last Name',
               accessor: 'last_name'
            },
        ]
    },
    {
        Header:'Info',
        Footer:'Info',
    
    columns: [
        {
            Header: 'Date of Birth',
            Footer:'Date of Birth',
            accessor:'date_of_birth'
        },
        {
            Header: 'Age',
            Footer:'Age',
            accessor:'age'
        },
        {
            Header:'Email',
            Footer:'Email',
            accessor:'email'
        }
    ]
},
]