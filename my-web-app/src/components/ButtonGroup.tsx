import React, { useState } from "react";

import styled, { css } from "styled-components";

import type {
  ButtonProps,
  ButtonAppearance,
  BorderRadiusType,
} from "@admiral-ds/react-ui";
import { Button, T } from "@admiral-ds/react-ui";

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  > * {
    border-radius: 30px;
  }
  ${(p) => p.$appearance === "white" && "background-color: #2B313B;"};
`;

function ButtonGroup() {
  const [btn, setbtn] = useState(true);

  if (btn) {
    return (
      <ButtonContainer>
        <Button dimension="m">Отделения</Button>
        <Button
          dimension="m"
          onClick={() => setbtn(false)}
          appearance="secondary"
        >
          Банкоматы
        </Button>
      </ButtonContainer>
    );
  } else {
    return (
      <ButtonContainer>
        <Button
          dimension="m"
          onClick={() => setbtn(true)}
          appearance="secondary"
        >
          Отделения
        </Button>
        <Button dimension="m">Банкоматы</Button>
      </ButtonContainer>
    );
  }
}

export default ButtonGroup;

// ${(p) => p.$appearance === "white" && "background-color: #2B313B;"};
