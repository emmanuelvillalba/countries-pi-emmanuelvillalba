import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom";
import { HOME, DETAILID, ACTIVITIES, ABOUT } from './helpers/PATHROUTES';
import About from "./views/About/About"
import Activities from "./views/Activities/Activities"
import Details from "./views/Details/Details"
import Home from "./views/Home/Home"
import Landing from "./views/Landing/Landing"
import Nav from "./components/Nav/Nav"

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== "/" && (
        <Nav />
      )}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path={HOME} element={<Home />} />
        <Route path={DETAILID(":id")} element={<Details />} />
        <Route path={ACTIVITIES} element={<Activities />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
    </>
  )
}

export default App
