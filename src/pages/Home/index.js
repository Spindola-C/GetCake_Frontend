import React, { useEffect } from 'react'
import './styles.css'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

import useApi from '../../hooks/useApi'
import Products from '../../components/Products'

function Home () {
  const { data, error, request } = useApi()

  useEffect(() => {
    request('produtos')
  }, [request])

  return (
    <>
      <main className='home'>
        <PageHeader />
        <section>
          <h2>Produtos</h2>
          {!error || data.length > 0 ? (
            <div className='home-products'>
              {data.map(item => (
                <Products key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="home-error">
              <p>{error}</p>
            </div>
          )}
        </section>
        <PageFooter />
      </main>
    </>
  )
}

export default Home
