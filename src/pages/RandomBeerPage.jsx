
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeersPage() {
    const[ randomBeer, setRanbomBeer ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
 
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                setRanbomBeer(response.data);
                setIsLoading(false)
                console.log(response.data)
            })
    }, [])

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div>
            <h1>Random Beer Page</h1>
            <img src={randomBeer.image_url} alt="beer_image" />
            <p>{randomBeer.name}</p>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeersPage;
