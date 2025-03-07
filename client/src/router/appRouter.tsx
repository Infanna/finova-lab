import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main/main";
import Withdraw from "../page/Withdraw/Withdraw";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Main />
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
