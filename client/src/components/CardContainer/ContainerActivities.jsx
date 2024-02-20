import CardActivity from '../Card/CardActivity';
import { useSelector } from 'react-redux';

const ContainerActivities = () => {
    const activities = useSelector(state => state.activities)

    return (<div className="cards">
        {activities?.map((activity, index) => {
            return <li key={index}>
                <CardActivity key={activity.id} activity={activity} />
            </li>
        })}
    </div>)
}

export default ContainerActivities