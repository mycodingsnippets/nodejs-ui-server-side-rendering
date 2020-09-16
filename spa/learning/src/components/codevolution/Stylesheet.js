import React from "react";
import './myStyles.css'

function Stylesheet() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <>
            <h1 className='primary' style={heading}>Stylesheets</h1>
        </>
    )
}

export default Stylesheet