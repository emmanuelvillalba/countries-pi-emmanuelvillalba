import "./CardActivity.css"
import { Link } from "react-router-dom"
import { DETAILID } from "../../helpers/PATHROUTES"
import { useDispatch } from "react-redux"
import { deleteActivity } from "../../redux/actions"

const CardActivity = ({ activity }) => {
    const dispatch = useDispatch()

    const handlerDelete = () => {
        dispatch(deleteActivity(activity.id))
    }
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
                            <Link key={index} to={DETAILID(country.id)}>
                                <span> {country.id} </span>
                            </Link>
                        ))}
                    </span>
                </div>
                <div className="date-box">
                    <span className="month">ID</span>
                    <span className="date">{activity.id}</span>
                </div>
                <div className="container-btnD">
                    <button className="btn-delete" onClick={handlerDelete}>
                        <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardActivity