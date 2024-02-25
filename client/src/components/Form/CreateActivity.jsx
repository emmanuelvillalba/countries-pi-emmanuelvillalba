import "./CreateActivity.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createActivity } from '../../redux/actions.js'
import validations from './validations.js'

const FormActivity = () => {
    const dispatch = useDispatch();

    const [activityDate, setActivityDate] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setActivityDate({
            ...activityDate,
            [event.target.name]: event.target.value
        });
    }

    const handleError = (event) => {
        setErrors(validations({
            ...activityDate,
            [event.target.name]: event.target.value
        }, event.target.name));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length === 0) {
            dispatch(createActivity(activityDate));
            setActivityDate({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                countries: []
            });
        } else {
            alert('Complete all data correctly');
        }
    }

    const isFormValid = () => {
        const currentErrors = validations(activityDate);
        return !currentErrors.name && !currentErrors.difficulty && !currentErrors.duration && !currentErrors.season && !currentErrors.countries
    }

    return (
        <form className="formActivity" onSubmit={handleSubmit}>
            <h2 className="tittle-createActivity">
                Create tourist activity
            </h2>
            <div className='formName'>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} onBlur={handleError} value={activityDate.name} />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div className='formDifficulty'>
                <label>Difficulty:</label>
                <input type="number" name="difficulty" onChange={handleChange} onBlur={handleError} value={activityDate.difficulty} min="1" max="5" step="1" />
                {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>
            <div className='formDuration'>
                <label>Duration:</label>
                <input type="number" name="duration" onChange={handleChange} onBlur={handleError} value={activityDate.duration} min="0" max="72" step="1" />
                {errors.duration && <p>{errors.duration}</p>}
            </div>
            <div className='formSeason'>
                <label>Season:</label>
                <select name="season" onChange={handleChange} onBlur={handleError} value={activityDate.season}>
                    <option value="">--Select--</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                {errors.season && <p>{errors.season}</p>}
            </div>
            <div className='formCountriesID'>
                <label>Countries ID:</label>
                <input type="text" name="countries" onChange={handleChange} onBlur={handleError} value={activityDate.countries} placeholder="Enter country ID (3 letters)" />
                {errors.countries && <p>{errors.countries}</p>}
            </div>
            <button className="btn-createActivity" type="submit" disabled={!isFormValid()}>Create Activity</button>
        </form>
    );

}

export default FormActivity;
