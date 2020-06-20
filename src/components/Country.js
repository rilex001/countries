import React, {useState, useEffect} from 'react'
import CountryInformation from './CountryInformation'
import {v4} from 'uuid';

const all = `https://restcountries.eu/rest/v2/all`
const regionapi = `https://restcountries.eu/rest/v2/region/`
const fullName = `https://restcountries.eu/rest/v2/name/`



function Country() {

    const [region, setRegion] = useState('')
    const [country, setcountry] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(
             region ? `${regionapi}${region}`
            : search ? `${fullName}${search}`
            : `${all}`
        )
        .then(response => 
            response.json()
        )
        .then(result => {
            setcountry(result)
        })
        .catch(err => {
	        console.log(err);
        });
        
    }, [region, search])
    return (
        <>
        <div className='searchgrid'>
        <input 
            className="search" 
            placeholder="Search for a country..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        


            <select id="region" value={region} onChange={e => setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select> 
</div>
        <div className='grid'>
            {
                country.length ? country.map(item =>
                     <CountryInformation  country={item} key={v4()} />
                ) : <div className='countryInformation'>Don't have country</div>
                
            }
    
           
        </div> 
        </>
    )
}

export default Country
