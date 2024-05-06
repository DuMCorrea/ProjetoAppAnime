import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimeContext } from "../AnimeContext/AnimeContext";

export const CharactersDetails = () => {
  const { id } = useParams();
  const [characterDetail, setCharacterDetail] = useState(null);
  const { lastLocation } = useContext(AnimeContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/characters/${id}`)
      .then((res) => setCharacterDetail(res.data.data))
      .catch((err) => console.log(`catch: ${err}`));
  }, []);

  return (
    <div className="characters-details">
      <button onClick={() => navigate(lastLocation)}>Voltar</button>
      {characterDetail ? (
        <div>
          <h1>{characterDetail.name}</h1>
          <img src={characterDetail.images.jpg.image_url} />
        </div>
      ) : (
        <div className="carregando">
          <h1>Carregando...</h1>
        </div>
      )}
    </div>
  );
};
