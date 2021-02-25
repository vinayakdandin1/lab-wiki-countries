import React, { Component } from 'react'

class CountryDetails extends Component {

    state = {
        country: []
    }

    getCountry() {
        let countryCode = this.props.match.params.countryCode

        let country = this.props.countries.filter((singleCountry) => {
            return singleCountry.cca3 === countryCode;
        })

        // Object.assign({}, country); 


        
        this.setState({
            country: country
        })

    }

    componentDidMount() {
        this.getCountry()
    }

    componentDidUpdate() {
        let countryCode = this.props.match.params.countryCode

       this.state.country.map((singleCountry) => {
        if(singleCountry.cca3 !== countryCode) {
            this.getCountry()
        }
    })
    }

    render() {
        
        const {country} = this.state

        return (
            <div>
                {/* {
                    this.state.country ?  : <h1>This Works</h1>
                } */}
                {/* <h1>This Works</h1>
                <h1>{country[0].name.common}</h1> */}
                {country.map((singleCountry, index) => {
                    return <div key={index}>
                        <h1>{singleCountry.name.common}</h1>
                        <h3>Capital: {singleCountry.capital}</h3>
                        <h3>Area: {singleCountry.area}</h3>
                        <div>Borders: <ul>
                                        {singleCountry.borders.map((singleBorder) => {
                                            return <li>{singleBorder}</li>
                                        })}
                                    </ul>
                        </div>
                    </div>
                })}
             
                
            </div>
        )
    }
}

export default CountryDetails


