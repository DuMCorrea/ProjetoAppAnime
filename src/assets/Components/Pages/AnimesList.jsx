import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useVerifyName } from "../useVerifyName";
import { SearchBar } from "../SearchBar";

export const AnimesList = () => {
  const { animesList, setAnimesList, username, newList, setNewList} = useContext(AnimeContext);
  const navigate = useNavigate();
  const [numItems, setNumItems] = useState(3);
  const [endList, setEndList] = useState(false);

  useVerifyName();

    useEffect(() => {
        axios
        .get("https://api.jikan.moe/v4/anime")
        .then((response) => setAnimesList(response.data))
        .catch((error) => {
          console.error("Erro ao obter dados da API:", error);
        });
    }, []);


  const showMoreItems = (e) => {
    e.preventDefault();
    if (newList.data.length > numItems) {
      setNumItems(numItems + 3);
    } else {
      setEndList(true);
    }
  };

  const endItemsButton = () =>{
    setNumItems(3)
    setEndList(false)
  }
 
  return (
    <div className="animes-list"> 
      <h1 className="welcome-message">Bem-Vindo {username}!</h1> 
      <label className="search-label">Não achou seu anime favorito?</label> 
      <SearchBar newList={newList} setNewList={setNewList} />
      <button className="top-animes-button" onClick={() => navigate("/anime/top-animes")}>
        Ver Top Animes
      </button> {/* Adicionando a classe "top-animes-button" */}
      {newList !== null ? (
        <div>
          {newList.data.slice(0, numItems).map((anime) => (
            <div key={anime.mal_id} className="anime-container"> 
              <h1 className="anime-title">{anime.title}</h1> 
              <img src={anime.images.jpg.image_url} alt={anime.title} className="anime-image" /> 
              <button className="see-more-button" onClick={() => navigate(`animes/search/${anime.mal_id}`)} >Ver Mais</button>
            </div>
          ))}
          {endList ? (
            <button className="end-items-button" onClick={endItemsButton}>Voltar</button> 
          ) : (
            <button className="load-more-button" onClick={showMoreItems}>Carregar Mais</button> 
          )}
        </div>
      ) : (
        <div className="animes-listt">
          {animesList && animesList.data ? (
            animesList.data.map((anime) => (
              <div className="anime-container"> 
                <img
                  onClick={() => navigate(`/anime/${anime.mal_id}`)}
                  src={anime.images.jpg.image_url}
                  className="anime-image"
                />
                <h2 onClick={() => navigate(`/anime/${anime.mal_id}`)} className="anime-title"> 
                  {anime.title}
                </h2>
                <h3>
                  Sinopse: <p>{anime.synopsis.slice(0, 250)}...</p>
                </h3>
                <button onClick={() => navigate(`/anime/${anime.mal_id}`)} className="see-more-button"> 
                  Ver Mais
                </button>
                <br />
              </div>
            ))
          ) : (
            <div className="anime-container">
              <h1>Aguarde O Conteúdo!</h1>
              </div>
          )}
        </div>
      )}
    </div>
  );
};
