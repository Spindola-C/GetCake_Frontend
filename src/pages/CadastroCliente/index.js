import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Button from '../../components/Button'
import Input from '../../components/Input'
import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import api from '../../services/api'
import errorIcon from '../../assets/images/icons/error-icon.svg'

import './styles.css'

function CadastroCliente() {
    const history = useHistory()

    //estado de dados pessoais
    const [nome, setNome] = useState("")
    const [cpfCnpj, setCpfCnpj] = useState("")
    const [tipoPessoa, setTipoPessoa] = useState("")
    const [mascaraCpfOuCnpj, setMascaraCpfOuCnpj] = useState("")

    //estados de telefone
    const [telefones, setTelefones] = useState([""])
    const [tipoTelefone, setTipoTelefone] = useState("")

    //estados de endereço
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [rua, setRua] = useState("")
    const [quadra, setQuadra] = useState("")
    const [lote, setLote] = useState("")
    const [numero, setNumero] = useState("")

    const [statusAviso, setStatusAviso] = useState({ error: false, message: "" })

    function adicionarNumero(e) {
        e.preventDefault()
        if (telefones.length < 3) {
            setTelefones([...telefones, ""])
        } else {
            alert("limite atingido: Máximo 3 números!")
        }
    }

    function setNovoTelefone(position, value) {
        const updateTelefones = []
        telefones.map((telefone, index) => {
            if (index === position) {
                return updateTelefones[index] = value
            }
            return updateTelefones[index] = telefone
        })

        setTelefones(updateTelefones)
    }

    async function cadastrarCliente(e) {
        e.preventDefault();

        try {
            const dataPessoais = [nome, cpfCnpj, tipoPessoa]
            const dataTelefones = [telefones[0], tipoTelefone]
            const dataEndereco = [cidade, rua, estado, quadra, lote, numero]

            dataPessoais.forEach((data) => {
                if (!data) throw new Error("Dados pessoais faltando!")
            })
            dataTelefones.forEach((data) => {
                if (!data) throw new Error("Dados de telefone faltando!")
            })
            dataEndereco.forEach((data) => {
                if (!data) throw new Error("Dados de endereço faltando!")
            })

            await api.post('cliente', {
                nome,
                cpfCnpj,
                tipo: tipoPessoa
            })

            const cliente = await api.get(`cliente?cpf_cnpj=${cpfCnpj}`)
            const idCliente = !cliente.data[0] ? null : cliente.data[0].idCliente

            if (idCliente) {
                await api.post(`telefone?idCliente=${idCliente}`, {
                    tipoTelefone,
                    telefone1: telefones[0],
                    telefone2: telefones[1],
                    telefone3: telefones[2],
                })
                await api.post(`endereco`, {
                    cidade, rua, estado, quadra, lote, numero
                })
            }
            setStatusAviso({ error: false, message: "Cadastro realizado com sucesso!" })
            setTimeout(() => {
                history.push("/")
            }, 2000);
        } catch (err) {
            setStatusAviso({ error: true, message: err.message })
        }
    }

    function selecionaCpfOuCnpj() {
        if (tipoPessoa === "F") {
            setMascaraCpfOuCnpj("999.999.999-99")
        } else {
            setMascaraCpfOuCnpj("99.999.999/9999-99")
        }
    }

    return (
        <div className="cadastro-cliente-form">
            <PageHeader title="Cadastro de Cliente">
                <Link to="/">Home</Link>
            </PageHeader>
            <main>
                <form onSubmit={cadastrarCliente}>
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input
                            name="nome"
                            label="Nome Completo"
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <Select
                            name="tipoPessoa"
                            label="Pessoa"
                            value={tipoPessoa}
                            options={[
                                { value: "F", label: "Física" },
                                { value: "J", label: "Jurídica" }
                            ]}
                            onChange={(e) => setTipoPessoa(e.target.value)}
                        />
                        <Input
                            mask={mascaraCpfOuCnpj}
                            name="cpfCnpj"
                            label="CPF ou CNPJ"
                            value={cpfCnpj}
                            onChange={(e) => setCpfCnpj(e.target.value)}
                            onClick={(e) => selecionaCpfOuCnpj()}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Telefone
                            <button onClick={adicionarNumero}>
                                + adicionar número
                            </button>
                        </legend>
                        <div>
                            <Select
                                name="tipoTelefone"
                                label="Tipo de Telefone"
                                value={tipoTelefone}
                                options={[
                                    { value: "cel", label: "celular" },
                                    { value: "res", label: "residencial" },
                                    { value: "emp", label: "empresário" },
                                ]}
                                onChange={(e) => setTipoTelefone(e.target.value)}
                            />
                        </div>
                        <div className="telefone-container">
                            {telefones.map((telefone, index) => {
                                return (
                                    < Input
                                        key={index}
                                        name={`telefone${index}`}
                                        label={`Telefone ${index + 1}`}
                                        mask="(99)999999999"
                                        value={telefone}
                                        onChange={(e) => setNovoTelefone(index, e.target.value)}
                                    />
                                )
                            })}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Endereço</legend>
                        <div className="endereco-top">
                            <div>
                                <Input
                                    name="cidade"
                                    label="Cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    name="estado"
                                    label="Estado"
                                    mask="aa"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="endereco-mid">
                            <Input
                                name="rua"
                                label="Rua"
                                type="text"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            />
                        </div>
                        <div className="endereco-bot">
                            <Input
                                name="quadra"
                                label="Quadra"
                                type="text"
                                value={quadra}
                                onChange={(e) => setQuadra(e.target.value)}
                            />
                            <Input
                                name="lote"
                                label="Lote"
                                type="text"
                                value={lote}
                                onChange={(e) => setLote(e.target.value)}
                            />
                            <Input
                                name="numero"
                                label="Número"
                                mask="99999"
                                maskChar={null}
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            />
                        </div>
                    </fieldset>
                    <div>
                        <Button
                            type="submit"
                            label="Cadastrar Cliente"
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

export default CadastroCliente