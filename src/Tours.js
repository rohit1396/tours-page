import React from "react";
import Tour from "./Tour";
import "./Tours.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      <h1>Our Tours</h1>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
