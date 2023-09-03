import logo from "../assets/images/africa-logo.png";

import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

import customFetch from "../utils/customeFecth";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    const dataFromServer = await customFetch.post("/auth/signup", data);

    const { token } = dataFromServer.data;
    localStorage.setItem("token", token);

    toast.success("Registration successful", { autoClose: 1000 });
    return redirect("/login");
  } catch (error) {
    //use conditional nesting
    console.log(error);
    toast.error(error?.response?.data?.message, { autoClose: 1000 });
    return error;
  }
};

const SignupPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100%", background: "#b4c7ff" }}
    >
      <Form
        method="POST"
        className="card p-5"
        style={{
          width: "clamp(25rem, 25rem + 1vw ,30rem)",
          background: "#071C42",
        }}
      >
        <div class="mb-3 mt-3 d-flex justify-content-center align-items-center">
          <img src={logo} alt="AfriHub" style={{ width: "3rem" }} />
          <span className="text-light mx-4 fs-2">AfriHub</span>
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="name" class="form-label fs-6 text-light">
            Full Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Full Name"
            name="fullName"
          />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="email" class="form-label fs-6 text-light">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="password" class="form-label fs-6 text-light">
            Password:
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
            name="password"
          />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="confirmPassword" class="form-label fs-6 text-light">
            Confirm password:
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <div class="mt-3 mb-3 d-flex">
          <p className="text-light ">Already have account ? </p>
          <a href="/login" className="link-light mx-2">
            Login
          </a>
        </div>
        {/* <div class="mt-3"> */}
        <button
          className="btn w-100 border-primary rounded-5 text-light mt-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Signup"}
        </button>
        {/* </div> */}
      </Form>
    </div>
  );
};
export default SignupPage;
