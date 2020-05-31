import React from 'react'
import Country from './Country'

const CountryList = ({country}) => {
    
        {
            country && country.map(country => {
                return (
                    <Country country={country}/>
                )
            })
        }
    
}

export default CountryList