import "./CreateActivity.css"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createActivity } from '../../redux/actions/activities/actions-activities.js'
import validations from './validations.js'
import { findAllCountries } from "../../redux/actions/countries/actions-countries.js"

const FormActivity = () => {
    const countries = useSelector((state) => state.countries)
    const dispatch = useDispatch();

    const [activityDate, setActivityDate] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });

    const [errors, setErrors] = useState({});
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setActivityDate({
            ...activityDate,
            [event.target.name]: event.target.value
        });
    }

    const handleSelectChange = (event) => {
        setActivityDate((prevState) => ({
            ...prevState,
            countries: prevState.countries ? prevState.countries + "," + event.target.value : event.target.value
        }));
        setInputValue("");
        setFilteredCountries([]);
    };

    const handleError = (event) => {
        setErrors(validations({
            ...activityDate,
            [event.target.name]: event.target.value
        }, event.target.name, errors));
    }

    const handleErrorCountries = (event) => {
        setErrors(validations({
            ...activityDate,
        }, event.target.name, errors));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createActivity(activityDate));
        setActivityDate({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: ""
        });
    }

    const isFormValid = () => {
        return errors.name === "" && errors.difficulty === "" && errors.duration === "" && errors.season === "" && errors.countries === ""
    }

    useEffect(() => {
        dispatch(findAllCountries())
    }, [])

    useEffect(() => {
        if (inputValue) {
            setFilteredCountries(
                countries.filter((country) =>
                    country.id.toUpperCase().includes(inputValue.toUpperCase())
                )
            );
        }
    }, [inputValue, countries]);


    return (
        <form className="formActivity" onSubmit={handleSubmit}>
            <h2 className="tittle-createActivity">
                Create tourist activity
            </h2>
            <div className='formName'>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} onBlur={handleError} value={activityDate.name} />
                {event.target.name === "name" && errors.name && <p>{errors.name}</p>}
            </div>
            <div className='formDifficulty'>
                <label>Difficulty:</label>
                <input type="number" name="difficulty" onChange={handleChange} onBlur={handleError} value={activityDate.difficulty} min="1" max="5" step="1" />
                {event.target.name === "difficulty" && errors.difficulty && <p>{errors.difficulty}</p>}
            </div>
            <div className='formDuration'>
                <label>Duration:</label>
                <input type="number" name="duration" onChange={handleChange} onBlur={handleError} value={activityDate.duration} min="0" max="72" step="1" />
                {event.target.name === "duration" && errors.duration && <p>{errors.duration}</p>}
            </div>
            <div className='formSeason'>
                <label>Season:</label>
                <select name="season" onChange={handleChange} onBlur={handleError} value={activityDate.season}>
                    <option value=""> Select </option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                {event.target.name === "season" && errors.season && <p>{errors.season}</p>}
            </div>
            <div className='formCountriesID'>
                <label>Countries ID:</label>
                <div>
                    <span>{activityDate.countries}</span>
                </div>
                <input type="text" name="countries" onChange={(e) => setInputValue(e.target.value)} onBlur={handleErrorCountries} value={inputValue} placeholder="Search country ID" />
                <select onChange={handleSelectChange}>
                    <option value="">Select ID</option>
                    {filteredCountries.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.id}
                        </option>
                    ))}
                </select>
                {errors.countries && <p>{errors.countries}</p>}
            </div>
            <button className="btn-createActivity" type="submit" >Create Activity</button>
        </form>
    );
}

export default FormActivity;
