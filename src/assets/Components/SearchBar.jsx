import { useContext, useEffect, useState } from "react";
import { AnimeContext } from "./AnimeContext/AnimeContext";
import axios from "axios";
import { useDebounceSearch } from "./useDebounceSearch";

export const SearchBar = ({ setNewList }) => {
  const { searchList, setSearchList } = useContext(AnimeContext);
  const debouncedValue = useDebounceSearch(searchList);
  const [debouncedSearchList, setDebouncedSearchList] = useState("");

  console.log(debouncedValue);

  useEffect(() => {
    setDebouncedSearchList(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${searchList}`)
        .then((res) => setNewList(res.data))
        .catch((err) => `erro: ${err}`);
    };

    if (debouncedSearchList.trim() !== "") {
      fetchData();
    }
  }, [searchList, debouncedSearchList]);

  return (
    <div className="main-container">
      <div className="search-container">
        <input
          onChange={(e) => {
            setSearchList(e.target.value);
          }}
          placeholder="Pesquise aqui:"
        />
      </div>
    </div>
  );
};
