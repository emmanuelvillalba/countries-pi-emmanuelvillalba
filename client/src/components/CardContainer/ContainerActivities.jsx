import "./CardContainer.css"
import CardActivity from '../Card/CardActivity';
import { useSelector } from 'react-redux';

const ContainerActivities = () => {
    const activities = useSelector(state => state.activities)

    return (<div className="cardsActivities">
        {activities?.map((activity, index) => {
            return  <CardActivity key={activity.id} activity={activity} /> 
        })}
    </div>)
}

export default ContainerActivities