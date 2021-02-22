import React, { Component } from 'react';
import API from "../../utils/API";
import ResultsTable from '../ResultsTable/ResultsTable';
class DirectoryContainer extends Component {

    state = { results: [], search: "", searchResults: [] };

    componentDidMount() {
        this.employeeRetrieve();
    }

    employeeRetrieve() {
        API.getUsers()
            .then(res => {
                this.setState({ results: res.data.results })
                console.log("=======RESPONSE:", res);
            }).catch(err => console.log(err));
    }
    handleSearch = e => {
        this.setState({ search: e.target.value });
        console.log(this.state.search);
        // results.filter(function)


        //temp results
    }

    render() {
        return (
            <div style={{
                position: 'absolute', left: '10vw', top: '10%',
            }}
            >
                <h1>Employee Directory Table</h1>
                <form>
                    <label for="name">Search by First Name: </label>
                    <input type="text" id="name" name="name" onChange={this.handleSearch} />
                </form>
                <>
                    <ResultsTable results={this.state.results} />
                </>
            </div>
        );
    }
};

export default DirectoryContainer;