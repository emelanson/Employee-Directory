import React from "react";

function TableItem(props) {

    console.log("TABLE ITEM PROPS", props)
    return (
        <tr>
            <td>{props.name.first}</td>
            <td>{props.name.last}</td>
            <td>{props.dob}</td>
            <td>{props.phone}</td>
        </tr>
    )
}


export default TableItem;