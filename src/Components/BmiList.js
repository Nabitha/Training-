import React from "react";

const BmiList = () => {
  return (
    <div className="main-list-container">
      <div className="type-container">
        <div className="type-heading">
          <div className="">TYPE</div>
          <div className="">BMI</div>
          <div className="">WEIGHT</div>
        </div>
        <div className="items">
          <div>Underweight</div>
          <div>18.5</div>
          <div></div>
        </div>
        <div className="items">
          <div>Normal</div>
          <div>18.5-24.9</div>
          <div></div>
        </div>
        <div className="items">
          <div>Overweight</div>
          <div>25-29.9</div>
          <div></div>
        </div>
        <div className="items">
          <div>Obesity class I</div>
          <div>30-34.9</div>
          <div></div>
        </div>
        <div className="items">
          <div>Obesity class II</div>
          <div>30-35.9</div>
          <div></div>
        </div>
        <div className="items">
          <div>Obesity class III</div>
          <div>40</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BmiList;
