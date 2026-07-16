import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  useEffect(() => {
    // Only scroll to top on forward navigation (PUSH/REPLACE),
    // not on back/forward browser navigation (POP)
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
