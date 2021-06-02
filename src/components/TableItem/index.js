//react
import React from "react";
//styles
import "./index.css";

const TableItem = ({ stock, current, change, top }) => {
  return (
    <div className={`table ${top ? "table-top" : "table-item"}`}>
      <div className="table-item-col justify-start">
        <p>{stock}</p>
      </div>
      <div className="table-item-col justify-center">
        <p >{current}</p>
      </div>
      <div className="table-item-col justify-end">
        <p
          className={!top ? change < 0 ? 'table-item-red-text' : 'table-item-green-text ' : ''}
        >
          {change}
        </p>
      </div>
    </div>
  );
};

export default TableItem;
