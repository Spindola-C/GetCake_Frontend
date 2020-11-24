import React from 'react'

import './styles.css'

function Button({ label, ...rest }) {
    return (
        <div className="button-container" >
            <button {...rest}>
                {label}
            </button>
        </div>
    )
}

export default Button