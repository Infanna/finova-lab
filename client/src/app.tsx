import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/appRouter";

export default function MyApp() {
  return <RouterProvider router={AppRouter} />;
}
