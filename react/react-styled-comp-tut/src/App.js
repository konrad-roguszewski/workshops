import './App.css';
import styled, { css } from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem;
  margin: 2rem;
  background-color: ${(props) => props.color ? props.color : "papayawhip"};
  background-color: ${({ color }) => color ? color : "papayawhip"};
  ${({is3D}) => is3D && css`
    background-color: yellow;
    box-shadow: 1rem 1rem 2rem black;
    border: .2rem solid lightyellow;
  `}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

const CircleWrapper = styled(Wrapper)`
  border-radius: 100%;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
        <Wrapper color={ "white" }>
          <Title>Hello World!</Title>
        </Wrapper>
        <Wrapper is3D={ true }>
          <Title>Hello World!</Title>
        </Wrapper>
        <CircleWrapper color={ "purple" } is3D={ true }>
          Hello
        </CircleWrapper>
      </header>
    </div>
  );
}

export default App;
