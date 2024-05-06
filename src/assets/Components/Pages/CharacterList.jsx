import { useContext, useEffect } from "react";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useLastLocation } from "../useLastLocation";

export const CharacterList = () => {
  const { characters, setCharacters, manualLocation } =
    useContext(AnimeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}/characters`)
      .then((res) => setCharacters(res.data))
      .catch((err) => console.log(`erro: ${err}`));
  }, []);

  const backButton = () => {
    navigate(manualLocation);
    setCharacters("");
  };

  useLastLocation();

  const characterClick = (personagem) => {
    navigate(`/animes/character/${personagem.character.mal_id}`);
  };

  return (
    <div className="character-list">
      <div>
        <button onClick={backButton}>Voltar</button>
        {characters && characters.data !== null ? (
          characters.data.map((personagem) => (
            <div key={personagem.mal_id}>
              <h1>{personagem.character.name}</h1>
              <img
                onClick={() => characterClick(personagem)}
                src={personagem.character.images.jpg.image_url}
              />
            </div>
          ))
        ) : (
          <div className="carregando">
            <h1>Carregando...</h1>
          </div>
        )}{" "}
      </div>
    </div>
  );
};
