import React from 'react';

// Api
import { fetchCharacter } from './api';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';
// Components
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Card name="name" imgUrl="url" />
    </Wrapper>
  );
};

export default App;
