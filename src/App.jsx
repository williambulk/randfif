import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [clubs, setClubs] = useState('');

  const getClubs = ( )=> {
    fetch('./src/allclubs.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response) {  // this segment returns the headers
        console.log(response)
        return response.json();
      })

      .then(function(myJson) {  // this segment returns the data
        let randomNum = Math.floor(Math.random() * myJson.length);
        setClubs(myJson[randomNum]);
      });
  }

  useEffect(() => {
    getClubs();
  }, []);

  return (
    <>
    <div className="App">
      <div className="container">
        <h1>Random FIFA Matches Generator</h1>
        <button onClick={getClubs}>Generate</button>
        <h3>{clubs.clubName}</h3>
      </div>
    </div>
    </>
  );
}

export default App