import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationCange = () => {
      // console.log(`Location Change`);
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationCange);
    return () => {
      window.removeEventListener("popstate", onLocationCange);
    };
  }, []);
  //VAR 2
  return currentPath === path ? children : null;
  //VAR 1
  //   return window.location.pathname === path ? children : null;
};

export default Route;
