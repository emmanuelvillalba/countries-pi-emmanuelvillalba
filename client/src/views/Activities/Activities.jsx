import "./Activities.css"
import "../../assets/loader.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SearchBar from "../../components/SearchBar/SearchBar"
import ContainerActivities from "../../components/CardContainer/ContainerActivities"
import CreateActivity from "../../components/Form/CreateActivity"
import { findAllActivities, findNameActivities, cleanerState } from '../../redux/actions'

const Activities = () => {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  const allActivities = () => {
    dispatch(findAllActivities())
  }

  useEffect(() => {
    dispatch(findAllActivities())
    return () => { dispatch(cleanerState("activities")) }
  }, [])

  return (
    <div>
      {isLoading ? (<div className="loader"></div>
      ) : (
        <div className="containerActivities">
          <ContainerActivities />
        </div>
      )}
      <CreateActivity />
      <button className="btn-allActivities" onClick={allActivities}> All Activities </button>
      <div className="searchbar">
        <SearchBar action={findNameActivities} />
      </div>
    </div>

  )
}

export default Activities