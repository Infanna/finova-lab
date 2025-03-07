import { useNavigate } from "react-router-dom";

export const NavigateToPage = () => {
  const navigate = useNavigate();

  return (path: string) => navigate(path);
};
