import React, { Component } from 'react';
import API from "../../utils/API";

class DirectoryContainer extends Component {
    state = {
        results: [],
    }

    componentDidMount() {
        this.employeeRetrieve();
        console.log(this.state);
    }

    employeeRetrieve() {
        API.getUsers().
            then(res => {
                this.setState({ results: res.data.results })
            }).then(console.log(this.state)).catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <h1>ITS THE APP!</h1>
            </>
        );
    }
};

export default DirectoryContainer;