import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyApp from "./app";

async function enableMocking() {
  const { server } = await import("./mock/node");
  return server.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <MyApp />
    </StrictMode>
  )
);
