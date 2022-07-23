import './App.css';
import React,{useState} from 'react';
import Data from './components/Data'; 
import List from './components/List';

function App() {
  const [people,setPeople]=useState(Data);
  const clearPeople=()=>{
    setPeople([])
  }
  return (
    <div className="container">
      <h1>{people.length} Birthday Today</h1>
      {people.map(people =><List people={people}></List>)}
      <button onClick={clearPeople} className="button">Clear All</button>
    </div>
  );
}

export default App;
