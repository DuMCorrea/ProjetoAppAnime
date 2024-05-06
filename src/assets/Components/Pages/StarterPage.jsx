import { useContext } from "react";
import { AnimeContext } from "../AnimeContext/AnimeContext";
import { Navigate, useNavigate } from "react-router-dom";

export const StarterPage = () => {
  const { setUsername, username } = useContext(AnimeContext);
  const navigate = useNavigate();

  const confirmButton = () => {
    if (username !== "") {
      navigate("/animeslist");
    } else {
      alert("Você deve digitar um nome!");
    }
  };

  return (
    <div className="starter-page">
      <h1>Bem-Vindo!</h1>
      <label>Digite seu nome:</label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Digite seu nome aqui"
      />
      <button onClick={confirmButton}>Avançar</button>
    </div>
  );
};
