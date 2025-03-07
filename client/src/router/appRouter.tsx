import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/Main/main";
import Withdraw from "../page/Withdraw/Withdraw";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

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
