import { Link } from 'react-router-dom'
import { ABOUT, HOME } from '../../helpers/PATHROUTES'

const Nav = () => {
  return (
    <div className='navConteiner'>
      <Link to={HOME}>
        <button>HOME</button>
      </Link>
      <Link to={ABOUT}>
        <button>ABOUT</button>
      </Link>
    </div>
  )
}

export default Nav