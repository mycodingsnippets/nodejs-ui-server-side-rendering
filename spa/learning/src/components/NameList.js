import React from "react";

function NameList() {
    const names = ['Aditya', 'Suman', 'Robin']
    return (
        <>
            {names.map((name, index) => <h2 key={index}>{index} : {name}</h2>)}
        </>
    )
}

export default NameList