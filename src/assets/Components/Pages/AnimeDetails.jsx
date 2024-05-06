import { useContext, useEffect, setManualLocation } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import { useVerifyName } from "../useVerifyName";
import { useLastLocation } from "../useLastLocation";

export const AnimeDetails = () => {
  const { id } = useParams();
  const { animesList, animesDetails, setAnimesDetails, setManualLocation } =
    useContext(AnimeContext);
  const navigate = useNavigate();
  const location = useLocation();

  useVerifyName();

  useEffect(() => {
    if (animesList && animesList.data) {
      const animes = animesList.data.find(
        (anime) => anime.mal_id === parseInt(id)
      );
      setAnimesDetails(animes);
      setManualLocation(location.pathname);
    }
  }, [id, animesList]);

  useLastLocation();

  return (
    <div className="anime-details">
      {animesDetails && (
        <div>
          <h1>{animesDetails.title}</h1>
          <img src={animesDetails.images.jpg.image_url} />
          <p>{animesDetails.synopsis}</p>
          <button onClick={() => navigate(`/animes/characters/${id}`)}>
            Ver Personagens
          </button>
          <button onClick={() => navigate("/animeslist")}>Voltar</button>
        </div>
      )}
    </div>
  );
};
