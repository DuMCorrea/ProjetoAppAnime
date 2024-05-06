import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useVerifyName } from "../useVerifyName";

export const SearchAnimeDetails = () => {
  const { newList, setSearchList, setManualLocation } =
    useContext(AnimeContext);
  const [singleList, setSingleList] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (newList && newList.data) {
      const singleAnime = newList.data.find(
        (anime) => anime.mal_id === parseInt(id)
      );
      setSingleList(singleAnime);
      setManualLocation(location.pathname);
    }
  }, [id, singleList]);

  const clearButton = () => {
    navigate("/animeslist");
    setSearchList("");
  };

  const characterClick = () => {
    navigate(`/animes/characters/${id}`);
  };

  useVerifyName();

  return (
    <div className="search-anime-details">
      {singleList !== null ? (
        <div>
          <h1>{singleList.title}</h1>
          <img onClick={characterClick} src={singleList.images.jpg.image_url} />
          <p>{singleList.synopsis}</p>
          <button onClick={characterClick}>Ver Personagens</button>
          <button onClick={clearButton}>Voltar</button>
        </div>
      ) : (
        <div className="carregando">
          <h1>Carregando Conteúdo!</h1>
        </div>
      )}
    </div>
  );
};
