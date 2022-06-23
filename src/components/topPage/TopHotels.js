import React from "react";
import useFetch from "../../hooks/useFetch";
import hotelsImg from "../../imgs/england.jpeg";

export default function Hotels() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=kyoto,paris,london"
  );
  console.log(data);

  // const hotelsTopPage = [
  //   {
  //     hotelName: "Hotel1",
  //     plice: 100,
  //     place: "Kyoto, Japan",
  //     img: hotelsImg,
  //   },
  //   {
  //     hotelName: "Hotel2",
  //     plice: 150,
  //     place: "Paris, France",
  //     img: hotelsImg,
  //   },
  //   {
  //     hotelName: "Hotel3",
  //     plice: 100,
  //     place: "London, England",
  //     img: hotelsImg,
  //   },
  // ];
  return (
    <div className="top-hotels">
      {loading ? (
        "Loading.. Please wait..."
      ) : (
        <>
          <h1 className="hotels-h1">Hotels</h1>
          <div className="topPage-hotels-container">
            <div className="topPage-hotel">
              <a className="hotel-link" href="/">
                <img className="topPage-img" src={hotelsImg} alt="" />
                <p>Kyoto, Japan</p>
              </a>

              <div className="hotel-info-hover">
                <h3 className="m-2">Hotel1</h3>
                <div className="hotel-hr"></div>
                <p className="m-2">$100 / day</p>
                <p className="m-2">Kyoto, Japan</p>
              </div>
            </div>

            <div className="topPage-hotel">
              <a className="hotel-link" href="/">
                <img className="topPage-img" src={hotelsImg} alt="" />
                <p>Paris, France</p>
              </a>

              <div className="hotel-info-hover">
                <h3 className="m-2">Hotel2</h3>
                <div className="hotel-hr"></div>
                <p className="m-2">$150 / day</p>
                <p className="m-2">Paris, France</p>
              </div>
            </div>

            <div className="topPage-hotel">
              <a className="hotel-link" href="/">
                <img className="topPage-img" src={hotelsImg} alt="" />
                <p>London, England</p>
              </a>

              <div className="hotel-info-hover">
                <h3 className="m-2">Hotel3</h3>
                <div className="hotel-hr"></div>
                <p className="m-2">$130 / day</p>
                <p className="m-2">London, England</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
