import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "./AnimeContext/AnimeContext";
import { useLocation } from "react-router-dom";

export const useLastLocation = () => {
  const { lastLocation, setLastLocation } = useContext(AnimeContext);
  const location = useLocation();

  useEffect(() => {
    setLastLocation(location.pathname);
  }, [location.pathname]);

  return { lastLocation, setLastLocation };
};
