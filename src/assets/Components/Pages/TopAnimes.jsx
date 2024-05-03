import axios from 'axios'
import { useContext, useEffect } from 'react'
import { AnimeContext } from '../AnimeContext/AnimeContext'
import { useNavigate } from 'react-router-dom'
import { useVerifyName } from '../useVerifyName'

export const TopAnimes = () => {
    const {topAnimesList, setTopAnimesList} = useContext(AnimeContext)
    const navigate = useNavigate()

    useVerifyName()

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/top/anime')
        .then((res) => setTopAnimesList(res.data))
        .catch(err => console.log(`o catch capturou o erro: ${err}`))
    }, [])

    return(
        <div className="top-animes">
            {topAnimesList && topAnimesList.data ? <div> 
                <h1>Nossos melhores animes:
                </h1>
                <label>Caso não tenha encontrado seu anime, volte a página inicial!</label>
                <button onClick={() => navigate('/animeslist')}>Voltar</button>
                {topAnimesList.data?.map((animes) => <div>
                    <h1>{animes.title}</h1>
                    <img onClick={() => navigate(`/anime/top-animes/${animes.mal_id}`)} src={animes.images.jpg.image_url}/>
                    <p className="top-animess">{animes.synopsis.slice(0, 350)}...</p>
                    <button onClick={() => navigate(`/anime/top-animes/${animes.mal_id}`)}>Saiba Mais</button>
                </div>)}</div> : <h1>Aguarde!</h1>} 
        </div>
    )
}