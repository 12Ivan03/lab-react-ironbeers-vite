
import "./AllBeersCard.css"
import { Link } from "react-router-dom"

function AllBeersCard({beerPass}) {

    const { image_url, name, tagline, contributed_by, _id } = beerPass

    return(
        <div className="beer-card">
            <Link className="beer-card-link" to={`/beers/${_id}`} >
                <div className="beer-card-image">
                    <img src={image_url} alt="Beer_image" className="beer-image" />
                </div>
                <div className="beer-card-info">
                    <h1>{name}</h1>
                    <p><em>Slogan:</em></p>
                    <p>{tagline}</p>
                    <p><em>Contributed by:</em></p>
                    <p>{contributed_by}</p>
                </div>
            </Link>
        </div>
    )
}

export default AllBeersCard