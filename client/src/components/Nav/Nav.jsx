import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navConteiner'>
        <Link to="/home">
          <button>HOME</button>
        </Link>
        <Link to="/activity">
          <button>ACTIVITY</button>
        </Link>
        <Link to="/about">
          <button>ABOUT</button>
        </Link>
    </div>
  )
}

export default Nav