import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const max = props.max;
  const value = props.value;
  const label = props.label;
  let percentageVal = "0%";

  if (max > 0) {
    percentageVal = Math.round((value / max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: percentageVal }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
