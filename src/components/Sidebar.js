import React from "react";
import { Link } from "react-router-dom"; 
import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";

const deals = [
  { id: 1, title: "Private Beach", location: "Lossarnach, Eriador", available: "Available Now", image: house1 },
  { id: 2, title: "Mountain views", location: "Hyarnustar, Rhovanion", available: "Available on 24 July", image: house1 },
  { id: 3, title: "Heart of the village", location: "Minhiriath, Eriador", available: "Available 5 July", image: house3 },
  { id: 4, title: "The city life", location: "West Beleriand, Mordor", available: "Available 6 July", image: house4 },
];

const activities = [
  { id: 1, user: "Sam Minnée", action: "reviewed", property: "The House With No Windows", propertyId: 1, comment: "Awesome solitary confinement.", time: "Just now", image: house1 },
  { id: 2, user: "Ingo Schoomer", action: "asked a question about", property: "The Mistake by the Lake", propertyId: 2, comment: "Has this house been unit tested?", time: "37 minutes ago", image: house2 },
];

function LastMinuteDeals() {
  return (
    <div className="block mb-6">
      <h2 className="title is-4 pt-4 pb-4">Last minute deals</h2>
      <div className="is-flex is-flex-direction-column style-gap-3">
        {deals.map((deal) => (
          <div key={deal.id} className="box p-3" data-theme="light">
            <div className="columns is-mobile is-vcentered m-0">
              
              {/* IMAGE COLUMN: Forced dimensions via Bulma's system */}
              <div className="column is-4 p-0">
                <figure className="image is-4by3" style={{ overflow: "hidden", borderRadius: "0.375rem" }}>
                  <Link to={`/article/${deal.id}`}>
                    <img 
                      alt={deal.title} 
                      src={deal.image} 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </Link>
                </figure>
              </div>

              <div className="column is-8 py-0 pr-0 pl-3">
                <p className="is-size-7 has-text-grey mb-1"> {deal.available}</p>
                <h4 className="is-size-6 has-text-weight-bold mb-0">
                  <Link to={`/article/${deal.id}`} className="has-text-link">
                    {deal.title}
                  </Link>
                </h4>
                <p className="is-size-7 has-text-grey-dark">{deal.location}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="block mt-6 mb-6">
      <h2 className="title is-4 pt-4 pb-4">Activity</h2>
      <div className="is-flex is-flex-direction-column style-gap-3">
        {activities.map((item) => (
          <article key={item.id} className="media box p-3" data-theme="light">
            <div className="media-left m-0 mr-3">
            
              <figure className="image is-48x48" style={{ overflow: "hidden", borderRadius: "50%" }}>
                <img 
                  src={item.image} 
                  alt={item.user} 
                  style={{ width: "200px", height: "150px", objectFit: "cover" }} 
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content is-size-6">
                <p>
                  <strong>{item.user}</strong> <span className="has-text-grey">{item.action}</span>{" "}
                  <Link to={`/article/${item.propertyId}`} className="has-text-link has-text-weight-medium">
                    {item.property}
                  </Link>
                  <br />
                  <span className="has-text-grey-dark is-size-7">{item.comment}</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="menu p-4">
      <div style={{ marginBottom: "3rem" }}>
      <LastMinuteDeals />
          </div>
      <Activity />
     
    </aside>
  );
}
