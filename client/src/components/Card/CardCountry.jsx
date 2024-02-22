import "./CardCountry.css"
import { Link } from "react-router-dom"
import { DETAILID } from "../../helpers/PATHROUTES"

const CardCountry = ({ country }) => {

  return (
    <div className="card">
      <img src={country.flag} alt="image" />
      <div>
        <h2>{country.name}</h2>
        <h3>Continent: {country.continent}</h3>
        <Link to={DETAILID(country.id)}>
        <button>Detail</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCountry