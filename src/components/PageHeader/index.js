import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import ButtonHamburger from '../ButtonHamburger'

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

                <ButtonHamburger visivel={menuVisivel} onClick={(e) => toggleMenuVisivel(e)} />
            </div>
            <div className={!menuVisivel ? "menu-toggle" : "menu-toggle open-menu"}>
                <ul className="options-container">
                    {React.Children.map(children, (child) => {
                        return (
                            <li>{child}</li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}

export default PageHeader