import React, { useState } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import Button from '../../components/Button'

import Cart from '../../components/Cart'
import { useCart } from '../../hooks/useCart'

function Carrinho () {
  const { products, setProducts } = useCart()
  const [buy, setBuy] = useState(false)

  const formatedNumber = number => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number)
  }

  const totalQty = item => {
    const { valor } = item
    const { quantity } = item
    const valueQty = valor * quantity
    return valueQty
  }

  const totalPriceItems = products.reduce((total, item) => {
    const tot = total + totalQty(item)
    return tot
  }, 0)

  const finish = () => {
    setBuy(true)
    setProducts([])
  }

  return (
    <>
      <main className='cart'>
        <PageHeader />
        {buy ? (
          <div className='cart-mensage'>
            <p>Compra realizada com sucesso!</p>
          </div>
        ) : (
          <>
            <section>
              <h2>Carrinho</h2>
              {products.length > 0 ? (
                <>
                  {products.map(item => (
                    <Cart key={item.id} item={item} totalQty={totalQty} />
                  ))}
                  <div className='cart-total'>
                    <span>
                      Total: {formatedNumber(totalPriceItems.toFixed(2))}
                    </span>
                    <Button type='button' onClick={finish}>
                      Finalizar Compra
                    </Button>
                  </div>
                </>
              ) : (
                <div className='cart-mensage'>
                  <p>Carrinho vazio ):</p>
                </div>
              )}
            </section>
          </>
        )}
        <PageFooter />
      </main>
    </>
  )
}

export default Carrinho
