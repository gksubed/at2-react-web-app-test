import React from "react";
import house1 from "../assets/images/house1.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";


const articles = [
  {
    id: 1,
    date: "July 30, 2014",
    comments: 2,
    tags: "Properties, Prices, best deals",
    title: "How to get your dream property for the best price?",
    excerpt: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
    icon: "fa fa-file-text",
    image: house1,
  },
  {
    id: 2,
    date: "July 24, 2014",
    comments: 4,
    tags: "Tips, Mortgage",
    title: "7 tips to get the best mortgage.",
    excerpt: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
    icon: "fa fa-film",
    image: house3,
  },
  {
    id: 3,
    date: "July 05, 2014",
    comments: 1,
    tags: "Location, Price, House",
    title: "House, location or price: What's the most important factor?",
    excerpt: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
    icon: "fa fa-file-text",
    image: house4,
  },
];

function ArticleCard({ article }) {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href="#">
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </a>
        <img src={article.image} alt={article.title} />
      </div>
      <div className="tag"><i className={article.icon}></i></div>
      <div className="info-blog">
        <ul className="top-info">
          <li><i className="fa fa-calendar"></i> {article.date}</li>
          <li><i className="fa fa-comments-o"></i> {article.comments}</li>
          <li><i className="fa fa-tags"></i> {article.tags}</li>
        </ul>
        <h3><a href="#">{article.title}</a></h3>
        <p>{article.excerpt}</p>
      </div>
    </div>
  );
}

function Articles() {
  return (
      <div className="main">
      <h1 className="section-title">Recent Articles</h1>
      <div className="grid-style1">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="center">
        <a href="/articles" className="btn btn-default-color">View All News</a>
      </div>
    </div>
  );
}

export default Articles;