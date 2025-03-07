import { createBrowserRouter } from "react-router-dom";
import Withdraw from "../page/Withdraw/Withdraw";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import MainPage from "../page/MainPage/MainPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <MainPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/withdraw",
    element: (
      <>
        <Navbar />
        <Withdraw />
        <Footer />
      </>
    ),
  },
]);

export default AppRouter;
