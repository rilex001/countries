import React from 'react'
import {v4} from 'uuid';


const CountryInformation = ({country}) => {
    return (
        <div className="countryContainer" key={v4()}>
            <h4 className="countryName">{country.name}</h4>
            <p>Capital city: {country.capital}</p>
            <p>Population: {country.population / 1000000} millions</p>
            <p>Region: {country.subregion}</p>
            <p>Timezone: {country.timezones.map(time => <p> {time} </p> ) }</p>
            {country.currencies.map(money => <p>Currencies is : {money}</p>)}
            <p>Area is: {country.area}</p>
            <p>Language is: {country.languages.map(lng => <p>{lng}</p> )}</p>
            <p>Native name is : {country.nativeName}</p>
            <p>CallingCodes is {country.callingCodes}</p>
            <p>Demonym is {country.demonym}</p>
        </div>
    )
}

export default CountryInformation