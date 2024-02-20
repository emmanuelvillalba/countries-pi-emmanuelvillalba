import { Link } from "react-router-dom"
import { DETAILID } from "../../helpers/PATHROUTES"

const CardCountry = ({ country }) => {

  return (
    <div>
      <Link to={DETAILID(country.id)}>
        <div>
          <div>
            Name: {country.name}
            <br />
            Continent: {country.continent}
          </div>
          <br />
          <img src={country.flag} alt="image" />
        </div>
      </Link>
    </div>
  )
}

export default CardCountry
