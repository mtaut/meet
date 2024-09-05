import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChange = (e) => {
    const value = e.target.value;
    let errorText = "";

    if (isNaN(value) || Number(value) <= 0) {
      errorText = "Please enter a number greater than 0.";
    } else {
      errorText = "";
    }
    setNumber(value);
    setCurrentNOE(value);
    setErrorAlert(errorText);
  };

  return (
    <div className="numberOfevents">
      <label htmlFor="event-number-input">
        Number of Events:
        <input
          type="number"
          id="numberOfevents"
          className="event-number-input"
          value={number}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default NumberOfEvents;
