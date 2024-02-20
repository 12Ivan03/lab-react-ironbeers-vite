
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
    const[ randomBeer, setRanbomBeer ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
 
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                setRanbomBeer(response.data);
                setIsLoading(false);
                //console.log(response.data)
            })
    }, []);

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    };

    return(
        <div className="single-beer-container">
            <div className="beer-card">
                    <div className="beer-card-image">
                        <img src={randomBeer.image_url} alt="Beer_image" className="beer-image" />
                    </div>
                    <div className="beer-card-info">
                        <h1>{randomBeer.name}</h1>
                        <p><em>Slogan:</em></p>
                        <p>{randomBeer.tagline}</p>
                    </div>             
            </div>
            <div className="single-info beer-card-info">
                    <p><em>First brewed: </em>{randomBeer.first_brewed}</p>
                    <p><em>Attentive: </em>{randomBeer.attenuation_level}&</p>
                    <p><em>Slogan:</em></p>
                    <p>{randomBeer.description}</p>
                    <p><em>Contributed by:</em></p>
                    <p>{randomBeer.contributed_by}</p>
            </div>
        </div>
    )
}

export default RandomBeersPage;
