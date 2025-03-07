import { createBrowserRouter } from "react-router-dom";
import Main from "../page/main/main";
import Page1 from "../page/page1";
import TransactionMenu from "../components/TransactionMenu";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/t",
    element: <TransactionMenu />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
]);

export default AppRouter;