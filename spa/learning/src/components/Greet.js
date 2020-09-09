import React from "react";

// function Greet() {
//     return <h1>Aditya Bansal</h1>
// }

const Greet = (props) => {
    return (
        <>
        <h1>Hello, {props.name}</h1>
        {props.children}
        </>
    )
}

export default Greet