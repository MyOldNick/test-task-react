//react
import React from "react";
//styles
import "./index.css";
//components
import TableItem from "../TableItem";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      {/* <div className="table-top">
        <p className="table-top-text">Stock</p>
        <p className="table-top-text">Current</p>
        <p className="table-top-text">Change</p>
      </div> */}
      <TableItem stock={"Stock"} current={"Current"} change={"Change"} />
      {data?.map(({ stocks, start, current }) => (
        <TableItem
          key={Math.random() * (10000 - 100) + 100}
          stock={stocks}
          current={Math.round(current * 100) / 100}
          change={Math.round((current - start) * 100) / 100}
        />
      ))}
    </div>
  );
};
export default Table;
