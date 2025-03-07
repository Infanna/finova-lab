import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/appRouter.tsx";

export default function MyApp() {
  return <RouterProvider router={AppRouter} />;
}
