import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <h1 className="m-5 text-center">Register</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserame"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <p>
          You have registered already? Go <Link to={`/login/`}>Login</Link>
        </p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="submit" className="btn btn-primary mt-5 px-5 py-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
