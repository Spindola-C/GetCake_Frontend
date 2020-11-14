import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import MenuButton from '../MenuButton'

import './styles.css'

function PageHeader({ title, children }) {
    const [menuVisivel, setMenuVisivel] = useState(false)

    function toggleMenuVisivel(e) {
        e.preventDefault()
        setMenuVisivel(!menuVisivel)
    }

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="title-container">
                    <h1>{title}</h1>
                </div>

                <MenuButton visivel={menuVisivel} onClick={(e) => toggleMenuVisivel(e)} />
            </div>
            {menuVisivel && (
                <div className="menu-toggle">
                    <ul className="options-container">
                        <li>
                            <Link to="/">Quem somos</Link>
                        </li>
                        <li>
                            <Link to="/">Lojas</Link>
                        </li>
                        <li>
                            <Link to="/">Produtos</Link>
                        </li>
                        {children}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default PageHeader