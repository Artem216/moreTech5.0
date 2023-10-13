import { Button, TextInput } from "@admiral-ds/react-ui";

import "../style/mainMenu.css";

import ButtonGroup from "./ButtonGroup";
import { useState } from "react";
import Departments from "./Departments";

function MainMenuComponent() {
  const [btnChange, setBtnCgange] = useState(false);

  const departmentsList: any = [];

  return (
    <div className="mainMenuContainer">
      <div className="searchBlock">
        <TextInput
          dimension="m"
          placeholder="Город, район, улица, м..."
          style={{ backgroundColor: "#f1f2f4" }}
        />
        <Button dimension="m" style={{ backgroundColor: "#f1f2f4" }} />
        <ButtonGroup />
      </div>
      <Departments {...departmentsList} />
    </div>
  );
}

export default MainMenuComponent;
