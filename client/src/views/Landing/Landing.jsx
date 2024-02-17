import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      BIENVENIDO!
      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div>
  )
}

export default Landing

