import React from 'react';
import { useState } from 'react';

// example 5 - props

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {

  // example 6 - useState
  
  const [state] = useState<{ fullname: string | null }>({ fullname: '' });

  return <div>hello {name}</div>;
};

function App() {
  return <div className="App">generics tutorial</div>;
}

export default App;
