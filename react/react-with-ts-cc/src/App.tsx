import React, { useState } from 'react';
import './App.css';
import List from './components/List'

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "LeBron James",
      url: "https://picsum.photos/200",
      age: 36,
      note: "test note",
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
