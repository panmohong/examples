import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner';

const Background = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #000;
`;

const App = () => (
  <Background>
    <Banner />
  </Background>
);

export default App;
