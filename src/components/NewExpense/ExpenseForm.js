import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // using multiple states method (most prefered method is this)
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // second method
  // using single useState
  // const [userInputs, setUSerInputs] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // })

  // const titleChangeHandler = (event) => {

  //     // setUSerInputs({
  //     //     // this will may not work properly sometimes
  //     //     // since state scheduler
  //     //     //therefore we may used outdated state values
  //     //     ...userInputs,
  //     //     enteredTitle: event.target.value
  //     // })

  //     // since above way may produce wrong output
  //     // keep in mind use this method if using single state
  //     // this way will used the prevState only when creating new state
  //     setUSerInputs((prevState) => {
  //         return ({
  //             ...prevState,
  //             enteredTitle: event.target.value
  //         })
  //     })

  //     console.log(userInputs)
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    setShowForm(false);
  };

  const showFormOnClickHandler = () => {
    setShowForm(true);
  };

  const cancelOnClickHandler = () => {
    setShowForm(false);
  };

  if (!showForm) {
    return <button onClick={showFormOnClickHandler}>Add New Expense</button>;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button onClick={cancelOnClickHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

/* Best way to do with singale state and single handler
   without the two way binding as well*/

// function Form() {
//     const [userInput, setUserInput] = useState({mail: '', password: ''})
//     const handleUserInput = (e) => {
//       setUserInput((prevState)=> (
//         {...prevState,
//         [e.target.name]: e.target.value}
//       ))
//     }
//     return (
//         <form>
//           <input value={userInput.mail} name='mail' onChange={handleUserInput}/>
//           <input value={userInput.password} name='password' onChange={handleUserInput}/>
//         </form>
//     );
//   }
