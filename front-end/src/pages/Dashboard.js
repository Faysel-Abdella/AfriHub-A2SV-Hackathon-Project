import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import customFetch from "../utils/customeFecth";

import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";

import { toast } from "react-toastify";

function Tabs() {
  const isActive = "recommendation";
  console.log(isActive === "recommendation");
  console.log(isActive);

  return (
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li
          className={
            isActive === "recommendation" ? "nav-item active" : "nav-item"
          }
          onClick={() => {
            isActive = "recommendation";
          }}
        >
          <a className="nav-link" href="/dashboard">
            Recommended Jobs
          </a>
        </li>
        <li
          className={isActive == "posts" ? "nav-item active" : "nav-item"}
          onClick={() => {
            isActive = "posts";
          }}
        >
          <a className="nav-link" href="/dashboard/posts">
            Posts
          </a>
        </li>
        <li
          className={isActive == "addjobs" ? "nav-item active" : "nav-item"}
          onClick={() => {
            isActive = "addjobs";
          }}
        >
          <a className="nav-link" href="/dashboard/addjobs">
            Add Job
          </a>
        </li>
      </ul>
    </div>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
    };
    
    const checkTheUser = async () => {
      try {
        await customFetch.post("/users/check-user", data);

        return redirect("/jobs");
      } catch (error) {

        error.message = error?.response?.data?.message;
        return navigate("/signup");
      }
    };
    checkTheUser();
  }, []);

  return (
    <>
      <Navigation />
      <Tabs />
      <Outlet />
      <div className="my-5">.</div>
      <Footer />
    </>
  );
};

export default Dashboard;
