import React from "react";
import { styled } from "styled-components";

function App() {
  return <Container className="container-app">Hello word</Container>;
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`