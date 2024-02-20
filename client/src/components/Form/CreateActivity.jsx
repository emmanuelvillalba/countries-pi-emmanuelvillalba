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
        setErrors(validations({
            ...activityDate,
            [event.target.name]: event.target.value
        }));
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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} value={activityDate.name} />
                {errors.name && <p>{errors.name}</p>}
            </div>

            {/* <div>
                <label>Difficulty:</label>
                <span onChange={handleChange}>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <span key={i}>
                                <input type="radio" name="difficulty" value={ratingValue} />
                                <span>☆</span>
                            </span>
                        );
                    })}
                </span>
                {errors.difficulty && <p>{errors.difficulty}</p>}
            </div> */}

            <div>
                <label>Difficulty:</label>
                <input type="number" name="difficulty" onChange={handleChange} value={activityDate.difficulty} min="1" max="5" step="1" />
                {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>
            <div>
                <label>Duration:</label>
                <input type="number" name="duration" onChange={handleChange} value={activityDate.duration} min="0" step="1" />
                {errors.duration && <p>{errors.duration}</p>}
            </div>
            <div>
                <label>Season:</label>
                <select name="season" onChange={handleChange} value={activityDate.season}>
                    <option value="">--Select--</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                {errors.season && <p>{errors.season}</p>}
            </div>
            <div>
                <label>Countries ID:</label>
                <input type="text" name="countries" onChange={handleChange} value={activityDate.countries} placeholder="Enter country ID (3 letters)" />
                {errors.countries && <p>{errors.countries}</p>}
            </div>
            <button type="submit">Create Activity</button>
        </form>
    );

}

export default FormActivity;
