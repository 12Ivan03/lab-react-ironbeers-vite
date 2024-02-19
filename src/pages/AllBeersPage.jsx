
import "./AllBeersPage.css"
import AllBeersCard from "../components/AllBeersCard";
import axios from "axios";
import { useEffect, useState } from "react";

function AllBeersPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ axiosAnswer, setAxiosAnswer ] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setAxiosAnswer(response.data);
                setIsLoading(false);
                console.log('info from the DB here ===>', response.data)
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
        <div className="all-beers-container">
            {axiosAnswer.map(beer => {
                return (
                    <AllBeersCard key={beer._id} beerPass={beer} />
                )
            })}
        </div>
    )
}

export default AllBeersPage;
