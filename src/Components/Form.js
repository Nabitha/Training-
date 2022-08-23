import React, { useState } from "react";
import Styles from "../styles";
const Form = ({ getData }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  // const getWeight = (e) => {
  //   console.log(e.target.value);
  //   setWeight(e.target.value);      we can also give this function inside the onChange in input field.
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      // console.log("invalid input");
      // alert("invalid");
      setAlert(true);
    } else {
      // console.log(weight);
      // console.log(height);
      getData(weight, height);
      setAlert(false);
    }
  };
  return (
    <div className="form">
      <div className="bmi-form-container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="weigh">Weight(kg)</label>
          <input
            type="text"
            name="weight"
            id="weigh"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <label htmlFor="height">Height(cm)</label>
          <input
            type="text"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <input type="submit" />
        </form>
        {/* {alert ? <div className="alert-box">Enter valid data</div> : ""} */}{" "}
        {/* this is logical ternary operator in if else statement */}
        {alert && <div className="alert-box">Enter valid data</div>}{" "}
        {/* we can also give like this logical and operator in if statement*/}
      </div>
    </div>
  );
};

export default Form;
