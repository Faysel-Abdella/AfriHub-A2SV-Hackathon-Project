import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/404";
import RecommendedJobPost from "./components/JobsComponent/RecommendedJobPost";
import AddJobs from "./components/JobsComponent/AddJobs";
import Posts from "./components/JobsComponent/Posts";

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
  {
    path: "dashboard/",
    element: <Dashboard />,
    children: [
      { index: true, element: <RecommendedJobPost /> },
      { path: "posts", element: <Posts /> },
      { path: "addjobs", element: <AddJobs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
