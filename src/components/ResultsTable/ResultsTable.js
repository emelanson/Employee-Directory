import React from "react";

function ResultsTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                </tr>
                {props.results.map((result) => {
                    return (
                        <tr>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <td>{result.dob.age}</td>
                            <td>{result.phone}</td>
                        </tr>)
                })}
            </thead>
        </table>
    );
}

export default ResultsTable;
