import { http, HttpResponse } from "msw";
import { tellerData } from "../constants/MockTellerData";
export interface User {
  name: string;
  branch: string;
  image: string;
  position: string;
  id: string;
}

export const handlers = [
  http.get("http://localhost:5173/user", () => {
    return HttpResponse.json(tellerData);
  }),
];
