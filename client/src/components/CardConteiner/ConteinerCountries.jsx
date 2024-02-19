import CardCountry from '../Card/CardCountry.jsx';
import { useSelector } from 'react-redux';

const ConteinerCountries = () => {
  const countries = useSelector(state => state.countries)

  return (<div className="cards">
    {countries?.map((country) => {
      return <CardCountry
        key={country.id}
        country={country}
      />
    })}
  </div>)
}

export default ConteinerCountries