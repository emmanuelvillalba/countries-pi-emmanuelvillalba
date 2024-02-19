import { useDispatch, useSelector } from 'react-redux'
import SearchBar from "../../components/SearchBar/SearchBar"
import ConteinerActivities from "../../components/CardConteiner/ConteinerActivities"
import CreateActivity from "../../components/Form/CreateActivity"
import { findAllActivities, findNameActivities } from '../../redux/actions'

const Activity = () => {
  const dispatch = useDispatch()

  const allActivities = () => {
    dispatch(findAllActivities())
  }

  return (
    <div>
      <div>
        <SearchBar action={findNameActivities} />
      </div>
      <div>
        <CreateActivity />
      </div>
      <div>
        <button onClick={allActivities}> All Activities </button>
      </div>
      <div>
        <ul>
          <ConteinerActivities />
        </ul>
      </div>
    </div>
  )
}

export default Activity