import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log('Clicked')
    }

    return (
        <>
            <button onClick={clickHandler}>Click Me</button>
        </>
    );
}

export default FunctionClick