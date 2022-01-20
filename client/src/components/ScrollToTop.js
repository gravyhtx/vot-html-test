import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToEl from "./ScrollToEl";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {ScrollToEl('root')}, 50);
  }, [pathname]);

  return null;
}