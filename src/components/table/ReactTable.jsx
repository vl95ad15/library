import React, { useMemo, useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from "react-table";
import ModalBtn from "../buttons/ModalBtn";
import AddToOrderBtn from "../buttons/AddToOrderBtn";
import GlobalFilter from "./filters/GlobalFilter";
import MultiCheckBoxColumnFilter from "./filters/MultiCheckBoxColumnFilter";
import axios from "axios";

import './ReactTable.css';

function ReactTable() {
    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios
                .get("http://localhost:4000/books")
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                    setTimeout(() => setLoadingData(false), 1000);
                });
        }
        if (loadingData) {
            getData();
        }
    }, []);

    // const data = useMemo(() => books, [])
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            disableFilters: true
        },
        {
            Header: 'Author',
            id: 'author',
            accessor: data =>
                data.authors.map(item => item.name).join(', '),
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
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, defaultColumn, filterTypes, initialState: { pageIndex: 0 } }, useFilters, useGlobalFilter, useSortBy, usePagination)

    return (
        <div className='tableAndGlobalFilter'>
            {loadingData ? (
                <Spinner className="spinner" color="info" />
            ) : (
                <>
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
                        {page.map((row) => {
                            prepareRow(row);
                            // console.log(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        // console.log(cell)
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.column.Header === ""
                                                         ? <div className='BtnContainer'>
                                                                <ModalBtn headerTitle='Information'
                                                                          title={<i className='fa fa-info-circle'/>}
                                                                          color='secondary'/>
                                                                <AddToOrderBtn item={row.original.name}/>
                                                          </div> : cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                        <span>
          Page{' '}
                            <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
                        <span>| Go to page:{' '}
                            <input
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                            />
                        </span>{' '}
                        <select
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}
        </div>
    )
}

export default ReactTable
