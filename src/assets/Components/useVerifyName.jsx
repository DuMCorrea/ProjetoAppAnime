import { useContext, useEffect } from "react";
import { AnimeContext } from "./AnimeContext/AnimeContext";
import { useNavigate } from "react-router-dom";

export const useVerifyName = () => {
  const { username } = useContext(AnimeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username === "") {
      navigate("/");
    }
  }, []);
};
