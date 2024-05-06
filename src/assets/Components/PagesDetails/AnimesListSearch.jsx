import { useContext, useState } from "react"
import { AnimeContext } from "../AnimeContext/AnimeContext"
import { useNavigate } from "react-router-dom";

export const AnimesListSearch = () => {
    const { newList } = useContext(AnimeContext)
    const [numItems, setNumItems] = useState(3);
    const [endList, setEndList] = useState(false); 
    const navigate = useNavigate()

    const showMoreItems = (e) => {
        e.preventDefault();
        if (newList.data.length > numItems) {
          setNumItems(numItems + 3);
        } else {
          setEndList(true);
        }
      };

      const endItemsButton = () => {
        setNumItems(3);
        setEndList(false);
      };

    return(
        <div>
        {newList.data.slice(0, numItems).map((anime) => (
          <div key={anime.mal_id} className="anime-search">
            <h1 className="anime-title">{anime.title}</h1>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="anime-image"
            />
            <button
              className="see-more-button"
              onClick={() => navigate(`animes/search/${anime.mal_id}`)}
            >
              Ver Mais
            </button>
          </div>
        ))}
        {endList ? (
          <button className="end-items-button" onClick={endItemsButton}>
            Voltar
          </button>
        ) : (
          <button className="load-more-button" onClick={showMoreItems}>
            Carregar Mais
          </button>
        )}
      </div>
    )
}