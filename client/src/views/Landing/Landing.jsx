import "./Landing.css"
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { HOME } from '../../helpers/PATHROUTES';

const Landing = () => {

  useEffect(() => {
    document.body.classList.add('body-landing');

    return () => {
      document.body.classList.remove('body-landing');
    };
  }, []);

  return (
    <div>
      <h1 className='welcome'>
        WELCOME
      </h1>
      <Link to={HOME}>
        <button className='homeLanding'><i className="animation"></i>HOME<i className="animation"></i></button>
      </Link>
    </div>
  )
}

export default Landing

