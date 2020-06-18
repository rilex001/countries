import React from 'react'



const CountryInformation = ({country}) => {
    return (
        <div className="countryContainer" >
            <img src={country.flag} alt='country flag' className='countryflag'></img>
                <p className="countryName"><b>{country.name}</b></p>
                <div className='countrydetails'>
                    <p><b>Capital:</b> {country.capital}</p>
                    <p><b>Population: </b>{country.population / 1000000}  million's</p>
                    <p><b>Region: </b>{country.region}</p>
                </div>
        </div>
    )
}

export default CountryInformation