import React, { Component } from 'react';
import API from "../../utils/API";
import ResultsTable from '../ResultsTable/ResultsTable';
class DirectoryContainer extends Component {

    state = { results: [], searchResults: [] };

    componentDidMount() {
        this.employeeRetrieve();
    }

    employeeRetrieve() {
        API.getUsers()
            .then(res => {
                this.setState({ results: res.data.results, searchResults: res.data.results })
                console.log("=======RESPONSE:", res);
            }).catch(err => console.log(err));
    }

    handleSearch = async e => {
        const search = e.target.value;

        //StackOverflow helped for this part.
        let searchResults = await this.state.results.filter((i) => {
            let name = i.name.first.toLowerCase();
            return name.indexOf(search.toLowerCase()) !== -1;
        });

        this.setState({ searchResults: searchResults });
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
                    <ResultsTable results={this.state.searchResults} />
                </>
            </div>
        );
    }
};

export default DirectoryContainer;