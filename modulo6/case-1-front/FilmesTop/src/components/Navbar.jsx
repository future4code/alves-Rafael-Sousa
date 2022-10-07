import { Link } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt} from "react-icons/bi"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id='navbar'>
        
    <h2>
    
    <Link to="/"><BiCameraMovie/> FilmesTop  </Link>

  </h2>
  <form>
    <input type="text" 
     placeholder="Buscar"
    />
    <button type="submit"><BiSearchAlt/></button>
  </form>
  </nav>
  )
}

export default Navbar