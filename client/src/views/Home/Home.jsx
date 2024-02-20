import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react'
import { ACTIVITIES } from '../../helpers/PATHROUTES'
import SearchBar from "../../components/SearchBar/SearchBar"
import { findAllCountries, findNameCountries, orderAlphabetical, orderPopulation, filterContinent } from '../../redux/actions'
import CardCountry from '../../components/Card/CardCountry'
import Pagination from '../../components/Pagination/pagination'

const Home = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10
  const changePage = (num) => {
    setCurrentPage(num);
  };

  const handleAlphabetical = (event) => {
    dispatch(orderAlphabetical(event.target.value))
  }
  const handlePopulation = (event) => {
    dispatch(orderPopulation(event.target.value))
  }

  const handleFilter = (event) => {
    dispatch(filterContinent(event.target.value));
  }

  useEffect(() => {
    dispatch(findAllCountries())
  }, [])

  return (
    <div>
      <div className="searchbar">
        <SearchBar action={findNameCountries} />
      </div>
      <div>
        <Link to={ACTIVITIES}>
          <button>ACTIVITY</button>
        </Link>
      </div>
      <div>
        <div className="order">
          <div className='text-filter'>
            <label>Alphabetical Order</label>
          </div>
          <select id="order-select" onChange={handleAlphabetical}>
            <option>Select Order</option>
            <option value="A">A - Z</option>
            <option value="D">Z - A</option>
          </select>
        </div>
        <div className="order">
          <div className='text-filter'>
            <label>Population Order</label>
          </div>
          <select id="order-select" onChange={handlePopulation}>
            <option>Select Order</option>
            <option value="A">Lowest to Highest</option>
            <option value="D">Highest to Lowest</option>
          </select>
        </div>
        <div className="filter">
          <div className='text-filter'>
            <label>Filter by Continent</label>
          </div>
          <select id="continent-select" onChange={handleFilter}>
            <option value="default">Select Continent</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="cards">
        {countries
          ?.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
          .map((country) => {
            return <CardCountry country={country} key={country.id} />;
          })}
      </div>
      <div>
        <Pagination currentPage={currentPage} totalPages={Math.ceil(countries.length / cardsPerPage)} changePage={changePage} />
      </div>
    </div>
  )
}

export default Home
