import React, { Component } from 'react';
import API from "../../utils/API";
import TableItem from "../TableItem/TableItem";
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
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Phone Number</th>
                            </tr>
                            {/* <TableItem user={this.state} /> */}
                        </thead>



                    </table>
                </>
                {/* <DirectoryTable props={this.state.results} /> */}
            </div>
        );
    }
};

export default DirectoryContainer;