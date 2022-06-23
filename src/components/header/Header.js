import React from "react";
import Navbar from "./Navbar";
import Hero from "../topPage/Hero";
import TopHotels from "../topPage/TopHotels";
// import Flights from "../topPage/Flights";

export default function Header() {
  return (
    <div>
      <Navbar />
      <Hero />

      <TopHotels />
      {/* <Flights /> */}
    </div>
  );
}
