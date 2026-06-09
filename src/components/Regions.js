import React from "react";
import house1 from "../assets/images/house1.jpg";
import house3 from "../assets/images/house3.jpg";

const regions = [
  { id: 1, name: "Rhovanion", image: house1 },
  { id: 2, name: "Eriador", image: house3 },
  { id: 3, name: "Bay of Belfalas", image: house3 },

];

function Regions() {
  return (
    <div className="container">
    <div className="row">

        <div className=" col-sm-8">
        <h1 className="section-title">Popular Regions</h1>
        
        <div id="regions">
          {regions.map((region) => (
            <div key={region.id} className="item">
              <a href="#">
                <img src={region.image} alt={region.name} />
                <h3>{region.name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Regions;