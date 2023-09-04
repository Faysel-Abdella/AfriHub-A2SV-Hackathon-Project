// import React from "react";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import customFetch from "../../utils/customeFecth";

import logo from "../../assets/images/africa-logo.png";

import "./style.css";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleSignup = () => {
    navigate(`/signup`);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  const [isLogedin, setIsLogedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
    };
    const checkTheUser = async () => {
      try {
        await customFetch.post("/users/check-user", data);
        setIsLogedin(true)
      } catch (error) {
        error.message = error?.response?.data?.message;
        // return navigate("/signup");
        setIsLogedin(false)
      }
    };
    checkTheUser();
  }, []);


  return (
    <header className="p-3 bg-light text-dark heade">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
          >
            <img src={logo} alt="LOGO" style={{ width: "2rem" }} />
            <span className="mx-2 text-success">AfriHub</span>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mx-3 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-dark">Home</a></li>
              <li><a href="/dashboard" className="nav-link px-2 text-dark">Dashboard</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {!isLogedin ? 
          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-primary me-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleSignup}
            >
              Sign-up
            </button>
          </div>:
          <div className="text-end">
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Navigation;
