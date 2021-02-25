import React, { Component } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountriesList from './components/CountriesList'
import countriesFromJson from './countries.json'
class App extends Component {

  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countriesFromJson
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            {/* React Router Route rendering the CountryDetails should go here */}
          </div>
        </div>
      </div>
    )
  }
}


export default App