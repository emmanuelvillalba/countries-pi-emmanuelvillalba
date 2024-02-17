import CardConteiner from "../../components/CardConteiner/CardConteiner"
import SearchBar from "../../components/SearchBar/SearchBar"


const Home = () => {
  return (
    <div> 
      <div>
      ACA VAN LAS CARD DEL HOME
        <CardConteiner />
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  )
}

export default Home