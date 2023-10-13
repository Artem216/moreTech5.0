import { useState } from "react";
import styled from "styled-components";

import MainMenuComponent from "./components/mainMenuComponent";

import { T, Link } from "@admiral-ds/react-ui";

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  return (
    <>
      <MainMenuComponent />
    </>
  );
}

export default App;
