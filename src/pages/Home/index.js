import React, { useEffect } from 'react'
import './styles.css'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

import useApi from '../../hooks/useApi'

function Home () {
  const { data, loading, error, request} = useApi()

  useEffect(() => {
    request('produtos')
  }, [request])

  console.log(data, 'produtos')
  return (
    <>
      <PageHeader />
      <div className='home'>
        <h2>Produtos</h2>
        <div className='home-produtos'>
        </div>
      </div>
      <PageFooter />
    </>
  )
}

export default Home
