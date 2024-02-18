import { Routes, Route, useLocation } from "react-router-dom";
import About from "./views/About/About"
import Activity from "./views/Activity/Activity"
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
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/activity' element={<Activity />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
