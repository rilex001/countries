import React, {useState, useEffect} from 'react'

function Country() {

    const [country, setcountry] = useState([])

    useEffect(() => {
        fetch("https://restcountries-v1.p.rapidapi.com/all", {
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
            {
                country && country.map(item => (
                    <p key={item.name}>{item}</p>
                ))
            }
        </div> 
    )
}

export default Country
