import React, { useEffect } from 'react'
import './styles.css'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

import useApi from '../../hooks/useApi'
import Products from '../../components/Products'

function Home () {
  const { data, loading, error, request } = useApi()

  useEffect(() => {
    request('produtos')
  }, [request])

  return (
    <>
      <main className='home'>
        <PageHeader />
        <section>
          <h2>Produtos</h2>
          <div className='home-products'>
            {data.map(item => (
              <Products key={item.id} item={item} />
            ))}
          </div>
        </section>
        <PageFooter />
      </main>
    </>
  )
}

export default Home
