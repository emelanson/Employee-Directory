import React, { Component } from 'react';
import API from "../../utils/API";
import DirectoryTable from '../DirectoryTable/DirectoryTable';

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
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
                <h1>ITS THE APP!</h1>
                <DirectoryTable />
            </div>
        );
    }
};

export default DirectoryContainer;