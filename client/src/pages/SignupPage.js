import logo from "../assets/images/africa-logo.png";

const SignupPage = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "#3366ff" }}
    >
      <form className="card p-5" style={{ width: "clamp(25rem, 25rem + 1vw ,30rem)", background: "#071C42"}}>
        <div class="mb-3 mt-3 d-flex justify-content-center align-items-center">
          <img src={logo} alt="AfriHub" style={{ width: "3rem" }} />
          <span className="text-light mx-4 fs-2">AfriHub</span>
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label fs-6 text-light">
            Full Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Fullname"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label fs-6 text-light">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label fs-6 text-light">
            Password:
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label fs-6 text-light">
            Confirm password:
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Re-Enter Password"
          />
        </div>
        <div class="mt-3 mb-3 d-flex">
          <p className="text-light ">Already have account </p>
          <a href="/login" className="link-light mx-2">Login</a>
        </div>
        <div class="mt-3">
          <button className="btn w-100 border-primary rounded-5 text-light">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
