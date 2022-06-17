import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import hotelsImg from "../../imgs/england.jpeg";

export default function HotelsDetail() {
  return (
    <div>
      <Header />

      <h1>Booking Hotel</h1>

      <div className="booking-container m-5 d-flex justify-content-evenly">
        <div className="booking-page-img">
          <img src={hotelsImg} alt="" />
        </div>

        <div className="d-flex flex-column justify-content-evenly">
          <h2 className="m-2">Hotel</h2>
          <p className="m-2">when</p>
          <p className="m-2">how many people</p>
          <button type="submit" className="btn btn-info">
            submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
