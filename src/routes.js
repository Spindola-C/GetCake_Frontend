import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import CadastroCliente from './pages/CadastroCliente'
import AdminLogin from './pages/AdminLogin'
import CadastroFuncionario from './pages/CadastroFuncionario'

function routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/cliente" component={CadastroCliente} />
            <Route path="/cadastro/funcionario" component={CadastroFuncionario} />
            <Route path="/admin/login" component={AdminLogin} />
        </BrowserRouter>
    )
}

export default routes