import { useEffect } from "react";
import { useFechApi } from "../hooks/useFechApi";
import './ResidentCard.css'

function ResidentCard({ url }) {
  const { data: resident, request, loading } = useFechApi();

  useEffect(() => {
    request(url);
  }, [url]);

  if (loading) return <p>Cargando...</p>;

  if (!resident || Object.keys(resident).length === 0) {
    return <p>Error al cargar el residente</p>;
  }

  const episodes = resident.episode ? resident.episode.length : 0;

  return (
    <div className="resident__card">
      <div className="resident__header">
       <img className="resident__img" src={resident.image} alt={resident.name} />
       <span className="resident__status">{resident.status}</span>
      </div>
      <div className="resident__body">
       <h2 className="resident__name">{resident.name}</h2>
        <ul className="resident__info">
         <li className="reisdent__item"><span className="resident__span">Specie:</span> {resident.species}</li>
         <li className="reisdent__item"><span className="resident__span">Origin:</span> {resident.origin?.name || "Unknown"}</li>
         <li className="reisdent__item"><span className="resident__span">Episodes where appear:</span> {episodes} {episodes === 1 ? "episode" : "episodes"}</li>
       </ul>
      </div>
    </div>
  );
}

export default ResidentCard;
