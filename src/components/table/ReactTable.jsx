import React, { useMemo } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy } from "react-table";
import ModalBtn from "../buttons/ModalBtn";
import AddToOrderBtn from "../buttons/AddToOrderBtn";
import books from "../../data/books";
import GlobalFilter from "./filters/GlobalFilter";
import MultiCheckBoxColumnFilter from "./filters/MultiCheckBoxColumnFilter";

import './ReactTable.css';

function ReactTable() {
    const data = useMemo(() => books, [])
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            disableFilters: true
        },
        {
            Header: 'Author',
            accessor: 'author',
            disableFilters: true
        },
        {
            Header: 'Genre',
            accessor: 'genre',
            Filter: MultiCheckBoxColumnFilter,
            filter: 'multiCheckBoxColumnFilter'
        },
        {
            Header: 'Pages',
            accessor: 'pages',
            disableFilters: true
        },
        {
            Header: 'Published',
            accessor: 'published',
            disableFilters: true
        },
        {
            Header: 'Status',
            accessor: 'status',
            disableFilters: true
        },
        {
            Header: '',
            accessor: 'action',
            disableFilters: true
        },
    ], []);

    const filterTypes = useMemo(() => ({
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            }
        }), []);

    const defaultColumn = useMemo(
        () => ({
            Filter: false
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
        rows,
        prepareRow
    } = useTable({ columns, data, defaultColumn, filterTypes }, useFilters, useGlobalFilter, useSortBy)

    return (
        <div className='tableAndGlobalFilter'>
        <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}/>
            {headerGroups.map(headerGroup => (
                <div {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <div key={column.render("Header")}>
                            <div>{column.canFilter ? column.render("Filter") : null}</div>
                        </div>
                    ))}
                </div>
            ))}
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row);
                console.log(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            // console.log(cell)
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.column.Header === "Author"
                                        ? row.original.authors.map(i => i.name).join(', ')
                                        : cell.render("Cell") && cell.column.Header === ""
                                            ? <div className='BtnContainer'>
                                                <ModalBtn headerTitle='Information' title={<i className='fa fa-info-circle'/>}
                                                          color='secondary'/>
                                                <AddToOrderBtn item={row.original._name}/>
                                            </div> : cell.render("Cell")}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    )
}

export default ReactTable
