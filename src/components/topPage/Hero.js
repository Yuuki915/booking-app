import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

function Hero() {
  const [openCal, setOpenCal] = useState(false);
  const [bookingDate, setBookingDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="hero">
      {/* <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/hotels">Hotel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Flight</Nav.Link>
        </Nav.Item>
      </Nav> */}

      <h1 className="hero-text my-5">Enjoy your trip!</h1>
      <div className="form-container d-flex justify-content-between align-items-center p-2 border-bottom border-1 border-dark">
        <Form.Control
          type="search"
          placeholder="Where are you going?"
          className="border-0 shadow-none w-25"
          aria-label="Search"
        />
        <div className="cal">
          <span onClick={() => setOpenCal(!openCal)}>{`${format(
            bookingDate[0].startDate,
            "MM/dd/yyyy"
          )} - ${format(bookingDate[0].endDate, "MM/dd/yyyy")}`}</span>
          {openCal && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setBookingDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={bookingDate}
              className="calender"
            />
          )}
        </div>
        <div className="peopleOptions">
          <span
            onClick={() => setOpenOptions(!openOptions)}
          >{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "dec")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "dec")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "dec")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "inc")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Button variant="outline-success" className="rounded-0">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Hero;
