import React, { Component } from 'react';
import API from "../../utils/API";
import ResultsTable from '../ResultsTable/ResultsTable';
class DirectoryContainer extends Component {

    state = { results: [] };


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

    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
                <h1>ITS THE APP!</h1>
                <>
                    <ResultsTable results={this.state.results} />
                </>
            </div>
        );
    }
};

export default DirectoryContainer;