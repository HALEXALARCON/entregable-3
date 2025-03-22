import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

function Search({ setLocationId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Si el input está vacío, limpiamos sugerencias y errores
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      setError("");
      return;
    }

    // Si el input es numérico, no mostramos sugerencias
    if (!isNaN(searchTerm)) {
      setSuggestions([]);
      setError("");
      return;
    }

    // Debounce para minimizar solicitudes mientras se escribe 
    const delayDebounceFn = setTimeout(() => {
      const fetchLocations = async () => {
        try {
          const res = await axios.get(
            `https://rickandmortyapi.com/api/location/?name=${searchTerm}`
          );
          setSuggestions(res.data.results || []);
          setError("");
        } catch (err) {
          setSuggestions([]);
          setError("No se encontraron locaciones");
        }
      };

      fetchLocations();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Manejo del cambio en el input
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Si se hace click en una sugerencia, se actualiza el input y se busca la locación
  const handleSuggestionClick = (location) => {
    setSearchTerm(location.name);
    setSuggestions([]);
    setError("");
    setLocationId(location.id);
  };

  // Al presionar Enter:
  // - Si el input es numérico, se busca por número.
  // - Si no, se selecciona la primera sugerencia (si existe).
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.trim() === "") return;

      if (!isNaN(searchTerm)) {
        setLocationId(searchTerm);
        setSuggestions([]);
        setError("");
      } else if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0]);
      }
    }
  };

  // Al hacer click en el botón:
  // - Si el input es numérico, se busca por número.
  // - Si no, se selecciona la primera sugerencia (si existe).
  const handleButtonClick = () => {
    if (searchTerm.trim() === "") return;

    if (!isNaN(searchTerm)) {
      setLocationId(searchTerm);
      setSuggestions([]);
      setError("");
    } else if (suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Buscar locación..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="search__button" onClick={handleButtonClick}>
          Search
        </button>
      </div>
      {error && <p className="search__error">{error}</p>}
      {suggestions.length > 0 && (
        <ul className="search__suggestions">
          {suggestions.map((location) => (
            <li
              key={location.id}
              className="search__suggestion"
              onClick={() => handleSuggestionClick(location)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
