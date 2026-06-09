// components/PropertyCard.jsx

import React from "react";

function PropertyCard({title, location, price, bedrooms, bathrooms, image}) {

  return (
    <div className="item col-md-4">

      <div className="image">
        <a href="#">
          <h3>{title}</h3>
          <span className="location">{location}</span>
        </a>
        <img src={image} alt={title}/>
      </div>

      <div className="price">
        <span>${price}</span>
        <p>per night</p>
      </div>

      <ul className="amenities">
        <li>{bedrooms} Bedrooms</li>
        <li>{bathrooms} Bathrooms</li>
      </ul>

    </div>
  );
}

export default PropertyCard;