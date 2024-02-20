import { Link } from 'react-router-dom'
import { HOME } from '../../helpers/PATHROUTES';

const Landing = () => {
  return (
    <div>
      BIENVENIDO!
      <Link to={HOME}>
        <button>HOME</button>
      </Link>
    </div>
  )
}

export default Landing

