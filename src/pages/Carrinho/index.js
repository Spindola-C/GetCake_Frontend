import React, { useEffect } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import Button from '../../components/Button'

import useApi from '../../hooks/useApi'
import Cart from '../../components/Cart'
import { useCart } from '../../hooks/useCart'

function Carrinho () {
  const { products, setProducts } = useCart()

  const formatedNumber = number => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)
  }

  const totalQty = (item) => {
    const { valor } = item
    const { quantity } = item
    const valueQty = valor * quantity
    return valueQty
  }

  const totalPriceItems = products.reduce((total, item) => {
    const tot = total + totalQty(item)
    return tot
  }, 0)

  return (
    <>
      <PageHeader />
      <section className='cart'>
        <h2>Carrinho</h2>
        {products.length > 0 ? (
          products.map(item => <Cart key={item.id} item={item} totalQty={totalQty} />)
        ) : (
          <div className=''>
            <p>Carrinho vazio ):</p>
          </div>
        )}
        <div className='cart-total'>
          <span>Total: {formatedNumber(totalPriceItems.toFixed(2))}</span>
          <Button type='button'>Finalizar Compra</Button>
        </div>
      </section>
      <PageFooter />
    </>
  )
}

export default Carrinho
