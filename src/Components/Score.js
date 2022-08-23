import React from "react";

const Score = ({ bmiscore, bminame }) => {
  //simplified the code by replacing props with bmiscore and bminame.we can destructure here.destructuring is a js feature
  //   console.log(props);
  //   const { bmiscore, bminame } = props; //destructuring
  return (
    <div>
      {/* Bmi Score :{bmiscore} <br></br>{" "} */}
      {/* we can avoid {props.bmiscore} by destructuring */}
      {/* Bmi Type: {bminame} */}
      <div className="bmi-score-container">
        <h1>Your bmi score</h1>
        <div className="">{bmiscore}</div>
        <div className="">{bminame}</div>
      </div>
    </div>
  );
};

export default Score;
