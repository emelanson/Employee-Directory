import React, { Component } from 'react';
import API from "../../utils/API";
import ResultsTable from '../ResultsTable/ResultsTable';
class DirectoryContainer extends Component {

    state = { results: [], searchResults: [] };

    constructor(props) {
        super(props);
        this.sortAscendingFirstNames = this.sortAscendingFirstNames.bind(this);
        this.sortDescendingFirstNames = this.sortDescendingFirstNames.bind(this);
    }

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

    sortAscendingFirstNames() {
        console.log(this.state.results);
        let sort = this.state.searchResults.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        this.setState({ searchResults: sort });
    }

    sortDescendingFirstNames() {
        console.log(this.state.results);
        let sort = this.state.searchResults.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
        this.setState({ searchResults: sort });
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
                <label>Sort by First Name: </label>
                <button onClick={this.sortAscendingFirstNames}>Ascending!</button>
                <button onClick={this.sortDescendingFirstNames}>Descending!</button>
                <>
                    <ResultsTable results={this.state.searchResults} />
                </>
            </div>
        );
    }
};

export default DirectoryContainer;