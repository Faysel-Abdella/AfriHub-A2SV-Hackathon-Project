import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

import ErrorPage from "./pages/404";

// import { loader as dashboardPageLoader } from "./pages/EditProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SignupPage /> },
      {
        path: "complete-signup",
      },
      // { path: "login", element: <LoginPage />, action: loginAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
