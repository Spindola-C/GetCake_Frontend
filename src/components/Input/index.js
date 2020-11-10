import React from 'react'

import './styles.css'

function Input({ name, label }) {
    return (
        <div div className="input-container" >
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} />
        </div>
    )
}

export default Input