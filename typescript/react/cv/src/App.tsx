import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const App = () => <Background>React</Background>;

export default App;
