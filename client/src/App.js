import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404";
import SignupPage from "./pages/SignupPage";

// import { action as completeSignupAction } from "./pages/CompleteSignupPage";
// import { action as loginAction } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signup",
        element: <SignupPage />,
        // action: completeSignupAction,
      },
      // { path: "login", element: <LoginPage />, action: loginAction },
    ],
  },
  // {
  //   path: "dashboard",
  //   element: <Dashboard />,
  //   // loader: dashboardPageLoader,
  //   children: [
  //     { index: true, element: <TasksPage /> },
  //     {
  //       path: "edit-profile",
  //       element: <EditProfilePage />,
  //     },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
