import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main";
import Page1 from "../page/page1";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

export default AppRouter;