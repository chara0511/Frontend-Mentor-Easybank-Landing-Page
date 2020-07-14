import React, { useState } from "react";
import MainContext from "./mainContext";
import { data } from "../../data";

const MainState = (props) => {
  const [state, setState] = useState(data.main);

  return (
    <MainContext.Provider value={{ data: state }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
