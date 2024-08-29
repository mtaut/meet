import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEventCount(value);
    setCurrentNOE(value);
  };

  return (
    <div className="numberOfevents">
      <label htmlFor="event-number-input">
        Number of Events:
        <input
          type="number"
          id="numberOfevents"
          className="event-number-input"
          value={eventCount}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default NumberOfEvents;
