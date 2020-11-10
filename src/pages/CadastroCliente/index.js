import React, { useState } from 'react'

import Input from '../../components/Input'
import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

function CadastroCliente() {
    const [nome, setNome] = useState("")
    const [cpfCnpj, setCpfCnpj] = useState("")
    
    function cadastrarCliente() {

    }

    return (
        <div>
            <PageHeader title="Cadastro de Cliente">
            </PageHeader>
            <main>
                <form onSubmit={cadastrarCliente}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            name="nome"
                            label="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                         <Input
                            name="cpfCnpj"
                            label="CPF ou CNPJ"
                            value={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                        />
                         <Input
                            name="nome"
                            label="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                         <Input
                            name="nome"
                            label="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                         <Input
                            name="nome"
                            label="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </fieldset>
                </form>
            </main>
            <PageFooter />
        </div>
    )
}

export default CadastroCliente