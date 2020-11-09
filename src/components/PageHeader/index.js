import React from 'react'

import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/icons/menu.svg'

import './styles.css'

function PageHeader() {
    return (
        <header className="page-header">
            <div className="top-bar-header">
                <img src={logo} alt="logo" />

                <ul className="header-options">
                    <li>
                        <a href="/">Quem somos</a>
                    </li>
                    <li>
                        <a href="/">Lojas</a>
                    </li>
                    <li>
                        <a href="/">Produtos</a>
                    </li>
                </ul>

                <a href="/">
                    <img className="icon-menu" src={menuIcon} alt="menu" />
                </a>
            </div>
        </header>
    )
}

export default PageHeader