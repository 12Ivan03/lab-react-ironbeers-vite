
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    const [ singleBeer, setSingleBeer ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    let { beerId } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response =>{
                setSingleBeer(response.data);
                setIsLoading(false);
                //console.log('single beer ', response.data);
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
        <div className="single-beer-container">
            <div className="beer-card">
                <div className="beer-card-image">
                    <img src={singleBeer.image_url} alt="Beer_image" className="beer-image" />
                </div>
                <div className="beer-card-info">
                    <h1>{singleBeer.name}</h1>
                    <p><em>Slogan:</em></p>
                    <p>{singleBeer.tagline}</p>
                </div>             
            </div>
            <div className="single-info beer-card-info">
                <p><em>First brewed: </em>{singleBeer.first_brewed}</p>
                <p><em>Attentive: </em>{singleBeer.attenuation_level}&</p>
                <p><em>Slogan:</em></p>
                <p>{singleBeer.description}</p>
                <p><em>Contributed by:</em></p>
                <p>{singleBeer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerDetailsPage;
