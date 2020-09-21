import React, {Component} from "react";
import './css/parent.css';
import CountryList from "./CountryList";
import SearchBox from "./SearchBox";

class Parent extends Component{
    constructor() {
        super();

        this.state = {
            countries: [],
            stats: [],
            searchField: ''
        }

    }

    async componentDidMount() {
        const resp = await fetch('https://api.covid19api.com/countries');
        const countries = await resp.json();
        this.setState({countries});
        this.state.countries.forEach(async country => {
            const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`);
            const data = await resp.json();
            if(data.length)
                this.setState(prevState => (
                    {stats: prevState.stats.concat({
                            ...data[data.length-1],
                            CountryCode: country.ISO2
                        })}
                ))
        })
    }

    handleChange = (e) => (
        this.setState({
            searchField: e.target.value
        })
    );

    render() {
        const {stats, searchField} = this.state;
        const filteredCountries = stats.filter(country => (
            country.Country.toLowerCase().includes(searchField.toLowerCase())
        ));

        return (
            <div className="parent">
                <h1>Covid19 Stats App</h1>
                <br/>
                <SearchBox placeholder="Enter country name...." handleChange={this.handleChange}/>
                <br/>
                <CountryList stats={filteredCountries}/>
            </div>
        );
    }
}

export default Parent