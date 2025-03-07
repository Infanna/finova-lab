import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main/main";
import Page1 from "../page/page1";
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
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

export default AppRouter;
