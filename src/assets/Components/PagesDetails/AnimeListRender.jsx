import { useContext } from "react"
import { AnimeContext } from "../AnimeContext/AnimeContext"
import { useNavigate } from "react-router-dom"

export const AnimeListRender = () => {
    const {animesList} = useContext(AnimeContext)
    const navigate = useNavigate()

    return(
        <div className="animes-listt">
          {animesList && animesList.data ? (
            animesList.data.map((anime) => (
              <div className="anime-container">
                <img
                  onClick={() => navigate(`/anime/${anime.mal_id}`)}
                  src={anime.images.jpg.image_url}
                  className="anime-image"
                />
                <h2
                  onClick={() => navigate(`/anime/${anime.mal_id}`)}
                  className="anime-title"
                >
                  {anime.title}
                </h2>
                <h3>
                  Sinopse: <p>{anime.synopsis.slice(0, 250)}...</p>
                </h3>
                <button
                  onClick={() => navigate(`/anime/${anime.mal_id}`)}
                  className="see-more-button"
                >
                  Ver Mais
                </button>
                <br />
              </div>
            ))
          ) : (
            <div className="carregando">
              <h1>Aguarde O Conteúdo!</h1>
            </div>
          )}
        </div>
    )
}