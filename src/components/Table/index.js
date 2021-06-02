//react
import React from "react";
//styles
import "./index.css";
//components
import TableItem from "../TableItem";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <TableItem top={true} stock={"Stock"} current={"Current"} change={"Change"} />
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
