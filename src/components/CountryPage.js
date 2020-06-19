import React, { Component} from 'react'
import {v4} from 'uuid';
import { Link } from 'react-router-dom'

class CountryPage extends Component {
    state = {
      id: null,
      country: ''
    }
    componentDidMount(){
      let id = this.props.match.params.country_name;
      this.setState({
        id
      })

      fetch(`https://restcountries.eu/rest/v2/name/${id}`)
        .then(response => response.json())
        .then(result => 
            this.setState({
                country: result
            })
        )
        .catch(error => console.log(error))
    }

    render() {
      const {country} = this.state
      const countryInformation = country.length ? (
        <div className="countryContainer" key={v4()} >
            <img src={country[0].flag} alt='country flag' className='countryflag'></img>
              <p className="countryName"><b>{country[0].name}</b></p>
               <div className='countrydetails'>
                    <p><b>Native name: </b>{country[0].nativeName}</p>
                    <p><b>Capital:</b> {country[0].capital}</p>
                    <p><b>Population: </b>{country[0].population / 1000000}  million's</p>
                    <p><b>Area: </b>{country[0].area} km²</p>
                    <p><b>Region: </b>{country[0].region}</p>
                    <p><b>Subregion: </b>{country[0].subregion}</p>
                    <p><b>Timezones: </b>{country[0].timezones.map(time =><span> {time}</span>)}</p>
                    <p><b>latlng: </b>[{country[0].latlng[0]}, {country[0].latlng[1]}]</p>
                    <p><b>Language: </b>{country[0].languages.map(language =><span> {language.name}</span>)}</p>
                    <p><b>Currencies: </b>{country[0].currencies.map(currency =><span> {currency.name} <b> {currency.symbol}</b></span>)}</p>
                    <p><b>Borders: </b>{country[0].borders.map(bord =><span> {bord}</span>)}</p>

                </div>
        </div>

      ) : (
        <div>Loading ...</div>
      )
          
    
      return (
        <>
        <Link to='/'> 
          <button className='backbutton'>
            Back
          </button>
        </Link> 
        <div className='grid'>
          {countryInformation}
        </div>
        </>
      )
    }
  }

export default CountryPage
