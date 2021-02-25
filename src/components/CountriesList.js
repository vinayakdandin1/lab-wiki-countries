import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import CountryDetails from './CountryDetails';

class CountriesList extends Component {

    render() {  

        return (
            
            <Container>
            {/* <Link to={`/`} >Individual Countries should be shown here</Link> */}
                <Row >
                    <Col className="forScroll">
                    <ListGroup>

                       {
                           this.props.countries.map((country, index) => {
                               return <div key={index}>
                                <Link to={`/${country.cca3}`}> {<img src= {`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`} />} {country.name.common}</Link>
                               </div>
                           })
                       }
                       {/* <h4>{country.cca2} {country.name.common}</h4> */}
                        
                    </ListGroup>
                    </Col>

                    <Col>
                        <Route path={'/:countryCode'} render={(routeProps) => {
                            return <CountryDetails countries={this.props.countries} {...routeProps} />
                        }} />
                    </Col>
                </Row>
            </Container>
        )
    }
}




export default CountriesList




