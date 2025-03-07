import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main/main";
import Page1 from "../page/page1";
import Withdraw from "../page/Withdraw/Withdraw";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

export default AppRouter;
