import React, { Component } from 'react';
import TableItem from "../TableItem/TableItem";

class DirectoryTable extends Component {



    render(props) {
        console.log(props);
        return (
            <>
                <table>
                    {props.map((user, index) => {
                        return (
                            <TableItem user={user} key={index} />
                        )
                    })}
                </table>
            </>
        );
    }
};

export default DirectoryTable;