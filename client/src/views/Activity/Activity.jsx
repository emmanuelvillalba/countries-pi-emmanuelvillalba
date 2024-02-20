import { useDispatch } from 'react-redux'
import SearchBar from "../../components/SearchBar/SearchBar"
import ContainerActivities from "../../components/CardContainer/ContainerActivities"
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
          <ContainerActivities />
        </ul>
      </div>
    </div>
  )
}

export default Activity