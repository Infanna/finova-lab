import { setupWorker } from "msw/browser";
import { handlers } from "../services/user";

export const server = setupWorker(...handlers);
