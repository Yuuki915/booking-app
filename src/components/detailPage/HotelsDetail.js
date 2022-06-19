import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import hotelsImg from "../../imgs/england.jpeg";

import "./HotelDetail.css";

export default function HotelsDetail() {
  return (
    <div>
      <Navbar />

      <h1>Booking Hotel</h1>

      <div className="booking-container m-5 d-flex justify-content-evenly">
        <div className="booking-page-img">
          <img src={hotelsImg} alt="" />
        </div>

        <div className="hotelWrapper">
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <span>1234 Paris, France</span>
          </div>
          <span className="text-success ">
            Excellent location - 500m from center
          </span>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Lorem ipsum dolor sit amet.</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse efficitur erat sodales, efficitur massa eu, blandit
                risus. Sed ullamcorper, mi vitae porta pulvinar, leo urna
                consequat orci, a fringilla augue enim auctor augue. Nunc
                rhoncus nunc nisl, ut feugiat ligula placerat id. Mauris ut
                bibendum dui. In accumsan metus in ultrices semper. Mauris sed
                vestibulum augue. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Aenean est lorem, ultricies eget tempus ac,
                hendrerit a dolor. Vestibulum vel lobortis augue. Mauris
                pellentesque, leo vitae egestas gravida, massa leo dapibus est,
                non efficitur nulla neque sit amet lorem. Mauris placerat est ut
                tellus efficitur, ac egestas enim lacinia. Aenean id magna ac
                lacus dictum sodales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hotelDetailsPrice my-5">
        <h2>
          <b>$350</b> (3 nights)
        </h2>
        <button className="btn btn-primary">Reserve or Book Now!</button>
      </div>

      <Footer />
    </div>
  );
}
