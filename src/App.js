import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  //var baseUrl = "http://localhost:816";
  var baseUrl = 'https://m28mjnsyp8.execute-api.ap-south-1.amazonaws.com/Prod';

  const [games, setGames] = useState([]);

  const onLoadGames = () => {
    axios.defaults.headers.common['x-api-key'] = `jfvVfOe3bm5oEvY9yn0Ar9FUPLAvpMzu7HPb8XRw`;
    axios.defaults.headers.common['x-tenant-key'] = 'TENANT#KEY';

    axios.get(`${baseUrl}/api/game/gamebyfilters`)
      .then(response => {
        console.log('***', response.data);
        setGames(response.data.data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>WELCOME TO BLAASH!</p>
        <div></div>
        <input type='button' onClick={onLoadGames} value={'Load Games'} />
        <div>{games.length} games loaded</div>
        <div></div>
        <div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" style={{ height: '50%', width: '50%' }} /> */}


      </header>
    </div >
  );
}

export default App;
