import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="tour">
      <img className="tour_image" src={tour.image} />
      <div className="tour_details">
        <p className="tour_name">{tour.name}</p>
        <p className="tour_info">
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <span
            className="tour_readmore"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show Less" : "Read More"}
          </span>
        </p>
        <p className="tour_price">${tour.price}</p>
        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
      </div>
    </section>
  );
};

export default Tour;
