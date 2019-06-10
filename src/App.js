import React from 'react'
import styled from 'styled-components';
import World from 'container/world'


const App = (props) => {
  return (
    <StyledApp>
      <World />
    </StyledApp>
  )
}

export default App;

const StyledApp = styled.div`
  height: 100vh;
  background-color: black;
`;
