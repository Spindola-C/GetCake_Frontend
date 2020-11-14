import React from 'react'

import './styles.css'

function MenuButton({visivel, ...rest}) {
    return (
        <div className={visivel ? "menu-btn + open" : "menu-btn"} {...rest}>
            <div className="menu-btn__burger"></div>
        </div>
    )
}

export default MenuButton