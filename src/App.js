import { useState } from "react";
import BmiList from "./Components/BmiList";
import Form from "./Components/Form";
import Score from "./Components/Score";

function App() {
  const [bmi, setBmi] = useState("00"); // state for bmi score.removed 18 and put an empty string
  const [bmiType, setBmiType] = useState("Not Calculated"); //state for bmi type
  // // let bmi = 18;
  // const changeBmi = () => {
  //   // bmi=19;
  //   setBmi(19);
  //   console.log(bmi);
  // };
  //no need to write separate function for bmi updation. call setBmi in onclick function.
  const onFormSubmit = (w, h) => {
    let c = calcBmi(w, h);
    // let weighttype = type(c);
    setBmiType(type(c));
    setBmi(calcBmi(w, h));
    console.log(w, h);
  };
  const calcBmi = (w, h) => ((w / h / h) * 10000).toFixed(2);
  const type = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Overweight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };
  return (
    <>
      {/* <div>My bmi is {bmi}</div> */}
      {/* <button onClick={() => setBmi(bmi + 10)}>Click here</button> */}
      <Form getData={onFormSubmit} />
      <Score bmiscore={bmi} bminame={bmiType} />{" "}
      {/* props passing. score,name are passing to score component*/}
      <BmiList />
    </>
  );
}

export default App;
