import { Link } from "react-router-dom"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function header() {

  const [isNav, setIsNav] = useState(window.innerWidth > 1024 ? true : false)

  const closeNavHandler = () => {
    if(window.innerWidth > 1024){
      setIsNav(true)
    }
    else{
      setIsNav(false)
    }
  }

  return (
    <nav>
        <div className="container nav-container">
            <Link className="nav-logo" to={'/'} onClick={closeNavHandler}>
                <h2>Health <span>mate</span></h2>
            </Link>

            { isNav && <ul className="nav-menu">
                <li><Link to={'/create'} onClick={closeNavHandler}>Share your thoughts</Link></li>
                <li><Link to={'/authors'} onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to={'/profile/id'} onClick={closeNavHandler}>User</Link></li>
                <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
            </ul>}

            <button className="nav-toggle-button" onClick={()=>setIsNav(!isNav)}>
              {
                isNav ? <AiOutlineClose /> : <FaBars />
              }
            </button>
        </div>
    </nav>
  )
}
