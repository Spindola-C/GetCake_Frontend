import React from 'react'
import './styles.css'

import PageFooter from '../../components/PageFooter'
import PageHeader from '../../components/PageHeader'

function Home () {
  return (
    <>
      <PageHeader />
      <div className='home'>
        <h2>Produtos</h2>
        <div className='home-produtos'></div>
      </div>
      <PageFooter />
    </>
  )
}

export default Home
