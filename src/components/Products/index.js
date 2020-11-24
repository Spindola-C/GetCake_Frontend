import React from 'react'
import './styles.css'
import Cake from '../../assets/images/bolos.jpg'
import Button from '../Button'

export default function Products ({ item }) {
  return (
    <>
      <div className="product">
        <div className="product-image">
         <img src={Cake} alt="imagem" /> 
        </div>
        <div className="product-title">
          <p>{item.nome}</p>
          <span>R$ {item.valor}</span>
        </div>
        <div className="product-description">
          <p>{item.descricao}</p>
        </div>
        <div className="product-button">
          <Button className="button-product">Adicionar ao carrinho</Button>
        </div>
      </div>
    </>
  )
}