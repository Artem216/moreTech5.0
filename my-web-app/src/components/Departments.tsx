import React from "react";

import { T } from "@admiral-ds/react-ui";

import styled, { css } from "styled-components";

const CustomParagraph = styled(T)`
  color: ${(p) => p.theme.color["Neutral/Neutral 70"]};
`;

interface departs {
  id: string;
  addres: string;
  distance: string;
}

function Departments(props: departs[]) {
  if (props) {
    return (
      <CustomParagraph forwardedAs="p">
        В заданном радиусе нет отделений 
      </CustomParagraph>
    );
  }

  return <div>Departments</div>;
}

export default Departments;
