import React from "react";
import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';


function ExpenseItem(props) {

  return (
    <Card className="expense-item">
      {/* <h2>Expense item!</h2> */}
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
    </Card>
  );
}

export default ExpenseItem;
