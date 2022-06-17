import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center">
      <h1 className="text-center">Welcome!</h1>

      <div className="btns d-flex justify-content-center">
        <Link to={`/login/`}>
          <button
            type="button"
            className="btn btn-success m-3 px-5 py-3 text-white"
          >
            Login
          </button>
        </Link>

        <Link to={`/register/`}>
          <button
            type="button"
            className="btn btn-warning m-3 px-5 py-3 text-white"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
