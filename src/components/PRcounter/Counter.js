import React, { useEffect } from "react";

import "./Counter.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    getPRdata();
  }, []);

  const getPRdata = async () => {
    const target = `https://docs.google.com/spreadsheets/d/1j7mCwOWP3hSlKPfHKy0BvNZljSgJoqnUqTgjILqYFgU/export?format=csv`;
    const result = await fetch(target);
    const data = await result.text();
    var rows = data.toString().split("\r");
    let pr = 0;
    for (var i = 0; i < rows.length; i++) {
      let tempPr = 0; // total number of PRs in a row
      let tempArr = rows[i].split(","); // divide into cells in a row
      for (var j = 0; j < tempArr.length; j++) {
        if(tempArr[j].includes("issues")) tempPr = tempPr - 2; // remove issues from PR count
        // discard empty cells
        if (tempArr[j].length > 0) tempPr = tempPr + 1;
      }
      pr = pr + (tempPr - 2)/2; // remove the first two cells which contain name and total points, then divide by 2 as each PR takes 2 cells
    }
    setCount(pr);
  };

  return (
    <div className="PRcounter">
      <div className="counter-head">Total Pull Requests done</div>
      <div className="count">{count}</div>
    </div>
  );
};

export default Counter;
