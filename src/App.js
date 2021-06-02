//react
import React, { useState } from "react";
//styles
import "./styles.css";
//utils
import simulateAsyncReq from "./utils/simulateAsyncReq";
import refactorData from "./utils/refactorData";
import sortArr from "./utils/sort";
//data
import { payload } from "./mocData";
//components
import Button from "./components/Button";
import Table from "./components/Table";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await simulateAsyncReq(payload);

    const result = await refactorData(res);

    sortArr(result);

    setData(result);
  };

  return (
    <div className="App">
      <Button text={"GET DATA"} action={getData} />

      <div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default App;
