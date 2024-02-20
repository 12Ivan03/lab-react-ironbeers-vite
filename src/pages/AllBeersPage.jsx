
import "./AllBeersPage.css"
import AllBeersCard from "../components/AllBeersCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function AllBeersPage() {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ axiosAnswer, setAxiosAnswer ] = useState([]);
    let [ searchParams, setSearchParams ] = useSearchParams();
    const [ search, setSearch ] = useState('');


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setAxiosAnswer(response.data);
                setIsLoading(false);
                console.log('info from the DB here ===>', response.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?' + searchParams)
            .then((res) => {
                setAxiosAnswer([...res.data]);
                //console.log("response from the API ?",res)
            })
    }, [search])


    function handleSearch(e) {
        setSearch(e.target.value);
        setSearchParams("q=" + e.target.value);
    }

    if(isLoading){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return(
        <div className="all-beers-container">
            <div>
                <h1>All Beer</h1>
                <p>search bar</p>
                <label>
                    <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearch} />
                </label>
            </div>
            {axiosAnswer.map(beer => {
                return (
                    <AllBeersCard key={beer._id} beerPass={beer} />
                )
            })}
        </div>
    )
}

export default AllBeersPage;
