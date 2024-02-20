
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const [ name, setName ] = useState('');
    const [ tagline, setTagline ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ firstBrewed, setFirstBrewed ] = useState('');
    const [ tips, setTipe ] = useState('');
    const [ attenuation, setAttenuation ] = useState(0);
    const [ contributed, setContribution ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e)

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: tips,
            attenuation_level: attenuation,
            contributed_by: contributed
        }

        //console.log('newBeer',newBeer)

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => {
                //console.log('new beer ==>', response);
                navigate('/beers')
            })
    }

    return(
        <div>
            <h1>Add New Beer Page</h1>

            <form onSubmit={handleSubmit}>
                <label> Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                    <br />
                <label> Tagline:
                    <input 
                        type="text" 
                        name="tagline" 
                        value={tagline} 
                        onChange={(e) => setTagline(e.target.value)} 
                    />
                </label>
                    <br />
                <label> Description:
                    <textarea 
                        type="text" 
                        name="description" 
                        rows={4} 
                        cols={50} 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}                            
                    />
                </label>
                    <br />
                <label>First Brewed:
                    <input 
                        type="text" 
                        name="first_brewed" 
                        value={firstBrewed} 
                        onChange={(e) => setFirstBrewed(e.target.value)}
                        />
                </label>
                    <br />
                <label>Brewer&apos;s Tips:
                    <input 
                        type="text" 
                        name="brewers_tips" 
                        value={tips}
                        onChange={(e) => setTipe(e.target.value)}
                        />
                </label>
                    <br />
                <label>Attenuation Level:
                    <input 
                        type="number" 
                        name="attenuation_level" 
                        value={attenuation}
                        onChange={(e) => setAttenuation(e.target.value)}
                        />
                </label>
                    <br />
                <label>Contributed By:
                    <input 
                        type="text" 
                        name="contributed_by"
                        value={contributed}
                        onChange={(e) => setContribution(e.target.value)} 
                    />
                </label>
                    <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
