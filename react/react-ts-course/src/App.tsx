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
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState(false);
  const [characterId, setCharacterId] = React.useState(1);

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);

  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card name={character.name} imgUrl={character.img_url} />
          <button onClick={() => setCharacterId(Math.floor(Math.random() * 10) + 1)}>
            Random character
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
