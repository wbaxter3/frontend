// // src/components/basic.table.js
// import React from "react";
//
//
// import { useTable, useSortBy } from 'react-table'
// // import 'bootstrap/dist/css/bootstrap.min.css';
//
// // const url = 'http://dummy.restapiexample.com/api/v1/employees';
// const url = 'https://3yejoomask.execute-api.us-east-1.amazonaws.com/prod/player-season-data?year=2016';
// let response = fetch(url);
//
// response.then(response => response.json())
//   .then(json => {
//     window.players = json.players;
//     console.log(window.players);
//   })
//   .catch(error => {
//          alert("HTTP-Error: " + response.statusCode);
//     });
//
//
//
//
// // else {
// //   alert("HTTP-Error: " + response.statusCode);
// // }
// function Table({ columns, data }) {
//     // Use the state and functions returned from useTable to build your UI
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable(
//         {
//             columns,
//             data,
//         },
//         useSortBy
//     )
//
//     // Render the UI for your table
//     return (
//         <div>
//             <table className="table" {...getTableProps()}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 // Add the sorting props to control sorting. For this example
//                                 // we can add them into the header props
//                                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                     {column.render('Header')}
//                                     {/* Add a sort direction indicator */}
//                                     <span>
//                                         {column.isSorted
//                                             ? column.isSortedDesc
//                                                 ? ' '
//                                                 : ' '
//                                             : ''}
//                                     </span>
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map(
//                         (row, i) => {
//                             prepareRow(row);
//                             return (
//                                 <tr {...row.getRowProps()}>
//                                     {row.cells.map(cell => {
//                                         return (
//                                             <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                         )
//                                     })}
//                                 </tr>
//                             )
//                         }
//                     )}
//                 </tbody>
//             </table>
//             <br />
//             <div>Showing the first 20 results of {rows.length} rows</div>
//         </div >
//     )
// }
//
//
// function SortingTableComponent() {
//   console.log("players" + window.players);
//   const players = window.players;
//   const columns = React.useMemo(
//         () => [
//     {
//       Header: 'Player Info',
//       columns: [
//           {
//             label: 'Name',
//             accessor: 'player_name',
//
//
//           },
//           {
//             label: 'Goals',
//             accessor: 'goals_season',
//
//           },
//           {
//             label: 'Assists',
//             accessor: 'assists_season',
//
//           },
//           {
//             label: 'Games Played',
//             accessor: 'games',
//
//           }
//         ],
//         },
//     ],
//     []
//   )
//
//     var importedData = [];
//     importedData = importedData.concat(players);
//     const data = importedData;
//
//
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({
//         columns,
//         data,
//     })
//
//     return (
//
//
//       <Table columns={columns} data={data} />
//     )
// }
//
// export default SortingTableComponent;
