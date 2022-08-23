import { useState } from "react";
import BmiList from "./Components/BmiList";
import Form from "./Components/Form";
import Score from "./Components/Score";

function App() {
  const [bmi, setBmi] = useState("00"); // state for bmi score.removed 18 and put an empty string
  const [bmiType, setBmiType] = useState("Not Calculated"); //state for bmi type
  const [bmiRange, setBmiRange] = useState({
    underweight: { low: "" },
    normal: { low: "", high: "" },
    Overweight: { low: "", high: "" },
    Obesityone: { low: "", high: "" },
    Obesitytwo: { low: "", high: "" },
    Obesitythree: { low: "", high: "" },
  });
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
    setBmi(c);
    console.log(w, h);
    const range = {
      underweight: { low: calcWeight(18.5, h) },
      normal: { low: calcWeight(18.5, h), high: calcWeight(24.9, h) },
      Overweight: { low: calcWeight(25, h), high: calcWeight(29.9, h) },
      Obesityone: { low: calcWeight(30, h), high: calcWeight(34.9, h) },
      Obesitytwo: { low: calcWeight(35, h), high: calcWeight(39.9, h) },
      Obesitythree: { high: calcWeight(40, h) },
    };
    setBmiRange(range);
  };
  const calcBmi = (w, h) => ((w / h / h) * 10000).toFixed(2);
  const calcWeight = (c, h) => (c * h * h).toFixed(2);
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
      <BmiList range={bmiRange} />
    </>
  );
}

export default App;
