import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });  


    // let expensesContent = <p>No content find</p>

    // if(filteredExpenses.length > 0){
    //     expensesContent = filteredExpenses.map(expense => {
    //         return <ExpenseItem
    //              key={expense.id}
    //              title={expense.title}
    //              amount={expense.amount}
    //              date={expense.date}
    //          />
    //      })
    // }
    


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {/* similar to conditional statement if length is equal to 0 then <p>No expenses found</p> show 
                && usually used in  js for conditio9nal statements*/}
            {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
            
            {filteredExpenses.length > 0 && filteredExpenses.map(expense => {
               return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })} }*/}
            
            {<ExpensesList expenses={filteredExpenses}/>}

        </Card>

    )

}

export default Expenses;