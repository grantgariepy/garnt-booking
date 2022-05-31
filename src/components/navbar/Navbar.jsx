import "./navbar.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color: "inherit", textDecoration: "none", fontWeight:"bold"}}>
            <span className="logo" >grantbooking</span>
          </Link>  
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar