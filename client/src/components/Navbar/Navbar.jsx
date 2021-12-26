import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImages, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'

function Navbar() {

    return (
        <nav className="navbar navbar-light nav">
            <div class="container-fluid w-100">
                <div className="d-flex align-items-center">
                    <img class="navbar-brand logo" alt="" src="./logo.png"></img>
                    <Link to='/'><button class="btn button"><FontAwesomeIcon icon={faHome} size="2x"  /></button></Link>
                </div>

                <div class="d-flex">
                    <Link to='/about' ><button class="btn button"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</button></Link>
                    <Link to='/speakers' ><button class="btn button"><FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS</button></Link>
                    <Link to='/talks' ><button class="btn button"><FontAwesomeIcon icon={faMicrophone} /> TALKS</button></Link>
                    <Link to='/gallery' ><button class="btn button"><FontAwesomeIcon icon={faImages} /> GALLERY</button></Link>
                    <Link to='/team' ><button class="btn button"><FontAwesomeIcon icon={faUsers} /> TEAM</button></Link>
                </div>
            </div>
        </nav>
    )


}

export default Navbar