import React from 'react'
import './styles.css'
import Cake from '../../assets/images/bolos.jpg'
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import Button from '../Button'

function Cart ({ item }) {
  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={Cake} alt='bolos' />
      </div>
      <div className="cart-product-values">
        <p className="value-name">{item.nome}</p>
        <p className="value-description">{item.descricao}</p>
        <div className="cart-count">
          <Button type="button" className="button-count">
            <MdRemoveCircleOutline
              size={20}
              color="var(--color-border)"
            />
          </Button>
          <input type="text" value={item.quantity} readOnly />
          <Button
            type="button"
            className="button-count"
          >
            <MdAddCircleOutline size={20} color="var(--color-border)" />
          </Button>
        </div>
        <span className="valeu">R$ {item.valor}</span>
      </div>
    </div>
  )
}

export default Cart
