import React from "react";
import "./Cards.scss";

const items = [
  {
    id: 0,
    title: "SpaceX Satellite",
    copy: "A space satellite hovering above the coastline",
    img:
      "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 1,
    title: "Milky Way",
    copy: "Silhouette of mountain under starry night",
    img:
      "https://images.unsplash.com/photo-1611145485693-0be21aacd212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  {
    id: 2,
    title: "Western Cape",
    copy: "Silhouette of mountain near body of water",
    img:
      "https://images.unsplash.com/photo-1490596541415-5afadbfbbf02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1409&q=80"
  },
  {
    id: 4,
    title: "Milky Way",
    copy: "Silhouette of mountain under starry night",
    img:
      "https://images.unsplash.com/photo-1611145485693-0be21aacd212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },
  {
    id: 5,
    title: "Western Cape",
    copy: "Silhouette of mountain near body of water",
    img:
      "https://images.unsplash.com/photo-1490596541415-5afadbfbbf02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1409&q=80"
  },
  {
    id: 3,
    title: "SpaceX Satellite",
    copy: "A space satellite hovering above the coastline",
    img:
      "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
];

const Card = ({ id, title, copy, img, cardClassName, cardStyle }) => (
  <div
    className={`card-container position-relative text-wrap px-0 d-flex flex-column justify-content-center align-items-center ${cardClassName}`}
    style={{ ...cardStyle, color: "#fff" }}
  >
    <div className="card-bg-holder w-100 overflow-hidden">
      <div
        className="card-bg h-100 w-100"
        style={{ background: `center center / cover no-repeat url(${img})` }}
      />
    </div>
    <div className="card-content position-absolute p-3 w-100 h-100 text-center d-flex flex-column align-items-center justify-content-center">
      <h3 className=""><small>{title}</small></h3>
      <p className="">{copy}</p>
      <button href="/" className="px-3 py-1 mr-2">
        View
      </button>
    </div>
  </div>
);

const Cards = ({ className }) => {
  return items.map((card) => (
    <Card
      id={card.id}
      title={card.title}
      copy={card.copy}
      img={card.img}
      cardClassName={`card-item-${card.id + 1} ${className} col-12 col-md-6 col-lg-4`}
    />
  ));
};

export default Cards;