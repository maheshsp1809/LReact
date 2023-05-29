import React from 'react'

const Product = (props) => {
    const { name, Price, Quantity } = props;
  return (
    <div>
        <p>Name={name}</p>
        <p>Price={Price}</p>
        <p>Quantity={Quantity}</p>
    </div>
  )
}

export default Product