import "./Ezpenses.css";
import Expens from "../components/Expens";

import React from "react";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map((expitem) => (
        <Expens
          title={expitem.title}
          date={expitem.date}
          price={expitem.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
