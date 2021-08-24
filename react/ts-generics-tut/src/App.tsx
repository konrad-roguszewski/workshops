import React from 'react';

// example 5 - props

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  return <div>hello {name}</div>;
};

function App() {
  return <div className="App">generics tutorial</div>;
}

export default App;
