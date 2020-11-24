import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import Input from '../../components/Input'
import Button from '../../components/Button'

import './styles.css'

function AdminLogin () {
  const [user, setUser] = useState()
  const [senha, setSenha] = useState()

  function login (e) {
    e.preventDefault()
  }

  return (
    <>
      <PageHeader title='Login Usuário' />

      <main className='form-container'>
        <form onSubmit={login}>
          <section className='login-container'>
            <Input
              name='usuario'
              label='Usuário'
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <Input
              name='senha'
              label='Senha'
              type='password'
              maxLength='10'
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <div className="form-button">
              <Button type='submit'>Login</Button>
            </div>
          </section>
        </form>
      </main>
      <PageFooter />
    </>
  )
}

export default AdminLogin
