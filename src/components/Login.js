import React from "react";
import loginpic from "../assets/images/login.avif";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} alt="Login pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                Create an Account
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>


                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
