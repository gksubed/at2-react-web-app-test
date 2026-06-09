import React, { useState } from "react";
import { properties } from "./FeaturedProperties";

function AdvancedSearch() {

  // Form state
  const [formData, setFormData] = useState({
    arriveOn: "",
    stay: "",
    bedrooms: "",
    location: "",
  });

  // Search results
  const [results, setResults] = useState(properties);
  // const [results, setResults] = useState([]);

  // Whether search has been performed
  const [searched, setSearched] = useState(false);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle search submit
  function handleSubmit(e) {
    e.preventDefault();

    const filteredProperties = properties.filter((property) => {

      // Location 
      const matchesLocation =
        formData.location === "" ||
        property.location
          ?.toLowerCase()
          .includes(formData.location.toLowerCase());

      // Bedrooms
      const matchesBedrooms =
        formData.bedrooms === "" ||
        property.bedrooms?.toString() === formData.bedrooms;

      // Stay 
      const matchesStay =
        formData.stay === "" ||
        property.stay?.toString() === formData.stay;

      return (
        matchesLocation &&
        matchesBedrooms &&
        matchesStay
      );
      
    });

    setResults(filteredProperties);
    setSearched(true);

    console.log(filteredProperties);
  }

  return (
    <div id="home-advanced-search" className="open">

      <div id="opensearch"></div>

      <div className="container">

        <div className="row">

          <div className="col-sm-12">

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                {/* Arrive On */}
                <div className="form-control-small">
                  <div className="input-group chzn-container">

                    <input
                      id="arriveOn"
                      type="date"
                      className="form-control"
                      name="arriveOn"
                      value={formData.arriveOn}
                      onChange={handleChange}
                    />

                  </div>
                </div>

                {/* Stay */}
                <div className="form-control-small">

                  <select
                    id="search_status"
                    name="stay"
                    value={formData.stay}
                    onChange={handleChange}
                    className="form-control"
                  >

                    <option value="">Stay...</option>

                    {[...Array(14)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i + 1 === 1 ? "Night" : "Nights"}
                      </option>
                    ))}

                  </select>

                </div>

                {/* Bedrooms */}
                <div className="form-control-small">

                  <select
                    id="search_bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="form-control"
                  >

                    <option value="">Bedrooms...</option>

                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}

                    <option value="5plus">5+</option>

                  </select>

                </div>

                {/* Location */}
                <div className="form-control-large">

                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="City, State, Country, etc..."
                    value={formData.location}
                    onChange={handleChange}
                  />

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-fullcolor"
                >
                  Search
                </button>

              </div>

            </form>

          </div>

        </div>

        {/* SEARCH RESULTS */}

      <div className="search-results">

        {/* <h3>Search Results</h3> */}

        {searched && (
          results.length > 0 ? (
            results.map((property) => (
              <div key={property.id} className="property-card">
                <h4>{property.title}</h4>
                <p>{property.location}</p>
                <p>{property.bedrooms} Bedrooms</p>
              </div>
            ))
          ) : (
            <p>No properties found.</p>
          )
        )}

      </div>

      </div>

    </div>
  );
}

export default AdvancedSearch;