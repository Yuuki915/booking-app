import React from "react";

export default function Flights() {
  const flightTopPage = [
    {
      to: "Sapporo,Japan",
      plice: 150,
    },
    {
      to: "Paris, France",
      plice: 150,
    },
    {
      to: "Tokyo, Japan",
      plice: 100,
    },
  ];
  return (
    <div className="top-flights">
      <h1 className="flight-h1">Flight</h1>
      <div className="topPage-flight-container">
        {flightTopPage.map((flight) => (
          <div className="topPage-flight" key={flight.key}>
            <a className="flight-link" href="/">
              <div className="flight-info">
                <p>{flight.to}</p>
                <p>${flight.plice}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
