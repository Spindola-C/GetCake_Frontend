import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import ButtonHamburger from '../ButtonHamburger'

import './styles.css'

function PageHeader({ title }) {
    const [menuVisivel, setMenuVisivel] = useState(false)

    function toggleMenuVisivel(e) {
        e.preventDefault()
        setMenuVisivel(!menuVisivel)
    }

    return (
        <>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <div className="title-container">
                        <h1>{title}</h1>
                    </div>
                    <nav className="options-container-max">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <input type="checkbox" id="check1" />
                                <label for="check1">Cadastro</label>
                                <ul>
                                    <li>
                                        <Link to="/cadastro/cliente">Cliente</Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro/funcionario">Funcionário</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/admin/login">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <ButtonHamburger visivel={menuVisivel} onClick={(e) => toggleMenuVisivel(e)} />
                </div>
                <div className={!menuVisivel ? "menu-toggle" : "menu-toggle open-menu"}>
                    <nav className="options-container">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <input type="checkbox" id="check2" />
                                <label for="check2">Cadastro</label>
                                <ul>
                                    <li>
                                        <Link to="/cadastro/cliente">Cliente</Link>
                                    </li>
                                    <li>
                                        <Link to="/cadastro/funcionario">Funcionário</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/admin/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="title-container-max">
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default PageHeader