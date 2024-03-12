import "./Home.css"
import "../../assets/loader.css"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react'

import SearchBar from "../../components/SearchBar/SearchBar"
import CardCountry from '../../components/Card/CardCountry'
import Pagination from '../../components/Pagination/pagination'
import {
  handleAlphabetical,
  handlePopulation,
  handleFilterContinent,
  handleFilterActivity,
  handlerCleaner
} from "../../components/Filters/filters"
import { findAllCountries, findNameCountries } from '../../redux/actions/countries/actions-countries'
import { findAllActivities } from '../../redux/actions/activities/actions-activities'
import { cleanerState } from '../../redux/actions/stateManagement/actions-stateManagement'

const Home = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const activities = useSelector(state => state.activities)
  const isLoading = useSelector(state => state.isLoading)

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10
  const changePage = (num) => {
    setCurrentPage(num);
  };

  const handlerCountries = () => {
    dispatch(findAllCountries())
  }

  useEffect(() => {
    dispatch(findAllCountries(0, 10))
    dispatch(findAllActivities())
    return () => { dispatch(cleanerState("home")) }
  }, [])

  return (
    <div>
      <div className="searchbar">
        <SearchBar action={findNameCountries} setCurrentPage={setCurrentPage} />
      </div>
      <div className="all-filters">
        <div className="orderAlphabetical">
          <div className='text-filter'>
            <label>Alphabetical Order</label>
          </div>
          <select id="order-select" onChange={() => { handleAlphabetical(event, dispatch, setCurrentPage) }}>
            <option value="default" disabled selected>Select Order</option>
            <option value="A">A - Z</option>
            <option value="D">Z - A</option>
          </select>
        </div>
        <div className="orderPopulation">
          <div className='text-filter'>
            <label>Population Order</label>
          </div>
          <select id="order-select" onChange={() => { handlePopulation(event, dispatch, setCurrentPage) }}>
            <option value="default" disabled selected>Select Order</option>
            <option value="A">Lowest to Highest</option>
            <option value="D">Highest to Lowest</option>
          </select>
        </div>
        <div className="filterContinent">
          <div className='text-filter'>
            <label>Filter by Continent</label>
          </div>
          <select id="order-select" onChange={() => { handleFilterContinent(event, dispatch, setCurrentPage) }}>
            <option value="default" disabled selected>Select Continent</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="filterActivity">
          <div className='text-filter'>
            <label>Filter by Activity</label>
          </div>
          <select id="order-select" onChange={() => { handleFilterActivity(event, dispatch, setCurrentPage) }} >
            <option value="default" disabled selected>Select Activity</option>
            {activities.map((activity, index) => (
              <option key={index} value={activity.name}>{activity.name}</option>
            ))}
          </select>
          <button className="clean-filter" onClick={() => { handlerCleaner(dispatch) }}>Clean filters</button>
          <button className="all-countries" onClick={handlerCountries}>All Countries</button>
        </div>
      </div>
      {isLoading ? (<div className="loader"></div>
      ) : (
        <div>
          <div className="containerCountry">
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
      )}
    </div>
  )
}

export default Home
