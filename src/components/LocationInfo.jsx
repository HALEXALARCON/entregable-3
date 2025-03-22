import './LocationInfo.css'

function LocationInfo({ location }) {
  const length = location.residents?.length
  return (
    <div className="location">
    <div className="location__container">
     <h2 className="location__name">{location.name}</h2>   
      <ul className='location__info'>
       <li className='location__item'>
        <span className='location__span'>Type:</span> {location.type}
        </li>
       <li className='location__item'>
        <span className='location__span'>Dimension:</span> {location.dimension}
        </li>
       <li className='location__item'>
        <span className='location__span'>Population:</span> {length}{length === 1 ? "Resident" : "Residents"}
        </li>
      </ul>
    </div>
    </div>
  )
}

export default LocationInfo