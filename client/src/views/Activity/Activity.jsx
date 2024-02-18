import { useDispatch, useSelector } from 'react-redux';
import CardActivity from '../../components/Card/CardActivity';
import { findAllActivities } from '../../redux/actions'
import { useEffect } from 'react';

const Activity = () => {
  const dispatch = useDispatch()
  const activities = useSelector(state => state.activities)

  useEffect(() => {
    dispatch(findAllActivities())
  }, [])

  return (
    <div>
      <ul>
        {activities?.map((activity, index) => {
          return <li key={index}>
            <CardActivity key={activity.id} activity={activity} />
          </li>
        })}
      </ul>
    </div>
  )
}

export default Activity