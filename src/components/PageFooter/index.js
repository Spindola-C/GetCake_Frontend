import React from 'react'

import logo from '../../assets/images/logo.svg'

import './styles.css'

function PageFooter() {
    return (
        <footer className="page-footer">
            <div className="footer-container">
                <img src={logo} alt="logo"/>
                <p>© getCake, Inc. 2020. We love our users!</p>
            </div>
        </footer>
    )
}

export default PageFooter