import { Link } from "react-router-dom"

const CardCountry = ({ country }) => {

  return (
    <div>
      <Link to={`/detail/${country.id}`}>
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
