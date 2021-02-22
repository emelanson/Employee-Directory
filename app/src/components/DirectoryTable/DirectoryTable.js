import React, { Component } from 'react';

class DirectoryTable extends Component {


    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
            </>
        );
    }
};

export default DirectoryTable;