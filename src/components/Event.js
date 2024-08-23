import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <h3>{event.summary}</h3>
      <p>
        <strong>Start Time:</strong>{" "}
        {new Date(event.start.dateTime).toLocaleString()}
      </p>
      <p>
        <strong>End Time:</strong>{" "}
        {new Date(event.end.dateTime).toLocaleString()}
      </p>
      <p>
        <strong>Location</strong> {event.location}
      </p>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? <p className="details">{event.description}</p> : null}
    </li>
  );
};

export default Event;
