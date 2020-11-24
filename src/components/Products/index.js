import React from 'react'
import './styles.css'

export default function Products ({ item }) {
  return (
    <>
      <div className="product">
        <div className="product-image">
          {/* <img src={item.picture} alt="imagem" /> */}
        </div>
        <div className="product-description">
          <p>{item.nome}</p>
        </div>
        <div className="product-button">
          <button>Comprar</button>
        </div>
      </div>
    </>
  )
}