import React from 'react'
import './styles.css'
import Cake from '../../assets/images/bolos.jpg'
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md'
import Button from '../Button'
import { useCart } from '../../hooks/useCart'

function Cart ({ item, totalQty }) {
  const { addItems, removeItems } = useCart()

  return (
    <div className='cart-product'>
      <div className='cart-product-img'>
        <img src={Cake} alt='bolos' />
      </div>
      <div className='cart-product-values'>
        <p className='value-name'>{item.nome}</p>
        <p className='value-description'>{item.descricao}</p>
        <div className='cart-count'>
          <Button type='button' className='button-count'>
            <MdRemoveCircleOutline
              size={20}
              color='var(--color-border)'
              onClick={() => removeItems(item.id)}
            />
          </Button>
          <input type='text' value={item.quantity} readOnly />
          <Button type='button' className='button-count'>
            <MdAddCircleOutline
              size={20}
              color='var(--color-border)'
              onClick={() => addItems(item.id)}
            />
          </Button>
        </div>
        <span className='valeu'>R$ {totalQty(item).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Cart
