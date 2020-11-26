import React, { useEffect } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'
import Button from '../../components/Button'

import useApi from '../../hooks/useApi'
import Cart from '../../components/Cart'

function Carrinho () {
  const { request, data } = useApi()

  useEffect(() => {
    request('carrinho')
  }, [])

  return (
    <>
      <PageHeader />
      <section className='cart'>
        <h2>Carrinho</h2>
        {data.map(item => (
          <Cart key={item.id} item={item} />
        ))}
        <div className='cart-total'>
          <span>Total: R$ 200,00</span>
          <Button type='button'>Finalizar Compra</Button>
        </div>
      </section>
      <PageFooter />
    </>
  )
}

export default Carrinho
