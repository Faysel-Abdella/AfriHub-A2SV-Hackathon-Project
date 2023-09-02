import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import JobsPost from "./pages/JobsPost";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/404";

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
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  { path: "/Jobs", element: <JobsPost /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
