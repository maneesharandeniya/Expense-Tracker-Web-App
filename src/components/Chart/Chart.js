import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expenses = props.expenses;

  const chartData = expenses.reduce(
    (objData, expense) => {
      if (objData[expense.date.toLocaleString("default", { month: "long" })]) {
        objData[expense.date.toLocaleString("default", { month: "long" })] =
          objData[expense.date.toLocaleString("default", { month: "long" })] +
          expense.amount;
      } else {
        objData[expense.date.toLocaleString("default", { month: "long" })] =
          expense.amount;
      }
      return objData;
    },
    {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    }
  );

  const maxVal = Object.keys(chartData).reduce((max, curr) => {
    if (chartData[curr] > max) {
      max = chartData[curr];
    }
    return max;
  }, 0);

  return (
    <div className="chart">
      {Object.keys(chartData).map((key) => (
        <ChartBar
          key={key}
          label={key.substring(0, 3)}
          value={chartData[key]}
          max={maxVal}
        />
      ))}
    </div>
  );
};

export default Chart;
