"use client";

import { useEffect, useState } from "react";
import Loader from "./ui/Loader";

const ClientWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loader /> : children}</>;
};

export default ClientWrapper;
