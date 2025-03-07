import { useNavigate } from "react-router-dom";

export const NavigateToPage = (path: string) => {
  const navigate = useNavigate();

  navigate(path);
};
