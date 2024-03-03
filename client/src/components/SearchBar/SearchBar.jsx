import './SearchBar.css'
import iconSearch from '../../assets/iconSearch.svg'
import { useDispatch } from 'react-redux';

const SearchBar = ({ action, setCurrentPage }) => {

  const dispatch = useDispatch();

  const handleSearch = () => {
    const inputSearch = document.querySelector("#inputSearch")
    dispatch(action(inputSearch.value))
    inputSearch.value = ""
    if (setCurrentPage) {
      setCurrentPage(1)
    }
  }

  return (
    <div className="searchBox">
      <input className="searchInput" id="inputSearch" type="text" name="" placeholder="Search" />
      <button className="searchButton" href="#" onClick={handleSearch} >
        <img className="iconSearch" src={iconSearch} alt="iconSearch" />
      </button>
    </div>
  )
}

export default SearchBar