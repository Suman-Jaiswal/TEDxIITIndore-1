import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faInfoCircle, faMicrophone, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuDrawer from "../MenuDrawer"

function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-light nav">
            <div className="nav-div">
                <div className="d-flex align-items-center">
                    <Link to='/'>
                        <img className="navbar-brand logo" alt="" src="https://res.cloudinary.com/tedxiiti/image/upload/w_300,c_fill/v1642099561/images/logos/removed_black_bg.png"></img>
                    </Link>
                </div>

                <div className="menu-only">
                    <Link to='/about' ><button className="btn button"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</button></Link>

                    <div>
                        <button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="btn button"
                        >
                            <FontAwesomeIcon icon={faTeamspeak} /> SPEAKERS
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2022" >
                                2022
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2018" >
                                2018
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none' }} className="text-secondary px-3" to="/speakers/2017" >
                                2017
                            </Link></MenuItem>

                        </Menu>
                    </div>

                    <Link to='/talks' ><button className="btn button"><FontAwesomeIcon icon={faMicrophone} /> TALKS</button></Link>
                    <Link to='/gallery' ><button className="btn button"><FontAwesomeIcon icon={faImages} /> GALLERY</button></Link>
                    <Link to='/team' ><button className="btn button"><FontAwesomeIcon icon={faUsers} /> TEAM</button></Link>

                </div>
                <div className="menu-drawer">
                    <MenuDrawer />
                </div>

            </div>
        </nav>
    )


}

export default Navbar