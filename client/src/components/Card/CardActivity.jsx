import { Link } from "react-router-dom"

const CardActivity = ({ activity }) => {
    return (
        <div>
            <div>
                {activity.name}
            </div>
            <div>
                Difficulty: {activity.difficulty}
                <br />
                Duration: {activity.duration} hs
                <br />
                Season: {activity.season}
                <br />
                Countries:
            </div>
        </div>
    )
}

export default CardActivity