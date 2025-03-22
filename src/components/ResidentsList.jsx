import ResidentCard from "./ResidentCard"
import './ResidentsList.css'

function ResidentsList({ residents }) {
  console.log(residents)
  return (
    <>
    {residents.length === 0 && 
    <h2 style={{textAlign: 'center' }}>There aren't residents</h2>}
    <div className="residents">
        {residents.map(resident => (
          <ResidentCard key={resident} url={resident}/>
        ))}
    </div>
    </>
  )
}

export default ResidentsList