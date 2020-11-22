import React from 'react'
import InputMask from 'react-input-mask'

import './styles.css'

function Input({ name, label, ...rest}) {
    return (
        <div className="input-container" >
            <label htmlFor={name}>{label}</label>
            <InputMask id={name} {...rest} />
        </div>
    )
}

export default Input