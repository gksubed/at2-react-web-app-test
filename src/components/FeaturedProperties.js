

import React from "react";
import house1 from "../assets/images/house1.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";

export const properties = [
  {
    id: 1,
    title: "Luxury Apartment with great views",
    location: "Upper East Side, New York",
    price: "$950",
    bedrooms: 4,
     stay: 2,
    bathrooms: 3,
    // image: "http://placehold.it/760x670",
    image: house1,
  },
  {
    id: 2,
    title: "Stunning Villa with 5 bedrooms",
    location: "Miami Beach, Florida",
    price: "$1,300",
    bedrooms: 5,
    bathrooms: 2,
     stay: 3,
    image: house3,
  },
  {
    id: 3,
    title: "Recent construction with 3 bedrooms",
    location: "Park Slope, New York",
    price: "$560",
    bedrooms: 3,
    bathrooms: 2,
    image: house3,
  },
  {
    id: 4,
    title: "Modern construction with parking space",
    location: "Midtown, New York",
    price: "$85",
    bedrooms: 1,
    bathrooms: 2,
     stay: 4,
    image: house4,
  },
  {
    id: 5,
    title: "Single Family Townhouse",
    location: "Cobble Hill, New York",
    price: "$840",
    bedrooms: 2,
    bathrooms: 2,
     stay: 1,
    image: house1,
  },
  {
    id: 6,
    title: "3 bedroom villa with garage for rent",
    location: "Bal Harbour, Florida",
    price: "$150",
    bedrooms: 3,
    bathrooms: 2,
    stay: 1,
    image: house1,
  },
];

function PropertyCard({ property }) {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href="properties-detail.html">
          <h3>{property.title}</h3>
          <span className="location">{property.location}</span>
        </a>
        <img src={property.image} alt={property.title} />
      </div>
      <div className="price">
        <span>{property.price}</span>
        <p>per night</p>
      </div>
      <ul className="amenities">
        <li><i className="fa fa-bed"></i> {property.bedrooms}</li>
        <li><i className="fa fa-bath"></i> {property.bathrooms}</li>
      </ul>
    </div>
  );
}

function FeaturedProperties() {
  return (
    <div className="main">
      <h1 className="section-title">Featured Properties</h1>
      <div className="grid-style1 clearfix">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
// export { properties };
export default FeaturedProperties;