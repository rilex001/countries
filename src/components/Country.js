import React, {useState, useEffect} from 'react'
import CountryInformation from './CountryInformation'

function Country() {

    const [country, setcountry] = useState([])
    const [search, setSearch] = useState('serbia')

    console.log(search)
    useEffect(() => {
        fetch(`https://restcountries-v1.p.rapidapi.com/${search.length ? 'all' : `name/{search}`}`, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		    "x-rapidapi-key": "abe082a00dmsh66da68776798b52p11b56ejsn6f4e4cd5c2a0"
	    }
        })
        .then(response => 
            response.json()
        )
        .then(result => {
            setcountry(result)
        })
        .catch(err => {
	        console.log(err);
        });
        
    }, [])
    return (
        <div>
            <input
                type='text'
                value={search}
                placeholder='country'
                onChange={e => setSearch(e.target.value)}
            />
            
            {
                country && country.map(item =>
                     <CountryInformation  country={item} />
                )
            }
           
        </div> 
    )
}

export default Country
