
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {

    const [ singleBeer, setSingleBeer ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true)
    let { beerId } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response =>{
                setSingleBeer(response.data);
                console.log('single beer ', response.data);
                setIsLoading(false)
            })

    }, []);

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div>
            <h1>Single Beer Page</h1>
            <img src={singleBeer.image_url} alt="beer_image" />
            <h1>{singleBeer.name}</h1>
            <p>{singleBeer.tagline}</p>
            <p>{singleBeer.first_brewed}</p>
            <p>{singleBeer.attenuation_level}</p>
            <p>{singleBeer.description}</p>
            <p>{singleBeer.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;
