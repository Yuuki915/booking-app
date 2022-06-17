import React from "react";
import Navbar from "./Navbar";
import Hero from "../topPage/Hero";
import Hotels from "../topPage/Hotels";
import Flights from "../topPage/Flights";
import HotelsDetail from "../detailPage/HotelsDetail";

export default function Header() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Hotels />
      <Flights />

      {/* <HotelsDetail /> */}
    </div>
  );
}
