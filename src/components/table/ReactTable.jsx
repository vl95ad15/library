import React, { useMemo, useState } from "react";
import { useTable, useAsyncDebounce, useFilters, useGlobalFilter, useSortBy } from "react-table";
import ModalBtn from "../buttons/ModalBtn";
import { Button } from "reactstrap";
import books from "../../data/books";

import './ReactTable.css';


function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }){
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    })

    return (
        <input
            className='searchField'
            type='text'
            value={value || ""}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
            placeholder={`Search from ${count} records...`}
        />
    )
}

// function DefaultColumnFilter({column: { filterValue, setFilter }}) {
//
//     return (
//         <input
//             value={filterValue || ""}
//             onChange={e => {
//                 setFilter(e.target.value || undefined);
//             }}
//         />
//     );
// }

function MultiCheckBoxColumnFilter({column: { setFilter, preFilteredRows, id }}) {

    const options = useMemo(() => {
        let counts = {};
        preFilteredRows.forEach(x => {
            x = x.values[id].toString();
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    }, [id, preFilteredRows]);

    const [checked, setChecked] = useState(Object.keys(false));

    const onChange = e => {
        const t = e.target.name.toString();
            setFilter(old => (old && old.includes(t) ? undefined : [t]));
            checked.includes(t) && checked.length === 1
                ? setChecked(Object.keys(false))
                : setChecked([t]);
    }

    return (
        <div className='checkBoxFilter'>
            <div
                style={{cursor: "pointer"}}
                onClick={() => {
                    setChecked(Object.keys(false));
                    setFilter([]);
                }}
            >
                <span>Show All</span>
            </div>
            {Object.entries(options).map(([option, count], i) => {
                return (
                    <label className='filterItem' key={i} htmlFor={option}>
                        <input
                            type="checkbox"
                            color="primary"
                            size="small"
                            name={option}
                            id={option}
                            checked={checked.includes(option)}
                            onChange={onChange}
                            title={`${option} (${count})`}
                        />
                        {option} ({count})
                    </label>
                );
            })}
        </div>
    )
}

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

    const filterTypes = useMemo(
        () => ({
            // multiSelect: (rows, id, filterValues) => {
            //     if (filterValues.length === 0) return rows;
            //     return rows.filter(r => filterValues.includes(r.values[id]));
            // },
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
                            {/*{column.canFilter ? column.render("Header") : null}*/}
                            <div>{column.canFilter ? column.render("Filter") : null}</div>
                        </div>
                    ))}
                </div>
            ))}
        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
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
                                                <Button color='success'><i className='fa fa-plus-circle'/></Button>
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
