
import { NavLink } from "react-router-dom";
import homeImg from '../assets/home-icon.png'

function Navbar() {

    return(
        <div className="nav-bar">
            <ul>
                <li className="nav-bar-li"><NavLink to={'/'} className={({isActive}) => isActive ? 'select' : ''}><img src={homeImg} /></NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
