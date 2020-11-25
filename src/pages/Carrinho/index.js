import React, { useEffect } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import PageFooter from '../../components/PageFooter'

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
      <div className='cart'>
        <h2>Carrinho</h2>
        {data.map(item => (
          <Cart key={item.id} item={item} />
        ))}
      </div>
      <PageFooter />
    </>
  )
}

export default Carrinho
