import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './style.css'

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import JobsPost from "./pages/JobsPost";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/404";

import { action as signupAction } from "./pages/SignupPage";
import { action as loginAction } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <SignupPage /> }],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    action: signupAction,
  },
  { path: "/Jobs", element: <JobsPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
