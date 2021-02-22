import React from "react";

function TableItem(props) {
    console.log("PROPS", props)

    const { name, dob, phone } = props.user;

    return (
        <tr>
            <td>{name.first}</td>
            <td>{name.last}</td>
            <td>{dob}</td>
            <td>{phone}</td>
        </tr>
    )
}


export default TableItem;