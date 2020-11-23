import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import errorIcon from '../../assets/images/icons/error-icon.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'
import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import api from '../../services/api'

import './styles.css'

function CadastroFuncionario() {
    const history = useHistory()

    const [nome, setNome] = useState("")
    const [areaAtuacao, setAreaAtuacao] = useState("")
    const [salario, setSalario] = useState("")
    const [status, setStatus] = useState("")

    const [statusAviso, setStatusAviso] = useState({ error: false, message: "" })

    async function cadastrarFuncionario(e) {
        e.preventDefault()
        try {
            const dataFuncionario = [nome, areaAtuacao, salario, status]

            dataFuncionario.forEach((data) => {
                if (!data) throw new Error("Dados faltando!")
            })

            await api.post('funcionario',{
                nomeFuncionario: nome,
                cargoFuncionario: areaAtuacao,
                salarioFuncionario: salario,
                dataAdmissao: "GETDATE()",
                dataDemissao: null,
                statusFuncionario: status
            })

            setStatusAviso({ error: false, message: "Cadastro realizado com sucesso!" })
            setTimeout(() => {
                history.push("/")
            }, 2000);
        } catch (err) {
            setStatusAviso({ error: true, message: err.message })
        }
    }

    return (
        <div className="cadastro-form">
            <PageHeader title="Cadastro Funcionário">
                <Link to="/">Home</Link>
            </PageHeader>
            <main>
                <form onSubmit={cadastrarFuncionario}>
                    <fieldset>
                        <legend>Dados</legend>
                        <Input
                            name="nome"
                            label="Nome Completo"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Select
                            name="AreaAtuacao"
                            label="Área de Atuação"
                            value={areaAtuacao}
                            options={[
                                { value: "administracao", label: "Administração" },
                                { value: "cozinha", label: "Cozinha" },
                                { value: "atendimento", label: "Atendimento" }
                            ]}
                            onChange={(e) => setAreaAtuacao(e.target.value)}
                        />
                        <Input
                            name="salario"
                            label="Salário"
                            mask="99999999"
                            maskChar={null}
                            value={salario}
                            onChange={(e) => setSalario(e.target.value)}
                        />
                        <Select
                            name="status"
                            label="Status"
                            value={status}
                            options={[
                                { value: "A", label: "ativo" },
                                { value: "I", label: "inativo" },
                            ]}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </fieldset>
                    <div>
                        <Button
                            type="submit"
                            label="Cadastrar Funcionário"
                        />
                    </div>
                    <div className="status-container">
                        {statusAviso.error ?
                            <span>
                                <img src={errorIcon} alt="erro" />
                                {statusAviso.message}
                            </span> :
                            <span style={{ color: "green" }}>
                                {statusAviso.message}
                            </span>
                        }
                    </div>
                </form>
            </main>
            <PageFooter />
        </div>
    )
}

export default CadastroFuncionario