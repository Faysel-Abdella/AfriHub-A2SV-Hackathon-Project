import React from "react";
import heroImg from "../../assets/images/heroImg.svg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container-fluid">
      <div
        className="container d-flex align-items-center flex-wrap"
        style={{ height: "90vh" }}
      >
        <div className="col-12 col-md-6">
          <h1 className="text-primary my-3" style={{ textAlign: "left" }}>
            Connecting Talents Across Africa!
          </h1>
          <p className="">
            The biggest problem in Africa is not the lack of jobs; the real
            problem is that we do not know where to look!
          </p>
          <Link to={"/signup"}>
            <button className="btn btn-primary">Signup Now</button>
          </Link>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src={heroImg} className="w-75 w-md-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
