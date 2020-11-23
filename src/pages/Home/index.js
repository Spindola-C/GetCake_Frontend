import React from 'react'
import { Link } from 'react-router-dom'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

function Home() {
    return (
        <>
            <PageHeader title="Get Cake">
                    <Link to="/cadastro/cliente">Cadastro de Cliente</Link>
                    <Link to="/cadastro/funcionario">Cadastro Funcionário</Link>
                    <Link to="/admin/login">Login</Link>
            </PageHeader>
            <PageFooter/>
        </>
    )
}

export default Home