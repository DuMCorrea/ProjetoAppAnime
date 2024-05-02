import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { AnimesList } from "./assets/Components/Pages/AnimesList";
import { AnimeContextProvider } from "./assets/Components/AnimeContext/AnimeContextProvider";
import { AnimeDetails } from "./assets/Components/Pages/AnimeDetails";
import { StarterPage } from "./assets/Components/Pages/StarterPage";
import { TopAnimes } from "./assets/Components/Pages/TopAnimes";
import { TopAnimesDetails } from "./assets/Components/Pages/TopAnimesDetail";
import { SearchAnimeDetails } from "./assets/Components/Pages/SearchAnimeDetails";
import { CharacterList } from "./assets/Components/Pages/CharacterList";
import { CharactersDetails } from "./assets/Components/Pages/CharactersDetails";

function App() {
  return (
    <BrowserRouter>
      <AnimeContextProvider>
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/animeslist" element={<AnimesList />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="/anime/top-animes" element={<TopAnimes />} />
          <Route path="anime/top-animes/:id" element={<TopAnimesDetails />} />
          <Route path="animeslist/animes/search/:id" element={<SearchAnimeDetails/>}/>
          <Route path="animes/characters/:id" element={<CharacterList/>}/>
          <Route path="/animes/character/:id" element={<CharactersDetails/>}/>
        </Routes>
        
      </AnimeContextProvider>
    </BrowserRouter>
  );
}

export default App;
