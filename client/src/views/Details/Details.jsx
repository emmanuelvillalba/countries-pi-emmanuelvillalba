import "./Details.css"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findDetail } from "../../redux/actions"
import { Link } from "react-router-dom"
import { ACTIVITIES } from '../../helpers/PATHROUTES'
import { findNameActivities } from '../../redux/actions'

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detail)

  useEffect(() => {
    dispatch(findDetail(id))
  }, [id])

  return (
    <div class="card">
      <img src={detail.flag} alt="image" />
      <div>
        <h2>Name: {detail.name}</h2>
        <h3>
          ID: {detail.id}
          <br />
          Continent: {detail.continent}
          <br />
          Capital: {detail.capital}
          <br />
          Subregion: {detail.subregion}
          <br />
          Area: {detail.area}
          <br />
          Population: {detail.population}
          <br />
          Activities:
          {detail.Activities?.map((activity, index) => (
            <Link to={ACTIVITIES} onClick={() => {
              dispatch(findNameActivities(activity.name));
            }}
            >
              <li key={index}>{activity.name}</li>
            </Link>
          ))}
        </h3>
      </div>
    </div>
  )
}

export default Details

{/* <div>
<div>
  <div>
    Name: {detail.name}
    <br />
    ID: {detail.id}
    <br />
    Continent: {detail.continent}
    <br />
    Capital: {detail.capital}
    <br />
    Subregion: {detail.subregion}
    <br />
    Area: {detail.area}
    <br />
    Population: {detail.population}
    <br />
    Activities:
    {detail.Activities?.map((activity, index) => (
      <Link to={ACTIVITIES} onClick={() => {
        dispatch(findNameActivities(activity.name));
      }}
      >
        <li key={index}>{activity.name}</li>
      </Link>
    ))}
  </div>
  <img src={detail.flag} alt="image" />
</div>
</div> */}



/////////////////////////////////////////////
