import { useState } from "react";
import classes from "./InvestmentForm.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
    console.log("submit");
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, //plus converts string to number
      };
    });
  };

  return (
    <form onSubmit={onFormSubmit} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]} //We created one function that affects all input handlers but with the key for a specific input in  "[]"
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput["duration"]}
            type="number"
            id="duration"
            onChange={(event) => changeHandler("duration", event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
