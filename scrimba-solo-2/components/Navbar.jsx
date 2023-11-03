import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"




function Navbar(){
    return(
        <nav>

           
            <FontAwesomeIcon icon={faGlobe} size="2x" className="nav-icon" transform=" rignt-90"/>

            <h1>Places I Want to Visit</h1>
            
            
            
        </nav>
    )

}

export default Navbar