// src/pages/RegionsPage.jsx

import React from "react";
import { regions } from "../data/regions";

function Regions() {
  return (
    <div className="container">
    <div className="row">

        <div className="grid-style1 clearfix">
            {regions.map((region, index) => (
                <div className="item col-md-4" key={index}>
                <div className="image">
                    <a href="#">
                    <h3>{region.city}</h3>
                    <span className="location">{region.state}</span>
                    </a>

                    <img src={region.image} alt={region.city} />

                    <div className="region-description">
                    <p>{region.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
      </div>
    </div>
  
  );
}

export default Regions;