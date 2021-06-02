//react
import React from "react";
//styles
import "./index.css";

const TableItem = ({ stock, current, change }) => {
  return (
    <div className="table-item">
      <div className="table-item-col">
        <p className="table-item-text">{stock}</p>
      </div>
      <div className="table-item-col">
        <p className="table-item-text">{current}</p>
      </div>
      <div className="table-item-col">
        <p
          className={
            "table-item-text" && change < 0
              ? "table-item-red-text"
              : "table-item-green-text"
          }
        >
          {change}
        </p>
      </div>
    </div>
  );
};

export default TableItem;
