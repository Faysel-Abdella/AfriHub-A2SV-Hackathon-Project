import { useForm } from "react-hook-form";

import {
  Link,
  Form,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";

import { toast } from "react-toastify";
import customFetch from "../utils/customeFecth";

import logo from "../assets/images/africa-logo.png";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { message: "" };
  if (data.password.length < 3) {
    errors.message = "password too short";
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login success", { autoClose: 3000 });
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    // toast.error(error?.response?.data?.message);
    error.message = error?.response?.data?.message;
    return error;
  }
};

const LoginPage = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#b4c7ff" }}
    >
      <form
        className="card p-5"
        style={{
          width: "clamp(25rem, 25rem + 1vw ,30rem)",
          background: "#071C42",
        }}
      >
        <div class=" mt-3 mb-5 d-flex justify-content-center align-items-center">
          <img src={logo} alt="AfriHub" style={{ width: "3rem" }} />
          <span className="text-light mx-4 fs-2">AfriHub</span>
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="email" class="form-label fs-6 text-light">
            Email:
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="mb-3 mt-3">
          <label htmlFor="password" class="form-label fs-6 text-light">
            Password:
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div class="mt-3 mb-3 d-flex">
          <p className="text-light ">Do not have account </p>
          <a href="/signup" className="link-light mx-2">
            Signup
          </a>
        </div>
        {/* <div class="mt-3"> */}
        <button className="btn w-100 border-primary rounded-5 text-light mt-3">
          Login
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};
export default LoginPage;
