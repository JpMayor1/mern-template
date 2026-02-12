import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layouts/app/AppLayout";
import LandingPage from "./pages/general/LandingPage";
import { authRoutes } from "./routes/auth/auth.route";
import { homeRoutes } from "./routes/home/home.route";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      authRoutes,
      homeRoutes,
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
