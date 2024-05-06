import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useVerifyName } from "../useVerifyName";
import { SearchBar } from "../SearchBar";
import { AnimesListSearch } from "../PagesDetails/AnimesListSearch";
import { AnimeListRender } from "../PagesDetails/AnimeListRender";

export const AnimesList = () => {
  const { setAnimesList, username, newList, setNewList } =
    useContext(AnimeContext);
  const navigate = useNavigate();

  useVerifyName();

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then((response) => setAnimesList(response.data))
      .catch((error) => {
        console.error("Erro ao obter dados da API:", error);
      });
  }, []);

  return (
    <div className="animes-list">
      <h1 className="welcome-message">Bem-Vindo {username}!</h1>
      <label className="search-label">Não achou seu anime favorito?</label>
      <SearchBar newList={newList} setNewList={setNewList} />
      <button
        className="top-animes-button"
        onClick={() => navigate("/anime/top-animes")}
      >
        Ver Top Animes
      </button>
      {newList !== null ? (
        <AnimesListSearch/>
      ) : (
        <AnimeListRender/>
      )}
    </div>
  );
};
