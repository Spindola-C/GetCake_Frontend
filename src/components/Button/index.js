import React from 'react'

import './styles.css'

function Button({ children, ...rest }) {
    return (
        <div className="button-container" >
            <button {...rest}>
                {children}
            </button>
        </div>
    )
}

export default Button