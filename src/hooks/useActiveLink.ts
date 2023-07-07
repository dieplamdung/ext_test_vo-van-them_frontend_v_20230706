import { useLocation } from "react-router-dom";

export const useActiveLink = () => {
  const location = useLocation();
  const { pathname } = location;

  return pathname;
};
