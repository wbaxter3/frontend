import React, { Component } from 'react';

import './App.css';
// import BasicTableComponent from './components/basic.table';
//
//
// class App extends Component {
//   // state = {
//   //   players: []
//   // }
//
//
//   // componentDidMount() {
//   //     fetch('https://3yejoomask.execute-api.us-east-1.amazonaws.com/prod/player-season-data?year=2016')
//   //     .then(res => res.json())
//   //     .then((data) => {
//   //       this.setState({ players: data.players })
//   //       console.log(data)
//   //     })
//   //     .catch(console.log)
//   //   }
//
//     render() {
//           return (
//             <div className="App">
//
//             <h3> muh Table</h3>
//
//
//             <BasicTableComponent />
//             </div>
//           )
//         };
// }
// export default App;


const url = 'https://3yejoomask.execute-api.us-east-1.amazonaws.com/prod/player-season-data?year=2016';
let response = fetch(url);

response.then(response => response.json())
  .then(json => {
    window.players = json.players;
    console.log(window.players);
  })
  .catch(error => {
         alert("HTTP-Error: " + response.statusCode);
    });

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const PlayerTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.players);
  const getClassNamesFor = (player_name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === player_name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>players</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('player_name')}
              className={getClassNamesFor('player_name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('goals_season')}
              className={getClassNamesFor('goals_season')}
            >
              Goals
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('assists_season')}
              className={getClassNamesFor('assists_season')}
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.player_name}</td>
            <td>${item.goals_season}</td>
            <td>{item.assists_season}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default function App(players) {
  return (
    <div className="App">
      <PlayerTable
        players={window.players}
      />
    </div>
  );
}
