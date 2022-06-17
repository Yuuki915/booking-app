import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <h1 className="m-5 text-center">Login</h1>
      <form>
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
          You have not registered yet? Go{" "}
          <Link to={`/register/`}>Register</Link>
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
