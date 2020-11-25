import React from 'react'
import './styles.css'
import Cake from '../../assets/images/bolos.jpg'

function Cart ({ item }) {
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={Cake} alt='bolos' />
      </div>
      <div className="cart-product-values">
        <p className="value-name">{item.nome}</p>
        <p className="value-description">{item.descricao}</p>
        <span className="valeu">{item.valor}</span>
      </div>
    </div>
  )
}

export default Cart
