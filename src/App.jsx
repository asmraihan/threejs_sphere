import React from "react";
import styled from "styled-components";
import SphereModel from "./components/Sphere";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

function App() {
  return (
    <Container>
      <SphereModel />
    </Container>
  );
}

export default App;
