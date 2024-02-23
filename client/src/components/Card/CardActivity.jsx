import "./CardActivity.css"
import { Link } from "react-router-dom"
import { DETAILID } from "../../helpers/PATHROUTES"

const CardActivity = ({ activity }) => {

    return (
        <div className="parent">
            <div className="cardActivity">
                <div className="content-box">
                    <span className="cardActivity-title">{activity.name}</span>
                    <p className="cardActivity-content">
                        Difficulty: {activity.difficulty}/5
                        <br />
                        Duration: {activity.duration} hs
                        <br />
                        Season: {activity.season}
                    </p>
                    <span className="see-more">
                        Countries:
                        <br />
                        {activity.Countries?.map((country, index) => (
                            <Link to={DETAILID(country.id)}>
                                <span key={index}> {country.id} </span>
                            </Link>
                        ))}
                    </span>
                </div>
                <div className="date-box">
                    <span className="month">ID</span>
                    <span className="date">{activity.id}</span>
                </div>
            </div>
        </div>
    )
}

export default CardActivity