import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import { useVerifyName } from "../useVerifyName";
import { useLastLocation } from "../useLastLocation";

export const TopAnimesDetails = () => {
  const { topAnimesList, setManualLocation } = useContext(AnimeContext);
  const { id } = useParams();
  const [topAnimesDetails, setTopAnimesDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useVerifyName();

  useEffect(() => {
    if (topAnimesList && topAnimesList.data) {
      const animes = topAnimesList.data.find(
        (anime) => anime.mal_id === parseInt(id)
      );
      setTopAnimesDetails(animes);
      setManualLocation(location.pathname);
    }
  }, []);

  useLastLocation();

  const characterListClick = () => {
    navigate(`/animes/characters/${id}`);
  };

  return (
    <div className="top-animes-details">
      {topAnimesDetails && (
        <div>
          <h1>{topAnimesDetails.title}</h1>
          <img draggable={false} src={topAnimesDetails.images.jpg.image_url} />
          <p>{topAnimesDetails.synopsis}</p>
          <button onClick={characterListClick}>Ver Personagens</button>
          <button onClick={() => navigate("/anime/top-animes")}>Voltar</button>
        </div>
      )}
    </div>
  );
};
