import { Link } from "react-router-dom"
import { DETAILID } from "../../helpers/PATHROUTES"

const CardActivity = ({ activity }) => {

    return (
        <div>
            Name: {activity.name}
            <br />
            Difficulty: {activity.difficulty}/5
            <br />
            Duration: {activity.duration} hs
            <br />
            Season: {activity.season}
            <br />
            Countries:
            {activity.Countries?.map((country, index) => (
                <Link to={DETAILID(country.id)}>
                    <span key={index}> {country.id} </span>
                </Link>
            ))}
        </div>
    )
}

export default CardActivity