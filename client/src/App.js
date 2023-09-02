import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
