import React, { useState, useEffect } from "react";
import { useFechApi } from "./hooks/useFechApi";
import { getRandomNumber } from "./utils";
import Hero from "./components/Hero";
import Search from "./components/Search";
import LocationInfo from "./components/LocationInfo";
import ResidentsList from "./components/ResidentsList";
import Pagination from "./components/Pagination";
import SkeletonRYM from "./components/skeletonRYM";


const baseUrl = "https://rickandmortyapi.com/api/location";

function App() {
  const { data: location, loading, error, request } = useFechApi();
  const [locationId, setLocationId] = useState(getRandomNumber());

  const residentsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    request(`${baseUrl}/${locationId}`);
  }, [locationId]);

  // Reiniciar la página actual cuando cambia la ubicación
  useEffect(() => {
    setCurrentPage(0);
  }, [location]);

  let currentResidents = [];
  let pageCount = 0;
  if (location && location.residents) {
    pageCount = Math.ceil(location.residents.length / residentsPerPage);
    const offset = currentPage * residentsPerPage;
    currentResidents = location.residents.slice(offset, offset + residentsPerPage);
  }

  const handlePageChange = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <Hero />
      <Search setLocationId={setLocationId} />

      {/* Paginación situada debajo del Search */}
      {location && location.residents && (
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {loading ? (
        // Mostrar una lista de skeleton cards, una por cada residente esperado
        <div className="skeleton-list" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {Array.from({ length: residentsPerPage }).map((_, i) => (
            <SkeletonRYM key={i} />
          ))}
        </div>
      ) : location && location.name ? (
        <LocationInfo location={location} />
      ) : (
        !loading && <p>No location data available</p>
      )}

      {location && location.residents && (
        <ResidentsList residents={currentResidents} />
      )}
    </div>
  );
}

export default App;
