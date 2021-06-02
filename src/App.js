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
  const [load, setLoad] = useState(false)

  const getData = async () => {

    setLoad(true)

    try {
      const res = await simulateAsyncReq(payload);

      const result = await refactorData(res);

      sortArr(result);

      setData(result);

    } catch (error) {
      alert("Sorry, error");
    }

    setLoad(false)
  };

  return (
    <div className="App">
      <Button text={"Get data"} action={getData} />
      {load ? <h4>Loading...</h4> : <Table data={data}/>}
    </div>
  );
};

export default App;
