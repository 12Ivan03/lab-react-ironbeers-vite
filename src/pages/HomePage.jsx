
import './HomePage.css'
import { NavLink } from "react-router-dom";
import allBeers from '../assets/beers.png';
import randomBeer from "../assets/random-beer.png";
import createBeer from "../assets/new-beer.png"

function HomePage() {

    return(
        <div className='home-page-comtainer'>
            <ul>
                <li className="home-li">
                    <NavLink to={'/beers'} className='home-a' >
                        <img className="home-img" src={allBeers} alt="All_Beers_img" />
                        <p className="home-title" >All Beers</p>
                    </NavLink>
                    <p className='home-exponation' style={{display: "none"}}>wefsvf</p>
                </li>
                <li className="home-li">
                    <NavLink to={'/random-beer'} className='home-a' >
                        <img className="home-img" src={randomBeer} alt="Random_Beer_img" />
                        <p className="home-title middle-home-title">Random Beer</p>
                    </NavLink>
                    <p className='home-exponation' style={{display: "none"}}>wefsvf</p>
                </li>
                <li className="home-li">
                    <NavLink to={'/new-beer'} className="home-a" >
                        <img className="home-img" src={createBeer} alt="Create_Beer_img" />
                        <p className="home-title last-home-title">Create Beer</p>
                    </NavLink>
                    <p className='home-exponation' style={{display: "none"}}>wefsvf</p>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;
