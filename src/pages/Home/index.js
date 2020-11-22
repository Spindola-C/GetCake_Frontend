import React from 'react'
import { Link } from 'react-router-dom'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

function Home() {
    return (
        <>
            <PageHeader title="Get Cake">
                    <Link to="/cadastro/cliente">Cadastro de cliente</Link>
                    <Link to="/admin/login">Login</Link>
            </PageHeader>
            <div style={{height: "30rem"}}/>
            <PageFooter/>
        </>
    )
}

export default Home