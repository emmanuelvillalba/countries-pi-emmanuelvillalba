import './SearchBar.css'
import iconSearch from '../../assets/iconSearch.svg'
import { useState } from "react";
import { useDispatch } from 'react-redux';

const SearchBar = ({action, setCurrentPage}) => {
  const [aux, setAux] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAux(event.target.value)
  }

  const handleSearch = () => {
    const inputSearch = document.querySelector("#inputSearch")
    dispatch(action(inputSearch.value))
    setCurrentPage(1)
    inputSearch.value = ""
  }

  return (
    <div className="searchBox">
      <input className="searchInput" id="inputSearch" type="text" name="" placeholder="Search" onChange={handleChange} />
      <button className="searchButton" href="#" onClick={handleSearch} >
        <img className="iconSearch" src={iconSearch} alt="iconSearch" />
      </button>
    </div>
  )
}

export default SearchBar