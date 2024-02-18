import Card from '../Card/Card.jsx';
import { useSelector } from 'react-redux';

const CardConteiner = () => {
  const countries = useSelector(state => state.countries)
  return (<div className="cards">
    {countries?.map((country) => {
      return <Card
        key={country.id}
        country={country}
      />
    })}
  </div>)
}

export default CardConteiner