import React from "react";
import hotelsImg from "../../imgs/england.jpeg";

export default function Hotels() {
  const hotelsTopPage = [
    {
      hotelName: "Hotel1",
      plice: 100,
      place: "Kyoto, Japan",
      img: hotelsImg,
    },
    {
      hotelName: "Hotel2",
      plice: 150,
      place: "Paris, France",
      img: hotelsImg,
    },
    {
      hotelName: "Hotel3",
      plice: 100,
      place: "Kyoto",
      img: hotelsImg,
    },
  ];
  return (
    <div className="top-hotels">
      <h1 className="hotels-h1">Hotels</h1>
      <div className="topPage-hotels-container">
        {hotelsTopPage.map((hotel) => (
          <div className="topPage-hotel" key={hotel.key}>
            <a className="hotel-link" href="/">
              <img className="topPage-img" src={hotel.img} alt="" />
              <p>{hotel.place}</p>
            </a>

            <div className="hotel-info-hover">
              <h3 className="m-2">{hotel.hotelName}</h3>
              <div className="hotel-hr"></div>
              <p className="m-2">${hotel.plice} / day</p>
              <p className="m-2">{hotel.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
