import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/icons/menu.svg'

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
                {!menuVisivel &&
                    (
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
                        </ul>
                    )
                }
                <Link onClick={(e) => toggleMenuVisivel(e)}>
                    <img className="icon-menu" src={menuIcon} alt="menu" />
                </Link>
            </div>
            <div>
                {menuVisivel && children}
            </div>
        </header>
    )
}

export default PageHeader