import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import Input from '../../components/Input'
import Button from '../../components/Button'

import './styles.css'

function AdminLogin() {
    const [user, setUser] = useState()
    const [senha, setSenha] = useState()

    function login(e) {
        e.preventDefault()

    }

    return (
        <>
            <PageHeader title="Login Usuário">
                <Link to="/">Home</Link>
            </PageHeader>
            <main className="form-container">
                <form onSubmit={login}>
                    <section className="login-container">
                        <Input
                            name="usuario"
                            label="Usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <Input
                            name="senha"
                            label="Senha"
                            type="password"
                            maxLength="10"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <Button
                            label="Login"
                            type="submit"
                        />
                    </section>
                </form>
            </main>
            <PageFooter />
        </>
    )
}

export default AdminLogin