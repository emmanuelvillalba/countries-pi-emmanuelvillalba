import "./Nav.css"
import { Link } from 'react-router-dom'
import { ABOUT, HOME, ACTIVITIES } from '../../helpers/PATHROUTES'

const Nav = () => {
  return (
    <div className='navConteiner'>
      <div className="buttonHome">
        <Link to={HOME}>
          <button>HOME</button>
        </Link>
      </div>
      <div className="buttonActivity">
        <Link to={ACTIVITIES}>
          <button>ACTIVITY</button>
        </Link>
      </div>
      <div className="buttonAbout">
        <Link to={ABOUT}>
          <button>ABOUT</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav