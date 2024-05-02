import { useState } from "react";
import { AnimeContext } from "./AnimeContext";

export const AnimeContextProvider = ({ children }) => {
  const [animesList, setAnimesList] = useState({});
  const [username, setUsername] = useState("");
  const [topAnimesList, setTopAnimesList] = useState({});
  const [searchList, setSearchList] = useState("");
  const [animesDetails, setAnimesDetails] = useState(null);
  const [newList, setNewList] = useState(null);
  const [characters, setCharacters] = useState(null)
  const [lastLocation, setLastLocation] = useState('')
  const [manualLocation, setManualLocation] = useState(null) //ju, nao achei outra forma, sei que nao deve ser uma boa pratica!

  return (
    <AnimeContext.Provider
      value={{
        topAnimesList,
        setTopAnimesList,
        animesList,
        setAnimesList,
        username,
        setUsername,
        searchList,
        setSearchList,
        animesDetails,
        setAnimesDetails,
        setNewList,
        newList,
        characters,
        setCharacters,
        lastLocation,
        setLastLocation,
        setManualLocation,
        manualLocation
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
