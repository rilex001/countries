import React, { Component} from 'react'

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
      return (
        <div className="countryContainer" >
           {console.log(this.state.country)}
        </div>
      )
    }
  }

export default CountryPage
